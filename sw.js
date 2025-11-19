// Service Worker for 离线缓存 - 优化版本
const CACHE_VERSION = 'v1.1';
const STATIC_CACHE = 'zodiac-static-' + CACHE_VERSION;
const DYNAMIC_CACHE = 'zodiac-dynamic-' + CACHE_VERSION;

// 静态资源（长期缓存）
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js',
    '/sw.js'
];

// 安装Service Worker
self.addEventListener('install', event => {
    console.log('Service Worker 安装中...');
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('静态缓存已打开');
                return cache.addAll(STATIC_ASSETS.map(url => new Request(url, { cache: 'reload' })));
            })
            .catch(err => {
                console.error('缓存安装失败:', err);
            })
    );
    // 立即激活新的Service Worker
    self.skipWaiting();
});

// 激活Service Worker
self.addEventListener('activate', event => {
    console.log('Service Worker 激活中...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // 删除旧版本的缓存
                    if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                        console.log('删除旧缓存:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // 立即控制所有客户端
    return self.clients.claim();
});

// 拦截请求并返回缓存
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // 跳过非GET请求
    if (request.method !== 'GET') {
        return;
    }
    
    // 跳过chrome-extension等协议
    if (!url.protocol.startsWith('http')) {
        return;
    }
    
    // 静态资源：缓存优先策略
    if (STATIC_ASSETS.some(asset => url.pathname.includes(asset))) {
        event.respondWith(
            caches.match(request)
                .then(response => {
                    if (response) {
                        return response;
                    }
                    return fetch(request).then(fetchResponse => {
                        // 缓存响应
                        const responseClone = fetchResponse.clone();
                        caches.open(STATIC_CACHE).then(cache => {
                            cache.put(request, responseClone);
                        });
                        return fetchResponse;
                    });
                })
        );
    }
    // CDN资源：网络优先，失败后使用缓存
    else if (url.hostname.includes('cdn.jsdelivr.net') || url.hostname.includes('cdn.bootcdn.net')) {
        event.respondWith(
            fetch(request)
                .then(response => {
                    const responseClone = response.clone();
                    caches.open(DYNAMIC_CACHE).then(cache => {
                        cache.put(request, responseClone);
                    });
                    return response;
                })
                .catch(() => {
                    return caches.match(request);
                })
        );
    }
    // 其他资源：网络优先
    else {
        event.respondWith(
            fetch(request)
                .then(response => {
                    // 只缓存成功的响应
                    if (response.status === 200) {
                        const responseClone = response.clone();
                        caches.open(DYNAMIC_CACHE).then(cache => {
                            cache.put(request, responseClone);
                        });
                    }
                    return response;
                })
                .catch(() => {
                    return caches.match(request);
                })
        );
    }
});

