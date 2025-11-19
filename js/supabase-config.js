// Supabase 配置
// 这个文件包含 Supabase 连接配置

// Supabase 项目配置
const SUPABASE_CONFIG = {
    url: 'https://zrvzgcjpbijrvpzhtbqi.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpydnpnY2pwYmlqcnZwemh0YnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0OTQxODMsImV4cCI6MjA3OTA3MDE4M30.gJMFlZCJ7M3Vb8AsHoPRymvB-G5klk0W5wPifXtP5_A'
};

// 如果使用环境变量（推荐用于生产环境）
// const SUPABASE_CONFIG = {
//     url: import.meta.env.VITE_SUPABASE_URL || 'https://zrvzgcjpbijrvpzhtbqi.supabase.co',
//     anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpydnpnY2pwYmlqcnZwemh0YnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0OTQxODMsImV4cCI6MjA3OTA3MDE4M30.gJMFlZCJ7M3Vb8AsHoPRymvB-G5klk0W5wPifXtP5_A'
// };

// 导出配置（如果使用模块化）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
}

