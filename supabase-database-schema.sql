-- ============================================
-- 星座网站 Supabase 数据库表结构
-- ============================================
-- 执行说明：
-- 1. 登录 Supabase 控制台
-- 2. 进入 SQL Editor
-- 3. 复制以下 SQL 脚本
-- 4. 执行脚本创建所有表
-- ============================================

-- ============================================
-- 1. 用户表 (users)
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    phone VARCHAR(11) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    nickname VARCHAR(50),
    gender VARCHAR(10),
    birthday DATE,
    zodiac VARCHAR(20),
    register_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);
CREATE INDEX IF NOT EXISTS idx_users_zodiac ON users(zodiac);

-- ============================================
-- 2. 会员表 (memberships)
-- ============================================
CREATE TABLE IF NOT EXISTS memberships (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    phone VARCHAR(11) NOT NULL,
    plan_id VARCHAR(20) NOT NULL DEFAULT 'free',
    plan_name VARCHAR(50) NOT NULL DEFAULT '免费版',
    start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expiry_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, phone)
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_memberships_user_id ON memberships(user_id);
CREATE INDEX IF NOT EXISTS idx_memberships_phone ON memberships(phone);
CREATE INDEX IF NOT EXISTS idx_memberships_expiry_date ON memberships(expiry_date);

-- ============================================
-- 3. 订单表 (orders)
-- ============================================
CREATE TABLE IF NOT EXISTS orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    order_id VARCHAR(50) UNIQUE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    phone VARCHAR(11) NOT NULL,
    plan_id VARCHAR(20) NOT NULL,
    plan_name VARCHAR(50) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(20),
    status VARCHAR(20) DEFAULT 'completed',
    create_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_phone ON orders(phone);
CREATE INDEX IF NOT EXISTS idx_orders_create_time ON orders(create_time);

-- ============================================
-- 4. 社区帖子表 (posts)
-- ============================================
CREATE TABLE IF NOT EXISTS posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    post_id VARCHAR(50) UNIQUE NOT NULL,
    author VARCHAR(50) NOT NULL,
    author_id VARCHAR(11),
    content TEXT NOT NULL,
    category VARCHAR(20) NOT NULL,
    images TEXT[], -- 图片URL数组
    likes INTEGER DEFAULT 0,
    comments_count INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
    time VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_posts_author_id ON posts(author_id);
CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category);
CREATE INDEX IF NOT EXISTS idx_posts_status ON posts(status);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC);

-- ============================================
-- 5. 评论表 (comments)
-- ============================================
CREATE TABLE IF NOT EXISTS comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    comment_id VARCHAR(50) UNIQUE NOT NULL,
    post_id VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    author_id VARCHAR(11),
    content TEXT NOT NULL,
    time VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_comments_post_id ON comments(post_id);
CREATE INDEX IF NOT EXISTS idx_comments_author_id ON comments(author_id);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC);

-- ============================================
-- 6. 消息通知表 (notifications)
-- ============================================
CREATE TABLE IF NOT EXISTS notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    notification_id VARCHAR(50) UNIQUE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    phone VARCHAR(11) NOT NULL,
    type VARCHAR(20) NOT NULL, -- system, activity, member, interaction
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_phone ON notifications(phone);
CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON notifications(is_read);
CREATE INDEX IF NOT EXISTS idx_notifications_created_at ON notifications(created_at DESC);

