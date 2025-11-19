// ============================================
// Supabase API 封装层
// 这个文件封装了所有 Supabase 数据库操作
// 用于替换 localStorage 调用
// ============================================

// 确保 Supabase 已初始化
if (typeof window.supabase === 'undefined') {
    console.error('❌ Supabase 未初始化，请先加载 supabase-init.js');
}

// ============================================
// 工具函数
// ============================================

// 生成唯一ID
function generateId() {
    return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// 获取当前用户手机号
function getCurrentUserPhone() {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
        try {
            const user = JSON.parse(userStr);
            return user.phone;
        } catch (e) {
            return null;
        }
    }
    return null;
}

// ============================================
// 用户相关 API
// ============================================

const UserAPI = {
    // 获取所有用户
    async getAllUsers() {
        try {
            const { data, error } = await window.supabase
                .from('users')
                .select('*')
                .order('register_time', { ascending: false });
            
            if (error) throw error;
            
            // 转换为原来的格式 { phone: userData }
            const usersObj = {};
            if (data) {
                data.forEach(user => {
                    usersObj[user.phone] = {
                        phone: user.phone,
                        password: user.password,
                        nickname: user.nickname,
                        gender: user.gender,
                        birthday: user.birthday,
                        zodiac: user.zodiac,
                        registerTime: user.register_time
                    };
                });
            }
            return usersObj;
        } catch (error) {
            console.error('获取用户列表失败:', error);
            return {};
        }
    },
    
    // 根据手机号获取用户
    async getUserByPhone(phone) {
        try {
            const { data, error } = await window.supabase
                .from('users')
                .select('*')
                .eq('phone', phone)
                .maybeSingle(); // 使用 maybeSingle() 代替 single()，避免 406 错误
            
            if (error) {
                // 如果是未找到的错误，返回 null
                if (error.code === 'PGRST116' || error.message?.includes('No rows')) {
                    return null;
                }
                throw error;
            }
            
            if (!data) return null;
            
            return {
                phone: data.phone,
                password: data.password,
                nickname: data.nickname,
                gender: data.gender,
                birthday: data.birthday,
                zodiac: data.zodiac,
                registerTime: data.register_time
            };
        } catch (error) {
            console.error('获取用户失败:', error);
            return null;
        }
    },
    
    // 创建用户
    async createUser(userData) {
        try {
            // 处理空值：将空字符串转换为 null
            const insertData = {
                phone: userData.phone,
                password: userData.password,
                nickname: userData.nickname || null,
                gender: userData.gender || null,
                birthday: userData.birthday && userData.birthday !== '' ? userData.birthday : null,
                zodiac: userData.zodiac || null,
                register_time: userData.registerTime || new Date().toISOString()
            };
            
            const { data, error } = await window.supabase
                .from('users')
                .insert(insertData)
                .select()
                .single();
            
            if (error) {
                // 如果是手机号已存在的错误，返回更友好的错误信息
                if (error.code === '23505' || error.message?.includes('duplicate key')) {
                    const conflictError = new Error('该手机号已被注册');
                    conflictError.code = '23505';
                    throw conflictError;
                }
                throw error;
            }
            
            // 同时创建用户设置（忽略错误，可能已存在）
            try {
                await window.supabase
                    .from('user_settings')
                    .insert({
                        phone: userData.phone
                    });
            } catch (settingsError) {
                // 如果设置已存在，忽略错误（不影响主流程）
                console.warn('创建用户设置失败（可能已存在）:', settingsError);
            }
            
            // 同时创建用户积分记录（忽略错误，可能已存在）
            try {
                await window.supabase
                    .from('user_points')
                    .insert({
                        phone: userData.phone,
                        points: 50 // 注册奖励50积分
                    });
            } catch (pointsError) {
                // 如果积分记录已存在，忽略错误（不影响主流程）
                console.warn('创建用户积分记录失败（可能已存在）:', pointsError);
            }
            
            return data;
        } catch (error) {
            console.error('创建用户失败:', error);
            throw error;
        }
    },
    
    // 更新用户信息
    async updateUser(phone, updates) {
        try {
            const updateData = {};
            if (updates.nickname !== undefined) updateData.nickname = updates.nickname || null;
            if (updates.gender !== undefined) updateData.gender = updates.gender || null;
            if (updates.birthday !== undefined) {
                // 处理空字符串：转换为 null
                updateData.birthday = (updates.birthday && updates.birthday !== '') ? updates.birthday : null;
            }
            if (updates.zodiac !== undefined) updateData.zodiac = updates.zodiac || null;
            updateData.updated_at = new Date().toISOString();
            
            const { data, error } = await window.supabase
                .from('users')
                .update(updateData)
                .eq('phone', phone)
                .select()
                .single();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('更新用户失败:', error);
            throw error;
        }
    }
};

