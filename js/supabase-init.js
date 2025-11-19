// Supabase 客户端初始化
// 这个文件初始化 Supabase 客户端并创建全局 supabase 对象

// 检查是否已经加载了 Supabase JS 库
if (typeof supabase === 'undefined') {
    // 动态加载 Supabase JS 库
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
    script.onload = function() {
        initializeSupabase();
    };
    document.head.appendChild(script);
} else {
    initializeSupabase();
}

// 初始化 Supabase 客户端
function initializeSupabase() {
    // 从配置文件获取配置
    const config = typeof SUPABASE_CONFIG !== 'undefined' ? SUPABASE_CONFIG : {
        url: 'https://zrvzgcjpbijrvpzhtbqi.supabase.co',
        anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpydnpnY2pwYmlqcnZwemh0YnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0OTQxODMsImV4cCI6MjA3OTA3MDE4M30.gJMFlZCJ7M3Vb8AsHoPRymvB-G5klk0W5wPifXtP5_A'
    };
    
    // 创建 Supabase 客户端，添加额外的配置
    window.supabase = supabase.createClient(config.url, config.anonKey, {
        db: {
            schema: 'public'
        },
        auth: {
            persistSession: false,
            autoRefreshToken: false
        },
        global: {
            headers: {
                'apikey': config.anonKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Prefer': 'return=representation'
            }
        }
    });
    
    console.log('✅ Supabase 客户端已初始化');
    
    // 检查连接
    window.supabase.from('users').select('count').limit(1)
        .then(() => {
            console.log('✅ Supabase 连接成功');
        })
        .catch((error) => {
            console.warn('⚠️ Supabase 连接检查失败（可能是表还未创建）:', error.message);
        });
}

