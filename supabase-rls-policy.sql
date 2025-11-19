-- ============================================
-- Supabase Row Level Security (RLS) 策略配置
-- ============================================
-- 如果启用了 RLS，需要执行以下策略才能访问数据
-- 如果还没有启用 RLS，可以先不执行这个脚本
-- ============================================

-- 注意：如果您的表还没有启用 RLS，这些策略不会生效
-- 如果遇到 406 错误，可能是 RLS 已启用但没有配置策略

-- ============================================
-- 1. 用户表 (users) - 允许所有人读取和写入
-- ============================================
-- 允许所有人插入（注册）
CREATE POLICY IF NOT EXISTS "允许所有人注册" ON users
    FOR INSERT
    WITH CHECK (true);

-- 允许用户读取自己的数据
CREATE POLICY IF NOT EXISTS "允许用户读取自己的数据" ON users
    FOR SELECT
    USING (true);  -- 暂时允许所有人读取，生产环境应该限制

-- 允许用户更新自己的数据
CREATE POLICY IF NOT EXISTS "允许用户更新自己的数据" ON users
    FOR UPDATE
    USING (true);  -- 暂时允许所有人更新，生产环境应该限制

-- ============================================
-- 2. 会员表 (memberships) - 允许所有人访问
-- ============================================
CREATE POLICY IF NOT EXISTS "允许所有人访问会员表" ON memberships
    FOR ALL
    USING (true);

-- ============================================
-- 3. 订单表 (orders) - 允许所有人访问
-- ============================================
CREATE POLICY IF NOT EXISTS "允许所有人访问订单表" ON orders
    FOR ALL
    USING (true);

-- ============================================
-- 4. 社区帖子表 (posts) - 允许所有人访问
-- ============================================
CREATE POLICY IF NOT EXISTS "允许所有人访问帖子表" ON posts
    FOR ALL
    USING (true);

-- ============================================
-- 5. 评论表 (comments) - 允许所有人访问
-- ============================================
CREATE POLICY IF NOT EXISTS "允许所有人访问评论表" ON comments
    FOR ALL
    USING (true);

-- ============================================
-- 6. 消息通知表 (notifications) - 允许所有人访问
-- ============================================
CREATE POLICY IF NOT EXISTS "允许所有人访问通知表" ON notifications
    FOR ALL
    USING (true);

-- ============================================
-- 7. 其他表 - 允许所有人访问
-- ============================================
CREATE POLICY IF NOT EXISTS "允许所有人访问邀请记录表" ON invite_records
    FOR ALL
    USING (true);

CREATE POLICY IF NOT EXISTS "允许所有人访问邀请码表" ON invite_codes
    FOR ALL
    USING (true);

CREATE POLICY IF NOT EXISTS "允许所有人访问积分记录表" ON points_records
    FOR ALL
    USING (true);

CREATE POLICY IF NOT EXISTS "允许所有人访问用户积分表" ON user_points
    FOR ALL
    USING (true);

CREATE POLICY IF NOT EXISTS "允许所有人访问活动参与表" ON activity_participations
    FOR ALL
    USING (true);

CREATE POLICY IF NOT EXISTS "允许所有人访问每日签到表" ON daily_checkins
    FOR ALL
    USING (true);

CREATE POLICY IF NOT EXISTS "允许所有人访问用户关注表" ON user_follows
    FOR ALL
    USING (true);

CREATE POLICY IF NOT EXISTS "允许所有人访问私信表" ON private_messages
    FOR ALL
    USING (true);

CREATE POLICY IF NOT EXISTS "允许所有人访问用户设置表" ON user_settings
    FOR ALL
    USING (true);

CREATE POLICY IF NOT EXISTS "允许所有人访问反馈表" ON user_feedbacks
    FOR ALL
    USING (true);

CREATE POLICY IF NOT EXISTS "允许所有人访问运势历史表" ON fortune_history
    FOR ALL
    USING (true);

CREATE POLICY IF NOT EXISTS "允许所有人访问运势收藏表" ON fortune_favorites
    FOR ALL
    USING (true);

CREATE POLICY IF NOT EXISTS "允许所有人访问帖子点赞表" ON post_likes
    FOR ALL
    USING (true);

-- ============================================
-- 完成
-- ============================================
-- 注意：这些策略允许所有人访问，适合开发阶段
-- 生产环境应该配置更严格的权限策略