// ============================================
// 会员相关 API
// ============================================

const MembershipAPI = {
    // 获取用户会员信息
    async getUserMembership(phone) {
        try {
            const { data, error } = await window.supabase
                .from('memberships')
                .select('*')
                .eq('phone', phone)
                .order('created_at', { ascending: false })
                .limit(1)
                .single();
            
            if (error && error.code !== 'PGRST116') throw error;
            
            if (!data) return null;
            
            return {
                planId: data.plan_id,
                planName: data.plan_name,
                startDate: data.start_date,
                expiryDate: data.expiry_date
            };
        } catch (error) {
            console.error('获取会员信息失败:', error);
            return null;
        }
    },
    
    // 设置用户会员
    async setUserMembership(phone, membershipData) {
        try {
            // 检查是否已有会员记录
            const existing = await this.getUserMembership(phone);
            
            if (existing) {
                // 更新现有记录
                const { data, error } = await window.supabase
                    .from('memberships')
                    .update({
                        plan_id: membershipData.planId,
                        plan_name: membershipData.planName,
                        start_date: membershipData.startDate,
                        expiry_date: membershipData.expiryDate,
                        updated_at: new Date().toISOString()
                    })
                    .eq('phone', phone)
                    .select()
                    .single();
                
                if (error) throw error;
                return data;
            } else {
                // 创建新记录
                const { data, error } = await window.supabase
                    .from('memberships')
                    .insert({
                        phone: phone,
                        plan_id: membershipData.planId,
                        plan_name: membershipData.planName,
                        start_date: membershipData.startDate,
                        expiry_date: membershipData.expiryDate
                    })
                    .select()
                    .single();
                
                if (error) throw error;
                return data;
            }
        } catch (error) {
            console.error('设置会员信息失败:', error);
            throw error;
        }
    }
};

// ============================================
// 订单相关 API
// ============================================

const OrderAPI = {
    // 获取用户订单
    async getUserOrders(phone) {
        try {
            const { data, error } = await window.supabase
                .from('orders')
                .select('*')
                .eq('phone', phone)
                .order('create_time', { ascending: false });
            
            if (error) throw error;
            
            return (data || []).map(order => ({
                orderId: order.order_id,
                userId: order.phone,
                planId: order.plan_id,
                planName: order.plan_name,
                amount: parseFloat(order.amount),
                paymentMethod: order.payment_method,
                status: order.status,
                createTime: order.create_time
            }));
        } catch (error) {
            console.error('获取订单失败:', error);
            return [];
        }
    },
    
    // 创建订单
    async createOrder(orderData) {
        try {
            const { data, error } = await window.supabase
                .from('orders')
                .insert({
                    order_id: orderData.orderId || generateId(),
                    phone: orderData.phone,
                    plan_id: orderData.planId,
                    plan_name: orderData.planName,
                    amount: orderData.amount,
                    payment_method: orderData.paymentMethod,
                    status: orderData.status || 'completed',
                    create_time: orderData.createTime || new Date().toISOString()
                })
                .select()
                .single();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('创建订单失败:', error);
            throw error;
        }
    }
};

// ============================================
// 社区相关 API
// ============================================