-- ============================================
-- 7. 邀请记录表 (invite_records)
-- ============================================
CREATE TABLE IF NOT EXISTS invite_records (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    record_id VARCHAR(50) UNIQUE NOT NULL,
    inviter_phone VARCHAR(11) NOT NULL,
    invitee_phone VARCHAR(11),
    invite_code VARCHAR(20) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending', -- pending, completed
    create_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_invite_records_inviter_phone ON invite_records(inviter_phone);
CREATE INDEX IF NOT EXISTS idx_invite_records_invite_code ON invite_records(invite_code);

-- ============================================
-- 8. 邀请码表 (invite_codes)
-- ============================================
CREATE TABLE IF NOT EXISTS invite_codes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    phone VARCHAR(11) UNIQUE NOT NULL,
    invite_code VARCHAR(20) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_invite_codes_phone ON invite_codes(phone);
CREATE INDEX IF NOT EXISTS idx_invite_codes_code ON invite_codes(invite_code);

-- ============================================
-- 9. 积分记录表 (points_records)
-- ============================================
CREATE TABLE IF NOT EXISTS points_records (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    record_id VARCHAR(50) UNIQUE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    phone VARCHAR(11) NOT NULL,
    type VARCHAR(20) NOT NULL, -- earn, spend
    amount INTEGER NOT NULL,
    reason VARCHAR(100),
    description TEXT,
    create_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_points_records_user_id ON points_records(user_id);
CREATE INDEX IF NOT EXISTS idx_points_records_phone ON points_records(phone);
CREATE INDEX IF NOT EXISTS idx_points_records_type ON points_records(type);
CREATE INDEX IF NOT EXISTS idx_points_records_create_time ON points_records(create_time DESC);

-- ============================================
-- 10. 用户积分表 (user_points)
-- ============================================
CREATE TABLE IF NOT EXISTS user_points (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    phone VARCHAR(11) UNIQUE NOT NULL,
    points INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_user_points_phone ON user_points(phone);

-- ============================================
-- 11. 活动参与表 (activity_participations)
-- ============================================
CREATE TABLE IF NOT EXISTS activity_participations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    participation_id VARCHAR(50) UNIQUE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    phone VARCHAR(11) NOT NULL,
    activity_id VARCHAR(50) NOT NULL,
    participate_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_activity_participations_user_id ON activity_participations(user_id);
CREATE INDEX IF NOT EXISTS idx_activity_participations_phone ON activity_participations(phone);
CREATE INDEX IF NOT EXISTS idx_activity_participations_activity_id ON activity_participations(activity_id);

-- ============================================
-- 12. 每日签到表 (daily_checkins)
-- ============================================
CREATE TABLE IF NOT EXISTS daily_checkins (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    phone VARCHAR(11) NOT NULL,
    checkin_date DATE NOT NULL,
    consecutive_days INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(phone, checkin_date)
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_daily_checkins_phone ON daily_checkins(phone);
CREATE INDEX IF NOT EXISTS idx_daily_checkins_date ON daily_checkins(checkin_date DESC);

-- ============================================
-- 13. 用户关注表 (user_follows)
-- ============================================
CREATE TABLE IF NOT EXISTS user_follows (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    follower_phone VARCHAR(11) NOT NULL,
    following_phone VARCHAR(11) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(follower_phone, following_phone)
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_user_follows_follower ON user_follows(follower_phone);
CREATE INDEX IF NOT EXISTS idx_user_follows_following ON user_follows(following_phone);

-- ============================================
-- 14. 私信表 (private_messages)
-- ============================================
CREATE TABLE IF NOT EXISTS private_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    message_id VARCHAR(50) UNIQUE NOT NULL,
    sender_phone VARCHAR(11) NOT NULL,
    receiver_phone VARCHAR(11) NOT NULL,
    content TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_private_messages_sender ON private_messages(sender_phone);
CREATE INDEX IF NOT EXISTS idx_private_messages_receiver ON private_messages(receiver_phone);
CREATE INDEX IF NOT EXISTS idx_private_messages_created_at ON private_messages(created_at DESC);

-- ============================================
-- 15. 用户设置表 (user_settings)
-- ============================================
CREATE TABLE IF NOT EXISTS user_settings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    phone VARCHAR(11) UNIQUE NOT NULL,
    public_profile BOOLEAN DEFAULT TRUE,
    show_zodiac BOOLEAN DEFAULT TRUE,
    comment_notifications BOOLEAN DEFAULT TRUE,
    member_expiry_reminder BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_user_settings_phone ON user_settings(phone);

-- ============================================
-- 16. 反馈表 (user_feedbacks)
-- ============================================
CREATE TABLE IF NOT EXISTS user_feedbacks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    feedback_id VARCHAR(50) UNIQUE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    phone VARCHAR(11),
    type VARCHAR(20) NOT NULL,
    content TEXT NOT NULL,
    contact VARCHAR(100),
    create_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_user_feedbacks_user_id ON user_feedbacks(user_id);
CREATE INDEX IF NOT EXISTS idx_user_feedbacks_phone ON user_feedbacks(phone);

-- ============================================
-- 17. 运势历史表 (fortune_history)
-- ============================================
CREATE TABLE IF NOT EXISTS fortune_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    record_id VARCHAR(50) UNIQUE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    phone VARCHAR(11) NOT NULL,
    zodiac_id VARCHAR(20) NOT NULL,
    zodiac_name VARCHAR(20) NOT NULL,
    fortune_type VARCHAR(20) NOT NULL, -- today, week, month
    fortune_data JSONB NOT NULL,
    view_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_fortune_history_user_id ON fortune_history(user_id);
CREATE INDEX IF NOT EXISTS idx_fortune_history_phone ON fortune_history(phone);
CREATE INDEX IF NOT EXISTS idx_fortune_history_view_time ON fortune_history(view_time DESC);

-- ============================================
-- 18. 运势收藏表 (fortune_favorites)
-- ============================================
CREATE TABLE IF NOT EXISTS fortune_favorites (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    record_id VARCHAR(50) UNIQUE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    phone VARCHAR(11) NOT NULL,
    zodiac_id VARCHAR(20) NOT NULL,
    zodiac_name VARCHAR(20) NOT NULL,
    fortune_type VARCHAR(20) NOT NULL, -- today, week, month
    fortune_data JSONB NOT NULL,
    favorite_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_fortune_favorites_user_id ON fortune_favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_fortune_favorites_phone ON fortune_favorites(phone);
CREATE INDEX IF NOT EXISTS idx_fortune_favorites_favorite_time ON fortune_favorites(favorite_time DESC);

-- ============================================
-- 19. 帖子点赞表 (post_likes) - 用于记录谁点赞了哪个帖子
-- ============================================
CREATE TABLE IF NOT EXISTS post_likes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    post_id VARCHAR(50) NOT NULL,
    user_phone VARCHAR(11) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(post_id, user_phone)
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_post_likes_post_id ON post_likes(post_id);
CREATE INDEX IF NOT EXISTS idx_post_likes_user_phone ON post_likes(user_phone);

-- ============================================
-- 启用 Row Level Security (RLS) - 可选，根据需要启用
-- ============================================
-- 注意：启用 RLS 后需要配置策略，否则无法访问数据
-- 初期可以先不启用，等熟悉后再配置

-- ALTER TABLE users ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
-- ... 其他表类似

-- ============================================
-- 完成
-- ============================================
-- 所有表已创建完成
-- 接下来需要在 Supabase 控制台配置 API 访问权限