const CommunityAPI = {
    // 获取所有帖子
    async getAllPosts() {
        try {
            const { data, error } = await window.supabase
                .from('posts')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            
            return (data || []).map(post => ({
                id: post.post_id,
                author: post.author,
                authorId: post.author_id,
                content: post.content,
                category: post.category,
                images: post.images || [],
                likes: post.likes || 0,
                comments: post.comments_count || 0,
                status: post.status || 'pending',
                time: post.time || post.created_at
            }));
        } catch (error) {
            console.error('获取帖子失败:', error);
            return [];
        }
    },
    
    // 创建帖子
    async createPost(postData) {
        try {
            const { data, error } = await window.supabase
                .from('posts')
                .insert({
                    post_id: postData.id || generateId(),
                    author: postData.author,
                    author_id: postData.authorId,
                    content: postData.content,
                    category: postData.category,
                    images: postData.images || [],
                    status: postData.status || 'pending',
                    time: postData.time || new Date().toISOString()
                })
                .select()
                .single();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('创建帖子失败:', error);
            throw error;
        }
    },
    
    // 更新帖子（点赞、评论数等）
    async updatePost(postId, updates) {
        try {
            const updateData = {};
            if (updates.likes !== undefined) updateData.likes = updates.likes;
            if (updates.comments_count !== undefined) updateData.comments_count = updates.comments_count;
            if (updates.status !== undefined) updateData.status = updates.status;
            updateData.updated_at = new Date().toISOString();
            
            const { data, error } = await window.supabase
                .from('posts')
                .update(updateData)
                .eq('post_id', postId)
                .select()
                .single();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('更新帖子失败:', error);
            throw error;
        }
    },
    
    // 获取帖子评论
    async getPostComments(postId) {
        try {
            const { data, error } = await window.supabase
                .from('comments')
                .select('*')
                .eq('post_id', postId)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            
            return (data || []).map(comment => ({
                id: comment.comment_id,
                postId: comment.post_id,
                author: comment.author,
                authorId: comment.author_id,
                content: comment.content,
                time: comment.time || comment.created_at
            }));
        } catch (error) {
            console.error('获取评论失败:', error);
            return [];
        }
    },
    
    // 创建评论
    async createComment(commentData) {
        try {
            const { data, error } = await window.supabase
                .from('comments')
                .insert({
                    comment_id: commentData.id || generateId(),
                    post_id: commentData.postId,
                    author: commentData.author,
                    author_id: commentData.authorId,
                    content: commentData.content,
                    time: commentData.time || new Date().toISOString()
                })
                .select()
                .single();
            
            if (error) throw error;
            
            // 更新帖子的评论数
            const posts = await this.getAllPosts();
            const postItem = posts.find(p => p.id === commentData.postId);
            if (postItem) {
                await this.updatePost(commentData.postId, {
                    comments_count: (postItem.comments || 0) + 1
                });
            }
            
            return data;
        } catch (error) {
            console.error('创建评论失败:', error);
            throw error;
        }
    }
};

// ============================================
// 消息通知相关 API
// ============================================

const NotificationAPI = {
    // 获取用户通知
    async getUserNotifications(phone) {
        try {
            const { data, error } = await window.supabase
                .from('notifications')
                .select('*')
                .eq('phone', phone)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            
            return (data || []).map(notif => ({
                id: notif.notification_id,
                type: notif.type,
                title: notif.title,
                content: notif.content,
                isRead: notif.is_read,
                time: notif.created_at
            }));
        } catch (error) {
            console.error('获取通知失败:', error);
            return [];
        }
    },
    
    // 创建通知
    async createNotification(notificationData) {
        try {
            const { data, error } = await window.supabase
                .from('notifications')
                .insert({
                    notification_id: notificationData.id || generateId(),
                    phone: notificationData.phone,
                    type: notificationData.type,
                    title: notificationData.title,
                    content: notificationData.content,
                    is_read: notificationData.isRead || false
                })
                .select()
                .single();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('创建通知失败:', error);
            throw error;
        }
    },
    
    // 标记通知为已读
    async markAsRead(notificationId) {
        try {
            const { data, error } = await window.supabase
                .from('notifications')
                .update({ is_read: true })
                .eq('notification_id', notificationId)
                .select()
                .single();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('标记通知已读失败:', error);
            throw error;
        }
    },
    
    // 删除通知
    async deleteNotification(notificationId) {
        try {
            const { error } = await window.supabase
                .from('notifications')
                .delete()
                .eq('notification_id', notificationId);
            
            if (error) throw error;
            return true;
        } catch (error) {
            console.error('删除通知失败:', error);
            throw error;
        }
    }
};

// ============================================
// 导出 API 对象
// ============================================

window.UserAPI = UserAPI;
window.MembershipAPI = MembershipAPI;
window.OrderAPI = OrderAPI;
window.CommunityAPI = CommunityAPI;
window.NotificationAPI = NotificationAPI;

console.log('✅ Supabase API 封装层已加载');
