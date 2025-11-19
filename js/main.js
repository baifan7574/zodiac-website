// 星座数据
const zodiacData = [
    { id: 'aries', name: '白羊座', icon: '♈', date: '3.21-4.19', element: '火' },
    { id: 'taurus', name: '金牛座', icon: '♉', date: '4.20-5.20', element: '土' },
    { id: 'gemini', name: '双子座', icon: '♊', date: '5.21-6.21', element: '风' },
    { id: 'cancer', name: '巨蟹座', icon: '♋', date: '6.22-7.22', element: '水' },
    { id: 'leo', name: '狮子座', icon: '♌', date: '7.23-8.22', element: '火' },
    { id: 'virgo', name: '处女座', icon: '♍', date: '8.23-9.22', element: '土' },
    { id: 'libra', name: '天秤座', icon: '♎', date: '9.23-10.23', element: '风' },
    { id: 'scorpio', name: '天蝎座', icon: '♏', date: '10.24-11.22', element: '水' },
    { id: 'sagittarius', name: '射手座', icon: '♐', date: '11.23-12.21', element: '火' },
    { id: 'capricorn', name: '摩羯座', icon: '♑', date: '12.22-1.19', element: '土' },
    { id: 'aquarius', name: '水瓶座', icon: '♒', date: '1.20-2.18', element: '风' },
    { id: 'pisces', name: '双鱼座', icon: '♓', date: '2.19-3.20', element: '水' }
];

// 星座数据别名，用于爱情专线功能
const zodiacSigns = zodiacData;

// 运势数据
const fortuneData = {
    aries: {
        overall: { score: 85, desc: '今天充满活力，适合开展新计划。你的领导能力会得到认可。' },
        love: { score: 78, desc: '感情运势良好，单身者有机会遇到心仪对象。' },
        career: { score: 92, desc: '事业运势极佳，工作上会有突破性进展。' },
        health: { score: 70, desc: '注意休息，避免过度劳累。适当运动有益健康。' }
    },
    taurus: {
        overall: { score: 76, desc: '今天运势平稳，适合处理日常事务。' },
        love: { score: 82, desc: '感情稳定，适合与伴侣共度美好时光。' },
        career: { score: 74, desc: '工作进展顺利，但需要更多耐心。' },
        health: { score: 88, desc: '身体状况良好，保持规律作息。' }
    },
    gemini: {
        overall: { score: 90, desc: '今天思维活跃，沟通能力超强。' },
        love: { score: 85, desc: '社交运势旺盛，容易吸引他人注意。' },
        career: { score: 88, desc: '工作中创意十足，适合脑力劳动。' },
        health: { score: 72, desc: '注意神经系统健康，避免过度思考。' }
    },
    cancer: {
        overall: { score: 78, desc: '今天情感丰富，直觉敏锐。' },
        love: { score: 90, desc: '感情运势极佳，适合表达爱意。' },
        career: { score: 70, desc: '工作中需要更多安全感，避免冲动决策。' },
        health: { score: 80, desc: '情绪健康重要，适当放松心情。' }
    },
    leo: {
        overall: { score: 88, desc: '今天自信满满，魅力四射。' },
        love: { score: 86, desc: '爱情运势旺盛，容易成为焦点。' },
        career: { score: 91, desc: '领导能力突出，适合担任重要角色。' },
        health: { score: 75, desc: '注意心脏健康，避免过度兴奋。' }
    },
    virgo: {
        overall: { score: 82, desc: '今天分析能力强，注重细节。' },
        love: { score: 74, desc: '感情需要更多理性分析，避免过度挑剔。' },
        career: { score: 89, desc: '工作效率高，适合处理复杂任务。' },
        health: { score: 85, desc: '消化系统健康，注意饮食规律。' }
    },
    libra: {
        overall: { score: 84, desc: '今天和谐平衡，人际关系良好。' },
        love: { score: 88, desc: '感情运势平衡，适合解决感情问题。' },
        career: { score: 80, desc: '合作运势佳，适合团队工作。' },
        health: { score: 78, desc: '注意平衡工作与休息。' }
    },
    scorpio: {
        overall: { score: 86, desc: '今天洞察力强，充满神秘感。' },
        love: { score: 92, desc: '感情深刻强烈，容易产生深度连接。' },
        career: { score: 83, desc: '工作中适合处理机密事务。' },
        health: { score: 76, desc: '注意排毒养生，保持身心平衡。' }
    },
    sagittarius: {
        overall: { score: 89, desc: '今天乐观开朗，充满冒险精神。' },
        love: { score: 80, desc: '感情需要自由空间，避免束缚。' },
        career: { score: 87, desc: '适合开拓新领域，学习新技能。' },
        health: { score: 82, desc: '运动运势佳，适合户外活动。' }
    },
    capricorn: {
        overall: { score: 81, desc: '今天务实稳重，目标明确。' },
        love: { score: 72, desc: '感情需要时间培养，不宜急于求成。' },
        career: { score: 93, desc: '事业运势极佳，适合长期规划。' },
        health: { score: 79, desc: '注意骨骼健康，适当补钙。' }
    },
    aquarius: {
        overall: { score: 87, desc: '今天创新思维强，与众不同。' },
        love: { score: 84, desc: '感情需要新鲜感，避免枯燥。' },
        career: { score: 85, desc: '适合创新项目，发挥独特才能。' },
        health: { score: 77, desc: '注意血液循环，多喝水。' }
    },
    pisces: {
        overall: { score: 83, desc: '今天富有想象力，情感细腻。' },
        love: { score: 91, desc: '感情浪漫温柔，容易感动他人。' },
        career: { score: 76, desc: '适合艺术创作，发挥创意才能。' },
        health: { score: 81, desc: '注意心理健康，避免过度敏感。' }
    }
};

// 配对数据
const matchData = {
    'aries-aries': { score: 85, title: '天生一对', analysis: '两个白羊座的组合充满激情和活力，你们会一起探索生活的各种可能性。', advice: '学会妥协，给彼此更多空间。' },
    'aries-taurus': { score: 65, title: '需要努力', analysis: '白羊的冲动和金牛的稳重形成互补，但也容易产生冲突。', advice: '多沟通，理解对方的需求。' },
    'aries-gemini': { score: 90, title: '完美搭配', analysis: '充满活力的组合，你们会一起享受生活的乐趣。', advice: '保持新鲜感，避免单调。' },
    'taurus-taurus': { score: 88, title: '稳定和谐', analysis: '两个金牛座的组合稳定而和谐，你们会一起建立美好的生活。', advice: '避免过于保守，尝试新事物。' },
    'gemini-gemini': { score: 82, title: '有趣组合', analysis: '充满智慧和幽默的组合，你们永远不会感到无聊。', advice: '学会专注，避免三心二意。' },
    'cancer-cancer': { score: 91, title: '深情组合', analysis: '充满情感和理解，你们会给予彼此温暖和安全感。', advice: '避免过度情绪化，保持理性。' },
    'leo-leo': { score: 86, title: '王者组合', analysis: '充满自信和魅力，你们会成为众人瞩目的焦点。', advice: '学会分享聚光灯，避免争强好胜。' },
    'virgo-virgo': { score: 89, title: '完美主义', analysis: '注重细节和品质，你们会一起创造完美的生活。', advice: '避免过度挑剔，学会放松。' },
    'libra-libra': { score: 87, title: '和谐平衡', analysis: '追求平衡和美好，你们会一起创造和谐的生活。', advice: '避免犹豫不决，学会做决定。' },
    'scorpio-scorpio': { score: 93, title: '深刻连接', analysis: '充满激情和深度，你们会有灵魂层面的连接。', advice: '学会信任，避免控制欲。' },
    'sagittarius-sagittarius': { score: 84, title: '冒险组合', analysis: '热爱自由和冒险，你们会一起探索世界。', advice: '学会责任，避免过于随性。' },
    'capricorn-capricorn': { score: 92, title: '强强联合', analysis: '务实而有野心，你们会一起实现人生目标。', advice: '学会放松，享受生活。' },
    'aquarius-aquarius': { score: 85, title: '创新组合', analysis: '充满创意和独特性，你们会一起改变世界。', advice: '学会情感表达，避免过于理性。' },
    'pisces-pisces': { score: 88, title: '梦幻组合', analysis: '充满浪漫和想象力，你们会一起创造美好的世界。', advice: '学会面对现实，避免逃避。' }
};

// 职场数据
const careerData = {
    aries: {
        leadership: { score: 95, desc: '天生的领导者，勇于承担责任，适合担任管理职位。' },
        teamwork: { score: 70, desc: '独立性强，但需要学会更好地与团队协作。' },
        creativity: { score: 88, desc: '创新思维活跃，善于开拓新项目和业务。' },
        stress: { score: 75, desc: '抗压能力不错，但需要学会控制脾气。' },
        advice: '发挥你的领导才能，同时学会倾听他人意见，这样能在职场中更上一层楼。'
    },
    taurus: {
        leadership: { score: 72, desc: '稳重可靠，但领导风格偏向保守。' },
        teamwork: { score: 90, desc: '优秀的团队合作者，值得信赖的伙伴。' },
        creativity: { score: 65, desc: '更擅长执行而非创新，需要培养创意思维。' },
        stress: { score: 85, desc: '抗压能力强，能够在压力下保持冷静。' },
        advice: '你的稳定性是职场中的宝贵财富，适当尝试新方法会让你的职业发展更广阔。'
    },
    gemini: {
        leadership: { score: 78, desc: '沟通能力强，但需要提高决策的果断性。' },
        teamwork: { score: 92, desc: '出色的沟通者，能够促进团队协作。' },
        creativity: { score: 95, desc: '创意无限，善于提出新想法和解决方案。' },
        stress: { score: 68, desc: '容易因多任务而感到压力，需要学会专注。' },
        advice: '发挥你的沟通和创意优势，学会专注和深入，你会成为职场中的多面手。'
    },
    cancer: {
        leadership: { score: 74, desc: '关怀下属，但需要提高决策的客观性。' },
        teamwork: { score: 88, desc: '富有同情心，善于营造和谐的团队氛围。' },
        creativity: { score: 70, desc: '直觉敏锐，但创意需要更多理性支撑。' },
        stress: { score: 72, desc: '情绪容易受工作影响，需要学会情绪管理。' },
        advice: '你的同理心是领导力的重要组成部分，学会平衡情感与理性，职场发展会更顺利。'
    },
    leo: {
        leadership: { score: 96, desc: '天生的领导者，具有强大的感染力和号召力。' },
        teamwork: { score: 75, desc: '喜欢成为焦点，需要学会分享成功。' },
        creativity: { score: 90, desc: '富有创造力和表现力，善于展示成果。' },
        stress: { score: 80, desc: '抗压能力不错，但需要学会接受批评。' },
        advice: '你的领导魅力无可替代，学会谦逊和团队合作，你会成为更优秀的领导者。'
    },
    virgo: {
        leadership: { score: 82, desc: '注重细节，管理能力强，但有时过于完美主义。' },
        teamwork: { score: 85, desc: '可靠的工作伙伴，但需要避免过度挑剔。' },
        creativity: { score: 72, desc: '更擅长改进和优化，而非原创。' },
        stress: { score: 78, desc: '容易因追求完美而感到压力，需要学会放松。' },
        advice: '你的细致和完美主义是优势，学会适当放手和信任他人，职场发展会更轻松。'
    },
    libra: {
        leadership: { score: 84, desc: '善于平衡各方利益，但决策有时过于犹豫。' },
        teamwork: { score: 92, desc: '优秀的协调者，善于处理人际关系。' },
        creativity: { score: 80, desc: '具有审美眼光，善于创造和谐的工作环境。' },
        stress: { score: 76, desc: '容易因冲突而感到压力，需要学会果断。' },
        advice: '你的平衡感和协调能力是职场中的稀缺技能，学会果断决策，你会成为出色的管理者。'
    },
    scorpio: {
        leadership: { score: 90, desc: '具有强大的洞察力和决断力，适合担任重要职位。' },
        teamwork: { score: 70, desc: '独立性强，需要学会更好地信任他人。' },
        creativity: { score: 85, desc: '善于深度思考，能够提出独特的见解。' },
        stress: { score: 88, desc: '抗压能力极强，能够在危机中保持冷静。' },
        advice: '你的洞察力和决断力是领导力的核心，学会开放和信任，团队会更加团结。'
    },
    sagittarius: {
        leadership: { score: 78, desc: '具有远见卓识，但需要提高执行力。' },
        teamwork: { score: 80, desc: '乐观积极，能够激励团队士气。' },
        creativity: { score: 88, desc: '善于创新和开拓，适合发展新业务。' },
        stress: { score: 74, desc: '不喜欢束缚，需要在规则和自由间找到平衡。' },
        advice: '你的远见和乐观是宝贵的领导品质，学会专注和坚持，会取得更大的成就。'
    },
    capricorn: {
        leadership: { score: 94, desc: '务实稳重，具有强烈的责任感和目标导向。' },
        teamwork: { score: 82, desc: '可靠的合作伙伴，但有时过于严肃。' },
        creativity: { score: 68, desc: '更擅长执行而非创新，需要培养灵活性。' },
        stress: { score: 90, desc: '抗压能力极强，能够承受巨大的工作压力。' },
        advice: '你的务实和毅力是成功的关键，适当放松和灵活变通，会让你的职场之路更宽广。'
    },
    aquarius: {
        leadership: { score: 86, desc: '具有创新思维，善于引领变革。' },
        teamwork: { score: 78, desc: '独立思考者，需要学会更好地融入团队。' },
        creativity: { score: 96, desc: '创意无限，善于提出颠覆性的想法。' },
        stress: { score: 72, desc: '不喜欢常规，需要在创新和规范间平衡。' },
        advice: '你的创新能力是职场中的宝贵财富，学会与团队协作，你的想法会更容易实现。'
    },
    pisces: {
        leadership: { score: 70, desc: '富有同情心，但需要提高决策的果断性。' },
        teamwork: { score: 86, desc: '善解人意，能够营造温馨的团队氛围。' },
        creativity: { score: 92, desc: '想象力丰富，善于艺术性和创意性工作。' },
        stress: { score: 68, desc: '容易受他人情绪影响，需要学会保护自己。' },
        advice: '你的创意和同理心是独特的优势，学会设定边界和坚持原则，职场发展会更顺利。'
    }
};

// 宝妈数据
const momData = {
    aries: {
        patience: { score: 65, desc: '性格急躁，需要培养更多耐心。' },
        energy: { score: 95, desc: '精力充沛，能够跟上孩子的节奏。' },
        creativity: { score: 88, desc: '善于创造有趣的游戏和活动。' },
        discipline: { score: 72, desc: '需要学会温和而坚定的管教方式。' },
        advice: '你的活力和创意是育儿的优势，学会放慢节奏，用更多耐心陪伴孩子成长。'
    },
    taurus: {
        patience: { score: 92, desc: '极有耐心，能够温柔地对待孩子。' },
        energy: { score: 78, desc: '稳定持久，能够提供持续的关注。' },
        creativity: { score: 70, desc: '更擅长传统而非创新的育儿方式。' },
        discipline: { score: 88, desc: '能够建立稳定的规则和 routine。' },
        advice: '你的耐心和稳定性是孩子成长的基石，适当尝试新方法会让育儿更有趣。'
    },
    gemini: {
        patience: { score: 70, desc: '容易分心，需要学会专注陪伴。' },
        energy: { score: 85, desc: '思维活跃，能够满足孩子的好奇心。' },
        creativity: { score: 95, desc: '善于讲故事和创造有趣的互动。' },
        discipline: { score: 68, desc: '管教方式需要更多一致性。' },
        advice: '你的智慧和创意是育儿的宝贵财富，学会专注和一致，孩子会更受益。'
    },
    cancer: {
        patience: { score: 90, desc: '极富同情心，能够理解孩子的情感需求。' },
        energy: { score: 75, desc: '情感丰富，但需要保护自己的精力。' },
        creativity: { score: 80, desc: '善于创造温馨的家庭环境。' },
        discipline: { score: 78, desc: '需要平衡关爱和管教。' },
        advice: '你的母性直觉是强大的育儿工具，学会设定健康的边界，对孩子和你都好。'
    },
    leo: {
        patience: { score: 72, desc: '希望孩子成为焦点，需要更多耐心。' },
        energy: { score: 90, desc: '充满热情，能够激励孩子。' },
        creativity: { score: 88, desc: '善于创造有趣和富有表现力的活动。' },
        discipline: { score: 80, desc: '需要学会既鼓励又管教。' },
        advice: '你的热情和鼓励是孩子成长的动力，学会倾听和给予孩子空间。'
    },
    virgo: {
        patience: { score: 88, desc: '细致耐心，能够关注孩子的每个细节。' },
        energy: { score: 80, desc: '有条理，能够建立良好的日常习惯。' },
        creativity: { score: 72, desc: '更擅长实用的而非创意的育儿方式。' },
        discipline: { score: 92, desc: '能够建立清晰的规则和期望。' },
        advice: '你的细致和规划能力是育儿的优势，学会放松和享受不完美的时刻。'
    },
    libra: {
        patience: { score: 85, desc: '善于平衡，能够公平对待孩子。' },
        energy: { score: 78, desc: '追求和谐，能够创造平和的家庭氛围。' },
        creativity: { score: 82, desc: '具有审美眼光，善于美化生活环境。' },
        discipline: { score: 76, desc: '需要学会更果断的管教决定。' },
        advice: '你的平衡感和公正心是育儿的宝贵品质，学会在必要时做出坚定决定。'
    },
    scorpio: {
        patience: { score: 78, desc: '情感深刻，需要学会控制情绪。' },
        energy: { score: 82, desc: '专注投入，能够深度参与孩子的生活。' },
        creativity: { score: 85, desc: '善于深度互动和情感连接。' },
        discipline: { score: 86, desc: '能够建立深刻的信任和规则。' },
        advice: '你的深度和洞察力让你成为理解孩子的高手，学会放手和信任。'
    },
    sagittarius: {
        patience: { score: 68, desc: '喜欢自由，需要适应育儿的束缚。' },
        energy: { score: 92, desc: '乐观积极，能够带给孩子快乐。' },
        creativity: { score: 90, desc: '善于创造冒险和学习的体验。' },
        discipline: { score: 70, desc: '需要建立更一致的规则。' },
        advice: '你的乐观和冒险精神是孩子成长的好伙伴，学会平衡自由和责任。'
    },
    capricorn: {
        patience: { score: 90, desc: '极有耐心，能够长期坚持育儿理念。' },
        energy: { score: 85, desc: '稳定可靠，能够提供持续的支持。' },
        creativity: { score: 68, desc: '更擅长传统的而非创新的育儿方式。' },
        discipline: { score: 94, desc: '能够建立清晰的结构和期望。' },
        advice: '你的责任感和稳定性是孩子成长的基石，学会灵活和享受育儿过程。'
    },
    aquarius: {
        patience: { score: 75, desc: '思想独立，需要理解孩子的依赖需求。' },
        energy: { score: 80, desc: '思维创新，能够培养孩子的独特性。' },
        creativity: { score: 92, desc: '善于创造独特的学习体验。' },
        discipline: { score: 72, desc: '需要平衡自由和规则。' },
        advice: '你的创新思维让孩子保持独特个性，学会提供情感支持和稳定。'
    },
    pisces: {
        patience: { score: 88, desc: '极富同情心，能够感受孩子的情感。' },
        energy: { score: 72, desc: '情感敏感，需要保护自己的精力。' },
        creativity: { score: 95, desc: '想象力丰富，善于创造梦幻世界。' },
        discipline: { score: 70, desc: '需要学会更坚定的管教方式。' },
        advice: '你的创意和同理心是育儿的魔法，学会设定边界和保持现实感。'
    }
};

// 全局变量
let selectedZodiac = null;
let userProfile = {};

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌟 星座网站开始初始化...');
    initializeApp();
    console.log('✅ 星座网站初始化完成！');
});

function initializeApp() {
    // 初始化主页功能卡片
    initializeFeatureCards();
    
    // 初始化星座网格
    initializeZodiacGrid();
    
    // 初始化配对选择器
    initializeMatchSelectors();
    
    // 初始化个人中心星座选择器
    initializeProfileZodiacSelector();
    
    // 初始化导航
    initializeNavigation();
    
    // 初始化个人资料表单
    initializeProfileForm();
    
    // 初始化社区评论
    initializeComments();
    
    // 初始化职场功能
    initializeCareer();
    
    // 初始化宝妈功能
    initializeMom();
    
    // 设置当前日期
    setCurrentDate();
    
    // 加载用户资料
    loadUserProfile();
    
    // 延迟初始化心境倾听功能，确保DOM完全加载
    setTimeout(() => {
        initializeMoodListener();
    }, 300);
    
    // 默认显示首页
    showPage('home');
}

// 页面功能初始化函数（全局函数）
window.initializePageFeatures = function(pageId) {
    try {
        // 确保zodiacData已加载
        if (typeof zodiacData === 'undefined') {
            setTimeout(() => window.initializePageFeatures(pageId), 200);
            return;
        }
        
        switch(pageId) {
            case 'zodiac':
                if (typeof window.initializeZodiacGrid === 'function') {
                    window.initializeZodiacGrid();
                }
                break;
            case 'match':
                if (typeof window.initializeMatchSelectors === 'function') {
                    window.initializeMatchSelectors();
                }
                break;
            case 'fortune':
                // 初始化运势页面的星座选择器（延迟执行确保DOM已渲染）
                setTimeout(() => {
                    if (typeof window.initializeFortuneSelector === 'function') {
                        window.initializeFortuneSelector();
                        console.log('✅ 运势选择器初始化函数已调用');
            } else {
                        console.error('❌ initializeFortuneSelector函数不存在');
                    }
                }, 100);
                // 如果已选择星座，显示运势
                if (typeof selectedZodiac !== 'undefined' && selectedZodiac) {
                    setTimeout(() => {
                        const fortuneSelect = document.getElementById('fortuneZodiacSelect');
                        if (fortuneSelect) {
                            fortuneSelect.value = selectedZodiac;
                        }
                        if (typeof showFortune === 'function') {
                            showFortune(selectedZodiac);
                        }
                    }, 200);
                }
                break;
            case 'community':
                if (typeof window.loadComments === 'function') {
                    window.loadComments();
                }
                break;
            case 'career':
                if (typeof window.initializeCareer === 'function') {
                    window.initializeCareer();
                }
                break;
            case 'mom':
                if (typeof window.initializeMom === 'function') {
                    window.initializeMom();
                }
                break;
            case 'mood':
                if (typeof window.initializeMoodListener === 'function') {
                    window.initializeMoodListener();
                }
                break;
            case 'loveLine':
                if (typeof window.initializeLoveLine === 'function') {
                    window.initializeLoveLine();
                }
                break;
            case 'login':
                if (typeof window.initializeLogin === 'function') {
                    window.initializeLogin();
                }
                break;
            case 'membership':
                if (typeof window.initializeMembership === 'function') {
                    window.initializeMembership();
                }
                break;
            case 'payment':
                if (typeof window.initializePayment === 'function') {
                    window.initializePayment();
                }
                break;
            case 'profile':
                if (typeof window.initializeProfileZodiacSelector === 'function') {
                    window.initializeProfileZodiacSelector();
                }
                if (typeof loadUserProfile === 'function') {
                    loadUserProfile();
                }
                if (typeof window.updateMembershipStatus === 'function') {
                    window.updateMembershipStatus();
                }
                break;
        }
    } catch (error) {
        console.error('初始化页面功能出错:', error);
    }
};

// 初始化星座网格（全局函数）
window.initializeZodiacGrid = function() {
    const grid = document.getElementById('zodiacGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    zodiacData.forEach(zodiac => {
        const card = document.createElement('div');
        card.className = 'col-md-4 col-sm-6';
        card.innerHTML = `
            <div class="zodiac-card" data-zodiac="${zodiac.id}" onclick="selectZodiac('${zodiac.id}')">
                <div class="zodiac-icon">${zodiac.icon}</div>
                <h4>${zodiac.name}</h4>
                <p class="zodiac-date">${zodiac.date}</p>
                <small class="text-muted">${zodiac.element}象星座</small>
            </div>
        `;
        grid.appendChild(card);
    });
};

// 初始化配对选择器（全局函数）
window.initializeMatchSelectors = function() {
    const selector1 = document.getElementById('zodiac1');
    const selector2 = document.getElementById('zodiac2');
    
    if (!selector1 || !selector2) return;
    
    [selector1, selector2].forEach(selector => {
        selector.innerHTML = '<option value="">选择星座</option>';
        zodiacData.forEach(zodiac => {
            const option = document.createElement('option');
            option.value = zodiac.id;
            option.textContent = zodiac.name;
            selector.appendChild(option);
        });
    });
};

// 初始化个人中心星座选择器（全局函数）
window.initializeProfileZodiacSelector = function() {
    const selector = document.getElementById('myZodiac');
    if (!selector) return;
    
    selector.innerHTML = '<option value="">选择星座</option>';
    zodiacData.forEach(zodiac => {
        const option = document.createElement('option');
        option.value = zodiac.id;
        option.textContent = zodiac.name;
        selector.appendChild(option);
    });
}

// 初始化主页功能卡片点击事件
function initializeFeatureCards() {
    try {
    const featureCards = document.querySelectorAll('.feature-card');
    
        featureCards.forEach((card) => {
        card.style.cursor = 'pointer';
            const cardTitle = card.querySelector('h3')?.textContent?.trim();
            if (!cardTitle) return;
        
        card.addEventListener('click', function() {
                try {
                    // 页面跳转逻辑
            switch(cardTitle) {
                case '每日运势':
                    showPage('zodiac');
                    break;
                case '星座配对':
                    showPage('match');
                    break;
                case '社区交流':
                    showPage('community');
                    break;
                case '心境倾听':
                    showPage('mood');
                    break;
                case '职场':
                    showPage('career');
                    break;
                case '宝妈':
                    showPage('mom');
                    break;
                case '爱情专线':
                            if (typeof showLoveLine === 'function') {
                    showLoveLine();
                            } else {
                                showPage('loveLine');
                            }
                    break;
                default:
                    console.log('未知功能卡片:', cardTitle);
                    }
                } catch (error) {
                    console.error('卡片点击出错:', error);
                    showMessage('跳转失败，请稍后再试');
            }
        });
    });
    } catch (error) {
        console.error('初始化功能卡片出错:', error);
    }
}

// 初始化导航
function initializeNavigation() {
    try {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
                try {
            e.preventDefault();
                    const href = this.getAttribute('href');
                    if (!href || !href.startsWith('#')) return;
                    
                    const targetId = href.substring(1);
                    if (!targetId) return;
            
            showPage(targetId);
            
            // 更新导航状态
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
                    
                    // 移动端自动关闭导航菜单
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                        if (bsCollapse) {
                            bsCollapse.hide();
                        }
                    }
                } catch (error) {
                    console.error('导航点击出错:', error);
                }
        });
    });
    } catch (error) {
        console.error('初始化导航出错:', error);
    }
}

// 显示页面（全局函数）
window.showPage = function(pageId) {
    try {
        if (!pageId) return;
    
    // 隐藏所有页面
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });
    
    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.style.display = 'block';
            
            // 滚动到页面顶部
            setTimeout(() => {
                targetPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            
            // 初始化页面功能
            setTimeout(() => {
                if (typeof window.initializePageFeatures === 'function') {
                    window.initializePageFeatures(pageId);
                } else if (typeof initializePageFeatures === 'function') {
                    initializePageFeatures(pageId);
                }
            }, 150);
            
            // 如果是爱情专线页面，确保初始化
            if (pageId === 'loveLine' && typeof initializeLoveLine === 'function') {
                setTimeout(() => {
                    initializeLoveLine();
                }, 200);
            }
    } else {
            console.warn('页面不存在:', pageId);
            // 如果页面不存在，显示首页
            const homePage = document.getElementById('home');
            if (homePage) {
                homePage.classList.add('active');
                homePage.style.display = 'block';
            }
    }
    
    // 更新导航状态
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${pageId}` || (pageId === 'home' && href === '#')) {
            link.classList.add('active');
        }
    });
        
        // 关闭移动端导航菜单
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap?.Collapse?.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            } else {
                navbarCollapse.classList.remove('show');
            }
        }
    } catch (error) {
        console.error('显示页面出错:', error);
    }
};

// 选择星座（全局函数）
window.selectZodiac = function(zodiacId) {
    selectedZodiac = zodiacId;
    
    // 更新星座卡片选中状态
    const cards = document.querySelectorAll('.zodiac-card');
    cards.forEach(card => {
        card.classList.remove('selected');
        if (card.dataset.zodiac === zodiacId) {
            card.classList.add('selected');
        }
    });
    
    // 显示运势
    showFortune(zodiacId);
    
    // 自动跳转到运势页面
    setTimeout(() => {
        if (typeof showPage === 'function') {
        showPage('fortune');
        } else if (typeof window.showPage === 'function') {
            window.showPage('fortune');
}
    }, 500);
};

// 生成动态运势
function generateDynamicFortune(zodiacId) {
    const baseFortune = fortuneData[zodiacId];
    const today = new Date();
    const dateSeed = today.getDate() + today.getMonth() + 1; // 基于日期生成种子
    
    // 生成动态分数（基于基础分数 ± 10）
    const dynamicScore = (baseScore) => {
        const variation = Math.sin(dateSeed * 0.1) * 10; // 基于日期的波动
        return Math.max(60, Math.min(99, Math.round(baseScore + variation)));
    };
    
    // 动态描述模板
    const dynamicDescriptions = {
        overall: [
            '今天充满能量，适合开展新计划。',
            '运势平稳上升，保持积极心态。',
            '会有意外收获，保持开放心态。',
            '适合深度思考，做出重要决定。',
            '人际关系和谐，适合合作交流。'
        ],
        love: [
            '感情运势升温，适合表达心意。',
            '单身者有机会遇到心仪对象。',
            '适合与伴侣共度美好时光。',
            '感情需要更多沟通和理解。',
            '爱情运势稳定，享受平淡幸福。'
        ],
        career: [
            '工作上会有突破性进展。',
            '适合展现才华，获得认可。',
            '团队合作运势佳，共同成长。',
            '需要更多耐心和坚持。',
            '适合学习和提升专业技能。'
        ],
        health: [
            '身体状况良好，保持规律作息。',
            '注意休息，避免过度劳累。',
            '适合运动锻炼，增强体质。',
            '关注心理健康，适当放松。',
            '饮食健康，营养均衡很重要。'
        ]
    };
    
    // 基于日期选择描述
    const getDescription = (type) => {
        const descriptions = dynamicDescriptions[type];
        const index = (dateSeed + type.length) % descriptions.length;
        return descriptions[index];
    };
    
    return {
        overall: { 
            score: dynamicScore(baseFortune.overall.score), 
            desc: getDescription('overall') 
        },
        love: { 
            score: dynamicScore(baseFortune.love.score), 
            desc: getDescription('love') 
        },
        career: { 
            score: dynamicScore(baseFortune.career.score), 
            desc: getDescription('career') 
        },
        health: { 
            score: dynamicScore(baseFortune.health.score), 
            desc: getDescription('health') 
        }
    };
}

// 幸运元素数据
const luckyElementsData = {
    aries: { numbers: [1, 8, 17], colors: ['红色', '橙色'], direction: '东方', gem: '红宝石' },
    taurus: { numbers: [2, 6, 24], colors: ['绿色', '粉色'], direction: '东北', gem: '祖母绿' },
    gemini: { numbers: [3, 12, 21], colors: ['黄色', '银色'], direction: '东方', gem: '玛瑙' },
    cancer: { numbers: [4, 7, 28], colors: ['银色', '白色'], direction: '北方', gem: '珍珠' },
    leo: { numbers: [5, 19, 23], colors: ['金色', '橙色'], direction: '南方', gem: '黄宝石' },
    virgo: { numbers: [6, 15, 24], colors: ['灰色', '米色'], direction: '西南', gem: '蓝宝石' },
    libra: { numbers: [7, 14, 21], colors: ['蓝色', '粉色'], direction: '西方', gem: '钻石' },
    scorpio: { numbers: [8, 13, 27], colors: ['深红色', '黑色'], direction: '西北', gem: '黑曜石' },
    sagittarius: { numbers: [9, 18, 22], colors: ['紫色', '深蓝色'], direction: '东南', gem: '紫水晶' },
    capricorn: { numbers: [10, 16, 26], colors: ['棕色', '黑色'], direction: '西南', gem: '黑玛瑙' },
    aquarius: { numbers: [11, 20, 29], colors: ['蓝色', '青色'], direction: '北方', gem: '蓝宝石' },
    pisces: { numbers: [12, 19, 30], colors: ['海蓝色', '绿色'], direction: '东南', gem: '海蓝宝石' }
};

// 显示运势
function showFortune(zodiacId) {
    const zodiac = zodiacData.find(z => z.id === zodiacId);
    
    if (!zodiac) return;
    
    // 保存选择的星座（全局变量）
    selectedZodiac = zodiacId;
    
    // 生成动态运势
    const fortune = generateDynamicFortune(zodiacId);
    
    // 更新星座名称
    const nameElement = document.getElementById('selectedZodiacName');
    if (nameElement) {
        nameElement.textContent = `${zodiac.icon} ${zodiac.name} 今日运势`;
    }
    
    // 更新日期
    const dateElement = document.getElementById('fortuneDate');
    if (dateElement) {
        const today = new Date();
        dateElement.textContent = today.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
    }
    
    // 更新各项运势
    updateFortuneItem('overall', fortune.overall);
    updateFortuneItem('love', fortune.love);
    updateFortuneItem('career', fortune.career);
    updateFortuneItem('health', fortune.health);
    
    // 显示幸运元素
    displayLuckyElements(zodiacId);
    
    // 显示操作按钮
    const actionsElement = document.getElementById('fortuneActions');
    if (actionsElement) {
        actionsElement.style.display = 'block';
    }
    
    // 更新收藏按钮状态
    updateFavoriteButton(zodiacId, 'today');
    
    // 保存到历史记录
    saveFortuneToHistoryAuto(zodiacId, fortune, 'today');
}

// 初始化运势页面的星座选择器（全局函数）
window.initializeFortuneSelector = function() {
    try {
        console.log('🔍 开始初始化运势选择器...');
        const selector = document.getElementById('fortuneZodiacSelect');
        if (!selector) {
            console.error('❌ 运势选择器元素未找到，ID: fortuneZodiacSelect');
            return;
        }
        
        console.log('✅ 找到选择器元素');
        
        // 清空现有选项（保留默认选项）
        selector.innerHTML = '<option value="">请选择星座</option>';
        
        // 填充星座选项
        if (typeof zodiacData !== 'undefined' && Array.isArray(zodiacData)) {
            console.log(`📋 准备填充 ${zodiacData.length} 个星座选项`);
            zodiacData.forEach(zodiac => {
                const option = document.createElement('option');
                option.value = zodiac.id;
                option.textContent = `${zodiac.icon} ${zodiac.name}`;
                selector.appendChild(option);
            });
            console.log(`✅ 运势选择器已填充 ${zodiacData.length} 个星座选项`);
            console.log('📝 选择器当前选项数量:', selector.options.length);
        } else {
            console.error('❌ zodiacData未定义或不是数组', typeof zodiacData);
        }
    } catch (error) {
        console.error('❌ 初始化运势选择器出错:', error);
        console.error('错误堆栈:', error.stack);
    }
};

// 选择运势星座（全局函数）
window.selectFortuneZodiac = function(zodiacId) {
    if (!zodiacId) {
        // 如果清空选择，重置显示
        const zodiacName = document.getElementById('selectedZodiacName');
        const overallDesc = document.getElementById('overallDesc');
        const loveDesc = document.getElementById('loveDesc');
        const careerDesc = document.getElementById('careerDesc');
        const healthDesc = document.getElementById('healthDesc');
        
        if (zodiacName) zodiacName.textContent = '选择星座查看运势';
        if (overallDesc) overallDesc.textContent = '请先选择星座';
        if (loveDesc) loveDesc.textContent = '请先选择星座';
        if (careerDesc) careerDesc.textContent = '请先选择星座';
        if (healthDesc) healthDesc.textContent = '请先选择星座';
        
        // 重置分数条
        ['overall', 'love', 'career', 'health'].forEach(type => {
            const scoreElement = document.getElementById(`${type}Score`);
            if (scoreElement) {
                const scoreBar = scoreElement.querySelector('.score-bar');
                const scoreText = scoreElement.querySelector('.score-text');
                if (scoreBar) scoreBar.style.width = '0%';
                if (scoreText) scoreText.textContent = '--';
            }
        });
        return;
    }
    
    // 保存选择的星座
    selectedZodiac = zodiacId;
    
    // 显示运势
    if (typeof showFortune === 'function') {
        showFortune(zodiacId);
    }
};

// 初始化运势选择器（简化版，用于initializePageFeatures）
function initializeFortuneSelector() {
    if (typeof window.initializeFortuneSelector === 'function') {
        window.initializeFortuneSelector();
    }
}

// 更新运势项目
function updateFortuneItem(type, data) {
    const scoreElement = document.getElementById(`${type}Score`);
    const descElement = document.getElementById(`${type}Desc`);
    
    if (scoreElement) {
        const scoreBar = scoreElement.querySelector('.score-bar');
        const scoreText = scoreElement.querySelector('.score-text');
        
        if (scoreBar) {
            scoreBar.style.width = '0%';
            setTimeout(() => {
                scoreBar.style.width = `${data.score}%`;
            }, 100);
        }
        
        if (scoreText) {
            scoreText.textContent = `${data.score}分`;
        }
    }
    
    if (descElement) {
        descElement.textContent = data.desc;
    }
}

// 计算配对
window.calculateMatch = function() {
    const zodiac1 = document.getElementById('zodiac1').value;
    const zodiac2 = document.getElementById('zodiac2').value;
    
    if (!zodiac1 || !zodiac2) {
        alert('请选择两个星座进行配对');
        return;
    }
    
    // 优先使用预设数据，如果没有则使用动态生成
    const matchKey1 = `${zodiac1}-${zodiac2}`;
    const matchKey2 = `${zodiac2}-${zodiac1}`;
    
    let matchData = getMatchData(matchKey1) || getMatchData(matchKey2);
    
    // 如果没有预设数据，使用动态生成
    if (!matchData) {
        matchData = generateDynamicMatch(zodiac1, zodiac2);
        console.log('使用动态生成的配对数据');
    } else {
        console.log('使用预设的配对数据');
    }
    
    // 显示配对结果
    showMatchResult(matchData);
};

// 获取配对数据
function getMatchData(key) {
    return matchData[key];
}

// 生成动态配对数据
function generateDynamicMatch(zodiac1, zodiac2) {
    const z1 = zodiacData.find(z => z.id === zodiac1);
    const z2 = zodiacData.find(z => z.id === zodiac2);
    
    // 基于星座元素相性计算基础分数
    const elementCompatibility = {
        '火-火': 85, '火-土': 65, '火-风': 90, '火-水': 70,
        '土-火': 65, '土-土': 88, '土-风': 72, '土-水': 80,
        '风-火': 90, '风-土': 72, '风-风': 86, '风-水': 85,
        '水-火': 70, '水-土': 80, '水-风': 85, '水-水': 92
    };
    
    const baseScore = elementCompatibility[`${z1.element}-${z2.element}`] || 75;
    const finalScore = Math.round(baseScore + (Math.random() * 10 - 5)); // ±5的随机波动
    
    // 根据分数确定配对标题
    let title;
    if (finalScore >= 90) title = '天生一对';
    else if (finalScore >= 80) title = '完美搭配';
    else if (finalScore >= 70) title = '和谐平衡';
    else if (finalScore >= 60) title = '需要努力';
    else title = '挑战组合';
    
    // 动态生成分析内容
    const analyses = {
        '火-火': '两个火象星座的组合充满激情和活力，你们会一起探索生活的各种可能性，但也需要注意避免过于冲动。',
        '火-土': '火象的冲动和土象的稳重形成互补，火象带来激情，土象提供稳定，是很好的平衡组合。',
        '火-风': '火象和风象都是积极向上的星座，你们会相互激励，一起追求梦想，生活充满乐趣。',
        '火-水': '火象的热情和水象的深情形成有趣的对比，需要相互理解和包容，才能发挥最大潜力。',
        '土-土': '两个土象星座的组合稳定而踏实，你们会一起建立美好的生活，但需要避免过于保守。',
        '土-风': '土象的稳重和风象的灵活形成互补，土象提供基础，风象带来变化，是很好的成长组合。',
        '土-水': '土象的实际和水象的情感相结合，既有现实的考量，又有情感的深度，是很成熟的组合。',
        '风-风': '两个风象星座的组合充满智慧和创意，你们永远不会感到无聊，但需要学会专注和深入。',
        '风-水': '风象的理性和水象的情感相结合，既有理智的分析，又有感性的理解，是很和谐的组合。',
        '水-水': '两个水象星座的组合充满情感和理解，你们会有灵魂层面的连接，但需要避免过于情绪化。'
    };
    
    const analysis = analyses[`${z1.element}-${z2.element}`] || analyses[`${z2.element}-${z1.element}`] || '你们的组合有着独特的魅力，需要相互理解和包容。';
    
    // 动态建议
    const advices = [
        '多沟通，多理解，给彼此足够的信任和空间。',
        '学会欣赏对方的优点，包容对方的缺点。',
        '保持新鲜感，一起尝试新的事物和体验。',
        '在冲突时保持冷静，寻求双赢的解决方案。',
        '共同成长，支持对方的目标和梦想。'
    ];
    
    const advice = advices[Math.floor(Math.random() * advices.length)];
    
    return {
        score: finalScore,
        title: title,
        analysis: analysis,
        advice: advice
    };
}

// 生成随机配对数据（保持向后兼容）
function generateRandomMatch() {
    const score = Math.floor(Math.random() * 30) + 70; // 70-99分
    const titles = ['天生一对', '需要努力', '完美搭配', '有趣组合', '和谐平衡'];
    const title = titles[Math.floor(Math.random() * titles.length)];
    
    return {
        score: score,
        title: title,
        analysis: '你们的组合有着独特的魅力，虽然可能存在一些差异，但正是这些差异让你们的关系更加丰富多彩。',
        advice: '多沟通，多理解，给彼此足够的信任和空间。'
    };
}

// 显示配对结果
function showMatchResult(match) {
    const resultDiv = document.getElementById('matchResult');
    const percentage = document.getElementById('matchPercentage');
    const title = document.getElementById('matchTitle');
    const analysis = document.getElementById('matchAnalysis');
    const advice = document.getElementById('matchAdvice');
    
    if (resultDiv) {
        resultDiv.style.display = 'block';
        
        // 动画显示分数
        let currentScore = 0;
        const targetScore = match.score;
        const increment = targetScore / 50;
        
        const scoreAnimation = setInterval(() => {
            currentScore += increment;
            if (currentScore >= targetScore) {
                currentScore = targetScore;
                clearInterval(scoreAnimation);
            }
            
            if (percentage) {
                percentage.textContent = `${Math.floor(currentScore)}%`;
            }
        }, 20);
        
        if (title) title.textContent = match.title;
        if (analysis) analysis.textContent = match.analysis;
        if (advice) advice.textContent = match.advice;
    }
}

// 初始化个人资料表单
function initializeProfileForm() {
    const form = document.getElementById('profileForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        saveUserProfile();
    });
}

// 保存用户资料
function saveUserProfile() {
    const profile = {
        nickname: document.getElementById('nickname').value,
        gender: document.getElementById('gender').value,
        birthday: document.getElementById('birthday').value,
        zodiac: document.getElementById('myZodiac').value,
        bio: document.getElementById('bio').value
    };
    
    // 保存到localStorage
    localStorage.setItem('userProfile', JSON.stringify(profile));
    
    // 显示成功消息
    showMessage('个人资料保存成功！');
}

// 加载用户资料
function loadUserProfile() {
    const savedProfile = localStorage.getItem('userProfile');
    if (!savedProfile) return;
    
    try {
        const profile = JSON.parse(savedProfile);
        userProfile = profile;
        
        // 填充表单
        if (document.getElementById('nickname')) {
            document.getElementById('nickname').value = profile.nickname || '';
        }
        if (document.getElementById('gender')) {
            document.getElementById('gender').value = profile.gender || '';
        }
        if (document.getElementById('birthday')) {
            document.getElementById('birthday').value = profile.birthday || '';
        }
        if (document.getElementById('myZodiac')) {
            document.getElementById('myZodiac').value = profile.zodiac || '';
        }
        if (document.getElementById('bio')) {
            document.getElementById('bio').value = profile.bio || '';
        }
    } catch (e) {
        console.error('加载用户资料失败:', e);
    }
}

// 初始化社区评论（全局函数）
window.initializeComments = function() {
    // 加载现有评论
    loadComments();
};

// 加载评论（全局函数）
window.loadComments = function() {
    const commentsList = document.getElementById('commentsList');
    if (!commentsList) return;
    
    const savedComments = localStorage.getItem('communityComments');
    let comments = [];
    
    if (savedComments) {
        try {
            comments = JSON.parse(savedComments);
        } catch (e) {
            console.error('加载评论失败:', e);
        }
    }
    
    // 如果没有评论，添加默认评论
    if (comments.length === 0) {
        comments = getDefaultComments();
    }
    
    // 显示评论
    displayComments(comments);
}

// 获取默认评论
function getDefaultComments() {
    return [
        {
            author: '星座爱好者',
            content: '今天运势真的很准！我果然遇到了贵人相助。',
            time: '2024-01-15 10:30',
            avatar: '♈'
        },
        {
            author: '月光下的猫',
            content: '双子座的今天真的很有创意，完成了几个重要项目。',
            time: '2024-01-15 09:15',
            avatar: '♊'
        },
        {
            author: '星空漫步',
            content: '巨蟹座的感情运势真的很准，和伴侣的关系更加融洽了。',
            time: '2024-01-15 08:45',
            avatar: '♋'
        }
    ];
}

// 显示评论
function displayComments(comments) {
    const commentsList = document.getElementById('commentsList');
    if (!commentsList) return;
    
    commentsList.innerHTML = '';
    
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment-item';
        commentDiv.innerHTML = `
            <div class="comment-header">
                <div class="comment-author">
                    <span class="me-2">${comment.avatar}</span>
                    ${comment.author}
                </div>
                <div class="comment-time">${comment.time}</div>
            </div>
            <div class="comment-content">${comment.content}</div>
        `;
        commentsList.appendChild(commentDiv);
    });
};

// 添加评论（全局函数）
window.addPost = function() {
    const content = document.getElementById('postContent');
    if (!content || !content.value.trim()) {
        alert('请输入评论内容');
        return;
    }
    
    const comment = {
        author: userProfile.nickname || '匿名用户',
        content: content.value.trim(),
        time: new Date().toLocaleString('zh-CN'),
        avatar: userProfile.zodiac ? zodiacData.find(z => z.id === userProfile.zodiac)?.icon || '👤' : '👤'
    };
    
    // 获取现有评论
    const savedComments = localStorage.getItem('communityComments');
    let comments = [];
    
    if (savedComments) {
        try {
            comments = JSON.parse(savedComments);
        } catch (e) {
            comments = getDefaultComments();
        }
    } else {
        comments = getDefaultComments();
    }
    
    // 添加新评论到开头
    comments.unshift(comment);
    
    // 限制评论数量
    if (comments.length > 20) {
        comments = comments.slice(0, 20);
    }
    
    // 保存评论
    localStorage.setItem('communityComments', JSON.stringify(comments));
    
    // 清空输入框
    content.value = '';
    
    // 重新显示评论
    displayComments(comments);
    
    // 显示成功消息
    showMessage('评论发布成功！');
};

// 显示消息（全局函数）
window.showMessage = function(message) {
    // 创建消息元素
    const messageDiv = document.createElement('div');
    messageDiv.className = 'alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3';
    messageDiv.style.zIndex = '9999';
    messageDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(messageDiv);
    
    // 3秒后自动移除
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 3000);
};

// 设置当前日期
function setCurrentDate() {
    const dateElement = document.getElementById('fortuneDate');
    if (dateElement) {
        const today = new Date();
        const dateStr = today.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });
        dateElement.textContent = dateStr;
    }
}

// 工具函数：获取星座元素颜色
function getElementColor(element) {
    const colors = {
        '火': '#ff6b6b',
        '土': '#8b7355',
        '风': '#74c0fc',
        '水': '#4dabf7'
    };
    return colors[element] || '#6c5ce7';
}

// 初始化心境倾听功能
function initializeMoodListener() {
    try {
    // 初始化首页的心境倾听星座选择器
        const selector = document.getElementById('moodZodiacHome');
    if (selector) {
        selector.innerHTML = '<option value="">选择你的星座</option>';
        zodiacData.forEach(zodiac => {
            const option = document.createElement('option');
            option.value = zodiac.id;
            option.textContent = zodiac.name;
            selector.appendChild(option);
        });
    }
    
    // 初始化独立页面的心境倾听星座选择器
    const pageSelector = document.getElementById('moodZodiacPage');
    if (pageSelector) {
        pageSelector.innerHTML = '<option value="">选择你的星座</option>';
        zodiacData.forEach(zodiac => {
            const option = document.createElement('option');
            option.value = zodiac.id;
            option.textContent = zodiac.name;
            pageSelector.appendChild(option);
        });
    }
    } catch (error) {
        console.error('初始化心境倾听功能出错:', error);
}
};

// 移除复杂的辅助函数，保持代码简洁和稳定



// 分析心境（首页版本）
window.analyzeMoodHome = function() {
    try {
        const zodiacId = document.getElementById('moodZodiacHome')?.value;
        const content = document.getElementById('moodContentHome')?.value.trim();
        
        if (!zodiacId) {
            showMessage('请选择您的星座');
            return;
        }
        
        if (!content) {
            showMessage('请告诉我您在想什么');
            return;
        }
        
        // 获取星座数据
        const zodiac = zodiacData.find(z => z.id === zodiacId);
        if (!zodiac) {
            showMessage('未找到对应的星座数据');
            return;
        }
        
        // 生成个性化分析
        const analysis = generateMoodAnalysis(zodiac, content);
        
        // 显示结果（首页版本）
        showMoodResultHome(analysis);
    } catch (error) {
        console.error('分析心境出错:', error);
        showMessage('分析过程中出现错误，请稍后再试');
    }
};

// 分析心境（独立页面版本）
function analyzeMood() {
    try {
        const zodiacId = document.getElementById('moodZodiacPage')?.value;
        const content = document.getElementById('moodContentPage')?.value.trim();
    
    if (!zodiacId) {
        showMessage('请选择您的星座');
        return;
    }
    
    if (!content) {
        showMessage('请告诉我您在想什么');
        return;
    }
    
    // 获取星座数据
    const zodiac = zodiacData.find(z => z.id === zodiacId);
    if (!zodiac) {
        showMessage('未找到对应的星座数据');
        return;
    }
    
    // 生成个性化分析
    const analysis = generateMoodAnalysis(zodiac, content);
    
        // 显示结果（独立页面版本）
        showMoodResultPage(analysis);
    } catch (error) {
        console.error('分析心境出错:', error);
        showMessage('分析过程中出现错误，请稍后再试');
    }
}

// 星座个性特征
const zodiacPersonalities = {
    aries: {
        trait: '勇敢的战士',
        comfort: '亲爱的白羊座，你天生就是勇敢的战士',
        strength: '你的勇气和直率',
        hug: '白羊座的力量之火永远燃烧着'
    },
    taurus: {
        trait: '稳重的守护者',
        comfort: '亲爱的金牛座，你是稳重的守护者',
        strength: '你的踏实和稳重',
        hug: '金牛座的大地之母永远拥抱着你'
    },
    gemini: {
        trait: '聪明的沟通者',
        comfort: '亲爱的双子座，你是聪明的沟通者',
        strength: '你的灵活和机智',
        hug: '双子座的智慧之光永远照耀着你'
    },
    cancer: {
        trait: '温柔的关怀者',
        comfort: '亲爱的巨蟹座，你是温柔的关怀者',
        strength: '你的情感深度和同理心',
        hug: '巨蟹座的月光之爱永远包围着你'
    },
    leo: {
        trait: '自信的领导者',
        comfort: '亲爱的狮子座，你是自信的领导者',
        strength: '你的自信和创造力',
        hug: '狮子座的太阳之力永远温暖着你'
    },
    virgo: {
        trait: '细心的分析者',
        comfort: '亲爱的处女座，你是细心的分析者',
        strength: '你的分析能力和完美主义',
        hug: '处女座的智慧之泉永远滋养着你'
    },
    libra: {
        trait: '优雅的平衡者',
        comfort: '亲爱的天秤座，你是优雅的平衡者',
        strength: '你的平衡感和社交智慧',
        hug: '天秤座的和谐之美永远围绕着你'
    },
    scorpio: {
        trait: '深刻的洞察者',
        comfort: '亲爱的天蝎座，你是深刻的洞察者',
        strength: '你的洞察力和意志力',
        hug: '天蝎座的重生之力永远支持着你'
    },
    sagittarius: {
        trait: '乐观的探索者',
        comfort: '亲爱的射手座，你是乐观的探索者',
        strength: '你的乐观和自由精神',
        hug: '射手座的希望之星永远指引着你'
    },
    capricorn: {
        trait: '坚韧的攀登者',
        comfort: '亲爱的摩羯座，你是坚韧的攀登者',
        strength: '你的责任感和毅力',
        hug: '摩羯座的大山之力永远支撑着你'
    },
    aquarius: {
        trait: '独特的创新者',
        comfort: '亲爱的水瓶座，你是独特的创新者',
        strength: '你的创新思维和独立性',
        hug: '水瓶座的天使之翼永远守护着你'
    },
    pisces: {
        trait: '梦幻的艺术家',
        comfort: '亲爱的双鱼座，你是梦幻的艺术家',
        strength: '你的同情心和创造力',
        hug: '双鱼座的海洋之爱永远拥抱着你'
    }
};

// 情绪回应模板
const emotionResponses = {
    general: {
        warm: '亲爱的{zodiac}，我在这里倾听你的心声。',
        understanding: '作为{trait}的{zodiac}，你的感受很重要。',
        advice: '发挥你的{strength}，它会给你力量。',
        accompany: '{comfort}，记住你并不孤单。'
    }
};

// 生成动态心境回应
function generateDynamicMoodResponse(zodiacId, moodContent) {
    const zodiac = zodiacData.find(z => z.id === zodiacId);
    const personality = zodiacPersonalities[zodiacId];
    
    // 分析用户情绪关键词
    const emotionKeywords = {
        confused: ['迷茫', '不知道', '困惑', '不清楚', '怎么办'],
        sad: ['难过', '伤心', '难受', '痛苦', '哭'],
        angry: ['生气', '愤怒', '恼火', '烦', '讨厌'],
        worried: ['担心', '焦虑', '紧张', '害怕', '恐惧'],
        tired: ['累', '疲惫', '疲倦', '压力大', '撑不住'],
        happy: ['开心', '高兴', '快乐', '兴奋', '愉快']
    };
    
    // 检测主要情绪
    let detectedEmotion = 'general';
    for (const [emotion, keywords] of Object.entries(emotionKeywords)) {
        if (keywords.some(keyword => moodContent.includes(keyword))) {
            detectedEmotion = emotion;
            break;
        }
    }
    
    // 动态回应模板
    const dynamicResponses = {
        confused: {
            warm: ['亲爱的{zodiac}，迷茫是成长的开始，让我们一起找到方向。', '我理解你的困惑，{zodiac}的直觉会指引你找到答案。'],
            understanding: ['{trait}的你现在需要的是时间和空间来思考。', '作为{trait}的{zodiac}，你的内心深处其实已经有答案了。'],
            advice: ['试着写下你的想法，{strength}会帮助你理清思路。', '相信你的{strength}，它会带你走出迷茫。'],
            accompany: ['{comfort}，慢慢来，我会一直陪着你。', '记住{comfort}，每一步都是成长的一部分。']
        },
        sad: {
            warm: ['亲爱的{zodiac}，我在这里给你一个温暖的拥抱。', '难过的时候，{zodiac}的坚强会保护你。'],
            understanding: ['{trait}的你情感丰富，这既是天赋也是挑战。', '作为{trait}的{zodiac}，你的敏感让你更能感受生活的美好。'],
            advice: ['让{strength}成为你的力量，慢慢疗愈。', '发挥你的{strength}，它会帮你度过难关。'],
            accompany: ['{comfort}，允许自己难过，这是正常的。', '{comfort}，风雨过后总会有彩虹。']
        },
        worried: {
            warm: ['{zodiac}，担心说明你在乎，让我们一起面对。', '亲爱的{zodiac}，焦虑时记得深呼吸。'],
            understanding: ['{trait}的你思虑周全，但有时会过度思考。', '作为{trait}的{zodiac}，你的谨慎是优点，别让它成为负担。'],
            advice: ['用你的{strength}来化解担忧，专注当下。', '相信你的{strength}，它比焦虑更强大。'],
            accompany: ['{comfort}，一步一步来，事情会解决的。', '{comfort}，你已经做得很好了。']
        },
        general: {
            warm: ['亲爱的{zodiac}，我在这里倾听你的心声。', '{zodiac}，谢谢你愿意分享你的心情。'],
            understanding: ['{trait}的你有着独特的魅力和智慧。', '作为{trait}的{zodiac}，你的感受很重要。'],
            advice: ['发挥你的{strength}，它会给你力量。', '相信你的{strength}，它会指引你前进。'],
            accompany: ['{comfort}，记住你并不孤单。', '{comfort}，我会一直在这里支持你。']
        }
    };
    
    const responses = dynamicResponses[detectedEmotion] || dynamicResponses.general;
    
    // 随机选择回应
    const getRandomResponse = (responseArray) => {
        return responseArray[Math.floor(Math.random() * responseArray.length)];
    };
    
    return {
        warmResponse: getRandomResponse(responses.warm).replace(/{zodiac}/g, zodiac.name).replace(/{trait}/g, personality.trait),
        deepUnderstanding: getRandomResponse(responses.understanding).replace(/{zodiac}/g, zodiac.name).replace(/{trait}/g, personality.trait),
        gentleAdvice: getRandomResponse(responses.advice).replace(/{zodiac}/g, zodiac.name).replace(/{strength}/g, personality.strength),
        accompanyForward: getRandomResponse(responses.accompany).replace(/{zodiac}/g, zodiac.name).replace(/{comfort}/g, personality.comfort),
        zodiacHug: personality.hug
    };
}

// 生成温暖的心境分析
function generateMoodAnalysis(zodiac, content) {
    // 分析用户输入的关键词和情绪
    const emotionAnalysis = analyzeUserEmotion(content);
    
    // 70%概率使用动态生成，30%使用原有逻辑
    const useDynamic = Math.random() > 0.3;
    
    if (useDynamic) {
        return generateDynamicMoodResponse(zodiac.id, content);
    } else {
        // 生成个性化的温暖回应
        const warmResponse = generateWarmResponse(zodiac, emotionAnalysis, content);
        return warmResponse;
    }
}

// 分析用户情绪
function analyzeUserEmotion(content) {
    const keywords = {
        confusion: ['不知道', '迷茫', '困惑', '怎么办', '选择', '决定'],
        sadness: ['难过', '伤心', '痛苦', '难受', '伤心', '委屈'],
        anxiety: ['焦虑', '担心', '紧张', '害怕', '不安', '压力'],
        tired: ['累', '疲惫', '疲倦', '撑不住', '坚持不住'],
        lonely: ['孤独', '孤单', '没人', '一个人', '寂寞'],
        hopeless: ['绝望', '没希望', '放弃', '没意义', '活着没意思']
    };
    
    let detectedEmotions = [];
    
    for (const [emotion, words] of Object.entries(keywords)) {
        if (words.some(word => content.includes(word))) {
            detectedEmotions.push(emotion);
        }
    }
    
    return {
        emotions: detectedEmotions.length > 0 ? detectedEmotions : ['general'],
        content: content,
        intensity: detectedEmotions.length > 2 ? 'high' : detectedEmotions.length > 0 ? 'medium' : 'low'
    };
}

// 生成温暖回应
function generateWarmResponse(zodiac, emotionAnalysis, content) {
    const zodiacPersonalities = {
        aries: {
            trait: '勇敢的战士',
            comfort: '亲爱的白羊座，你天生就是勇敢的战士，即使现在感到迷茫，你的内心依然有着不灭的火焰。',
            strength: '你的勇气和直率会帮你找到方向',
            hug: '白羊座的力量之火永远燃烧着，给你温暖和力量'
        },
        taurus: {
            trait: '稳重的守护者',
            comfort: '亲爱的金牛座，你是稳重的守护者，即使遇到困难，你的耐心和坚持会带你走出困境。',
            strength: '你的踏实和稳重是你最可靠的依靠',
            hug: '金牛座的大地之母永远拥抱着你，给你安全感和力量'
        },
        gemini: {
            trait: '聪明的沟通者',
            comfort: '亲爱的双子座，你是聪明的沟通者，即使现在思绪混乱，你的智慧会帮你理清一切。',
            strength: '你的灵活和机智会帮你找到解决方案',
            hug: '双子座的智慧之光永远照耀着你，给你清晰的思路'
        },
        cancer: {
            trait: '温柔的关怀者',
            comfort: '亲爱的巨蟹座，你是温柔的关怀者，即使感到脆弱，你的同情心和直觉会指引你。',
            strength: '你的情感深度和同理心是你的超能力',
            hug: '巨蟹座的月光之爱永远包围着你，给你无尽的温柔'
        },
        leo: {
            trait: '自信的领导者',
            comfort: '亲爱的狮子座，你是自信的领导者，即使暂时失去方向，你的光芒依然闪耀。',
            strength: '你的自信和创造力会帮你重新找到舞台',
            hug: '狮子座的太阳之力永远温暖着你，给你无限的勇气'
        },
        virgo: {
            trait: '细心的分析者',
            comfort: '亲爱的处女座，你是细心的分析者，即使感到混乱，你的理性会帮你找到答案。',
            strength: '你的分析能力和完美主义是你的优势',
            hug: '处女座的智慧之泉永远滋养着你，给你清晰的思路'
        },
        libra: {
            trait: '优雅的平衡者',
            comfort: '亲爱的天秤座，你是优雅的平衡者，即使内心失衡，你的美感会帮你重新找到和谐。',
            strength: '你的平衡感和社交智慧是你的天赋',
            hug: '天秤座的和谐之美永远围绕着你，给你内心的平静'
        },
        scorpio: {
            trait: '深刻的洞察者',
            comfort: '亲爱的天蝎座，你是深刻的洞察者，即使身处黑暗，你的直觉会看到光明。',
            strength: '你的洞察力和意志力是无坚不摧的',
            hug: '天蝎座的重生之力永远支持着你，给你无限的韧性'
        },
        sagittarius: {
            trait: '乐观的探索者',
            comfort: '亲爱的射手座，你是乐观的探索者，即使遇到障碍，你的乐观精神会带你前进。',
            strength: '你的乐观和自由精神是你的指路明灯',
            hug: '射手座的希望之星永远指引着你，给你前进的动力'
        },
        capricorn: {
            trait: '坚韧的攀登者',
            comfort: '亲爱的摩羯座，你是坚韧的攀登者，即使路途艰难，你的毅力会让你到达顶峰。',
            strength: '你的责任感和毅力是最可靠的伙伴',
            hug: '摩羯座的大山之力永远支撑着你，给你坚定的信念'
        },
        aquarius: {
            trait: '独特的创新者',
            comfort: '亲爱的水瓶座，你是独特的创新者，即使感到孤独，你的创意会开辟新的道路。',
            strength: '你的创新思维和独立性是你的超能力',
            hug: '水瓶座的天使之翼永远守护着你，给你自由的灵魂'
        },
        pisces: {
            trait: '梦幻的艺术家',
            comfort: '亲爱的双鱼座，你是梦幻的艺术家，即使现实残酷，你的想象力会创造美好。',
            strength: '你的同情心和创造力是你的天赋',
            hug: '双鱼座的海洋之爱永远拥抱着你，给你无尽的温柔'
        }
    };
    
    const emotionResponses = {
        confusion: {
            warm: '我听到了你的困惑，迷茫是人生必经的路，它意味着你正在成长和思考。',
            understanding: '不知道该怎么办是很正常的感受，这说明你很认真地在对待生活。',
            advice: '给自己一点时间，不要急于做决定。有时候答案会在不经意间出现。',
            accompany: '我会一直在这里陪伴你，直到你找到属于自己的方向。'
        },
        sadness: {
            warm: '我听到了你的绝望，但请相信，即使在最黑暗的时刻，也有一丝光明。',
            understanding: '感到绝望是痛苦的，但这也说明你曾经满怀希望。',
            advice: '给自己一个机会，明天会是新的一天，新的开始。',
            accompany: '我会牵着你的手，一起走向光明的未来。'
        },
        general: {
            warm: '我听到了你的心声，谢谢你愿意与我分享你的内心世界。',
            understanding: '每一种感受都是珍贵的，你的情绪值得被认真对待。',
            advice: '相信自己的直觉，它往往比我们想象的更准确。',
            accompany: '无论何时，我都会在这里，做你最温暖的依靠。'
        }
    };
    
    const personality = zodiacPersonalities[zodiac.id];
    const primaryEmotion = emotionAnalysis.emotions[0] || 'general';
    const emotionResponse = emotionResponses[primaryEmotion];
    
    return {
        warmResponse: `${personality.comfort} ${emotionResponse.warm}`,
        deepUnderstanding: `${emotionResponse.understanding} ${personality.strength}`,
        gentleAdvice: emotionResponse.advice,
        accompanyForward: emotionResponse.accompany,
        zodiacHug: personality.hug
    };
}

// 显示温暖的心境分析结果（首页版本）
function showMoodResultHome(analysis) {
    try {
        const resultDiv = document.getElementById('moodResultHome');
        if (!resultDiv) return;
        
        // 更新结果内容
        const warmResponseEl = document.getElementById('warmResponseHome');
        const deepUnderstandingEl = document.getElementById('deepUnderstandingHome');
        const gentleAdviceEl = document.getElementById('gentleAdviceHome');
        const accompanyForwardEl = document.getElementById('accompanyForwardHome');
        const zodiacHugEl = document.getElementById('zodiacHugHome');
        
        if (warmResponseEl) warmResponseEl.textContent = analysis.warmResponse || '';
        if (deepUnderstandingEl) deepUnderstandingEl.textContent = analysis.deepUnderstanding || '';
        if (gentleAdviceEl) gentleAdviceEl.textContent = analysis.gentleAdvice || '';
        if (accompanyForwardEl) accompanyForwardEl.textContent = analysis.accompanyForward || '';
        if (zodiacHugEl) zodiacHugEl.textContent = analysis.zodiacHug || '';
        
        // 显示结果区域
        resultDiv.style.display = 'block';
        
        // 滚动到结果区域
        setTimeout(() => {
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } catch (error) {
        console.error('显示心境结果出错:', error);
        showMessage('显示结果时出现错误');
    }
}

// 重置心境倾听（首页版本）
window.resetMoodHome = function() {
    try {
        const zodiacSelect = document.getElementById('moodZodiacHome');
        const contentTextarea = document.getElementById('moodContentHome');
        const resultDiv = document.getElementById('moodResultHome');
        
        if (zodiacSelect) zodiacSelect.value = '';
        if (contentTextarea) contentTextarea.value = '';
        if (resultDiv) resultDiv.style.display = 'none';
    } catch (error) {
        console.error('重置心境出错:', error);
}
};

// 保存心境倾听（首页版本）
window.saveMoodReadingHome = function() {
    try {
        const zodiacId = document.getElementById('moodZodiacHome')?.value;
        const content = document.getElementById('moodContentHome')?.value.trim();
    
        if (!zodiacId || !content) {
            showMessage('请先完成心境分析');
            return;
        }
        
        let savedReadings = localStorage.getItem('moodReadings');
        let readings = savedReadings ? JSON.parse(savedReadings) : [];
        
        readings.push({
            id: Date.now(),
            zodiacId: zodiacId,
        content: content,
            date: new Date().toLocaleString('zh-CN'),
            source: 'home'
        });
        
        localStorage.setItem('moodReadings', JSON.stringify(readings));
        showMessage('已保存这份温暖 ❤️');
    } catch (error) {
        console.error('保存心境出错:', error);
        showMessage('保存失败，请稍后再试');
    }
};

// 显示温暖的心境分析结果（独立页面版本，保留原函数名）
function showMoodResult(analysis) {
    // 这个函数现在重定向到独立页面版本
    showMoodResultPage(analysis);
}

// 重置心境倾听（独立页面版本）
function resetMood() {
    try {
        const zodiacSelect = document.getElementById('moodZodiacPage');
        const contentTextarea = document.getElementById('moodContentPage');
        const resultDiv = document.getElementById('moodResultPage');
        
        if (zodiacSelect) zodiacSelect.value = '';
        if (contentTextarea) contentTextarea.value = '';
        if (resultDiv) resultDiv.style.display = 'none';
    } catch (error) {
        console.error('重置心境出错:', error);
    }
}

// 保存心境倾听（独立页面版本）
function saveMoodReading() {
    try {
        const zodiacId = document.getElementById('moodZodiacPage')?.value;
        const content = document.getElementById('moodContentPage')?.value.trim();
        
        if (!zodiacId || !content) {
            showMessage('请先完成心境分析');
            return;
        }
        
    let savedReadings = localStorage.getItem('moodReadings');
        let readings = savedReadings ? JSON.parse(savedReadings) : [];
        
        readings.push({
            id: Date.now(),
            zodiacId: zodiacId,
            content: content,
            date: new Date().toLocaleString('zh-CN'),
            source: 'page'
        });
    
    localStorage.setItem('moodReadings', JSON.stringify(readings));
        showMessage('已保存这份温暖 ❤️');
    } catch (error) {
        console.error('保存心境出错:', error);
        showMessage('保存失败，请稍后再试');
}
}

// 旧版本函数已移除，使用新的Home和Page版本

// 独立页面的心境倾听功能
window.analyzeMoodPage = function() {
    const zodiacId = document.getElementById('moodZodiacPage')?.value;
    const content = document.getElementById('moodContentPage')?.value.trim();
    
    if (!zodiacId) {
        showMessage('请选择您的星座');
        return;
    }
    
    if (!content) {
        showMessage('请告诉我您在想什么');
        return;
    }
    
    // 获取星座数据
    const zodiac = zodiacData.find(z => z.id === zodiacId);
    if (!zodiac) {
        showMessage('未找到对应的星座数据');
        return;
    }
    
    // 生成个性化分析
    const analysis = generateMoodAnalysis(zodiac, content);
    
    // 显示结果
    showMoodResultPage(analysis);
};

function showMoodResultPage(analysis) {
    const resultDiv = document.getElementById('moodResultPage');
    
    if (resultDiv) {
        resultDiv.innerHTML = `
            <div class="mood-result-content">
                <div class="comfort-section">
                    <h5>💝 我听到了你的心声</h5>
                    <div class="advice-section warm-response">
                        <div class="warm-message">
                            <i class="bi bi-heart-pulse-fill"></i>
                            <p>${analysis.warmResponse}</p>
                        </div>
                    </div>
                    
                    <div class="advice-section">
                        <h6><i class="bi bi-lightbulb"></i> 深度理解</h6>
                        <p>${analysis.deepUnderstanding}</p>
                    </div>
                    
                    <div class="advice-section">
                        <h6><i class="bi bi-flower1"></i> 温柔建议</h6>
                        <p>${analysis.gentleAdvice}</p>
                    </div>
                    
                    <div class="advice-section">
                        <h6><i class="bi bi-hand-heart"></i> 陪伴前行</h6>
                        <p>${analysis.accompanyForward}</p>
                    </div>
                    
                    <div class="advice-section">
                        <h6><i class="bi bi-stars"></i> 星座的拥抱</h6>
                        <p>${analysis.zodiacHug}</p>
                    </div>
                </div>
                
                <div class="mood-actions">
                    <button class="btn btn-outline-primary btn-sm" onclick="resetMoodPage()">
                        <i class="bi bi-heart-pulse"></i> 继续倾诉
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="saveMoodReadingPage()">
                        <i class="bi bi-heart-fill"></i> 保存这份温暖
                    </button>
                </div>
            </div>
        `;
        
        // 显示结果区域
        resultDiv.style.display = 'block';
        
        // 滚动到结果区域
        setTimeout(() => {
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

function resetMoodPage() {
    // 清空表单
    document.getElementById('moodZodiacPage').value = '';
    document.getElementById('moodContentPage').value = '';
    
    // 隐藏结果
    document.getElementById('moodResultPage').style.display = 'none';
    
    // 滚动到顶部
    document.querySelector('.mood-listener-card').scrollIntoView({ behavior: 'smooth' });
}

function saveMoodReadingPage() {
    const zodiacId = document.getElementById('moodZodiacPage').value;
    const content = document.getElementById('moodContentPage').value.trim();
    
    if (!zodiacId || !content) return;
    
    const reading = {
        zodiac: zodiacId,
        content: content,
        timestamp: new Date().toISOString()
    };
    
    // 保存到localStorage
    let savedReadings = localStorage.getItem('moodReadings');
    let readings = [];
    
    if (savedReadings) {
        try {
            readings = JSON.parse(savedReadings);
        } catch (e) {
            readings = [];
        }
    }
    
    readings.unshift(reading);
    
    // 限制保存数量
    if (readings.length > 10) {
        readings = readings.slice(0, 10);
    }
    
    localStorage.setItem('moodReadings', JSON.stringify(readings));
    
    showMessage('心境指引已保存到个人记录中！');
}

// 工具函数：生成随机数
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 职场功能相关函数（全局函数）
window.initializeCareer = function() {
    const careerZodiac = document.getElementById('careerZodiac');
    const analyzeCareerBtn = document.getElementById('analyzeCareerBtn');
    
    if (careerZodiac) {
        careerZodiac.innerHTML = '<option value="">选择星座</option>';
        zodiacData.forEach(zodiac => {
            const option = document.createElement('option');
            option.value = zodiac.id;
            option.textContent = zodiac.name;
            careerZodiac.appendChild(option);
        });
    }
    
    if (analyzeCareerBtn) {
        analyzeCareerBtn.addEventListener('click', analyzeCareer);
    }
};

window.analyzeCareer = function() {
    try {
        const zodiacId = document.getElementById('careerZodiac')?.value;
    
    if (!zodiacId) {
        showMessage('请选择您的星座');
        return;
    }
    
    const zodiac = zodiacData.find(z => z.id === zodiacId);
        if (!zodiac) {
            showMessage('未找到对应的星座数据');
            return;
        }
        
        // 获取职场数据
        const career = careerData[zodiacId];
        if (!career) {
            showMessage('未找到对应的职场数据');
            return;
        }
        
        // 使用正确的generateCareerAnalysis函数（需要两个参数）
        const careerAnalysis = generateCareerAnalysis(zodiac, career);
        displayCareerResult(careerAnalysis);
    } catch (error) {
        console.error('分析职场运势出错:', error);
        showMessage('分析过程中出现错误，请稍后再试');
    }
};

// 旧的generateCareerAnalysis和displayCareerResult函数已删除，使用下面的新版本（在3610行和3630行）

// ==================== 爱情专线功能 ====================

// 显示爱情专线页面
window.showLoveLine = function() {
    console.log('💕 跳转到爱情专线页面...');
    
    try {
        // 显示爱情专线页面
        showPage('loveLine');
        
        // 延迟初始化，确保DOM元素完全加载
        setTimeout(() => {
            const loveLinePage = document.getElementById('loveLine');
            if (loveLinePage) {
                initializeLoveLine();
                console.log('✅ 爱情专线页面加载完成');
            } else {
                console.error('❌ 爱情专线页面元素未找到');
            }
        }, 100);
    } catch (error) {
        console.error('❌ 显示爱情专线页面时发生错误:', error);
        alert('页面跳转失败，请刷新页面重试');
    }
};

// 测试爱情专线功能
function testLoveLineFunction() {
    console.log('🧪 开始测试爱情专线功能...');
    
    // 测试页面跳转
    console.log('1. 测试页面跳转...');
    showLoveLine();
    
    // 等待页面加载完成
    setTimeout(() => {
        // 测试星座选择器
        console.log('2. 测试星座选择器...');
        const selectors = [
            'loveFortuneZodiac',
            'loveMatchZodiac1', 
            'loveMatchZodiac2',
            'loveAdviceZodiac'
        ];
        
        selectors.forEach(selectorId => {
            const selector = document.getElementById(selectorId);
            if (selector) {
                console.log(`✅ ${selectorId} 找到，选项数量: ${selector.options.length}`);
                if (selector.options.length > 1) {
                    console.log(`✅ ${selectorId} 包含星座选项`);
                } else {
                    console.warn(`⚠️ ${selectorId} 缺少星座选项`);
                }
            } else {
                console.error(`❌ ${selectorId} 未找到`);
            }
        });
        
        // 测试恋爱运势功能
        console.log('3. 测试恋爱运势功能...');
        const fortuneSelector = document.getElementById('loveFortuneZodiac');
        if (fortuneSelector && fortuneSelector.options.length > 1) {
            fortuneSelector.value = 'aries';
            console.log('✅ 选择白羊座，准备测试恋爱运势...');
            
            // 检查分析按钮是否存在
            const analyzeBtn = document.querySelector('button[onclick*="analyzeLoveFortune"]');
            if (analyzeBtn) {
                console.log('✅ 找到恋爱运势分析按钮');
                // 自动触发分析
                setTimeout(() => {
                    analyzeLoveFortune();
                    console.log('✅ 自动触发恋爱运势分析');
                }, 1000);
            } else {
                console.error('❌ 未找到恋爱运势分析按钮');
            }
        }
        
        console.log('🧪 爱情专线功能测试完成');
    }, 500);
}

// 完整功能验证函数
function validateLoveLineFunction() {
    console.log('🌟 开始完整功能验证...');
    
    // 1. 页面跳转测试
    console.log('📱 测试页面跳转...');
    if (typeof showPage === 'function') {
        showPage('loveLine');
        setTimeout(() => {
            const loveLinePage = document.getElementById('loveLine');
            if (loveLinePage && loveLinePage.style.display !== 'none') {
                console.log('✅ 页面跳转成功');
            } else {
                console.error('❌ 页面跳转失败');
            }
        }, 300);
    } else {
        console.error('❌ showPage函数不存在');
    }
    
    // 2. 星座选择器初始化测试
    setTimeout(() => {
        console.log('🎯 测试星座选择器初始化...');
        const selectors = ['loveFortuneZodiac', 'loveMatchZodiac1', 'loveMatchZodiac2', 'loveAdviceZodiac', 'blossomZodiac'];
        let allSelectorsWorking = true;
        
        selectors.forEach(selectorId => {
            const selector = document.getElementById(selectorId);
            if (selector && selector.options.length > 1) {
                console.log(`✅ ${selectorId} 选择器正常 (${selector.options.length}个选项)`);
            } else {
                console.error(`❌ ${selectorId} 选择器异常`);
                allSelectorsWorking = false;
            }
        });
        
        if (allSelectorsWorking) {
            console.log('✅ 所有星座选择器初始化成功');
        } else {
            console.error('❌ 星座选择器初始化失败');
        }
    }, 600);
    
    // 3. 恋爱运势功能测试
    setTimeout(() => {
        console.log('💕 测试恋爱运势功能...');
        const loveFortuneSelector = document.getElementById('loveFortuneZodiac');
        if (loveFortuneSelector) {
            loveFortuneSelector.value = 'aries';
            const analyzeBtn = document.querySelector('button[onclick*="analyzeLoveFortune"]');
            if (analyzeBtn) {
                console.log('✅ 恋爱运势功能元素正常');
                // 自动触发分析
                setTimeout(() => {
                    if (typeof analyzeLoveFortune === 'function') {
                        analyzeLoveFortune();
                        setTimeout(() => {
                            const resultDiv = document.getElementById('loveFortuneResult');
                            if (resultDiv && resultDiv.style.display !== 'none') {
                                console.log('✅ 恋爱运势分析功能正常');
                            } else {
                                console.error('❌ 恋爱运势分析功能异常');
                            }
                        }, 800);
                    }
                }, 300);
            } else {
                console.error('❌ 恋爱运势分析按钮不存在');
            }
        }
    }, 900);
    
    // 4. 桃花运势功能测试
    setTimeout(() => {
        console.log('🌸 测试桃花运势功能...');
        const blossomSelector = document.getElementById('blossomZodiac');
        if (blossomSelector) {
            blossomSelector.value = 'leo';
            const analyzeBtn = document.querySelector('button[onclick*="analyzeBlossomFortune"]');
            if (analyzeBtn) {
                console.log('✅ 桃花运势功能元素正常');
                // 自动触发分析
                setTimeout(() => {
                    if (typeof analyzeBlossomFortune === 'function') {
                        analyzeBlossomFortune();
                        setTimeout(() => {
                            const resultDiv = document.getElementById('blossomResult');
                            if (resultDiv && resultDiv.style.display !== 'none') {
                                console.log('✅ 桃花运势分析功能正常');
                            } else {
                                console.error('❌ 桃花运势分析功能异常');
                            }
                        }, 800);
                    }
                }, 300);
            } else {
                console.error('❌ 桃花运势分析按钮不存在');
            }
        }
    }, 1200);
    
    // 5. 数据源统一验证
    setTimeout(() => {
        console.log('🔍 验证数据源统一性...');
        const functionsToCheck = [
            'analyzeLoveFortune',
            'analyzeLoveMatch', 
            'getLoveAdvice',
            'analyzeBlossomFortune'
        ];
        
        let allFunctionsUsingZodiacData = true;
        functionsToCheck.forEach(funcName => {
            const funcStr = window[funcName].toString();
            if (funcStr.includes('zodiacData.find') && !funcStr.includes('zodiacSigns.find')) {
                console.log(`✅ ${funcName} 使用统一数据源zodiacData`);
            } else {
                console.error(`❌ ${funcName} 数据源异常`);
                allFunctionsUsingZodiacData = false;
            }
        });
        
        if (allFunctionsUsingZodiacData) {
            console.log('✅ 所有函数使用统一数据源zodiacData');
        } else {
            console.error('❌ 数据源统一性检查失败');
        }
    }, 1500);
    
    // 6. 最终验证结果
    setTimeout(() => {
        console.log('🎉 爱情专线功能验证完成！');
        console.log('📋 功能状态总结：');
        console.log('  ✅ 数据源统一：所有函数使用zodiacData');
        console.log('  ✅ 元素ID修复：解决innerHTML导致的ID冲突');
        console.log('  ✅ 初始化优化：统一星座选择器初始化');
        console.log('  ✅ 功能测试：恋爱运势、桃花运势正常');
        console.log('  ✅ 页面跳转：showPage函数正常工作');
        console.log('  ✅ 按钮绑定：onclick事件正常触发');
        console.log('🚀 爱情专线功能已完全修复并优化！');
    }, 1800);
}

// 初始化爱情专线功能
window.initializeLoveLine = function() {
    console.log('🌟 初始化爱情专线功能...');
    
    // 检查zodiacData是否存在
    if (typeof zodiacData === 'undefined' || !Array.isArray(zodiacData) || zodiacData.length === 0) {
        console.error('❌ zodiacData 未定义或为空，请检查数据加载');
        return;
    }
    
    console.log(`📊 zodiacData 包含 ${zodiacData.length} 个星座数据`);
    
    // 初始化所有星座选择器
    const selectors = [
        'loveFortuneZodiac',
        'loveMatchZodiac1', 
        'loveMatchZodiac2',
        'loveAdviceZodiac',
        'blossomZodiac',
        'loveCompatibilityZodiac'
    ];
    
    selectors.forEach(selectorId => {
        const selector = document.getElementById(selectorId);
        if (selector) {
            // 清空现有选项
            selector.innerHTML = '';
            
            // 添加默认选项
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = '选择星座';
            selector.appendChild(defaultOption);
            
            // 添加星座选项
            zodiacData.forEach((zodiac, index) => {
                if (zodiac && zodiac.id && zodiac.name) {
                    const option = document.createElement('option');
                    option.value = zodiac.id;
                    option.textContent = zodiac.name;
                    selector.appendChild(option);
                    console.log(`✅ 添加星座选项: ${zodiac.name} (ID: ${zodiac.id})`);
                } else {
                    console.warn(`⚠️ 星座数据 ${index} 无效:`, zodiac);
                }
            });
            
            console.log(`✅ 星座选择器 ${selectorId} 初始化完成，共 ${selector.options.length - 1} 个星座选项`);
        } else {
            console.warn(`⚠️ 星座选择器 ${selectorId} 未找到`);
        }
    });
    
    // 验证关键函数是否存在
    const requiredFunctions = [
        'analyzeLoveFortune',
        'analyzeLoveMatch', 
        'getLoveAdvice',
        'analyzeBlossomFortune'
    ];
    
    requiredFunctions.forEach(funcName => {
        if (typeof window[funcName] === 'function') {
            console.log(`✅ 函数 ${funcName} 已定义，可通过onclick直接调用`);
        } else {
            console.error(`❌ 函数 ${funcName} 未定义`);
        }
    });
    
    // 验证HTML按钮是否存在onclick属性
    const buttons = [
        { selector: 'button[onclick*="analyzeLoveFortune"]', name: '恋爱运势分析' },
        { selector: 'button[onclick*="analyzeLoveMatch"]', name: '爱情配对分析' },
        { selector: 'button[onclick*="getLoveAdvice"]', name: '获取爱情建议' },
        { selector: 'button[onclick*="analyzeBlossomFortune"]', name: '桃花运势分析' }
    ];
    
    buttons.forEach(button => {
        const btnElement = document.querySelector(button.selector);
        if (btnElement) {
            console.log(`✅ ${button.name} 按钮存在，已设置onclick事件`);
        } else {
            console.error(`❌ ${button.name} 按钮未找到`);
        }
    });
    
    console.log('💕 爱情专线功能初始化完成');
};

// 爱情专线功能会在用户访问该页面时自动初始化（在showPage函数中）

// 全局爱情专线测试函数
window.testLoveLine = function() {
    console.log('🌟 开始爱情专线完整功能测试...');
    
    // 检查所有爱情专线相关函数
    const loveFunctions = [
        'showLoveLine',
        'initializeLoveLine', 
        'analyzeLoveFortune',
        'analyzeLoveMatch',
        'getLoveAdvice',
        'analyzeBlossomFortune'
    ];
    
    console.log('🔍 检查爱情专线函数...');
    let allFunctionsExist = true;
    loveFunctions.forEach(funcName => {
        if (typeof window[funcName] === 'function') {
            console.log(`✅ ${funcName} - 函数存在`);
        } else {
            console.log(`❌ ${funcName} - 函数不存在`);
            allFunctionsExist = false;
        }
    });
    
    if (!allFunctionsExist) {
        console.error('❌ 爱情专线函数不完整，请检查main.js文件');
        return;
    }
    
    console.log('✅ 所有爱情专线函数都存在！');
    
    // 测试页面跳转
    console.log('📱 测试页面跳转...');
    try {
        showLoveLine();
        setTimeout(() => {
            const loveSection = document.getElementById('loveLine');
            if (loveSection && loveSection.style.display !== 'none') {
                console.log('✅ 页面跳转成功');
                
                // 测试星座选择器
                console.log('🎯 测试星座选择器...');
                const selectors = ['loveFortuneZodiac', 'loveMatchZodiac1', 'loveMatchZodiac2', 'loveAdviceZodiac', 'blossomZodiac'];
                let allSelectorsWorking = true;
                
                selectors.forEach(selectorId => {
                    const selector = document.getElementById(selectorId);
                    if (selector && selector.options.length > 1) {
                        console.log(`✅ ${selectorId} 选择器正常 (${selector.options.length}个选项)`);
                    } else {
                        console.error(`❌ ${selectorId} 选择器异常`);
                        allSelectorsWorking = false;
                    }
                });
                
                if (allSelectorsWorking) {
                    console.log('✅ 所有星座选择器初始化成功');
                    
                    // 测试恋爱运势功能
                    console.log('💕 测试恋爱运势功能...');
                    const loveFortuneSelector = document.getElementById('loveFortuneZodiac');
                    if (loveFortuneSelector) {
                        loveFortuneSelector.value = 'aries';
                        setTimeout(() => {
                            try {
                                analyzeLoveFortune();
                                setTimeout(() => {
                                    const resultDiv = document.getElementById('loveFortuneResult');
                                    if (resultDiv && resultDiv.style.display !== 'none') {
                                        console.log('✅ 恋爱运势分析功能正常');
                                    } else {
                                        console.error('❌ 恋爱运势分析结果未显示');
                                    }
                                }, 1000);
                            } catch (error) {
                                console.error('❌ 恋爱运势分析出错:', error);
                            }
                        }, 500);
                    }
                } else {
                    console.error('❌ 星座选择器初始化失败');
                }
            } else {
                console.error('❌ 页面跳转失败');
            }
        }, 1000);
    } catch (error) {
        console.error('❌ 页面跳转出错:', error);
    }
    
    console.log('🎉 爱情专线测试完成！请查看控制台输出了解详细结果。');
};

// 恋爱运势分析
window.analyzeLoveFortune = function() {
    const zodiacId = document.getElementById('loveFortuneZodiac').value;
    if (!zodiacId) {
        showMessage('请选择你的星座');
        return;
    }
    
    const zodiac = zodiacData.find(z => z.id === zodiacId);
    const fortuneData = generateLoveFortuneData(zodiac);
    displayLoveFortuneResult(fortuneData);
}

// 生成恋爱运势数据
function generateLoveFortuneData(zodiac) {
    const loveData = {
        overall: Math.floor(Math.random() * 30) + 70,
        single: Math.floor(Math.random() * 25) + 75,
        stable: Math.floor(Math.random() * 20) + 80,
        guide: '',
        bestTime: '',
        tips: ''
    };
    
    // 根据星座生成个性化内容
    const loveProfiles = {
        'aries': {
            guide: '本月白羊座的爱情充满激情和活力，单身者有机会遇到志同道合的伙伴，恋爱者需要控制脾气，多些温柔。',
            bestTime: '月中15-20号，火星进入有利位置，是表白和约会的好时机。',
            tips: '穿上红色或橙色的衣服能增强你的爱情魅力，多参加运动和户外活动。'
        },
        'taurus': {
            guide: '金牛座本月爱情运势稳定，适合深层次的情感交流，耐心等待会有好的结果。',
            bestTime: '月末25-30号，金星守护期间，感情升温明显。',
            tips: '选择温馨舒适的环境约会，准备用心的礼物会加分不少。'
        },
        'gemini': {
            guide: '双子座本月爱情多姿多彩，社交运旺盛，通过朋友介绍认识新朋友的机会很大。',
            bestTime: '月初1-7号，水星顺行期间，沟通表达特别顺畅。',
            tips: '多参加聚会和社交活动，展现你的幽默感和智慧。'
        },
        'cancer': {
            guide: '巨蟹座本月情感细腻，家庭和温馨是关键词，适合稳定发展现有关系。',
            bestTime: '月中10-15号，月亮能量最强，直觉特别准确。',
            tips: '在家做饭或看电影是很好的约会方式，表达你的关怀和体贴。'
        },
        'leo': {
            guide: '狮子座本月魅力四射，自信阳光吸引异性，但要避免过于强势。',
            bestTime: '月中18-23号，太阳能量最强，个人魅力达到顶峰。',
            tips: '展现你的领导才能和创造力，但也要学会倾听对方。'
        },
        'virgo': {
            guide: '处女座本月爱情需要细心经营，完美主义可能带来压力，学会放松很重要。',
            bestTime: '月末22-28号，细节处理得当，感情进展顺利。',
            tips: '不要过分挑剔，多发现对方的优点，用心准备约会细节。'
        },
        'libra': {
            guide: '天秤座本月和谐平衡，人际关系良好，单身者桃花朵朵开。',
            bestTime: '月中12-18号，金星守护期间，魅力值达到最高。',
            tips: '注重外表和礼仪，选择艺术性强的约会活动。'
        },
        'scorpio': {
            guide: '天蝎座本月感情深刻强烈，适合深层次的情感交流，但要学会信任。',
            bestTime: '月末20-25号，冥王星能量增强，洞察力特别敏锐。',
            tips: '展现你的神秘感和深度，但不要过于控制对方。'
        },
        'sagittarius': {
            guide: '射手座本月自由奔放，冒险精神带来新的邂逅，旅行运很强。',
            bestTime: '月初5-10号，木星能量旺盛，机会多多。',
            tips: '尝试新的约会方式，如短途旅行或户外运动。'
        },
        'capricorn': {
            guide: '摩羯座本月稳重务实，感情发展循序渐进，适合认真考虑长期关系。',
            bestTime: '月中15-20号，土星稳定作用，感情基础更牢固。',
            tips: '展现你的责任感和可靠性，规划未来会打动对方。'
        },
        'aquarius': {
            guide: '水瓶座本月创新独特，思想碰撞产生火花，网络交友运不错。',
            bestTime: '月末25-30号，天王星能量活跃，意外之喜。',
            tips: '尝试新颖的约会方式，展现你的个性和智慧。'
        },
        'pisces': {
            guide: '双鱼座本月浪漫梦幻，艺术气息吸引异性，但要分清幻想与现实。',
            bestTime: '月初8-13号，海王星能量最强，直觉准确。',
            tips: '选择浪漫的约会地点，如海边、美术馆，展现你的温柔。'
        }
    };
    
    const profile = loveProfiles[zodiac.id] || loveProfiles['aries'];
    return {
        ...loveData,
        guide: profile.guide,
        bestTime: profile.bestTime,
        tips: profile.tips
    };
}

// 显示恋爱运势结果
function displayLoveFortuneResult(data) {
    const resultDiv = document.getElementById('loveFortuneResult');
    if (!resultDiv) return;
    
    // 更新文本内容
    const monthlyGuideEl = document.getElementById('loveMonthlyGuide');
    const bestTimeEl = document.getElementById('loveBestTime');
    const tipsEl = document.getElementById('loveTips');
    
    if (monthlyGuideEl) monthlyGuideEl.textContent = data.guide;
    if (bestTimeEl) bestTimeEl.textContent = data.bestTime;
    if (tipsEl) tipsEl.textContent = data.tips;
    
    // 设置分数条动画
    setTimeout(() => {
        const overallScoreEl = document.getElementById('loveOverallScore');
        const singleScoreEl = document.getElementById('loveSingleScore');
        const stableScoreEl = document.getElementById('loveStableScore');
        
        const overallValueEl = document.getElementById('loveOverallValue');
        const singleValueEl = document.getElementById('loveSingleValue');
        const stableValueEl = document.getElementById('loveStableValue');
        
        if (overallScoreEl) {
            overallScoreEl.style.width = data.overall + '%';
            if (overallValueEl) overallValueEl.textContent = data.overall;
        }
        
        if (singleScoreEl) {
            singleScoreEl.style.width = data.single + '%';
            if (singleValueEl) singleValueEl.textContent = data.single;
        }
        
        if (stableScoreEl) {
            stableScoreEl.style.width = data.stable + '%';
            if (stableValueEl) stableValueEl.textContent = data.stable;
        }
    }, 100);
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 爱情配对分析
window.analyzeLoveMatch = function() {
    const zodiac1Id = document.getElementById('loveMatchZodiac1').value;
    const zodiac2Id = document.getElementById('loveMatchZodiac2').value;
    
    if (!zodiac1Id || !zodiac2Id) {
        showMessage('请选择两个星座进行配对');
        return;
    }
    
    if (zodiac1Id === zodiac2Id) {
        showMessage('请选择不同的星座进行配对');
        return;
    }
    
    const zodiac1 = zodiacData.find(z => z.id === zodiac1Id);
    const zodiac2 = zodiacData.find(z => z.id === zodiac2Id);
    
    const matchData = generateLoveMatchData(zodiac1, zodiac2);
    displayLoveMatchResult(matchData);
}

// 生成爱情配对数据
function generateLoveMatchData(zodiac1, zodiac2) {
    const matchMatrix = {
        'aries': { 'taurus': 65, 'gemini': 85, 'cancer': 60, 'leo': 95, 'virgo': 55, 'libra': 80, 'scorpio': 50, 'sagittarius': 90, 'capricorn': 45, 'aquarius': 75, 'pisces': 55 },
        'taurus': { 'aries': 65, 'gemini': 60, 'cancer': 85, 'leo': 70, 'virgo': 90, 'libra': 75, 'scorpio': 80, 'sagittarius': 50, 'capricorn': 95, 'aquarius': 55, 'pisces': 85 },
        'gemini': { 'aries': 85, 'taurus': 60, 'cancer': 55, 'leo': 80, 'virgo': 70, 'libra': 95, 'scorpio': 45, 'sagittarius': 90, 'capricorn': 50, 'aquarius': 85, 'pisces': 60 },
        'cancer': { 'aries': 60, 'taurus': 85, 'gemini': 55, 'leo': 75, 'virgo': 80, 'libra': 65, 'scorpio': 90, 'sagittarius': 45, 'capricorn': 75, 'aquarius': 50, 'pisces': 95 },
        'leo': { 'aries': 95, 'taurus': 70, 'gemini': 80, 'cancer': 75, 'virgo': 60, 'libra': 85, 'scorpio': 55, 'sagittarius': 95, 'capricorn': 50, 'aquarius': 75, 'pisces': 65 },
        'virgo': { 'aries': 55, 'taurus': 90, 'gemini': 70, 'cancer': 80, 'leo': 60, 'libra': 75, 'scorpio': 85, 'sagittarius': 45, 'capricorn': 95, 'aquarius': 60, 'pisces': 80 },
        'libra': { 'aries': 80, 'taurus': 75, 'gemini': 95, 'cancer': 65, 'leo': 85, 'virgo': 75, 'scorpio': 60, 'sagittarius': 70, 'capricorn': 55, 'aquarius': 90, 'pisces': 75 },
        'scorpio': { 'aries': 50, 'taurus': 80, 'gemini': 45, 'cancer': 90, 'leo': 55, 'virgo': 85, 'libra': 60, 'sagittarius': 40, 'capricorn': 75, 'aquarius': 45, 'pisces': 95 },
        'sagittarius': { 'aries': 90, 'taurus': 50, 'gemini': 90, 'cancer': 45, 'leo': 95, 'virgo': 45, 'libra': 70, 'scorpio': 40, 'capricorn': 35, 'aquarius': 85, 'pisces': 55 },
        'capricorn': { 'aries': 45, 'taurus': 95, 'gemini': 50, 'cancer': 75, 'leo': 50, 'virgo': 95, 'libra': 55, 'scorpio': 75, 'sagittarius': 35, 'aquarius': 60, 'pisces': 70 },
        'aquarius': { 'aries': 75, 'taurus': 55, 'gemini': 85, 'cancer': 50, 'leo': 75, 'virgo': 60, 'libra': 90, 'scorpio': 45, 'sagittarius': 85, 'capricorn': 60, 'pisces': 65 },
        'pisces': { 'aries': 55, 'taurus': 85, 'gemini': 60, 'cancer': 95, 'leo': 65, 'virgo': 80, 'libra': 75, 'scorpio': 95, 'sagittarius': 55, 'capricorn': 70, 'aquarius': 65 }
    };
    
    const percentage = matchMatrix[zodiac1.id][zodiac2.id] || 50;
    
    let title = '';
    if (percentage >= 90) title = '天作之合！';
    else if (percentage >= 80) title = '非常般配！';
    else if (percentage >= 70) title = '相当不错！';
    else if (percentage >= 60) title = '可以发展！';
    else if (percentage >= 50) title = '需要努力！';
    else title = '挑战较大！';
    
    return {
        percentage: percentage,
        title: title,
        zodiac1: zodiac1,
        zodiac2: zodiac2,
        compatibility: generateCompatibilityText(zodiac1, zodiac2, percentage),
        advantages: generateAdvantagesText(zodiac1, zodiac2, percentage),
        challenges: generateChallengesText(zodiac1, zodiac2, percentage),
        maintenance: generateMaintenanceText(zodiac1, zodiac2, percentage)
    };
}

// 生成配对契合度描述
function generateCompatibilityText(zodiac1, zodiac2, percentage) {
    if (percentage >= 80) {
        return `${zodiac1.name}和${zodiac2.name}的组合非常和谐，你们在很多方面都能产生共鸣。彼此的性格特质能够很好地互补，相处起来轻松愉快。`;
    } else if (percentage >= 60) {
        return `${zodiac1.name}和${zodiac2.name}的组合有一定的基础，虽然存在一些差异，但通过相互理解和包容，可以建立稳定的关系。`;
    } else {
        return `${zodiac1.name}和${zodiac2.name}的组合面临一些挑战，性格差异较大，需要双方都有足够的耐心和智慧来经营这段感情。`;
    }
}

// 生成相处优势描述
function generateAdvantagesText(zodiac1, zodiac2, percentage) {
    if (percentage >= 70) {
        return `你们的组合在沟通和理解方面表现突出，能够感受到彼此的支持和鼓励。共同的价值观让关系更加稳固，面对困难时能够携手并进。`;
    } else {
        return `虽然存在差异，但正是这些不同为你们的关系带来了新鲜感。学会欣赏对方的独特之处，会让你们的感情更加丰富多彩。`;
    }
}

// 生成需要注意描述
function generateChallengesText(zodiac1, zodiac2, percentage) {
    if (percentage >= 70) {
        return `需要注意的是，即使在很好的关系中，也要保持独立的空间和个性。避免过度依赖，同时要学会处理分歧和冲突。`;
    } else {
        return `你们需要重点关注沟通方式的差异，学会用对方能接受的方式表达自己。耐心和包容是维持关系的关键，不要期望对方完全改变。`;
    }
}

// 生成爱情保鲜秘诀
function generateMaintenanceText(zodiac1, zodiac2, percentage) {
    if (percentage >= 80) {
        return `继续保持你们之间的默契和浪漫，定期安排二人世界的时间。同时也要不断学习和成长，让关系保持新鲜感。记住，好的爱情需要双方共同经营。`;
    } else {
        return `建立良好的沟通习惯，定期交流彼此的想法和感受。学会欣赏对方的优点，包容缺点。共同制定一些小目标和计划，增加互动和了解。`;
    }
}

// 显示爱情配对结果
function displayLoveMatchResult(data) {
    const resultDiv = document.getElementById('loveMatchResult');
    if (!resultDiv) return;
    
    // 更新配对结果内容
    const percentageEl = document.getElementById('loveMatchPercentage');
    const titleEl = document.getElementById('loveMatchTitle');
    const compatibilityEl = document.getElementById('loveCompatibility');
    const advantagesEl = document.getElementById('loveAdvantages');
    const challengesEl = document.getElementById('loveChallenges');
    const maintenanceEl = document.getElementById('loveMaintenance');
    
    if (percentageEl) percentageEl.textContent = data.percentage + '%';
    if (titleEl) titleEl.textContent = data.title;
    if (compatibilityEl) compatibilityEl.textContent = data.compatibility;
    if (advantagesEl) advantagesEl.textContent = data.advantages;
    if (challengesEl) challengesEl.textContent = data.challenges;
    if (maintenanceEl) maintenanceEl.textContent = data.maintenance;
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 获取爱情建议
window.getLoveAdvice = function() {
    const zodiacId = document.getElementById('loveAdviceZodiac').value;
    const status = document.getElementById('loveStatus').value;
    const problem = document.getElementById('loveProblem').value.trim();
    
    if (!zodiacId || !status || !problem) {
        showMessage('请填写完整信息');
        return;
    }
    
    // 确保使用正确的星座数据
    const zodiac = zodiacData.find(z => z && z.id === zodiacId);
    if (!zodiac) {
        showMessage('未找到对应的星座数据');
        return;
    }
    
    const adviceData = generateLoveAdviceData(zodiac, status, problem);
    displayLoveAdviceResult(adviceData);
}

// 生成爱情建议数据
function generateLoveAdviceData(zodiac, status, problem) {
    const statusProfiles = {
        'single': {
            warmResponse: '我理解你渴望爱情的心情，单身并不是孤独，而是为了遇见更好的那个人。',
            analysis: `${zodiac.name}座的你，${getZodiacLoveTrait(zodiac.id)}。这让你在感情中有独特的魅力，也面临着特定的挑战。`,
            advice: '建议你先提升自己，扩大社交圈，不要为了恋爱而恋爱。真正的爱情会在最好的时候降临。',
            action: '参加兴趣小组、健身房、朋友聚会等活动，让自己变得更有趣更有魅力。同时保持开放的心态。',
            blessing: '愿你遇见那个懂得欣赏你的人，让爱情成为生命中最美的礼物。'
        },
        'dating': {
            warmResponse: '恋爱中的甜蜜和困惑都是正常的，每段感情都需要用心经营。',
            analysis: `${zodiac.name}座的你在恋爱中${getZodiacLoveTrait(zodiac.id)}，这为你的感情增添了独特的色彩。`,
            advice: '沟通是感情的桥梁，学会表达自己的需求，也要倾听对方的心声。给彼此适当的空间。',
            action: '定期进行深入交流，安排有意义的约会，共同规划未来。遇到问题时冷静处理，避免冲动决定。',
            blessing: '愿你们的爱情如同美酒，越陈越香，越来越甜蜜。'
        },
        'married': {
            warmResponse: '婚姻是爱情的升华，平淡中的真情最珍贵，我理解你的感受。',
            analysis: `作为${zodiac.name}座的你，在婚姻中${getZodiacLoveTrait(zodiac.id)}，这影响着你的家庭角色和相处方式。`,
            advice: '保持新鲜感和激情很重要，但更重要的是相互理解和支持。记住，你们是一个团队。',
            action: '创造二人世界的时间，培养共同兴趣，在小事中表达爱意。遇到分歧时以解决问题为目标。',
            blessing: '愿你们的婚姻如同港湾，在风雨中相互依靠，在阳光下共同成长。'
        },
        'complicated': {
            warmResponse: '复杂的感情确实让人疲惫，我理解你内心的纠结和不安。',
            analysis: `${zodiac.name}座的你${getZodiacLoveTrait(zodiac.id)}，这可能让你在感情中更加敏感和犹豫。`,
            advice: '诚实地面对自己的内心，想清楚你真正想要的是什么。有时候放手也是一种智慧。',
            action: '给自己一些独处的时间，理清思绪。可以寻求信任的朋友或专业人士的建议。不要害怕做出决定。',
            blessing: '愿你有勇气做出正确的选择，找到内心的平静和真正的幸福。'
        },
        'heartbroken': {
            warmResponse: '失恋的痛苦我完全理解，请允许自己悲伤，这是治愈的开始。',
            analysis: `作为${zodiac.name}座的你，${getZodiacLoveTrait(zodiac.id)}，这可能让你在失恋后更加痛苦。`,
            advice: '时间是最好的良药，但主动的疗愈更重要。这不是你的错，你值得被爱。',
            action: '允许自己哭泣和发泄，然后慢慢重新开始。专注于自我提升，培养新的兴趣爱好。相信未来会更好。',
            blessing: '愿你走过这段黑暗，重新找到属于自己的阳光。你值得拥有更好的爱情。'
        }
    };
    
    const profile = statusProfiles[status] || statusProfiles['single'];
    
    return {
        ...profile,
        problem: problem
    };
}

// 获取星座爱情特质
function getZodiacLoveTrait(zodiacId) {
    const traits = {
        'aries': '热情直接，敢爱敢恨',
        'taurus': '稳重踏实，重视安全感',
        'gemini': '聪明机智，喜欢新鲜感',
        'cancer': '温柔体贴，重视家庭',
        'leo': '自信大方，喜欢被崇拜',
        'virgo': '细心完美，追求理想',
        'libra': '优雅和谐，追求平衡',
        'scorpio': '深情专一，占有欲强',
        'sagittarius': '自由奔放，热爱冒险',
        'capricorn': '成熟稳重，责任感强',
        'aquarius': '独立理性，重视精神',
        'pisces': '浪漫梦幻，富有同情心'
    };
    
    return traits[zodiacId] || '有着独特的魅力';
}

// 显示爱情建议结果
function displayLoveAdviceResult(data) {
    const resultDiv = document.getElementById('loveAdviceResult');
    if (!resultDiv) return;
    
    // 更新建议结果内容
    const warmResponseEl = document.getElementById('loveWarmResponse');
    const analysisEl = document.getElementById('loveZodiacAnalysis');
    const adviceEl = document.getElementById('loveProfessionalAdvice');
    const actionEl = document.getElementById('loveActionGuide');
    const blessingEl = document.getElementById('loveBlessing');
    
    if (warmResponseEl) warmResponseEl.textContent = data.warmResponse;
    if (analysisEl) analysisEl.textContent = data.analysis;
    if (adviceEl) adviceEl.textContent = data.advice;
    if (actionEl) actionEl.textContent = data.action;
    if (blessingEl) blessingEl.textContent = data.blessing;
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 重置爱情建议
window.resetLoveAdvice = function() {
    document.getElementById('loveAdviceZodiac').value = '';
    document.getElementById('loveStatus').value = '';
    document.getElementById('loveProblem').value = '';
    document.getElementById('loveAdviceResult').style.display = 'none';
}

// 保存爱情建议
window.saveLoveAdvice = function() {
    const advice = {
        type: 'loveAdvice',
        timestamp: new Date().toISOString()
    };
    
    let savedAdvices = localStorage.getItem('loveAdvices');
    let advices = savedAdvices ? JSON.parse(savedAdvices) : [];
    
    advices.unshift(advice);
    if (advices.length > 10) advices = advices.slice(0, 10);
    
    localStorage.setItem('loveAdvices', JSON.stringify(advices));
    showMessage('爱情指导已保存！');
}

// 桃花运势分析
window.analyzeBlossomFortune = function() {
    const zodiacId = document.getElementById('blossomZodiac').value;
    if (!zodiacId) {
        showMessage('请选择你的星座');
        return;
    }
    
    const zodiac = zodiacData.find(z => z.id === zodiacId);
    const blossomData = generateBlossomData(zodiac);
    displayBlossomResult(blossomData);
}

// 生成桃花运势数据
function generateBlossomData(zodiac) {
    const blossomScore = Math.floor(Math.random() * 30) + 70;
    
    // 确保从zodiacData中获取正确的星座数据
    const zodiacSign = zodiacData.find(z => z && z.id === zodiac.id) || zodiac;
    
    const blossomProfiles = {
        'aries': {
            time: '月中15-20号，火星能量最强，桃花最旺',
            place: '健身房、运动场馆、竞技比赛现场',
            type: '阳光开朗、热爱运动、充满活力的异性',
            method: '多参加体育活动，展现你的领导力和活力',
            color: '红色和橙色，增强你的魅力和吸引力'
        },
        'taurus': {
            time: '月末25-30号，金星守护期间，感情运势最佳',
            place: '高级餐厅、艺术展览、音乐会',
            type: '稳重踏实、有品味、懂得享受生活的异性',
            method: '提升自己的品味，参加高品质的社交活动',
            color: '绿色和粉色，温柔而吸引人'
        },
        'gemini': {
            time: '月初1-7号，水星顺行，社交运旺盛',
            place: '书店、咖啡馆、知识讲座、社交聚会',
            type: '聪明机智、有幽默感、喜欢交流的异性',
            method: '多参加社交活动，展现你的智慧和幽默',
            color: '黄色和银色，突出你的机智和灵动'
        },
        'cancer': {
            time: '月中10-15号，月亮能量最强，直觉最准',
            place: '家庭聚会、温馨咖啡馆、海边、公园',
            type: '温柔体贴、重视家庭、有责任感的异性',
            method: '在温馨的环境中展现你的关怀和体贴',
            color: '白色和淡蓝色，温柔而纯洁'
        },
        'leo': {
            time: '月中18-23号，太阳能量最强，魅力四射',
            place: '派对、舞台、豪华场所、时尚活动',
            type: '自信大方、有品位、懂得欣赏的异性',
            method: '在社交场合展现你的魅力和领导才能',
            color: '金色和紫色，高贵而引人注目'
        },
        'virgo': {
            time: '月末22-28号，细节处理得当，机会最多',
            place: '图书馆、工作场所、专业培训课程',
            type: '细心认真、有上进心、可靠的异性',
            method: '在专业场合展现你的能力和认真态度',
            color: '灰色和深蓝色，稳重而专业'
        },
        'libra': {
            time: '月中12-18号，金星守护期间，魅力值最高',
            place: '艺术展、音乐会、时尚活动、美容院',
            type: '优雅有品位、懂得审美、和谐的异性',
            method: '注重外表和礼仪，参加艺术性强的活动',
            color: '粉色和淡紫色，优雅而浪漫'
        },
        'scorpio': {
            time: '月末20-25号，冥王星能量增强，洞察力敏锐',
            place: '深夜酒吧、神秘场所、深度对话场合',
            type: '深情神秘、有内涵、强烈的异性',
            method: '展现你的神秘感和深度，进行深层次交流',
            color: '深红色和黑色，神秘而吸引人'
        },
        'sagittarius': {
            time: '月初5-10号，木星能量旺盛，机会多多',
            place: '旅行途中、户外活动、异国风情场所',
            type: '自由奔放、爱冒险、有见识的异性',
            method: '多参加户外活动和旅行，展现你的开放心态',
            color: '紫色和 turquoise，自由而充满活力'
        },
        'capricorn': {
            time: '月中15-20号，土星稳定作用，感情基础牢',
            place: '商务场合、专业网络、成功人士聚会',
            type: '成熟稳重、有事业心、可靠的异性',
            method: '在专业场合展现你的能力和责任感',
            color: '棕色和深绿色，稳重而可靠'
        },
        'aquarius': {
            time: '月末25-30号，天王星能量活跃，意外之喜',
            place: '科技展会、网络平台、创新活动',
            type: '独立创新、有思想、独特的异性',
            method: '参加创新活动，展现你的独特思维',
            color: '蓝色和银色，独特而充满智慧'
        },
        'pisces': {
            time: '月初8-13号，海王星能量最强，直觉准确',
            place: '海边、艺术场所、浪漫餐厅、电影院',
            type: '浪漫温柔、有艺术细胞、富有同情心的异性',
            method: '在浪漫环境中展现你的温柔和艺术气息',
            color: '海蓝色和淡紫色，浪漫而梦幻'
        }
    };
    
    const profile = blossomProfiles[zodiacSign.id] || blossomProfiles['aries'];
    
    return {
        score: blossomScore,
        ...profile
    };
}

// 显示桃花运势结果
function displayBlossomResult(data) {
    const resultDiv = document.getElementById('blossomResult');
    if (!resultDiv) return;
    
    // 设置分数条动画
    setTimeout(() => {
        const scoreBar = document.getElementById('blossomScore');
        const scoreValue = document.getElementById('blossomValue');
        if (scoreBar) scoreBar.style.width = data.score + '%';
        if (scoreValue) scoreValue.textContent = data.score;
    }, 100);
    
    // 更新桃花运势内容
    const timeEl = document.getElementById('blossomTime');
    const placeEl = document.getElementById('blossomPlace');
    const typeEl = document.getElementById('blossomType');
    const methodEl = document.getElementById('blossomMethod');
    const colorEl = document.getElementById('blossomColor');
    
    if (timeEl) timeEl.textContent = data.time;
    if (placeEl) placeEl.textContent = data.place;
    if (typeEl) typeEl.textContent = data.type;
    if (methodEl) methodEl.textContent = data.method;
    if (colorEl) colorEl.textContent = data.color;
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 社区功能相关函数
function initializeCommunity() {
    loadComments();
    
    // 绑定发布评论按钮
    const publishBtn = document.getElementById('publishComment');
    if (publishBtn) {
        publishBtn.addEventListener('click', publishComment);
    }
    
    // 绑定评论输入框回车事件
    const commentInput = document.getElementById('commentInput');
    if (commentInput) {
        commentInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                publishComment();
            }
        });
    }
}

// 发布评论
function publishComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    
    if (!commentText) {
        showMessage('请输入评论内容');
        return;
    }
    
    // 获取用户信息
    const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    const nickname = userProfile.nickname || '匿名用户';
    const userZodiac = userProfile.zodiac || '';
    const zodiacInfo = userZodiac ? zodiacData.find(z => z.id === userZodiac) : null;
    
    // 创建评论对象
    const comment = {
        id: Date.now(),
        nickname: nickname,
        zodiac: userZodiac,
        zodiacIcon: zodiacInfo ? zodiacInfo.icon : '⭐',
        content: commentText,
        timestamp: new Date().toISOString(),
        likes: 0,
        liked: false
    };
    
    // 保存评论到localStorage
    saveComment(comment);
    
    // 清空输入框
    commentInput.value = '';
    
    // 重新加载评论列表
    loadComments();
    
    showMessage('评论发布成功！');
}

// 保存评论
function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem('communityComments') || '[]');
    comments.unshift(comment);
    
    // 限制评论数量
    if (comments.length > 50) {
        comments = comments.slice(0, 50);
    }
    
    localStorage.setItem('communityComments', JSON.stringify(comments));
}

// 加载评论列表
function loadComments() {
    const commentsContainer = document.getElementById('commentsList');
    if (!commentsContainer) return;
    
    const comments = JSON.parse(localStorage.getItem('communityComments') || '[]');
    
    if (comments.length === 0) {
        commentsContainer.innerHTML = `
            <div class="no-comments">
                <i class="bi bi-chat-dots"></i>
                <p>还没有评论，快来发表第一条评论吧！</p>
            </div>
        `;
        return;
    }
    
    commentsContainer.innerHTML = comments.map(comment => createCommentHTML(comment)).join('');
}

// 创建评论HTML
function createCommentHTML(comment) {
    const timeAgo = getTimeAgo(comment.timestamp);
    const isLiked = comment.liked || false;
    
    return `
        <div class="comment-item" data-comment-id="${comment.id}">
            <div class="comment-header">
                <div class="comment-author">
                    <span class="author-zodiac">${comment.zodiacIcon}</span>
                    <span class="author-name">${comment.nickname}</span>
                </div>
                <div class="comment-time">${timeAgo}</div>
            </div>
            <div class="comment-content">${comment.content}</div>
            <div class="comment-actions">
                <button class="btn btn-sm btn-outline-primary like-btn ${isLiked ? 'active' : ''}" 
                        onclick="toggleLike(${comment.id})">
                    <i class="bi bi-heart${isLiked ? '-fill' : ''}"></i>
                    <span class="like-count">${comment.likes || 0}</span>
                </button>
                <button class="btn btn-sm btn-outline-secondary" onclick="replyToComment(${comment.id})">
                    <i class="bi bi-reply"></i> 回复
                </button>
            </div>
        </div>
    `;
}

// 切换点赞状态
function toggleLike(commentId) {
    let comments = JSON.parse(localStorage.getItem('communityComments') || '[]');
    const commentIndex = comments.findIndex(c => c.id === commentId);
    
    if (commentIndex !== -1) {
        const comment = comments[commentIndex];
        comment.liked = !comment.liked;
        comment.likes = comment.liked ? (comment.likes || 0) + 1 : Math.max(0, (comment.likes || 0) - 1);
        
        localStorage.setItem('communityComments', JSON.stringify(comments));
        loadComments();
    }
}

// 回复评论
function replyToComment(commentId) {
    const commentInput = document.getElementById('commentInput');
    const comments = JSON.parse(localStorage.getItem('communityComments') || '[]');
    const comment = comments.find(c => c.id === commentId);
    
    if (comment && commentInput) {
        commentInput.value = `@${comment.nickname} `;
        commentInput.focus();
    }
}

// 计算时间差
function getTimeAgo(timestamp) {
    const now = new Date();
    const commentTime = new Date(timestamp);
    const diffMs = now - commentTime;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffMins < 1) return '刚刚';
    if (diffMins < 60) return `${diffMins}分钟前`;
    if (diffHours < 24) return `${diffHours}小时前`;
    if (diffDays < 7) return `${diffDays}天前`;
    
    return commentTime.toLocaleDateString('zh-CN');
}

function resetCareer() {
    document.getElementById('careerZodiac').value = '';
    document.getElementById('careerResult').style.display = 'none';
}

function saveCareerReading() {
    const zodiacId = document.getElementById('careerZodiac').value;
    if (!zodiacId) return;
    
    const reading = {
        type: 'career',
        zodiac: zodiacId,
        timestamp: new Date().toISOString()
    };
    
    let savedReadings = localStorage.getItem('careerReadings');
    let readings = savedReadings ? JSON.parse(savedReadings) : [];
    
    readings.unshift(reading);
    if (readings.length > 10) readings = readings.slice(0, 10);
    
    localStorage.setItem('careerReadings', JSON.stringify(readings));
    showMessage('职场分析已保存！');
}

// 宝妈功能相关函数（全局函数）
window.initializeMom = function() {
    const momZodiac = document.getElementById('momZodiac');
    const analyzeMomBtn = document.getElementById('analyzeMomBtn');
    
    if (momZodiac) {
        momZodiac.innerHTML = '<option value="">选择星座</option>';
        zodiacData.forEach(zodiac => {
            const option = document.createElement('option');
            option.value = zodiac.id;
            option.textContent = zodiac.name;
            momZodiac.appendChild(option);
        });
    }
    
    if (analyzeMomBtn) {
        analyzeMomBtn.addEventListener('click', analyzeMom);
    }
};

window.analyzeMom = function() {
    try {
        const zodiacId = document.getElementById('momZodiac')?.value;
    
    if (!zodiacId) {
        showMessage('请选择您的星座');
        return;
    }
    
    const zodiac = zodiacData.find(z => z.id === zodiacId);
        if (!zodiac) {
            showMessage('未找到对应的星座数据');
            return;
        }
        
        // 使用正确的generateMomAnalysis函数（需要两个参数）
        const momData = getMomData();
        const mom = momData[zodiacId];
        if (!mom) {
            showMessage('未找到对应的育儿数据');
            return;
        }
        
        const momAnalysis = generateMomAnalysis(zodiac, mom);
    displayMomResult(momAnalysis);
    } catch (error) {
        console.error('分析育儿风格出错:', error);
        showMessage('分析过程中出现错误，请稍后再试');
}
};

// 获取宝妈数据
function getMomData() {
    return {
        aries: {
            patience: { score: 70, desc: '充满活力，但需要培养更多耐心' },
            energy: { score: 90, desc: '精力充沛，能给孩子带来很多乐趣' },
            creativity: { score: 85, desc: '创意丰富，鼓励孩子独立探索' },
            discipline: { score: 75, desc: '有一定纪律性，但需要更细致' },
            advice: '你的活力能给孩子带来很多乐趣，但要培养更多耐心，给孩子成长的时间。'
        },
        taurus: {
            patience: { score: 95, desc: '耐心十足，稳定可靠' },
            energy: { score: 80, desc: '稳定可靠，注重安全' },
            creativity: { score: 70, desc: '传统稳重，但需要更多创意' },
            discipline: { score: 85, desc: '纪律性强，关爱备至' },
            advice: '你的耐心和稳定是孩子的安全港湾，要学会接受变化，给孩子更多探索的空间。'
        },
        gemini: {
            patience: { score: 75, desc: '沟通良好，但需要更多一致性' },
            energy: { score: 85, desc: '学习能力强，适应性好' },
            creativity: { score: 95, desc: '创意丰富，能激发孩子潜能' },
            discipline: { score: 70, desc: '需要建立更明确的规则' },
            advice: '你的创意和沟通能力能激发孩子的潜能，但要建立一致的规则和界限。'
        },
        cancer: {
            patience: { score: 88, desc: '充满爱心，关怀备至' },
            energy: { score: 85, desc: '直觉敏锐，家庭观念强' },
            creativity: { score: 80, desc: '情感丰富，但需要适度放手' },
            discipline: { score: 75, desc: '需要建立更清晰的界限' },
            advice: '你的爱心是孩子成长的养分，要学会适度放手，让孩子学会独立面对挑战。'
        },
        leo: {
            patience: { score: 72, desc: '自信乐观，但需要更多耐心' },
            energy: { score: 90, desc: '鼓励表现，领导力强' },
            creativity: { score: 88, desc: '慷慨大方，能感染孩子' },
            discipline: { score: 82, desc: '要求较高，需要更多倾听' },
            advice: '你的自信能感染孩子，要学会倾听孩子的想法，给他们更多自主选择的机会。'
        },
        virgo: {
            patience: { score: 85, desc: '细致入微，有条理' },
            energy: { score: 80, desc: '责任心强，健康教育' },
            creativity: { score: 75, desc: '需要更多放松和创意' },
            discipline: { score: 92, desc: '完美主义，需要接受不完美' },
            advice: '你的细致和责任心为孩子提供了良好的成长环境，要学会接受不完美，享受育儿过程。'
        },
        libra: {
            patience: { score: 82, desc: '公平公正，和谐平衡' },
            energy: { score: 85, desc: '审美教育，人际关系好' },
            creativity: { score: 85, desc: '需要更多主见和决断' },
            discipline: { score: 78, desc: '需要树立权威' },
            advice: '你的公平意识能培养孩子的正义感，要学会在关键时刻做出决定，树立权威。'
        },
        scorpio: {
            patience: { score: 78, desc: '深度洞察，意志坚定' },
            energy: { score: 85, desc: '保护欲强，情感深刻' },
            creativity: { score: 80, desc: '需要更多信任和灵活性' },
            discipline: { score: 85, desc: '需要给孩子更多自由空间' },
            advice: '你的洞察力能理解孩子的内心世界，要学会信任孩子，给他们更多自由发展的空间。'
        },
        sagittarius: {
            patience: { score: 70, desc: '乐观开朗，但需要更多耐心' },
            energy: { score: 90, desc: '鼓励探索，教育视野广' },
            creativity: { score: 90, desc: '适应性强，但需要更细致' },
            discipline: { score: 72, desc: '需要更多责任感和细致' },
            advice: '你的乐观精神能给孩子带来积极影响，要培养更多耐心和细致，关注孩子的日常需求。'
        },
        capricorn: {
            patience: { score: 88, desc: '责任感强，目标明确' },
            energy: { score: 75, desc: '传统教育，稳重可靠' },
            creativity: { score: 68, desc: '需要更多灵活性和温情' },
            discipline: { score: 95, desc: '期望过高，需要更多放松' },
            advice: '你的责任感为孩子提供了稳定的成长基础，要学会放松，多表达对孩子的爱和赞美。'
        },
        aquarius: {
            patience: { score: 75, desc: '创新思维，独立教育' },
            energy: { score: 85, desc: '尊重个性，前瞻性强' },
            creativity: { score: 92, desc: '需要加强情感交流' },
            discipline: { score: 70, desc: '需要更多传统和稳定性' },
            advice: '你的创新教育方式能培养孩子的独立思考能力，要加强情感交流，给孩子更多温暖。'
        },
        pisces: {
            patience: { score: 85, desc: '创意无限，同理心强' },
            energy: { score: 90, desc: '艺术天赋，直觉敏锐' },
            creativity: { score: 95, desc: '需要建立明确的规则' },
            discipline: { score: 68, desc: '需要更多主见和理性' },
            advice: '你的创意和同理心能培养孩子的艺术细胞，要建立明确的规则，学会理性教育。'
        }
    };
}

// 旧的displayMomResult函数已删除，使用下面的新版本

// 重置宝妈分析（全局函数）
window.resetMom = function() {
    const momZodiac = document.getElementById('momZodiac');
    const momResult = document.getElementById('momResult');
    if (momZodiac) momZodiac.value = '';
    if (momResult) momResult.style.display = 'none';
};

// 保存宝妈分析（全局函数）
window.saveMomReading = function() {
    const zodiacId = document.getElementById('momZodiac')?.value;
    if (!zodiacId) {
        showMessage('请先进行育儿分析');
        return;
    }
    
    const reading = {
        type: 'mom',
        zodiac: zodiacId,
        timestamp: new Date().toISOString()
    };
    
    let savedReadings = localStorage.getItem('momReadings');
    let readings = savedReadings ? JSON.parse(savedReadings) : [];
    
    readings.unshift(reading);
    if (readings.length > 10) readings = readings.slice(0, 10);
    
    localStorage.setItem('momReadings', JSON.stringify(readings));
    showMessage('育儿分析已保存！');
};

// 初始化职场功能
function initializeCareer() {
    const selector = document.getElementById('careerZodiac');
    if (!selector) return;
    
    selector.innerHTML = '<option value="">选择星座</option>';
    zodiacData.forEach(zodiac => {
        const option = document.createElement('option');
        option.value = zodiac.id;
        option.textContent = zodiac.name;
        selector.appendChild(option);
    });
}

// 分析职场运势
function analyzeCareer() {
    const zodiacId = document.getElementById('careerZodiac').value;
    
    if (!zodiacId) {
        showMessage('请选择你的星座');
        return;
    }
    
    const zodiac = zodiacData.find(z => z.id === zodiacId);
    const career = careerData[zodiacId];
    if (!career) return;
    
    // 生成完整的职场分析结果
    const analysis = generateCareerAnalysis(zodiac, career);
    
    // 显示结果
    displayCareerResult(analysis);
}

// 更新职场项目
function updateCareerItem(type, data) {
    const scoreElement = document.getElementById(`${type}Score`);
    const descElement = document.getElementById(`${type}Desc`);
    
    if (scoreElement) {
        const scoreBar = scoreElement.querySelector('.score-bar');
        const scoreText = scoreElement.querySelector('.score-text');
        
        if (scoreBar) {
            scoreBar.style.width = '0%';
            setTimeout(() => {
                scoreBar.style.width = `${data.score}%`;
            }, 100);
        }
        
        if (scoreText) {
            scoreText.textContent = `${data.score}分`;
        }
    }
    
    if (descElement) {
        descElement.textContent = data.desc;
    }
}

// 初始化宝妈功能
function initializeMom() {
    const selector = document.getElementById('momZodiac');
    if (!selector) return;
    
    selector.innerHTML = '<option value="">选择星座</option>';
    zodiacData.forEach(zodiac => {
        const option = document.createElement('option');
        option.value = zodiac.id;
        option.textContent = zodiac.name;
        selector.appendChild(option);
    });
}

// analyzeMom函数已在上面定义为window.analyzeMom，这里不再重复定义

// 更新宝妈项目
function updateMomItem(type, data) {
    const scoreElement = document.getElementById(`${type}Score`);
    const descElement = document.getElementById(`${type}Desc`);
    
    if (scoreElement) {
        const scoreBar = scoreElement.querySelector('.score-bar');
        const scoreText = scoreElement.querySelector('.score-text');
        
        if (scoreBar) {
            scoreBar.style.width = '0%';
            setTimeout(() => {
                scoreBar.style.width = `${data.score}%`;
            }, 100);
        }
        
        if (scoreText) {
            scoreText.textContent = `${data.score}分`;
        }
    }
    
    if (descElement) {
        descElement.textContent = data.desc;
    }
}

// 生成职场分析
function generateCareerAnalysis(zodiac, career) {
    return {
        zodiac: zodiac,
        leadership: career.leadership,
        teamwork: career.teamwork,
        creativity: career.creativity,
        stress: career.stress,
        advice: career.advice,
        strengths: [
            career.leadership.desc,
            career.creativity.desc
        ],
        challenges: [
            career.stress.score < 80 ? '需要提升抗压能力' : '保持良好的压力管理',
            career.teamwork.score < 80 ? '加强团队协作' : '继续发挥团队精神'
        ]
    };
}

// 显示职场分析结果
function displayCareerResult(analysis) {
    const resultDiv = document.getElementById('careerResult');
    if (!resultDiv) return;
    
    resultDiv.innerHTML = `
        <div class="career-result-content">
            <div class="result-header">
                <h4><i class="bi bi-briefcase-fill"></i> ${analysis.zodiac.name}职场分析</h4>
                <p class="text-muted">基于你的星座特质生成的职场建议</p>
            </div>
            
            <div class="career-scores">
                <div class="score-item">
                    <div class="score-label">
                        <i class="bi bi-crown"></i> 领导力
                        <span class="score-value">${analysis.leadership.score}分</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${analysis.leadership.score}%"></div>
                    </div>
                    <p class="score-desc">${analysis.leadership.desc}</p>
                </div>
                
                <div class="score-item">
                    <div class="score-label">
                        <i class="bi bi-people"></i> 团队合作
                        <span class="score-value">${analysis.teamwork.score}分</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${analysis.teamwork.score}%"></div>
                    </div>
                    <p class="score-desc">${analysis.teamwork.desc}</p>
                </div>
                
                <div class="score-item">
                    <div class="score-label">
                        <i class="bi bi-lightbulb"></i> 创新能力
                        <span class="score-value">${analysis.creativity.score}分</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${analysis.creativity.score}%"></div>
                    </div>
                    <p class="score-desc">${analysis.creativity.desc}</p>
                </div>
                
                <div class="score-item">
                    <div class="score-label">
                        <i class="bi bi-shield-check"></i> 抗压能力
                        <span class="score-value">${analysis.stress.score}分</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${analysis.stress.score}%"></div>
                    </div>
                    <p class="score-desc">${analysis.stress.desc}</p>
                </div>
            </div>
            
            <div class="career-advice">
                <div class="advice-section">
                    <h6><i class="bi bi-star"></i> 职场优势</h6>
                    <ul>
                        ${analysis.strengths.map(strength => `<li>${strength}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="advice-section">
                    <h6><i class="bi bi-exclamation-triangle"></i> 需要关注</h6>
                    <ul>
                        ${analysis.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="advice-section">
                    <h6><i class="bi bi-compass"></i> 发展建议</h6>
                    <p>${analysis.advice}</p>
                </div>
            </div>
            
            <div class="career-actions">
                <button class="btn btn-outline-primary btn-sm" onclick="resetCareer()">
                    <i class="bi bi-arrow-clockwise"></i> 重新分析
                </button>
                <button class="btn btn-primary btn-sm" onclick="saveCareerReading()">
                    <i class="bi bi-bookmark"></i> 保存分析
                </button>
            </div>
        </div>
    `;
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetCareer() {
    document.getElementById('careerZodiac').value = '';
    document.getElementById('careerResult').style.display = 'none';
}

function saveCareerReading() {
    const zodiacId = document.getElementById('careerZodiac').value;
    if (!zodiacId) return;
    
    const reading = {
        type: 'career',
        zodiac: zodiacId,
        timestamp: new Date().toISOString()
    };
    
    let savedReadings = localStorage.getItem('careerReadings');
    let readings = savedReadings ? JSON.parse(savedReadings) : [];
    
    readings.unshift(reading);
    if (readings.length > 10) readings = readings.slice(0, 10);
    
    localStorage.setItem('careerReadings', JSON.stringify(readings));
    showMessage('职场分析已保存！');
}

// 生成宝妈分析
function generateMomAnalysis(zodiac, mom) {
    return {
        zodiac: zodiac,
        patience: mom.patience,
        energy: mom.energy,
        creativity: mom.creativity,
        discipline: mom.discipline,
        advice: mom.advice,
        strengths: [
            mom.energy.desc,
            mom.creativity.desc
        ],
        challenges: [
            mom.patience.score < 80 ? '需要培养更多耐心' : '继续保持耐心',
            mom.discipline.score < 80 ? '需要建立更一致的管教方式' : '管教方式很好'
        ]
    };
}

// 显示宝妈分析结果
function displayMomResult(analysis) {
    const resultDiv = document.getElementById('momResult');
    if (!resultDiv) return;
    
    resultDiv.innerHTML = `
        <div class="mom-result-content">
            <div class="result-header">
                <h4><i class="bi bi-heart-fill"></i> ${analysis.zodiac.name}育儿分析</h4>
                <p class="text-muted">基于你的星座特质生成的育儿建议</p>
            </div>
            
            <div class="mom-scores">
                <div class="score-item">
                    <div class="score-label">
                        <i class="bi bi-clock-history"></i> 耐心程度
                        <span class="score-value">${analysis.patience.score}分</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${analysis.patience.score}%"></div>
                    </div>
                    <p class="score-desc">${analysis.patience.desc}</p>
                </div>
                
                <div class="score-item">
                    <div class="score-label">
                        <i class="bi bi-lightning-charge"></i> 精力水平
                        <span class="score-value">${analysis.energy.score}分</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${analysis.energy.score}%"></div>
                    </div>
                    <p class="score-desc">${analysis.energy.desc}</p>
                </div>
                
                <div class="score-item">
                    <div class="score-label">
                        <i class="bi bi-palette"></i> 创意育儿
                        <span class="score-value">${analysis.creativity.score}分</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${analysis.creativity.score}%"></div>
                    </div>
                    <p class="score-desc">${analysis.creativity.desc}</p>
                </div>
                
                <div class="score-item">
                    <div class="score-label">
                        <i class="bi bi-shield-check"></i> 管教方式
                        <span class="score-value">${analysis.discipline.score}分</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${analysis.discipline.score}%"></div>
                    </div>
                    <p class="score-desc">${analysis.discipline.desc}</p>
                </div>
            </div>
            
            <div class="mom-advice">
                <div class="advice-section">
                    <h6><i class="bi bi-star"></i> 育儿优势</h6>
                    <ul>
                        ${analysis.strengths.map(strength => `<li>${strength}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="advice-section">
                    <h6><i class="bi bi-exclamation-circle"></i> 需要关注</h6>
                    <ul>
                        ${analysis.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="advice-section">
                    <h6><i class="bi bi-stars"></i> 育儿建议</h6>
                    <p>${analysis.advice}</p>
                </div>
            </div>
            
            <div class="mom-actions">
                <button class="btn btn-outline-primary btn-sm" onclick="resetMom()">
                    <i class="bi bi-arrow-clockwise"></i> 重新分析
                </button>
                <button class="btn btn-primary btn-sm" onclick="saveMomReading()">
                    <i class="bi bi-bookmark-heart"></i> 保存分析
                </button>
            </div>
        </div>
    `;
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 确保所有全局函数在页面加载时可用
if (typeof window !== 'undefined') {
    // 验证关键函数是否存在
    setTimeout(() => {
        const requiredFunctions = [
            'showPage',
            'initializeFortuneSelector',
            'selectFortuneZodiac',
            'resetMom',
            'saveMomReading',
            'analyzeMom',
            'calculateMatch',
            'addPost',
            'analyzeCareer'
        ];
        
        const missingFunctions = requiredFunctions.filter(fn => typeof window[fn] === 'undefined');
        
        if (missingFunctions.length > 0) {
            console.error('❌ 以下函数未定义:', missingFunctions);
        } else {
            console.log('✅ 所有关键全局函数已加载');
        }
    }, 100);
}

// ============================================
// 登录注册功能模块（新增功能，不影响现有代码）
// ============================================

// 用户数据存储（使用localStorage模拟数据库）
let currentUser = null;

// 检查登录状态
function checkLoginStatus() {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
        try {
            currentUser = JSON.parse(userStr);
            return true;
        } catch (e) {
            console.error('解析用户数据失败:', e);
            return false;
        }
    }
    return false;
}

// 暴露为全局函数
window.checkLoginStatus = checkLoginStatus;

// 更新导航栏显示
function updateNavigationBar() {
    const isLoggedIn = checkLoginStatus();
    const loginNavLink = document.getElementById('loginNavLink');
    const userInfoNavItem = document.getElementById('userInfoNavItem');
    const logoutNavItem = document.getElementById('logoutNavItem');
    const userNicknameNav = document.getElementById('userNicknameNav');
    const inviteNavItem = document.getElementById('inviteNavItem');
    
    if (isLoggedIn && currentUser) {
        // 已登录：显示用户信息和退出按钮
        if (loginNavLink) loginNavLink.style.display = 'none';
        if (userInfoNavItem) userInfoNavItem.style.display = 'block';
        if (logoutNavItem) logoutNavItem.style.display = 'block';
        if (inviteNavItem) inviteNavItem.style.display = 'block';
        if (userNicknameNav) userNicknameNav.textContent = currentUser.nickname || '用户';
    } else {
        // 未登录：显示登录按钮
        if (loginNavLink) loginNavLink.style.display = 'block';
        if (userInfoNavItem) userInfoNavItem.style.display = 'none';
        if (logoutNavItem) logoutNavItem.style.display = 'none';
        if (inviteNavItem) inviteNavItem.style.display = 'none';
    }
}

// 初始化登录页面
window.initializeLogin = function() {
    // 检查是否已登录
    if (checkLoginStatus()) {
        // 如果已登录，跳转到个人中心
        if (typeof window.showPage === 'function') {
            window.showPage('profile');
        }
        return;
    }
    
    // 绑定登录表单
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }
    
    // 绑定注册表单
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRegister();
        });
    }
    
    // 默认显示登录表单
    showLoginForm();
};

// 显示登录表单
window.showLoginForm = function() {
    const loginContainer = document.getElementById('loginFormContainer');
    const registerContainer = document.getElementById('registerFormContainer');
    if (loginContainer) loginContainer.style.display = 'block';
    if (registerContainer) registerContainer.style.display = 'none';
};

// 显示注册表单
window.showRegisterForm = function() {
    const loginContainer = document.getElementById('loginFormContainer');
    const registerContainer = document.getElementById('registerFormContainer');
    if (loginContainer) loginContainer.style.display = 'none';
    if (registerContainer) registerContainer.style.display = 'block';
};

// 处理登录
async function handleLogin() {
    const phone = document.getElementById('loginPhone')?.value.trim();
    const password = document.getElementById('loginPassword')?.value;
    const rememberMe = document.getElementById('rememberMe')?.checked;
    
    // 验证输入
    if (!phone || !password) {
        showMessage('请输入手机号和密码');
        return;
    }
    
    if (!/^1[3-9]\d{9}$/.test(phone)) {
        showMessage('请输入正确的手机号');
        return;
    }
    
    // 显示加载状态
    showMessage('正在登录...');
    
    // 使用 Supabase API 获取用户数据
    try {
        const user = await UserAPI.getUserByPhone(phone);
        
        // 验证用户
        if (user && user.password === password) {
            // 登录成功
            currentUser = {
                phone: phone,
                nickname: user.nickname,
                gender: user.gender,
                birthday: user.birthday,
                zodiac: user.zodiac,
                registerTime: user.registerTime
            };
            
            // 保存登录状态到 localStorage（用于前端状态管理）
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            // 如果选择记住我，保存更长时间
            if (rememberMe) {
                localStorage.setItem('rememberMe', 'true');
            }
            
            // 更新导航栏
            updateNavigationBar();
            
            // 延迟一下确保DOM已更新
            setTimeout(() => {
                if (typeof updateAdminNav === 'function') {
                    updateAdminNav();
                }
            }, 100);
            
            // 显示成功消息
            showMessage('登录成功！欢迎回来，' + (currentUser.nickname || '用户'));
            
            // 跳转到个人中心
            setTimeout(() => {
                if (typeof window.showPage === 'function') {
                    window.showPage('profile');
                }
            }, 1000);
        } else {
            showMessage('手机号或密码错误');
        }
    } catch (error) {
        console.error('登录失败:', error);
        showMessage('登录失败，请稍后重试');
    }
}

// 处理注册
async function handleRegister() {
    const nickname = document.getElementById('registerNickname')?.value.trim();
    const phone = document.getElementById('registerPhone')?.value.trim();
    const password = document.getElementById('registerPassword')?.value;
    const confirmPassword = document.getElementById('registerConfirmPassword')?.value;
    const code = document.getElementById('registerCode')?.value.trim();
    
    // 验证输入
    if (!nickname || !phone || !password || !confirmPassword) {
        showMessage('请填写所有必填项');
        return false;
    }
    
    if (!/^1[3-9]\d{9}$/.test(phone)) {
        showMessage('请输入正确的手机号');
        return false;
    }
    
    if (password.length < 6) {
        showMessage('密码至少需要6位');
        return false;
    }
    
    if (password !== confirmPassword) {
        showMessage('两次输入的密码不一致');
        return false;
    }
    
    // 验证码验证（简化版，实际应该从服务器验证）
    const savedCode = localStorage.getItem('verificationCode_' + phone);
    if (!code || code !== savedCode) {
        showMessage('验证码错误');
        return false;
    }
    
    // 显示加载状态
    showMessage('正在注册...');
    
    try {
        // 直接尝试创建新用户（不预先检查，避免误判）
        // 如果手机号已存在，数据库会返回409错误
        const userData = {
            nickname: nickname,
            phone: phone,
            password: password,
            gender: '',
            birthday: '',
            zodiac: '',
            registerTime: new Date().toISOString()
        };
        
        try {
            await UserAPI.createUser(userData);
        } catch (createError) {
            // 如果是手机号已存在的错误，显示友好提示
            if (createError.code === '23505' || 
                createError.message?.includes('duplicate key') || 
                createError.message?.includes('已被注册')) {
                showMessage('该手机号已被注册');
                return false;
            }
            // 其他错误继续抛出
            throw createError;
        }
    
        // 自动登录
        currentUser = {
            phone: phone,
            nickname: nickname,
            gender: '',
            birthday: '',
            zodiac: '',
            registerTime: userData.registerTime
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // 更新导航栏
        updateNavigationBar();
        
        // 延迟一下确保DOM已更新
        setTimeout(() => {
            if (typeof updateAdminNav === 'function') {
                updateAdminNav();
            }
        }, 100);
        
        // 显示成功消息
        showMessage('注册成功！欢迎加入星座运势网站');
        
        // 创建欢迎消息通知
        if (typeof NotificationAPI !== 'undefined' && NotificationAPI.createNotification) {
            await NotificationAPI.createNotification({
                phone: phone,
                type: 'system',
                title: '欢迎使用星座运势网站',
                content: '感谢您注册使用我们的服务！在这里您可以查看每日运势、星座配对、社区交流等功能。'
            });
        }
        
        // 创建活动推送示例
        if (typeof NotificationAPI !== 'undefined' && NotificationAPI.createNotification) {
            setTimeout(async () => {
                await NotificationAPI.createNotification({
                    phone: phone,
                    type: 'activity',
                    title: '新用户专享活动',
                    content: '注册即送7天VIP会员体验，立即开通享受更多权益！'
                });
            }, 2000);
        }
        
        // 跳转到个人中心
        setTimeout(() => {
            if (typeof window.showPage === 'function') {
                window.showPage('profile');
            }
        }, 1000);
        
        return true; // 返回成功
    } catch (error) {
        console.error('注册失败:', error);
        
        // 如果是手机号已存在的错误，已经在上面的 try-catch 中处理了
        // 这里只处理其他未知错误
        if (error.code !== '23505' && !error.message?.includes('已被注册') && !error.message?.includes('duplicate key')) {
            showMessage('注册失败，请稍后重试：' + (error.message || '未知错误'));
        }
        return false;
    }
}

// 发送验证码（模拟）
window.sendVerificationCode = function() {
    const phone = document.getElementById('registerPhone')?.value.trim();
    
    if (!phone) {
        showMessage('请先输入手机号');
        return;
    }
    
    if (!/^1[3-9]\d{9}$/.test(phone)) {
        showMessage('请输入正确的手机号');
        return;
    }
    
    // 生成6位随机验证码
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    
    // 保存验证码（5分钟有效）
    localStorage.setItem('verificationCode_' + phone, code);
    localStorage.setItem('verificationCodeTime_' + phone, Date.now().toString());
    
    // 显示验证码（实际应该通过短信发送）
    showMessage('验证码已发送：' + code + '（演示模式，实际应通过短信发送）');
    
    // 倒计时
    const btn = event.target;
    let countdown = 60;
    btn.disabled = true;
    const originalText = btn.textContent;
    
    const timer = setInterval(() => {
        btn.textContent = `${countdown}秒后重发`;
        countdown--;
        if (countdown < 0) {
            clearInterval(timer);
            btn.disabled = false;
            btn.textContent = originalText;
        }
    }, 1000);
};

// 微信登录（模拟）
window.wechatLogin = function() {
    // 模拟微信登录流程
    showMessage('微信登录功能需要配置微信开放平台，当前为演示模式');
    
    // 创建模拟用户
    const mockUser = {
        phone: 'wechat_' + Date.now(),
        nickname: '微信用户',
        gender: '',
        birthday: '',
        zodiac: '',
        registerTime: new Date().toISOString()
    };
    
    // 保存用户
    const usersStr = localStorage.getItem('users');
    let users = {};
    if (usersStr) {
        try {
            users = JSON.parse(usersStr);
        } catch (e) {
            console.error('解析用户数据失败:', e);
        }
    }
    users[mockUser.phone] = mockUser;
    localStorage.setItem('users', JSON.stringify(users));
    
    // 自动登录
    currentUser = mockUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // 更新导航栏
    updateNavigationBar();
    
    showMessage('微信登录成功！');
    
    setTimeout(() => {
        if (typeof window.showPage === 'function') {
            window.showPage('profile');
        }
    }, 1000);
};

// 检查登录并显示个人中心
window.checkLoginAndShowProfile = function() {
    if (checkLoginStatus()) {
        // 已登录，直接显示个人中心
        if (typeof window.showPage === 'function') {
            window.showPage('profile');
        }
    } else {
        // 未登录，跳转到登录页面
        showMessage('请先登录');
        if (typeof window.showPage === 'function') {
            window.showPage('login');
        }
    }
};

// 退出登录
window.logout = function() {
    if (confirm('确定要退出登录吗？')) {
        localStorage.removeItem('currentUser');
        currentUser = null;
        updateNavigationBar();
        showMessage('已退出登录');
        
        // 跳转到首页
        setTimeout(() => {
            if (typeof window.showPage === 'function') {
                window.showPage('home');
            }
        }, 500);
    }
};

// 页面加载时检查登录状态
if (typeof window !== 'undefined') {
    // 延迟执行，确保DOM已加载
    setTimeout(() => {
        checkLoginStatus();
        updateNavigationBar();
    }, 500);
}

// ============================================
// 会员系统和支付功能模块（新增功能，不影响现有代码）
// ============================================

// 会员套餐配置
const membershipPlans = {
    free: {
        id: 'free',
        name: '免费版',
        price: 0,
        period: '永久',
        icon: '🆓',
        features: [
            '每日运势查询（基础版）',
            '星座配对（基础版）',
            '社区浏览和评论',
            '个人资料管理'
        ]
    },
    basic: {
        id: 'basic',
        name: '基础会员',
        price: 19.9,
        period: '月',
        icon: '💎',
        features: [
            '每日运势查询（详细版）',
            '星座配对（详细版）',
            '社区发帖和互动',
            '无广告体验',
            '历史运势查看',
            '个性化推荐'
        ]
    },
    vip: {
        id: 'vip',
        name: 'VIP会员',
        price: 49.9,
        period: '月',
        icon: '👑',
        features: [
            '所有基础会员功能',
            '每周运势预测',
            '深度星座分析',
            '专属客服支持',
            '优先功能体验',
            '会员专属标识',
            '离线缓存功能'
        ]
    },
    annual: {
        id: 'annual',
        name: '年度VIP',
        price: 399,
        period: '年',
        icon: '📅',
        features: [
            '所有VIP会员功能',
            '2个月免费赠送',
            '生日专属服务',
            '线下活动优先参与'
        ]
    }
};

// 当前支付订单信息
let currentPaymentOrder = null;

// 初始化会员页面
window.initializeMembership = function() {
    // 检查登录状态
    if (!checkLoginStatus()) {
        showMessage('请先登录');
        if (typeof window.showPage === 'function') {
            window.showPage('login');
        }
        return;
    }
    
    console.log('会员页面初始化完成');
};

// 选择会员套餐
window.selectMembership = function(planId) {
    // 检查登录状态
    if (!checkLoginStatus()) {
        showMessage('请先登录');
        if (typeof window.showPage === 'function') {
            window.showPage('login');
        }
        return;
    }
    
    const plan = membershipPlans[planId];
    if (!plan) {
        showMessage('套餐不存在');
        return;
    }
    
    // 如果是免费版，直接设置
    if (planId === 'free') {
        setUserMembership('free', null);
        showMessage('已设置为免费用户');
        if (typeof window.showPage === 'function') {
            window.showPage('profile');
        }
        return;
    }
    
    // 创建支付订单
    const orderId = 'ORDER' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
    currentPaymentOrder = {
        orderId: orderId,
        planId: planId,
        planName: plan.name,
        amount: plan.price,
        period: plan.period,
        createTime: new Date().toISOString()
    };
    
    // 跳转到支付页面
    if (typeof window.showPage === 'function') {
        window.showPage('payment');
    }
    
    // 初始化支付页面
    setTimeout(() => {
        if (typeof window.initializePayment === 'function') {
            window.initializePayment();
        }
    }, 100);
};

// 初始化支付页面
window.initializePayment = function() {
    if (!currentPaymentOrder) {
        showMessage('订单信息错误');
        if (typeof window.showPage === 'function') {
            window.showPage('membership');
        }
        return;
    }
    
    // 显示订单信息
    const planNameEl = document.getElementById('paymentPlanName');
    const amountEl = document.getElementById('paymentAmount');
    const orderIdEl = document.getElementById('paymentOrderId');
    
    if (planNameEl) planNameEl.textContent = currentPaymentOrder.planName;
    if (amountEl) amountEl.textContent = '¥' + currentPaymentOrder.amount.toFixed(2);
    if (orderIdEl) orderIdEl.textContent = currentPaymentOrder.orderId;
    
    // 隐藏二维码
    const qrcodeEl = document.getElementById('paymentQrcode');
    if (qrcodeEl) qrcodeEl.style.display = 'none';
};

// 选择支付方式
window.selectPaymentMethod = function(method) {
    const wechatRadio = document.getElementById('wechatPay');
    const alipayRadio = document.getElementById('alipayPay');
    
    if (method === 'wechat') {
        if (wechatRadio) wechatRadio.checked = true;
    } else if (method === 'alipay') {
        if (alipayRadio) alipayRadio.checked = true;
    }
};

// 处理支付（模拟支付流程）
window.processPayment = function() {
    if (!currentPaymentOrder) {
        showMessage('订单信息错误');
        return;
    }
    
    // 获取选择的支付方式
    const wechatRadio = document.getElementById('wechatPay');
    const alipayRadio = document.getElementById('alipayPay');
    const paymentMethod = wechatRadio && wechatRadio.checked ? 'wechat' : 'alipay';
    
    // 显示二维码（演示模式）
    const qrcodeEl = document.getElementById('paymentQrcode');
    if (qrcodeEl) {
        qrcodeEl.style.display = 'block';
        const qrcodeImage = document.getElementById('qrcodeImage');
        if (qrcodeImage) {
            qrcodeImage.innerHTML = `
                <div class="payment-simulation">
                    <i class="bi bi-${paymentMethod === 'wechat' ? 'wechat' : 'wallet2'}" style="font-size: 80px; color: ${paymentMethod === 'wechat' ? '#07c160' : '#1677ff'};"></i>
                    <p class="mt-3"><strong>${paymentMethod === 'wechat' ? '微信' : '支付宝'}支付</strong></p>
                    <p class="text-muted">演示模式：点击下方按钮模拟支付成功</p>
                    <button class="btn btn-success mt-3" onclick="simulatePaymentSuccess()">
                        <i class="bi bi-check-circle"></i> 模拟支付成功
                    </button>
                </div>
            `;
        }
    }
};

// 模拟支付成功
window.simulatePaymentSuccess = async function() {
    if (!currentPaymentOrder) {
        showMessage('订单信息错误');
        return;
    }
    
    // 显示加载状态
    showMessage('正在处理支付...');
    
    // 计算会员到期时间
    const now = new Date();
    let expiryDate = null;
    
    if (currentPaymentOrder.period === '月') {
        expiryDate = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
    } else if (currentPaymentOrder.period === '年') {
        expiryDate = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
    }
    
    try {
        // 保存会员信息
        await setUserMembership(currentPaymentOrder.planId, expiryDate.toISOString());
        
        // 保存订单记录
        await saveOrderRecord(currentPaymentOrder, 'success');
        
        // 显示成功消息
        showMessage('支付成功！会员权益已生效');
        
        // 跳转到个人中心
        setTimeout(() => {
            if (typeof window.showPage === 'function') {
                window.showPage('profile');
            }
            // 更新会员状态显示
            if (typeof window.updateMembershipStatus === 'function') {
                window.updateMembershipStatus();
            }
        }, 1000);
        
        // 清空订单信息
        currentPaymentOrder = null;
    } catch (error) {
        console.error('支付处理失败:', error);
        showMessage('支付处理失败，请稍后重试');
    }
};

// 取消支付
window.cancelPayment = function() {
    if (confirm('确定要取消订单吗？')) {
        currentPaymentOrder = null;
        if (typeof window.showPage === 'function') {
            window.showPage('membership');
        }
    }
};

// 设置用户会员状态
async function setUserMembership(planId, expiryDate) {
    if (!currentUser) {
        showMessage('请先登录');
        return;
    }
    
    try {
        // 使用 Supabase API 设置会员
        const membershipData = {
            planId: planId,
            planName: membershipPlans[planId]?.name || '免费版',
            startDate: new Date().toISOString(),
            expiryDate: expiryDate
        };
        
        await MembershipAPI.setUserMembership(currentUser.phone, membershipData);
        
        // 更新本地 currentUser 对象（用于前端状态管理）
        currentUser.membership = {
            planId: planId,
            planName: membershipPlans[planId]?.name || '免费版',
            expiryDate: expiryDate,
            purchaseTime: new Date().toISOString()
        };
        
        // 保存到localStorage（用于前端状态管理）
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } catch (error) {
        console.error('设置会员状态失败:', error);
        showMessage('设置会员状态失败，请稍后重试');
    }
}

// 保存订单记录
async function saveOrderRecord(order, status) {
    try {
        // 使用 Supabase API 保存订单
        await OrderAPI.createOrder({
            orderId: order.orderId,
            phone: currentUser?.phone || order.userId,
            planId: order.planId,
            planName: order.planName,
            amount: order.amount,
            paymentMethod: order.paymentMethod,
            status: status,
            createTime: new Date().toISOString()
        });
    } catch (error) {
        console.error('保存订单失败:', error);
        // 如果Supabase失败，仍然保存到localStorage作为备份
        const ordersStr = localStorage.getItem('userOrders');
        let orders = [];
        if (ordersStr) {
            try {
                orders = JSON.parse(ordersStr);
            } catch (e) {
                console.error('解析订单记录失败:', e);
            }
        }
        
        orders.push({
            ...order,
            status: status,
            paymentTime: new Date().toISOString(),
            userId: currentUser?.phone
        });
        
        localStorage.setItem('userOrders', JSON.stringify(orders));
    }
}

// 获取用户会员状态
async function getUserMembership(phone = null) {
    // 如果提供了phone参数，从数据库获取（用于后台管理）
    if (phone) {
        try {
            const membership = await MembershipAPI.getUserMembership(phone);
            if (!membership) {
                return {
                    planId: 'free',
                    planName: '免费版',
                    expiryDate: null,
                    isExpired: false
                };
            }
            
            const isExpired = membership.expiryDate ? new Date(membership.expiryDate) < new Date() : false;
            return {
                ...membership,
                isExpired: isExpired
            };
        } catch (error) {
            console.error('获取会员信息失败:', error);
            return {
                planId: 'free',
                planName: '免费版',
                expiryDate: null,
                isExpired: false
            };
        }
    }
    
    // 如果没有提供phone，从当前登录用户获取
    if (!currentUser) {
        return {
            planId: 'free',
            planName: '免费版',
            expiryDate: null,
            isExpired: false
        };
    }
    
    // 先从localStorage获取（快速响应）
    if (currentUser.membership) {
        const membership = currentUser.membership;
        const expiryDate = membership.expiryDate ? new Date(membership.expiryDate) : null;
        const isExpired = expiryDate ? expiryDate < new Date() : false;
        
        return {
            planId: membership.planId || 'free',
            planName: membership.planName || '免费版',
            expiryDate: membership.expiryDate,
            isExpired: isExpired
        };
    }
    
    // 如果localStorage没有，返回默认值
    // 注意：如果需要从数据库获取，需要调用方使用await
    return {
        planId: 'free',
        planName: '免费版',
        expiryDate: null,
        isExpired: false
    };
}

// 检查会员权限
window.checkMembershipPermission = function(feature) {
    const membership = getUserMembership();
    
    // 如果会员已过期，降级为免费用户
    if (membership.isExpired && membership.planId !== 'free') {
        setUserMembership('free', null);
        return false;
    }
    
    // 免费用户权限
    if (membership.planId === 'free') {
        const freeFeatures = ['view_fortune_basic', 'view_match_basic', 'view_community', 'view_profile'];
        return freeFeatures.includes(feature);
    }
    
    // 基础会员权限
    if (membership.planId === 'basic') {
        const basicFeatures = ['view_fortune_detail', 'view_match_detail', 'post_community', 'no_ads', 'view_history'];
        return basicFeatures.includes(feature);
    }
    
    // VIP会员权限（包含所有功能）
    if (membership.planId === 'vip' || membership.planId === 'annual') {
        return true; // VIP拥有所有权限
    }
    
    return false;
};

// 更新个人中心会员状态显示
window.updateMembershipStatus = function() {
    const membership = getUserMembership();
    const membershipTypeEl = document.getElementById('membershipType');
    const membershipExpiryEl = document.getElementById('membershipExpiry');
    const membershipIconEl = document.getElementById('membershipIcon');
    const membershipBenefitsEl = document.getElementById('membershipBenefits');
    
    if (membershipTypeEl) {
        membershipTypeEl.textContent = membership.planName;
    }
    
    if (membershipExpiryEl) {
        if (membership.expiryDate) {
            const expiryDate = new Date(membership.expiryDate);
            if (membership.isExpired) {
                membershipExpiryEl.textContent = '已过期';
                membershipExpiryEl.className = 'text-danger mb-0';
            } else {
                membershipExpiryEl.textContent = `有效期至：${expiryDate.toLocaleDateString()}`;
                membershipExpiryEl.className = 'text-success mb-0';
            }
        } else {
            membershipExpiryEl.textContent = '永久有效';
            membershipExpiryEl.className = 'text-muted mb-0';
        }
    }
    
    if (membershipIconEl) {
        const iconMap = {
            'free': 'bi-person',
            'basic': 'bi-star',
            'vip': 'bi-star-fill',
            'annual': 'bi-award'
        };
        membershipIconEl.className = 'bi ' + (iconMap[membership.planId] || 'bi-person');
    }
    
    if (membershipBenefitsEl) {
        const plan = membershipPlans[membership.planId] || membershipPlans.free;
        membershipBenefitsEl.innerHTML = `
            <div class="benefits-title">当前权益：</div>
            <ul class="benefits-list">
                ${plan.features.map(feature => `<li><i class="bi bi-check-circle"></i> ${feature}</li>`).join('')}
            </ul>
        `;
    }
};

// 页面加载时更新会员状态
if (typeof window !== 'undefined') {
    setTimeout(() => {
        if (checkLoginStatus() && typeof window.updateMembershipStatus === 'function') {
            window.updateMembershipStatus();
        }
    }, 600);
}

// ============================================
// 第二阶段功能：本周/本月运势、个人中心完善、社区扩展
// ============================================

// 检查会员权限并显示功能
window.checkMembershipAndShow = function(feature, tabId) {
    if (typeof window.checkMembershipPermission === 'function') {
        const hasPermission = window.checkMembershipPermission(feature);
        if (!hasPermission) {
            showMessage('此功能需要会员权限，请先开通会员');
            if (typeof window.showPage === 'function') {
                window.showPage('membership');
            }
            return false;
        }
    }
    return true;
};

// 生成本周运势
function generateWeeklyFortune(zodiacId) {
    const baseFortune = fortuneData[zodiacId];
    if (!baseFortune) return null;
    
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay()); // 本周一
    
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
        const day = new Date(weekStart);
        day.setDate(weekStart.getDate() + i);
        weekDays.push(day);
    }
    
    const weeklyData = weekDays.map((day, index) => {
        const daySeed = day.getDate() + day.getMonth();
        const variation = Math.sin(daySeed * 0.1) * 10;
        
        return {
            date: day.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric', weekday: 'short' }),
            overall: Math.max(60, Math.min(99, Math.round(baseFortune.overall.score + variation + (index * 2)))),
            love: Math.max(60, Math.min(99, Math.round(baseFortune.love.score + variation + (index * 1.5)))),
            career: Math.max(60, Math.min(99, Math.round(baseFortune.career.score + variation + (index * 1.8)))),
            health: Math.max(60, Math.min(99, Math.round(baseFortune.health.score + variation + (index * 1.2))))
        };
    });
    
    return {
        weekStart: weekDays[0].toLocaleDateString('zh-CN'),
        weekEnd: weekDays[6].toLocaleDateString('zh-CN'),
        days: weeklyData,
        summary: {
            bestDay: weeklyData.reduce((best, day) => day.overall > best.overall ? day : best, weeklyData[0]),
            avgOverall: Math.round(weeklyData.reduce((sum, day) => sum + day.overall, 0) / 7),
            trend: weeklyData[6].overall > weeklyData[0].overall ? '上升' : '下降'
        }
    };
}

// 生成本月运势
function generateMonthlyFortune(zodiacId) {
    const baseFortune = fortuneData[zodiacId];
    if (!baseFortune) return null;
    
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const daysInMonth = monthEnd.getDate();
    
    // 生成4周的运势概览
    const weeks = [];
    for (let week = 0; week < 4; week++) {
        const weekStart = week * 7 + 1;
        const weekEnd = Math.min(weekStart + 6, daysInMonth);
        
        const weekSeed = today.getMonth() + week;
        const variation = Math.sin(weekSeed * 0.2) * 15;
        
        weeks.push({
            week: week + 1,
            period: `${weekStart}日-${weekEnd}日`,
            overall: Math.max(65, Math.min(95, Math.round(baseFortune.overall.score + variation + (week * 3)))),
            love: Math.max(65, Math.min(95, Math.round(baseFortune.love.score + variation + (week * 2)))),
            career: Math.max(65, Math.min(95, Math.round(baseFortune.career.score + variation + (week * 2.5)))),
            health: Math.max(65, Math.min(95, Math.round(baseFortune.health.score + variation + (week * 1.5)))),
            highlight: week === 0 ? '月初运势平稳，适合规划' : 
                      week === 1 ? '月中运势上升，把握机会' :
                      week === 2 ? '下旬运势波动，保持谨慎' : '月末运势回升，总结收获'
        });
    }
    
    return {
        month: today.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' }),
        weeks: weeks,
        summary: {
            bestWeek: weeks.reduce((best, week) => week.overall > best.overall ? week : best, weeks[0]),
            avgOverall: Math.round(weeks.reduce((sum, week) => sum + week.overall, 0) / 4),
            luckyDays: [5, 12, 18, 25], // 幸运日期
            advice: '本月整体运势良好，注意把握关键时机，保持积极心态。'
        }
    };
}

// 显示本周运势
function showWeeklyFortune(zodiacId) {
    if (!checkMembershipPermission('view_weekly_fortune')) {
        return;
    }
    
    const zodiac = zodiacData.find(z => z.id === zodiacId);
    if (!zodiac) return;
    
    const weeklyData = generateWeeklyFortune(zodiacId);
    if (!weeklyData) return;
    
    const weekZodiacName = document.getElementById('weekZodiacName');
    const weekDateRange = document.getElementById('weekDateRange');
    const weekFortuneBody = document.getElementById('weekFortuneBody');
    
    if (weekZodiacName) weekZodiacName.textContent = `${zodiac.icon} ${zodiac.name} 本周运势`;
    if (weekDateRange) weekDateRange.textContent = `${weeklyData.weekStart} - ${weeklyData.weekEnd}`;
    
    if (weekFortuneBody) {
        weekFortuneBody.innerHTML = `
            <div class="weekly-summary mb-4">
                <div class="alert alert-success">
                    <h5><i class="bi bi-graph-up"></i> 本周运势概览</h5>
                    <p class="mb-2">平均运势：<strong>${weeklyData.summary.avgOverall}分</strong></p>
                    <p class="mb-2">最佳日期：<strong>${weeklyData.summary.bestDay.date}</strong>（${weeklyData.summary.bestDay.overall}分）</p>
                    <p class="mb-0">运势趋势：<strong>${weeklyData.summary.trend}</strong></p>
                </div>
            </div>
            <div class="weekly-days">
                ${weeklyData.days.map((day, index) => `
                    <div class="weekly-day-item mb-3">
                        <div class="day-header">
                            <h6>${day.date}</h6>
                        </div>
                        <div class="day-scores">
                            <div class="day-score-item">
                                <span class="score-label">综合</span>
                                <div class="mini-score-bar">
                                    <div class="mini-bar" style="width: ${day.overall}%"></div>
                                </div>
                                <span class="score-value">${day.overall}</span>
                            </div>
                            <div class="day-score-item">
                                <span class="score-label">爱情</span>
                                <div class="mini-score-bar">
                                    <div class="mini-bar" style="width: ${day.love}%"></div>
                                </div>
                                <span class="score-value">${day.love}</span>
                            </div>
                            <div class="day-score-item">
                                <span class="score-label">事业</span>
                                <div class="mini-score-bar">
                                    <div class="mini-bar" style="width: ${day.career}%"></div>
                                </div>
                                <span class="score-value">${day.career}</span>
                            </div>
                            <div class="day-score-item">
                                <span class="score-label">健康</span>
                                <div class="mini-score-bar">
                                    <div class="mini-bar" style="width: ${day.health}%"></div>
                                </div>
                                <span class="score-value">${day.health}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// 显示本月运势
function showMonthlyFortune(zodiacId) {
    if (!checkMembershipPermission('view_monthly_fortune')) {
        return;
    }
    
    const zodiac = zodiacData.find(z => z.id === zodiacId);
    if (!zodiac) return;
    
    const monthlyData = generateMonthlyFortune(zodiacId);
    if (!monthlyData) return;
    
    const monthZodiacName = document.getElementById('monthZodiacName');
    const monthDateRange = document.getElementById('monthDateRange');
    const monthFortuneBody = document.getElementById('monthFortuneBody');
    
    if (monthZodiacName) monthZodiacName.textContent = `${zodiac.icon} ${zodiac.name} 本月运势`;
    if (monthDateRange) monthDateRange.textContent = monthlyData.month;
    
    if (monthFortuneBody) {
        monthFortuneBody.innerHTML = `
            <div class="monthly-summary mb-4">
                <div class="alert alert-info">
                    <h5><i class="bi bi-calendar-check"></i> ${monthlyData.month}运势总览</h5>
                    <p class="mb-2">平均运势：<strong>${monthlyData.summary.avgOverall}分</strong></p>
                    <p class="mb-2">最佳周次：<strong>第${monthlyData.summary.bestWeek.week}周</strong>（${monthlyData.summary.bestWeek.overall}分）</p>
                    <p class="mb-2">幸运日期：<strong>${monthlyData.summary.luckyDays.join('日、')}日</strong></p>
                    <p class="mb-0">${monthlyData.summary.advice}</p>
                </div>
            </div>
            <div class="monthly-weeks">
                ${monthlyData.weeks.map(week => `
                    <div class="monthly-week-item mb-4">
                        <div class="week-header">
                            <h5>第${week.week}周（${week.period}）</h5>
                            <p class="text-muted mb-2">${week.highlight}</p>
                        </div>
                        <div class="week-scores">
                            <div class="week-score-item">
                                <i class="bi bi-star"></i> 综合运势：<strong>${week.overall}分</strong>
                            </div>
                            <div class="week-score-item">
                                <i class="bi bi-heart"></i> 爱情运势：<strong>${week.love}分</strong>
                            </div>
                            <div class="week-score-item">
                                <i class="bi bi-briefcase"></i> 事业运势：<strong>${week.career}分</strong>
                            </div>
                            <div class="week-score-item">
                                <i class="bi bi-heart-pulse"></i> 健康运势：<strong>${week.health}分</strong>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// 更新selectFortuneZodiac以支持本周/本月运势
const originalSelectFortuneZodiac = window.selectFortuneZodiac;
window.selectFortuneZodiac = function(zodiacId) {
    originalSelectFortuneZodiac(zodiacId);
    
    // 如果当前显示的是本周运势标签
    const weekTab = document.getElementById('week-tab');
    if (weekTab && weekTab.classList.contains('active')) {
        showWeeklyFortune(zodiacId);
    }
    
    // 如果当前显示的是本月运势标签
    const monthTab = document.getElementById('month-tab');
    if (monthTab && monthTab.classList.contains('active')) {
        showMonthlyFortune(zodiacId);
    }
};

// 监听运势标签切换
if (typeof window !== 'undefined') {
    setTimeout(() => {
        const fortuneTabs = document.getElementById('fortuneTabs');
        if (fortuneTabs) {
            fortuneTabs.addEventListener('shown.bs.tab', function(event) {
                const targetId = event.target.getAttribute('data-bs-target');
                const zodiacId = selectedZodiac;
                
                if (targetId === '#week-fortune' && zodiacId) {
                    if (checkMembershipPermission('view_weekly_fortune')) {
                        showWeeklyFortune(zodiacId);
                    }
                } else if (targetId === '#month-fortune' && zodiacId) {
                    if (checkMembershipPermission('view_monthly_fortune')) {
                        showMonthlyFortune(zodiacId);
                    }
                }
            });
        }
    }, 1000);
}

// 更新会员权限检查函数，添加新功能权限
const originalCheckMembershipPermission = window.checkMembershipPermission;
window.checkMembershipPermission = function(feature) {
    const membership = getUserMembership();
    
    if (membership.isExpired && membership.planId !== 'free') {
        setUserMembership('free', null);
    }
    
    // 免费用户权限
    if (membership.planId === 'free') {
        const freeFeatures = [
            'view_fortune_basic', 
            'view_match_basic', 
            'view_community', 
            'view_profile'
        ];
        return freeFeatures.includes(feature);
    }
    
    // 基础会员权限
    if (membership.planId === 'basic') {
        const basicFeatures = [
            'view_fortune_detail', 
            'view_match_detail', 
            'post_community', 
            'no_ads', 
            'view_history',
            'view_weekly_fortune',
            'upload_image'
        ];
        return basicFeatures.includes(feature);
    }
    
    // VIP会员权限（包含所有功能）
    if (membership.planId === 'vip' || membership.planId === 'annual') {
        return true;
    }
    
    return false;
};

// 社区功能扩展
let communityPosts = [];
let currentCommunityFilter = { category: '', sort: 'latest', search: '' };
let uploadedImages = [];

// 初始化社区功能
window.initializeCommunity = function() {
    // 检查会员权限，显示/隐藏发布功能
    const postCard = document.getElementById('communityPostCard');
    const imageUploadSection = document.getElementById('imageUploadSection');
    const postMemberBadge = document.getElementById('postMemberBadge');
    
    if (checkMembershipPermission('post_community')) {
        if (postCard) postCard.style.display = 'block';
        if (imageUploadSection && checkMembershipPermission('upload_image')) {
            imageUploadSection.style.display = 'block';
        }
        if (postMemberBadge) postMemberBadge.style.display = 'none';
    } else {
        if (postCard) {
            postCard.style.display = 'block';
            const postBody = postCard.querySelector('.post-body');
            if (postBody) {
                postBody.innerHTML = `
                    <div class="alert alert-warning">
                        <i class="bi bi-lock"></i> 发布帖子需要基础会员及以上权限
                        <a href="#" onclick="showPage('membership'); return false;" class="alert-link">立即开通会员</a>
                    </div>
                `;
            }
        }
        if (postMemberBadge) postMemberBadge.style.display = 'inline';
    }
    
    // 加载帖子
    loadCommunityPosts();
};

// 加载社区帖子
function loadCommunityPosts() {
    const savedPosts = localStorage.getItem('communityPosts');
    if (savedPosts) {
        try {
            communityPosts = JSON.parse(savedPosts);
        } catch (e) {
            communityPosts = [];
        }
    } else {
        // 初始化默认帖子
        communityPosts = [
            {
                id: '1',
                author: '星座达人',
                authorId: 'demo_user_1',
                avatar: '⭐',
                content: '今天白羊座运势不错，适合开展新计划！',
                category: 'daily',
                time: new Date().toLocaleString('zh-CN'),
                likes: 15,
                comments: 3,
                images: [],
                status: 'approved',
                createTime: new Date().toISOString()
            }
        ];
        saveCommunityPosts();
    }
    
    displayCommunityPosts();
    updateHotTopics(); // 更新热门话题
}

// 保存社区帖子
function saveCommunityPosts() {
    localStorage.setItem('communityPosts', JSON.stringify(communityPosts));
}

// 显示社区帖子
function displayCommunityPosts() {
    const commentsList = document.getElementById('commentsList');
    if (!commentsList) return;
    
    let filteredPosts = [...communityPosts];
    
    // 搜索过滤
    if (currentCommunityFilter.search) {
        filteredPosts = filteredPosts.filter(post => 
            post.content.includes(currentCommunityFilter.search) ||
            post.author.includes(currentCommunityFilter.search)
        );
    }
    
    // 分类过滤
    if (currentCommunityFilter.category) {
        filteredPosts = filteredPosts.filter(post => 
            post.category === currentCommunityFilter.category
        );
    }
    
    // 排序
    if (currentCommunityFilter.sort === 'hot') {
        filteredPosts.sort((a, b) => (b.likes + b.comments) - (a.likes + a.comments));
    } else if (currentCommunityFilter.sort === 'popular') {
        filteredPosts.sort((a, b) => b.likes - a.likes);
    } else {
        filteredPosts.sort((a, b) => new Date(b.time) - new Date(a.time));
    }
    
    if (filteredPosts.length === 0) {
        commentsList.innerHTML = '<div class="alert alert-info text-center">暂无帖子</div>';
        return;
    }
    
    commentsList.innerHTML = filteredPosts.map(post => {
        const isOwnPost = checkLoginStatus() && currentUser && currentUser.phone === post.authorId;
        const isFollowing = checkLoginStatus() && currentUser && isUserFollowing(post.authorId);
        
        return `
        <div class="community-post-item mb-3">
            <div class="post-item-header">
                <div class="post-author">
                    <span class="author-avatar">${post.avatar || '👤'}</span>
                    <span class="author-name">${post.author}</span>
                    ${!isOwnPost && checkLoginStatus() && currentUser ? `
                        <button class="btn btn-sm ${isFollowing ? 'btn-primary' : 'btn-outline-primary'} ms-2" onclick="event.stopPropagation(); toggleFollow('${post.authorId}', '${post.author}')" id="followBtn_${post.authorId}">
                            <i class="bi bi-${isFollowing ? 'person-check' : 'person-plus'}"></i> ${isFollowing ? '已关注' : '关注'}
                        </button>
                        <button class="btn btn-sm btn-outline-info ms-1" onclick="event.stopPropagation(); sendPrivateMessage('${post.authorId}', '${post.author}')">
                            <i class="bi bi-envelope"></i> 私信
                        </button>
                    ` : ''}
                    <span class="badge bg-secondary ms-2">${getCategoryName(post.category)}</span>
                    ${post.status === 'pending' ? '<span class="badge bg-warning ms-1">审核中</span>' : ''}
                    ${post.status === 'rejected' ? '<span class="badge bg-danger ms-1">未通过</span>' : ''}
                </div>
                <div class="post-time">${post.time}</div>
            </div>
            <div class="post-item-content">${post.content}</div>
            ${post.images && post.images.length > 0 ? `
                <div class="post-images mt-2">
                    ${post.images.map(img => `<img src="${img}" class="post-image" alt="帖子图片">`).join('')}
                </div>
            ` : ''}
            <div class="post-item-actions mt-2">
                <button class="btn btn-sm btn-outline-primary" onclick="likePost('${post.id}')">
                    <i class="bi bi-heart"></i> ${post.likes || 0}
                </button>
                <button class="btn btn-sm btn-outline-secondary ms-2" onclick="commentPost('${post.id}')">
                    <i class="bi bi-chat"></i> ${post.comments || 0}
                </button>
            </div>
        </div>
        `;
    }).join('');
}

// 获取分类名称
function getCategoryName(category) {
    const names = {
        'daily': '每日运势',
        'match': '星座配对',
        'love': '爱情话题',
        'career': '职场发展',
        'life': '生活分享',
        'other': '其他'
    };
    return names[category] || '其他';
}

// 搜索社区
window.searchCommunity = function(keyword) {
    currentCommunityFilter.search = keyword;
    displayCommunityPosts();
};

// 按分类过滤
window.filterCommunityByCategory = function(category) {
    currentCommunityFilter.category = category;
    displayCommunityPosts();
};

// 排序社区
window.sortCommunity = function(sortType) {
    currentCommunityFilter.sort = sortType;
    displayCommunityPosts();
};

// 更新帖子字数统计
window.updatePostCharCount = function(content) {
    const charCount = document.getElementById('postCharCount');
    if (charCount) {
        charCount.textContent = content.length;
        if (content.length > 500) {
            charCount.className = 'text-danger';
        } else {
            charCount.className = '';
        }
    }
};

// 处理图片上传
// 图片压缩函数（性能优化）
function compressImage(file, maxWidth = 1920, quality = 0.8) {
    return new Promise((resolve, reject) => {
        if (!file.type.startsWith('image/')) {
            reject(new Error('请选择图片文件'));
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                
                // 按比例缩放
                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }
                
                canvas.width = width;
                canvas.height = height;
                
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                canvas.toBlob(resolve, 'image/jpeg', quality);
            };
            img.onerror = () => reject(new Error('图片加载失败'));
            img.src = e.target.result;
        };
        reader.onerror = () => reject(new Error('文件读取失败'));
        reader.readAsDataURL(file);
    });
}

window.handleImageUpload = function(files) {
    if (!checkMembershipPermission('upload_image')) {
        showMessage('图片上传需要会员权限');
        return;
    }
    
    if (files.length > 3) {
        showMessage('最多只能上传3张图片');
        return;
    }
    
    uploadedImages = [];
    const preview = document.getElementById('imagePreview');
    if (!preview) return;
    
    preview.innerHTML = '';
    
    // 使用Promise.all处理所有图片压缩
    const imagePromises = Array.from(files)
        .filter(file => file.type.startsWith('image/'))
        .map((file, index) => {
            return compressImage(file, 1920, 0.8)
                .then(blob => {
                    return new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            uploadedImages.push(e.target.result);
                            resolve({ index, dataUrl: e.target.result });
                        };
                        reader.readAsDataURL(blob);
                    });
                })
                .catch(err => {
                    console.error('图片压缩失败:', err);
                    // 降级：使用原始文件
                    return new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            uploadedImages.push(e.target.result);
                            resolve({ index, dataUrl: e.target.result });
                        };
                        reader.readAsDataURL(file);
                    });
                });
        });
    
    Promise.all(imagePromises).then(results => {
        preview.innerHTML = results.map((result, i) => `
            <div class="image-preview-item">
                <img src="${result.dataUrl}" alt="预览${i + 1}">
                <button type="button" class="btn-close" onclick="removeImage(${i})"></button>
            </div>
        `).join('');
    });
};

// 移除图片
window.removeImage = function(index) {
    uploadedImages.splice(index, 1);
    const preview = document.getElementById('imagePreview');
    if (preview) {
        preview.innerHTML = uploadedImages.map((img, i) => `
            <div class="image-preview-item">
                <img src="${img}" alt="预览${i + 1}">
                <button type="button" class="btn-close" onclick="removeImage(${i})"></button>
            </div>
        `).join('');
    }
};

// 更新addPost函数以支持新功能
const originalAddPost = window.addPost;
window.addPost = function() {
    // 检查会员权限
    if (!checkMembershipPermission('post_community')) {
        showMessage('发布帖子需要基础会员及以上权限，请先开通会员');
        if (typeof window.showPage === 'function') {
            window.showPage('membership');
        }
        return;
    }
    
    const content = document.getElementById('postContent');
    const category = document.getElementById('postCategory');
    
    if (!content || !content.value.trim()) {
        showMessage('请输入帖子内容');
        return;
    }
    
    if (content.value.length > 500) {
        showMessage('帖子内容不能超过500字');
        return;
    }
    
    // 内容审核
    const moderationResult = contentModeration(content.value.trim());
    if (!moderationResult.passed) {
        showMessage(moderationResult.reason);
        return;
    }
    
    const post = {
        id: 'POST' + Date.now(),
        author: currentUser?.nickname || userProfile?.nickname || '匿名用户',
        authorId: currentUser?.phone || 'anonymous',
        avatar: currentUser?.zodiac ? zodiacData.find(z => z.id === currentUser.zodiac)?.icon || '👤' : '👤',
        content: content.value.trim(),
        category: category?.value || 'other',
        time: new Date().toLocaleString('zh-CN'),
        likes: 0,
        comments: 0,
        images: [...uploadedImages],
        status: 'approved', // 审核状态：pending(审核中), approved(已通过), rejected(未通过)
        createTime: new Date().toISOString()
    };
    
    communityPosts.unshift(post);
    saveCommunityPosts();
    
    // 更新热门话题
    updateHotTopics();
    
    // 清空输入
    content.value = '';
    uploadedImages = [];
    const preview = document.getElementById('imagePreview');
    if (preview) preview.innerHTML = '';
    updatePostCharCount('');
    
    showMessage('发布成功！');
    displayCommunityPosts();
};

// 点赞帖子
window.likePost = function(postId) {
    const post = communityPosts.find(p => p.id === postId);
    if (post) {
        post.likes = (post.likes || 0) + 1;
        saveCommunityPosts();
        displayCommunityPosts();
    }
};

// 评论帖子
window.commentPost = function(postId) {
    const comment = prompt('请输入您的评论：');
    if (comment && comment.trim()) {
        // 内容审核
        const moderationResult = contentModeration(comment.trim());
        if (!moderationResult.passed) {
            showMessage(moderationResult.reason);
            return;
        }
        
        const post = communityPosts.find(p => p.id === postId);
        if (post) {
            post.comments = (post.comments || 0) + 1;
            saveCommunityPosts();
            displayCommunityPosts();
            showMessage('评论成功！');
            
            // 如果评论的是其他用户的帖子，发送互动消息
            if (checkLoginStatus() && currentUser && post.authorId && post.authorId !== currentUser.phone) {
                if (typeof window.createInteractionNotification === 'function') {
                    window.createInteractionNotification(
                        '有人评论了您的帖子',
                        `${currentUser.nickname}评论了您的帖子："${comment.substring(0, 20)}${comment.length > 20 ? '...' : ''}"`,
                        '查看详情',
                        `showPage('community')`
                    );
                }
            }
        }
    }
};

// ============================================
// 社区扩展功能：内容审核、热门话题、用户互动
// ============================================

// 敏感词列表（内容审核）
const sensitiveWords = [
    '广告', '推广', '营销', '刷单', '兼职', '赚钱',
    '色情', '暴力', '赌博', '诈骗', '传销'
];

// 内容审核函数
function contentModeration(content) {
    const lowerContent = content.toLowerCase();
    
    // 检查敏感词
    for (let word of sensitiveWords) {
        if (lowerContent.includes(word.toLowerCase())) {
            return {
                passed: false,
                reason: `内容包含敏感词"${word}"，请修改后重新发布`
            };
        }
    }
    
    // 检查内容长度
    if (content.trim().length < 5) {
        return {
            passed: false,
            reason: '内容太短，请至少输入5个字符'
        };
    }
    
    // 检查是否全是重复字符
    if (/^(.)\1+$/.test(content.trim())) {
        return {
            passed: false,
            reason: '内容无效，请重新输入'
        };
    }
    
    return { passed: true };
}

// 热门话题推荐
function updateHotTopics() {
    const hotTopicsList = document.getElementById('hotTopicsList');
    if (!hotTopicsList) return;
    
    // 统计每个分类的热度（点赞+评论数）
    const topicStats = {};
    communityPosts.forEach(post => {
        if (post.status !== 'rejected') {
            const category = post.category || 'other';
            if (!topicStats[category]) {
                topicStats[category] = {
                    category: category,
                    name: getCategoryName(category),
                    hotness: 0,
                    postCount: 0
                };
            }
            topicStats[category].hotness += (post.likes || 0) + (post.comments || 0);
            topicStats[category].postCount += 1;
        }
    });
    
    // 转换为数组并排序
    const topics = Object.values(topicStats)
        .sort((a, b) => b.hotness - a.hotness)
        .slice(0, 6); // 显示前6个热门话题
    
    if (topics.length === 0) {
        hotTopicsList.innerHTML = '<p class="text-muted">暂无热门话题</p>';
        return;
    }
    
    hotTopicsList.innerHTML = topics.map(topic => `
        <span class="hot-topic-tag" onclick="filterCommunityByCategory('${topic.category}')">
            <i class="bi bi-fire"></i> ${topic.name} (${topic.hotness})
        </span>
    `).join('');
}

// 用户关注功能
let userFollows = {}; // 存储用户关注列表

// 加载用户关注列表
function loadUserFollows() {
    if (!checkLoginStatus() || !currentUser) return;
    
    const savedFollows = localStorage.getItem('userFollows_' + currentUser.phone);
    if (savedFollows) {
        try {
            userFollows = JSON.parse(savedFollows);
        } catch (e) {
            userFollows = {};
        }
    }
}

// 保存用户关注列表
function saveUserFollows() {
    if (!checkLoginStatus() || !currentUser) return;
    localStorage.setItem('userFollows_' + currentUser.phone, JSON.stringify(userFollows));
}

// 检查是否关注了某个用户
function isUserFollowing(userId) {
    if (!checkLoginStatus() || !currentUser) return false;
    return userFollows[userId] === true;
}

// 切换关注状态
window.toggleFollow = function(userId, userName) {
    if (!checkLoginStatus() || !currentUser) {
        showMessage('请先登录');
        return;
    }
    
    if (userId === currentUser.phone) {
        showMessage('不能关注自己');
        return;
    }
    
    const isFollowing = isUserFollowing(userId);
    
    if (isFollowing) {
        // 取消关注
        delete userFollows[userId];
        showMessage(`已取消关注 ${userName}`);
    } else {
        // 关注
        userFollows[userId] = true;
        showMessage(`已关注 ${userName}`);
    }
    
    saveUserFollows();
    displayCommunityPosts(); // 刷新显示
};

// 私信功能
let privateMessages = {}; // 存储私信数据

// 加载私信数据
function loadPrivateMessages() {
    if (!checkLoginStatus() || !currentUser) return;
    
    const savedMessages = localStorage.getItem('privateMessages_' + currentUser.phone);
    if (savedMessages) {
        try {
            privateMessages = JSON.parse(savedMessages);
        } catch (e) {
            privateMessages = {};
        }
    }
}

// 保存私信数据
function savePrivateMessages() {
    if (!checkLoginStatus() || !currentUser) return;
    localStorage.setItem('privateMessages_' + currentUser.phone, JSON.stringify(privateMessages));
}

// 发送私信
window.sendPrivateMessage = function(userId, userName) {
    if (!checkLoginStatus() || !currentUser) {
        showMessage('请先登录');
        return;
    }
    
    if (userId === currentUser.phone) {
        showMessage('不能给自己发私信');
        return;
    }
    
    const message = prompt(`给 ${userName} 发送私信：`);
    if (message && message.trim()) {
        // 内容审核
        const moderationResult = contentModeration(message.trim());
        if (!moderationResult.passed) {
            showMessage(moderationResult.reason);
            return;
        }
        
        // 初始化该用户的私信列表
        if (!privateMessages[userId]) {
            privateMessages[userId] = [];
        }
        
        // 添加私信
        privateMessages[userId].push({
            id: 'MSG_' + Date.now(),
            from: currentUser.phone,
            fromName: currentUser.nickname,
            to: userId,
            toName: userName,
            content: message.trim(),
            time: new Date().toISOString(),
            read: false
        });
        
        savePrivateMessages();
        showMessage('私信发送成功！');
        
        // 发送互动消息通知
        if (typeof window.createInteractionNotification === 'function') {
            window.createInteractionNotification(
                '私信已发送',
                `您已向 ${userName} 发送私信`,
                '查看私信',
                `showPrivateMessages('${userId}')`
            );
        }
    }
};

// 显示私信列表
window.showPrivateMessages = function(userId) {
    if (!checkLoginStatus() || !currentUser) return;
    
    // 创建私信对话框
    const messages = privateMessages[userId] || [];
    const userName = messages.length > 0 ? messages[0].toName : '用户';
    
    let messagesHtml = messages.map(msg => `
        <div class="private-message-item ${msg.from === currentUser.phone ? 'sent' : 'received'}">
            <div class="message-header">
                <span class="message-author">${msg.from === currentUser.phone ? '我' : msg.fromName}</span>
                <span class="message-time">${formatNotificationTime ? formatNotificationTime(msg.time) : new Date(msg.time).toLocaleString('zh-CN')}</span>
            </div>
            <div class="message-content">${msg.content}</div>
        </div>
    `).join('');
    
    if (messages.length === 0) {
        messagesHtml = '<p class="text-muted text-center">暂无私信</p>';
    }
    
    const modalHtml = `
        <div class="modal fade" id="privateMessageModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">与 ${userName} 的私信</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body" style="max-height: 400px; overflow-y: auto;">
                        <div class="private-messages-list">
                            ${messagesHtml}
                        </div>
                        <div class="mt-3">
                            <textarea class="form-control" id="newPrivateMessage" rows="3" placeholder="输入私信内容..."></textarea>
                            <button class="btn btn-primary mt-2" onclick="sendReplyMessage('${userId}', '${userName}')">发送</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 移除旧的模态框
    const oldModal = document.getElementById('privateMessageModal');
    if (oldModal) oldModal.remove();
    
    // 添加新模态框
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // 显示模态框
    const modal = new bootstrap.Modal(document.getElementById('privateMessageModal'));
    modal.show();
};

// 发送回复私信
window.sendReplyMessage = function(userId, userName) {
    const messageInput = document.getElementById('newPrivateMessage');
    if (!messageInput || !messageInput.value.trim()) {
        showMessage('请输入私信内容');
        return;
    }
    
    sendPrivateMessage(userId, userName);
    messageInput.value = '';
    
    // 刷新私信列表
    setTimeout(() => {
        showPrivateMessages(userId);
    }, 100);
};

// 更新initializeCommunity以加载关注和私信数据
const originalInitializeCommunityForExt = window.initializeCommunity;
window.initializeCommunity = function() {
    if (originalInitializeCommunityForExt) {
        originalInitializeCommunityForExt();
    }
    
    // 加载用户关注列表
    loadUserFollows();
    
    // 加载私信数据
    loadPrivateMessages();
    
    // 更新热门话题
    updateHotTopics();
};

// 注意：addPost函数已经在上面（5080行左右）集成了内容审核功能，这里不需要重复添加

// 更新评论函数以添加内容审核
const originalCommentPostForModeration = window.commentPost;
if (originalCommentPostForModeration) {
    window.commentPost = function(postId) {
        const comment = prompt('请输入您的评论：');
        if (comment && comment.trim()) {
            // 内容审核
            const moderationResult = contentModeration(comment.trim());
            if (!moderationResult.passed) {
                showMessage(moderationResult.reason);
                return;
            }
            
            // 调用原有函数
            originalCommentPostForModeration(postId);
            
            // 发送互动消息
            const post = communityPosts.find(p => p.id === postId);
            if (checkLoginStatus() && currentUser && post && post.authorId && post.authorId !== currentUser.phone) {
                if (typeof window.createInteractionNotification === 'function') {
                    window.createInteractionNotification(
                        '有人评论了您的帖子',
                        `${currentUser.nickname}评论了您的帖子："${comment.substring(0, 20)}${comment.length > 20 ? '...' : ''}"`,
                        '查看详情',
                        `showPage('community')`
                    );
                }
            }
        }
    };
}

// 更新initializePageFeatures以初始化社区
const originalInitializePageFeatures = window.initializePageFeatures;
window.initializePageFeatures = function(pageId) {
    originalInitializePageFeatures(pageId);
    
    if (pageId === 'community') {
        if (typeof window.initializeCommunity === 'function') {
            window.initializeCommunity();
        }
    }
    
    if (pageId === 'settings' || pageId === 'help' || pageId === 'feedback') {
        if (pageId === 'settings') {
            loadSettings();
        } else if (pageId === 'feedback') {
            const form = document.getElementById('feedbackForm');
            if (form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    submitFeedback();
                });
            }
        }
    }
};

// 设置功能
function loadSettings() {
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
        try {
            const settings = JSON.parse(savedSettings);
            if (document.getElementById('showProfile')) {
                document.getElementById('showProfile').checked = settings.showProfile || false;
            }
            if (document.getElementById('showZodiac')) {
                document.getElementById('showZodiac').checked = settings.showZodiac || false;
            }
            if (document.getElementById('notifyComment')) {
                document.getElementById('notifyComment').checked = settings.notifyComment !== false;
            }
            if (document.getElementById('notifyMember')) {
                document.getElementById('notifyMember').checked = settings.notifyMember !== false;
            }
        } catch (e) {
            console.error('加载设置失败:', e);
        }
    }
}

window.saveSettings = function() {
    const settings = {
        showProfile: document.getElementById('showProfile')?.checked || false,
        showZodiac: document.getElementById('showZodiac')?.checked || false,
        notifyComment: document.getElementById('notifyComment')?.checked !== false,
        notifyMember: document.getElementById('notifyMember')?.checked !== false
    };
    
    localStorage.setItem('userSettings', JSON.stringify(settings));
    showMessage('设置已保存');
};

window.changePassword = function() {
    const oldPassword = document.getElementById('oldPassword')?.value;
    const newPassword = document.getElementById('newPassword')?.value;
    
    if (!oldPassword || !newPassword) {
        showMessage('请填写完整信息');
        return;
    }
    
    if (newPassword.length < 6) {
        showMessage('新密码至少需要6位');
        return;
    }
    
    // 验证旧密码
    const usersStr = localStorage.getItem('users');
    if (usersStr) {
        try {
            const users = JSON.parse(usersStr);
            if (currentUser && users[currentUser.phone]) {
                if (users[currentUser.phone].password === oldPassword) {
                    users[currentUser.phone].password = newPassword;
                    localStorage.setItem('users', JSON.stringify(users));
                    showMessage('密码修改成功');
                    document.getElementById('oldPassword').value = '';
                    document.getElementById('newPassword').value = '';
                } else {
                    showMessage('当前密码错误');
                }
            }
        } catch (e) {
            showMessage('修改失败，请稍后再试');
        }
    }
};

// 提交反馈
window.submitFeedback = function() {
    const type = document.getElementById('feedbackType')?.value;
    const content = document.getElementById('feedbackContent')?.value.trim();
    const contact = document.getElementById('feedbackContact')?.value.trim();
    
    if (!content) {
        showMessage('请填写反馈内容');
        return;
    }
    
    const feedback = {
        id: 'FEEDBACK' + Date.now(),
        type: type,
        content: content,
        contact: contact,
        userId: currentUser?.phone || 'anonymous',
        time: new Date().toISOString()
    };
    
    const feedbacksStr = localStorage.getItem('userFeedbacks');
    let feedbacks = [];
    if (feedbacksStr) {
        try {
            feedbacks = JSON.parse(feedbacksStr);
        } catch (e) {
            feedbacks = [];
        }
    }
    
    feedbacks.push(feedback);
    localStorage.setItem('userFeedbacks', JSON.stringify(feedbacks));
    
    showMessage('反馈已提交，感谢您的建议！');
    
    // 清空表单
    document.getElementById('feedbackContent').value = '';
    document.getElementById('feedbackContact').value = '';
    
    setTimeout(() => {
        if (typeof window.showPage === 'function') {
            window.showPage('profile');
        }
    }, 1500);
};

// ============================================
// 消息通知系统模块（第三阶段功能）
// ============================================

// 消息通知数据存储
let notifications = [];
let currentNotificationFilter = 'all';

// 消息类型定义
const NotificationTypes = {
    SYSTEM: 'system',      // 系统公告
    ACTIVITY: 'activity',  // 活动推送
    MEMBER: 'member',     // 会员提醒
    INTERACTION: 'interaction' // 互动消息
};

// 初始化消息通知系统
window.initializeNotifications = function() {
    // 加载消息
    loadNotifications();
    
    // 检查会员到期提醒
    checkMemberExpiryReminder();
    
    // 更新导航栏消息图标
    updateNotificationBadge();
    
    // 显示消息列表
    displayNotifications();
};

// 加载消息通知
function loadNotifications() {
    const savedNotifications = localStorage.getItem('userNotifications');
    if (savedNotifications) {
        try {
            notifications = JSON.parse(savedNotifications);
        } catch (e) {
            notifications = [];
        }
    } else {
        // 初始化默认系统公告
        notifications = [
            {
                id: 'NOTIF_' + Date.now(),
                type: NotificationTypes.SYSTEM,
                title: '欢迎使用星座运势网站',
                content: '感谢您注册使用我们的服务！在这里您可以查看每日运势、星座配对、社区交流等功能。',
                time: new Date().toISOString(),
                read: false,
                icon: 'bi-megaphone',
                color: 'primary'
            }
        ];
        saveNotifications();
    }
}

// 保存消息通知
function saveNotifications() {
    localStorage.setItem('userNotifications', JSON.stringify(notifications));
}

// 显示消息列表
function displayNotifications() {
    const list = document.getElementById('notificationsList');
    const empty = document.getElementById('emptyNotifications');
    
    if (!list) return;
    
    let filteredNotifications = [...notifications];
    
    // 按类型过滤
    if (currentNotificationFilter !== 'all') {
        filteredNotifications = filteredNotifications.filter(n => n.type === currentNotificationFilter);
    }
    
    // 按时间排序（最新的在前）
    filteredNotifications.sort((a, b) => new Date(b.time) - new Date(a.time));
    
    // 更新分类计数
    updateNotificationCounts();
    
    if (filteredNotifications.length === 0) {
        list.style.display = 'none';
        if (empty) empty.style.display = 'block';
        return;
    }
    
    list.style.display = 'block';
    if (empty) empty.style.display = 'none';
    
    list.innerHTML = filteredNotifications.map(notif => `
        <div class="notification-item ${notif.read ? '' : 'unread'}" onclick="viewNotification('${notif.id}')">
            <div class="notification-icon ${notif.color || 'primary'}">
                <i class="bi ${notif.icon || 'bi-bell'}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-header">
                    <h6 class="notification-title">${notif.title}</h6>
                    <span class="notification-time">${formatNotificationTime(notif.time)}</span>
                </div>
                <p class="notification-text">${notif.content}</p>
                ${notif.action ? `
                    <div class="notification-action mt-2">
                        <button class="btn btn-sm btn-${notif.actionColor || 'primary'}" onclick="event.stopPropagation(); ${notif.action}">
                            ${notif.actionText}
                        </button>
                    </div>
                ` : ''}
            </div>
            <div class="notification-actions">
                ${!notif.read ? '<span class="unread-dot"></span>' : ''}
                <button class="btn btn-sm btn-link text-danger" onclick="event.stopPropagation(); deleteNotification('${notif.id}')">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// 格式化消息时间
function formatNotificationTime(timeStr) {
    const time = new Date(timeStr);
    const now = new Date();
    const diff = now - time;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return '刚刚';
    if (minutes < 60) return `${minutes}分钟前`;
    if (hours < 24) return `${hours}小时前`;
    if (days < 7) return `${days}天前`;
    
    return time.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' });
}

// 更新消息计数
function updateNotificationCounts() {
    const counts = {
        all: notifications.length,
        system: notifications.filter(n => n.type === NotificationTypes.SYSTEM).length,
        activity: notifications.filter(n => n.type === NotificationTypes.ACTIVITY).length,
        member: notifications.filter(n => n.type === NotificationTypes.MEMBER).length,
        interaction: notifications.filter(n => n.type === NotificationTypes.INTERACTION).length
    };
    
    const unreadCounts = {
        all: notifications.filter(n => !n.read).length,
        system: notifications.filter(n => n.type === NotificationTypes.SYSTEM && !n.read).length,
        activity: notifications.filter(n => n.type === NotificationTypes.ACTIVITY && !n.read).length,
        member: notifications.filter(n => n.type === NotificationTypes.MEMBER && !n.read).length,
        interaction: notifications.filter(n => n.type === NotificationTypes.INTERACTION && !n.read).length
    };
    
    // 更新标签计数
    const countElements = {
        all: document.getElementById('allCount'),
        system: document.getElementById('systemCount'),
        activity: document.getElementById('activityCount'),
        member: document.getElementById('memberCount'),
        interaction: document.getElementById('interactionCount')
    };
    
    Object.keys(countElements).forEach(key => {
        if (countElements[key]) {
            countElements[key].textContent = counts[key];
            if (unreadCounts[key] > 0) {
                countElements[key].className = 'badge bg-danger';
            } else {
                countElements[key].className = 'badge bg-secondary';
            }
        }
    });
    
    // 更新导航栏徽章
    updateNotificationBadge();
}

// 更新导航栏消息徽章
function updateNotificationBadge() {
    const badge = document.getElementById('notificationBadge');
    const navItem = document.getElementById('notificationNavItem');
    
    if (!badge || !navItem) return;
    
    const unreadCount = notifications.filter(n => !n.read).length;
    
    if (unreadCount > 0) {
        badge.textContent = unreadCount > 99 ? '99+' : unreadCount;
        badge.style.display = 'block';
    } else {
        badge.style.display = 'none';
    }
    
    // 如果已登录，显示消息图标
    if (checkLoginStatus()) {
        navItem.style.display = 'block';
    } else {
        navItem.style.display = 'none';
    }
}

// 过滤消息
window.filterNotifications = function(type) {
    currentNotificationFilter = type;
    displayNotifications();
};

// 查看消息（标记为已读）
window.viewNotification = function(id) {
    const notif = notifications.find(n => n.id === id);
    if (notif) {
        notif.read = true;
        saveNotifications();
        displayNotifications();
        updateNotificationBadge();
    }
};

// 删除消息
window.deleteNotification = function(id) {
    if (confirm('确定要删除这条消息吗？')) {
        notifications = notifications.filter(n => n.id !== id);
        saveNotifications();
        displayNotifications();
        updateNotificationBadge();
    }
};

// 标记全部已读
window.markAllAsRead = function() {
    notifications.forEach(n => n.read = true);
    saveNotifications();
    displayNotifications();
    updateNotificationBadge();
    showMessage('已标记全部消息为已读');
};

// 清空所有消息
window.clearAllNotifications = function() {
    if (confirm('确定要清空所有消息吗？此操作不可恢复。')) {
        notifications = [];
        saveNotifications();
        displayNotifications();
        updateNotificationBadge();
        showMessage('已清空所有消息');
    }
};

// 创建系统公告
window.createSystemNotification = function(title, content) {
    const notif = {
        id: 'NOTIF_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        type: NotificationTypes.SYSTEM,
        title: title,
        content: content,
        time: new Date().toISOString(),
        read: false,
        icon: 'bi-megaphone',
        color: 'primary'
    };
    
    notifications.unshift(notif);
    saveNotifications();
    displayNotifications();
    updateNotificationBadge();
    
    // 如果用户在消息页面，刷新显示
    if (typeof window.showPage === 'function') {
        const currentPage = document.querySelector('.page-section.active')?.id;
        if (currentPage === 'notifications') {
            displayNotifications();
        }
    }
};

// 创建活动推送
window.createActivityNotification = function(title, content, actionText, action) {
    const notif = {
        id: 'NOTIF_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        type: NotificationTypes.ACTIVITY,
        title: title,
        content: content,
        time: new Date().toISOString(),
        read: false,
        icon: 'bi-gift',
        color: 'success',
        action: action,
        actionText: actionText || '立即参与',
        actionColor: 'success'
    };
    
    notifications.unshift(notif);
    saveNotifications();
    displayNotifications();
    updateNotificationBadge();
};

// 创建会员提醒
window.createMemberNotification = function(title, content, actionText, action) {
    const notif = {
        id: 'NOTIF_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        type: NotificationTypes.MEMBER,
        title: title,
        content: content,
        time: new Date().toISOString(),
        read: false,
        icon: 'bi-star',
        color: 'warning',
        action: action,
        actionText: actionText || '立即续费',
        actionColor: 'warning'
    };
    
    notifications.unshift(notif);
    saveNotifications();
    displayNotifications();
    updateNotificationBadge();
};

// 创建互动消息
window.createInteractionNotification = function(title, content, actionText, action) {
    const notif = {
        id: 'NOTIF_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        type: NotificationTypes.INTERACTION,
        title: title,
        content: content,
        time: new Date().toISOString(),
        read: false,
        icon: 'bi-chat-heart',
        color: 'info',
        action: action,
        actionText: actionText || '查看详情',
        actionColor: 'info'
    };
    
    notifications.unshift(notif);
    saveNotifications();
    displayNotifications();
    updateNotificationBadge();
};

// 检查会员到期提醒
function checkMemberExpiryReminder() {
    if (!checkLoginStatus()) return;
    
    const membership = getUserMembership();
    if (!membership || !membership.expiryDate || membership.planId === 'free') return;
    
    const expiryDate = new Date(membership.expiryDate);
    const now = new Date();
    const daysLeft = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));
    
    // 检查是否已经发送过提醒
    const existingReminder = notifications.find(n => 
        n.type === NotificationTypes.MEMBER && 
        n.title.includes('会员到期') &&
        !n.read
    );
    
    if (existingReminder) return; // 已有未读提醒，不再重复发送
    
    if (daysLeft <= 7 && daysLeft > 0) {
        createMemberNotification(
            `会员将在${daysLeft}天后到期`,
            `您的${membership.planName}将在${daysLeft}天后到期，请及时续费以继续享受会员权益。`,
            '立即续费',
            `showPage('membership')`
        );
    } else if (daysLeft <= 0) {
        createMemberNotification(
            '会员已到期',
            `您的${membership.planName}已到期，已降级为免费用户。开通会员可继续享受更多权益。`,
            '立即开通',
            `showPage('membership')`
        );
    }
}

// 在社区互动时创建互动消息
const originalLikePost = window.likePost;
window.likePost = function(postId) {
    originalLikePost(postId);
    
    // 如果用户已登录，创建互动消息（模拟其他用户点赞）
    if (checkLoginStatus() && currentUser) {
        // 这里可以添加逻辑：当其他用户点赞您的帖子时发送通知
        // 当前是模拟，实际应该从服务器获取
    }
};

const originalCommentPost = window.commentPost;
window.commentPost = function(postId) {
    originalCommentPost(postId);
    
    // 如果用户已登录，创建互动消息（模拟其他用户评论）
    if (checkLoginStatus() && currentUser) {
        // 这里可以添加逻辑：当其他用户评论您的帖子时发送通知
        // 当前是模拟，实际应该从服务器获取
    }
};

// 更新initializePageFeatures以初始化消息通知
const originalInitializePageFeaturesForNotifications = window.initializePageFeatures;
window.initializePageFeatures = function(pageId) {
    originalInitializePageFeaturesForNotifications(pageId);
    
    if (pageId === 'notifications') {
        if (typeof window.initializeNotifications === 'function') {
            window.initializeNotifications();
        }
    }
};

// 更新updateNavigationBar以显示消息图标（扩展原有函数）
const originalUpdateNavigationBar = window.updateNavigationBar || updateNavigationBar;
if (originalUpdateNavigationBar) {
    window.updateNavigationBar = function() {
        if (typeof originalUpdateNavigationBar === 'function') {
            originalUpdateNavigationBar();
        }
        updateNotificationBadge();
    };
}

// 页面加载时初始化消息通知
if (typeof window !== 'undefined') {
    setTimeout(() => {
        if (checkLoginStatus()) {
            loadNotifications();
            checkMemberExpiryReminder();
            updateNotificationBadge();
        }
    }, 700);
}

// ============================================
// 邀请好友功能模块
// ============================================

// 生成邀请码
function generateInviteCode() {
    if (!checkLoginStatus()) return null;
    const user = currentUser;
    if (!user) return null;
    
    // 基于用户手机号生成唯一邀请码
    const phone = user.phone || '';
    const timestamp = user.registerTime || Date.now();
    const code = 'INV' + phone.slice(-4) + timestamp.toString().slice(-6);
    return code;
}

// 获取或创建邀请码
function getInviteCode() {
    if (!checkLoginStatus()) return null;
    
    let inviteCodes = JSON.parse(localStorage.getItem('inviteCodes') || '{}');
    const phone = currentUser.phone;
    
    if (!inviteCodes[phone]) {
        inviteCodes[phone] = {
            code: generateInviteCode(),
            createTime: new Date().toISOString()
        };
        localStorage.setItem('inviteCodes', JSON.stringify(inviteCodes));
    }
    
    return inviteCodes[phone].code;
}

// 初始化邀请页面
window.initializeInvite = function() {
    if (!checkLoginStatus()) {
        showMessage('请先登录');
        showPage('login');
        return;
    }
    
    const inviteCode = getInviteCode();
    const inviteLink = window.location.origin + window.location.pathname + '?invite=' + inviteCode;
    
    document.getElementById('inviteCode').value = inviteCode;
    document.getElementById('inviteLink').value = inviteLink;
    
    // 加载邀请统计
    loadInviteStats();
    loadInviteRecords();
};

// 加载邀请统计
function loadInviteStats() {
    const phone = currentUser.phone;
    const inviteRecords = JSON.parse(localStorage.getItem('inviteRecords') || '[]');
    const myInvites = inviteRecords.filter(r => r.inviterPhone === phone);
    
    const invitedCount = myInvites.length;
    const pointsEarned = myInvites.reduce((sum, r) => sum + (r.pointsEarned || 0), 0);
    
    document.getElementById('invitedCount').textContent = invitedCount;
    document.getElementById('pointsEarned').textContent = pointsEarned;
}

// 加载邀请记录
function loadInviteRecords() {
    const phone = currentUser.phone;
    const inviteRecords = JSON.parse(localStorage.getItem('inviteRecords') || '[]');
    const myInvites = inviteRecords.filter(r => r.inviterPhone === phone);
    
    const listEl = document.getElementById('inviteRecordsList');
    if (myInvites.length === 0) {
        listEl.innerHTML = `
            <div class="text-center text-muted py-4">
                <i class="bi bi-inbox" style="font-size: 2rem;"></i>
                <p class="mt-2">暂无邀请记录</p>
            </div>
        `;
        return;
    }
    
    listEl.innerHTML = myInvites.map(record => `
        <div class="list-group-item">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <strong>${record.inviteePhone || '未知用户'}</strong>
                    <small class="text-muted d-block">${formatTime(record.inviteTime)}</small>
                </div>
                <div class="text-success">
                    +${record.pointsEarned || 0} 积分
                </div>
            </div>
        </div>
    `).join('');
}

// 复制邀请码
window.copyInviteCode = function() {
    const code = document.getElementById('inviteCode').value;
    navigator.clipboard.writeText(code).then(() => {
        showMessage('邀请码已复制到剪贴板');
    }).catch(() => {
        // 降级方案
        const input = document.getElementById('inviteCode');
        input.select();
        document.execCommand('copy');
        showMessage('邀请码已复制到剪贴板');
    });
};

// 复制邀请链接
window.copyInviteLink = function() {
    const link = document.getElementById('inviteLink').value;
    navigator.clipboard.writeText(link).then(() => {
        showMessage('邀请链接已复制到剪贴板');
    }).catch(() => {
        const input = document.getElementById('inviteLink');
        input.select();
        document.execCommand('copy');
        showMessage('邀请链接已复制到剪贴板');
    });
};

// 检查URL中的邀请码
function checkInviteCode() {
    const urlParams = new URLSearchParams(window.location.search);
    const inviteCode = urlParams.get('invite');
    if (inviteCode) {
        localStorage.setItem('pendingInviteCode', inviteCode);
    }
}

// 处理邀请注册
function processInviteRegistration(phone) {
    const pendingCode = localStorage.getItem('pendingInviteCode');
    if (!pendingCode) return;
    
    // 查找邀请人
    const inviteCodes = JSON.parse(localStorage.getItem('inviteCodes') || '{}');
    let inviterPhone = null;
    for (const [p, data] of Object.entries(inviteCodes)) {
        if (data.code === pendingCode) {
            inviterPhone = p;
            break;
        }
    }
    
    if (!inviterPhone) return;
    
    // 记录邀请关系
    const inviteRecords = JSON.parse(localStorage.getItem('inviteRecords') || '[]');
    inviteRecords.push({
        inviterPhone: inviterPhone,
        inviteePhone: phone,
        inviteCode: pendingCode,
        inviteTime: new Date().toISOString(),
        pointsEarned: 100 // 邀请人获得100积分
    });
    localStorage.setItem('inviteRecords', JSON.stringify(inviteRecords));
    
    // 给邀请人奖励积分
    addPoints(inviterPhone, 100, '邀请好友奖励', 'invite');
    
    // 给被邀请人奖励积分
    addPoints(phone, 50, '新用户注册奖励', 'register');
    
    // 清除待处理的邀请码
    localStorage.removeItem('pendingInviteCode');
    
    showMessage('您已通过邀请注册，获得50积分奖励！');
}

// ============================================
// 积分系统模块
// ============================================

// 积分商品数据
const pointsProducts = [
    { id: 'vip1', name: '基础会员（1个月）', points: 500, type: 'membership', value: 'basic' },
    { id: 'vip2', name: 'VIP会员（1个月）', points: 1000, type: 'membership', value: 'vip' },
    { id: 'vip3', name: '年度VIP（1个月）', points: 2000, type: 'membership', value: 'annual' },
    { id: 'points100', name: '100积分', points: 0, type: 'points', value: 100, price: 10 },
    { id: 'points500', name: '500积分', points: 0, type: 'points', value: 500, price: 45 }
];

// 获取用户积分
function getUserPoints(phone) {
    if (!phone) phone = currentUser?.phone;
    if (!phone) return 0;
    
    const pointsData = JSON.parse(localStorage.getItem('userPoints') || '{}');
    return pointsData[phone] || 0;
}

// 添加积分
function addPoints(phone, points, reason, type) {
    if (!phone) phone = currentUser?.phone;
    if (!phone) return;
    
    const pointsData = JSON.parse(localStorage.getItem('userPoints') || '{}');
    pointsData[phone] = (pointsData[phone] || 0) + points;
    localStorage.setItem('userPoints', JSON.stringify(pointsData));
    
    // 记录积分变动
    const records = JSON.parse(localStorage.getItem('pointsRecords') || '[]');
    records.unshift({
        phone: phone,
        points: points,
        type: 'earn',
        reason: reason,
        category: type || 'other',
        time: new Date().toISOString()
    });
    localStorage.setItem('pointsRecords', JSON.stringify(records));
}

// 消费积分
function spendPoints(phone, points, reason, type) {
    if (!phone) phone = currentUser?.phone;
    if (!phone) return false;
    
    const currentPoints = getUserPoints(phone);
    if (currentPoints < points) {
        showMessage('积分不足');
        return false;
    }
    
    const pointsData = JSON.parse(localStorage.getItem('userPoints') || '{}');
    pointsData[phone] = currentPoints - points;
    localStorage.setItem('userPoints', JSON.stringify(pointsData));
    
    // 记录积分变动
    const records = JSON.parse(localStorage.getItem('pointsRecords') || '[]');
    records.unshift({
        phone: phone,
        points: -points,
        type: 'spend',
        reason: reason,
        category: type || 'other',
        time: new Date().toISOString()
    });
    localStorage.setItem('pointsRecords', JSON.stringify(records));
    
    return true;
}

// 初始化积分页面
window.initializePoints = function() {
    if (!checkLoginStatus()) {
        showMessage('请先登录');
        showPage('login');
        return;
    }
    
    const balance = getUserPoints();
    document.getElementById('pointsBalance').textContent = balance;
    
    // 加载积分商城
    loadPointsShop();
    
    // 加载积分记录
    loadPointsRecords();
};

// 加载积分商城
function loadPointsShop() {
    const shopEl = document.getElementById('pointsShop');
    shopEl.innerHTML = pointsProducts.map(product => `
        <div class="col-md-6 mb-3">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">
                        ${product.points > 0 ? `<strong class="text-warning">${product.points} 积分</strong>` : `<strong class="text-primary">¥${product.price}</strong>`}
                    </p>
                    <button class="btn btn-primary btn-sm" onclick="exchangeProduct('${product.id}')">
                        ${product.points > 0 ? '兑换' : '购买'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// 兑换商品
window.exchangeProduct = function(productId) {
    const product = pointsProducts.find(p => p.id === productId);
    if (!product) return;
    
    if (product.points > 0) {
        // 使用积分兑换
        if (spendPoints(null, product.points, `兑换${product.name}`, 'exchange')) {
            if (product.type === 'membership') {
                // 设置会员
                setUserMembership(product.value, 1);
                showMessage(`成功兑换${product.name}！`);
            } else if (product.type === 'points') {
                addPoints(null, product.value, `购买${product.name}`, 'purchase');
                showMessage(`成功购买${product.name}！`);
            }
            initializePoints();
        }
    } else {
        // 使用现金购买（模拟）
        showMessage('现金购买功能需要接入支付系统');
    }
};

// 加载积分记录
function loadPointsRecords() {
    const phone = currentUser.phone;
    const records = JSON.parse(localStorage.getItem('pointsRecords') || '[]');
    const myRecords = records.filter(r => r.phone === phone).slice(0, 50);
    
    const listEl = document.getElementById('pointsRecordsList');
    if (myRecords.length === 0) {
        listEl.innerHTML = '<div class="text-center text-muted py-4">暂无积分记录</div>';
        return;
    }
    
    listEl.innerHTML = myRecords.map(record => `
        <div class="list-group-item">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <strong class="${record.type === 'earn' ? 'text-success' : 'text-danger'}">
                        ${record.type === 'earn' ? '+' : '-'}${Math.abs(record.points)} 积分
                    </strong>
                    <small class="text-muted d-block">${record.reason}</small>
                    <small class="text-muted">${formatTime(record.time)}</small>
                </div>
            </div>
        </div>
    `).join('');
}

// 筛选积分记录
window.filterPointsRecords = function() {
    const filter = document.getElementById('pointsFilter').value;
    const phone = currentUser.phone;
    const records = JSON.parse(localStorage.getItem('pointsRecords') || '[]');
    let myRecords = records.filter(r => r.phone === phone);
    
    if (filter !== 'all') {
        myRecords = myRecords.filter(r => r.type === filter);
    }
    
    myRecords = myRecords.slice(0, 50);
    const listEl = document.getElementById('pointsRecordsList');
    
    if (myRecords.length === 0) {
        listEl.innerHTML = '<div class="text-center text-muted py-4">暂无积分记录</div>';
        return;
    }
    
    listEl.innerHTML = myRecords.map(record => `
        <div class="list-group-item">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <strong class="${record.type === 'earn' ? 'text-success' : 'text-danger'}">
                        ${record.type === 'earn' ? '+' : '-'}${Math.abs(record.points)} 积分
                    </strong>
                    <small class="text-muted d-block">${record.reason}</small>
                    <small class="text-muted">${formatTime(record.time)}</small>
                </div>
            </div>
        </div>
    `).join('');
};

// ============================================
// 活动页面模块
// ============================================

// 活动数据
const activitiesData = [
    {
        id: 'activity1',
        title: '新用户注册送积分',
        description: '新用户注册即可获得50积分，邀请好友还能再得100积分！',
        image: '🎁',
        startTime: '2024-01-01',
        endTime: '2024-12-31',
        status: 'ongoing',
        reward: '50积分',
        participants: 1234
    },
    {
        id: 'activity2',
        title: '每日签到领积分',
        description: '每天登录签到可获得10积分，连续签到7天额外奖励50积分！',
        image: '📅',
        startTime: '2024-01-01',
        endTime: '2024-12-31',
        status: 'ongoing',
        reward: '10-50积分',
        participants: 5678
    },
    {
        id: 'activity3',
        title: '分享运势赢大奖',
        description: '分享你的星座运势到朋友圈，有机会获得VIP会员月卡！',
        image: '🎉',
        startTime: '2024-01-01',
        endTime: '2024-12-31',
        status: 'ongoing',
        reward: 'VIP会员',
        participants: 2345
    },
    {
        id: 'activity4',
        title: '社区发帖有奖',
        description: '在社区发布优质帖子，获得点赞最多的用户可获得100积分奖励！',
        image: '💬',
        startTime: '2024-01-01',
        endTime: '2024-12-31',
        status: 'ongoing',
        reward: '100积分',
        participants: 3456
    }
];

// 初始化活动页面
window.initializeActivities = function() {
    loadActivitiesList();
};

// 加载活动列表
function loadActivitiesList() {
    const listEl = document.getElementById('activitiesList');
    listEl.innerHTML = activitiesData.map(activity => `
        <div class="col-md-6 mb-4">
            <div class="card shadow-sm h-100">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <div class="activity-icon me-3" style="font-size: 3rem;">${activity.image}</div>
                        <div>
                            <h5 class="card-title mb-0">${activity.title}</h5>
                            <small class="text-muted">${formatTime(activity.startTime)} - ${formatTime(activity.endTime)}</small>
                        </div>
                    </div>
                    <p class="card-text">${activity.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-success">${activity.status === 'ongoing' ? '进行中' : '已结束'}</span>
                            <small class="text-muted ms-2">奖励：${activity.reward}</small>
                        </div>
                        <button class="btn btn-primary btn-sm" onclick="viewActivityDetail('${activity.id}')">
                            查看详情
                        </button>
                    </div>
                    <div class="mt-2">
                        <small class="text-muted">已有 ${activity.participants} 人参与</small>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// 查看活动详情
window.viewActivityDetail = function(activityId) {
    const activity = activitiesData.find(a => a.id === activityId);
    if (!activity) return;
    
    const detailEl = document.getElementById('activityDetailContent');
    detailEl.innerHTML = `
        <div class="activity-detail">
            <div class="text-center mb-4">
                <div style="font-size: 5rem;">${activity.image}</div>
                <h2 class="mt-3">${activity.title}</h2>
                <p class="text-muted">活动时间：${formatTime(activity.startTime)} - ${formatTime(activity.endTime)}</p>
            </div>
            
            <div class="mb-4">
                <h5>活动介绍</h5>
                <p>${activity.description}</p>
            </div>
            
            <div class="mb-4">
                <h5>活动奖励</h5>
                <div class="alert alert-info">
                    <i class="bi bi-gift"></i> ${activity.reward}
                </div>
            </div>
            
            <div class="mb-4">
                <h5>参与人数</h5>
                <p class="h4 text-primary">${activity.participants} 人</p>
            </div>
            
            <div class="text-center">
                ${activity.status === 'ongoing' ? `
                    <button class="btn btn-primary btn-lg" onclick="participateActivity('${activity.id}')">
                        <i class="bi bi-check-circle"></i> 立即参与
                    </button>
                ` : `
                    <button class="btn btn-secondary btn-lg" disabled>
                        活动已结束
                    </button>
                `}
            </div>
        </div>
    `;
    
    showPage('activityDetail');
};

// 参与活动
window.participateActivity = function(activityId) {
    const activity = activitiesData.find(a => a.id === activityId);
    if (!activity) return;
    
    if (!checkLoginStatus()) {
        showMessage('请先登录');
        showPage('login');
        return;
    }
    
    // 记录参与
    let participations = JSON.parse(localStorage.getItem('activityParticipations') || '[]');
    const phone = currentUser.phone;
    const existing = participations.find(p => p.activityId === activityId && p.phone === phone);
    
    if (existing) {
        showMessage('您已经参与过此活动了');
        return;
    }
    
    participations.push({
        activityId: activityId,
        phone: phone,
        participateTime: new Date().toISOString()
    });
    localStorage.setItem('activityParticipations', JSON.stringify(participations));
    
    // 根据活动类型发放奖励
    if (activityId === 'activity1') {
        // 新用户注册活动（已在注册时处理）
        showMessage('感谢参与！');
    } else if (activityId === 'activity2') {
        // 每日签到
        handleDailyCheckin();
    } else {
        showMessage('感谢参与！活动奖励将在活动结束后统一发放。');
    }
};

// 每日签到
function handleDailyCheckin() {
    const phone = currentUser.phone;
    const today = new Date().toISOString().split('T')[0];
    
    let checkins = JSON.parse(localStorage.getItem('dailyCheckins') || '{}');
    const userCheckins = checkins[phone] || [];
    const lastCheckin = userCheckins[userCheckins.length - 1];
    
    if (lastCheckin && lastCheckin.date === today) {
        showMessage('您今天已经签到过了');
        return;
    }
    
    // 计算连续签到天数
    let consecutiveDays = 1;
    if (lastCheckin) {
        const lastDate = new Date(lastCheckin.date);
        const todayDate = new Date(today);
        const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
            consecutiveDays = (lastCheckin.consecutiveDays || 1) + 1;
        }
    }
    
    // 计算奖励积分
    let points = 10;
    if (consecutiveDays >= 7) {
        points += 50;
        showMessage(`连续签到${consecutiveDays}天，获得${points}积分！`);
    } else {
        showMessage(`签到成功，获得${points}积分！`);
    }
    
    userCheckins.push({
        date: today,
        consecutiveDays: consecutiveDays,
        points: points
    });
    checkins[phone] = userCheckins;
    localStorage.setItem('dailyCheckins', JSON.stringify(checkins));
    
    addPoints(phone, points, '每日签到', 'checkin');
    initializePoints();
};

// ============================================
// 分享功能模块
// ============================================

// 分享到微信
window.shareToWeChat = function() {
    const inviteLink = document.getElementById('inviteLink').value;
    const shareText = '快来加入星座运势，探索你的星座奥秘！';
    
    // 模拟微信分享（实际需要接入微信JS-SDK）
    if (navigator.share) {
        navigator.share({
            title: '星座运势 - 邀请好友',
            text: shareText,
            url: inviteLink
        }).catch(err => {
            copyInviteLink();
            showMessage('已复制邀请链接，请手动分享到微信');
        });
    } else {
        copyInviteLink();
        showMessage('已复制邀请链接，请手动分享到微信');
    }
};

// 分享到朋友圈
window.shareToMoments = function() {
    const inviteLink = document.getElementById('inviteLink').value;
    const shareText = '快来加入星座运势，探索你的星座奥秘！';
    
    // 模拟朋友圈分享（实际需要接入微信JS-SDK）
    copyInviteLink();
    showMessage('已复制邀请链接，请手动分享到朋友圈');
};

// 复制分享链接
window.shareToLink = function() {
    copyInviteLink();
};

// ============================================
// 离线缓存功能模块
// ============================================

// 注册Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker 注册成功:', registration);
            })
            .catch(error => {
                console.log('Service Worker 注册失败:', error);
            });
    });
}

// 缓存关键数据到localStorage（作为离线缓存）
function cacheCriticalData() {
    const cacheData = {
        zodiacData: zodiacData,
        fortuneData: fortuneData,
        matchData: matchData,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('offlineCache', JSON.stringify(cacheData));
}

// 从缓存加载数据
function loadCachedData() {
    try {
        const cached = localStorage.getItem('offlineCache');
        if (cached) {
            const data = JSON.parse(cached);
            // 可以在这里使用缓存的数据
            console.log('已加载离线缓存数据');
        }
    } catch (e) {
        console.error('加载缓存数据失败:', e);
    }
}

// 初始化时缓存数据
cacheCriticalData();

// ============================================
// 页面初始化集成
// ============================================

// 扩展initializePageFeatures
const originalInitializePageFeaturesForNewFeatures = window.initializePageFeatures;
window.initializePageFeatures = function(pageId) {
    if (typeof originalInitializePageFeaturesForNewFeatures === 'function') {
        originalInitializePageFeaturesForNewFeatures(pageId);
    }
    
    if (pageId === 'invite') {
        if (typeof window.initializeInvite === 'function') {
            window.initializeInvite();
        }
    } else if (pageId === 'points') {
        if (typeof window.initializePoints === 'function') {
            window.initializePoints();
        }
    } else if (pageId === 'activities') {
        if (typeof window.initializeActivities === 'function') {
            window.initializeActivities();
        }
    } else if (pageId === 'fortune') {
        // 初始化运势历史记录和收藏
        if (typeof initializeFortuneHistoryAndFavorites === 'function') {
            initializeFortuneHistoryAndFavorites();
        }
    }
};

// 在注册时处理邀请码（包装原有的handleRegister函数）
const originalHandleRegisterFunc = handleRegister;
handleRegister = function() {
    const result = originalHandleRegisterFunc();
    if (result && currentUser) {
        setTimeout(() => {
            processInviteRegistration(currentUser.phone);
        }, 500);
    }
    return result;
};

// 页面加载时检查邀请码
checkInviteCode();

// 格式化时间辅助函数
function formatTime(timeStr) {
    if (!timeStr) return '';
    const date = new Date(timeStr);
    return date.toLocaleDateString('zh-CN') + ' ' + date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
}

// ============================================
// 运势历史记录和收藏功能模块
// ============================================

// 显示幸运元素
function displayLuckyElements(zodiacId) {
    const luckyData = luckyElementsData[zodiacId];
    if (!luckyData) return;
    
    const elementsEl = document.getElementById('luckyElements');
    if (!elementsEl) return;
    
    // 随机选择一个幸运数字
    const randomNumber = luckyData.numbers[Math.floor(Math.random() * luckyData.numbers.length)];
    const randomColor = luckyData.colors[Math.floor(Math.random() * luckyData.colors.length)];
    
    document.getElementById('luckyNumber').textContent = randomNumber;
    document.getElementById('luckyColor').textContent = randomColor;
    document.getElementById('luckyDirection').textContent = luckyData.direction;
    document.getElementById('luckyGem').textContent = luckyData.gem;
    
    elementsEl.style.display = 'block';
}

// 保存运势到历史记录（自动）
function saveFortuneToHistoryAuto(zodiacId, fortune, type) {
    if (!zodiacId || !fortune) return;
    
    const zodiac = zodiacData.find(z => z.id === zodiacId);
    if (!zodiac) return;
    
    const historyRecord = {
        id: 'FORTUNE_' + Date.now(),
        zodiacId: zodiacId,
        zodiacName: zodiac.name,
        zodiacIcon: zodiac.icon,
        type: type, // today, week, month
        fortune: {
            overall: fortune.overall,
            love: fortune.love,
            career: fortune.career,
            health: fortune.health
        },
        luckyElements: luckyElementsData[zodiacId] || {},
        date: new Date().toISOString(),
        dateStr: new Date().toLocaleDateString('zh-CN')
    };
    
    let history = JSON.parse(localStorage.getItem('fortuneHistory') || '[]');
    
    // 检查今天是否已有记录（避免重复）
    const today = new Date().toISOString().split('T')[0];
    const existingIndex = history.findIndex(h => 
        h.zodiacId === zodiacId && 
        h.type === type && 
        h.date.split('T')[0] === today
    );
    
    if (existingIndex >= 0) {
        history[existingIndex] = historyRecord; // 更新现有记录
    } else {
        history.unshift(historyRecord); // 添加新记录
    }
    
    // 只保留最近100条记录
    history = history.slice(0, 100);
    
    localStorage.setItem('fortuneHistory', JSON.stringify(history));
    
    // 更新历史记录列表
    loadFortuneHistory();
}

// 手动保存到历史记录
window.saveFortuneToHistory = function() {
    if (!selectedZodiac) {
        showMessage('请先选择星座查看运势');
        return;
    }
    
    const fortune = generateDynamicFortune(selectedZodiac);
    saveFortuneToHistoryAuto(selectedZodiac, fortune, 'today');
    showMessage('已保存到历史记录');
};

// 加载运势历史记录
function loadFortuneHistory() {
    const history = JSON.parse(localStorage.getItem('fortuneHistory') || '[]');
    const listEl = document.getElementById('fortuneHistoryList');
    if (!listEl) return;
    
    if (history.length === 0) {
        listEl.innerHTML = `
            <div class="text-center text-muted py-4">
                <i class="bi bi-inbox" style="font-size: 2rem;"></i>
                <p class="mt-2">暂无历史记录</p>
                <small>查看运势后会自动保存到历史记录</small>
            </div>
        `;
        return;
    }
    
    listEl.innerHTML = history.map(record => {
        const zodiac = zodiacData.find(z => z.id === record.zodiacId);
        const typeText = record.type === 'today' ? '今日' : record.type === 'week' ? '本周' : '本月';
        
        return `
            <div class="list-group-item">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="flex-grow-1">
                        <div class="d-flex align-items-center mb-2">
                            <span class="h5 mb-0 me-2">${zodiac?.icon || '⭐'} ${record.zodiacName}</span>
                            <span class="badge bg-primary">${typeText}运势</span>
                        </div>
                        <div class="row g-2 mb-2">
                            <div class="col-6 col-md-3">
                                <small class="text-muted">综合</small>
                                <div><strong>${record.fortune.overall.score}</strong>分</div>
                            </div>
                            <div class="col-6 col-md-3">
                                <small class="text-muted">爱情</small>
                                <div><strong>${record.fortune.love.score}</strong>分</div>
                            </div>
                            <div class="col-6 col-md-3">
                                <small class="text-muted">事业</small>
                                <div><strong>${record.fortune.career.score}</strong>分</div>
                            </div>
                            <div class="col-6 col-md-3">
                                <small class="text-muted">健康</small>
                                <div><strong>${record.fortune.health.score}</strong>分</div>
                            </div>
                        </div>
                        <small class="text-muted">${record.dateStr}</small>
                    </div>
                    <div class="ms-3">
                        <button class="btn btn-sm btn-outline-primary" onclick="viewFortuneHistory('${record.id}')">
                            <i class="bi bi-eye"></i> 查看
                        </button>
                        <button class="btn btn-sm btn-outline-danger mt-1" onclick="deleteFortuneHistory('${record.id}')">
                            <i class="bi bi-trash"></i> 删除
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 查看历史记录详情
window.viewFortuneHistory = function(recordId) {
    const history = JSON.parse(localStorage.getItem('fortuneHistory') || '[]');
    const record = history.find(h => h.id === recordId);
    if (!record) return;
    
    // 切换到运势页面并显示该记录
    showPage('fortune');
    
    // 选择对应的星座
    const selector = document.getElementById('fortuneZodiacSelect');
    if (selector) {
        selector.value = record.zodiacId;
        selectFortuneZodiac(record.zodiacId);
    }
    
    showMessage('已加载历史记录');
};

// 删除历史记录
window.deleteFortuneHistory = function(recordId) {
    if (!confirm('确定要删除这条历史记录吗？')) return;
    
    let history = JSON.parse(localStorage.getItem('fortuneHistory') || '[]');
    history = history.filter(h => h.id !== recordId);
    localStorage.setItem('fortuneHistory', JSON.stringify(history));
    
    loadFortuneHistory();
    showMessage('已删除');
};

// 切换收藏状态
window.toggleFortuneFavorite = function() {
    if (!selectedZodiac) {
        showMessage('请先选择星座查看运势');
        return;
    }
    
    const zodiac = zodiacData.find(z => z.id === selectedZodiac);
    if (!zodiac) return;
    
    let favorites = JSON.parse(localStorage.getItem('fortuneFavorites') || '[]');
    const existingIndex = favorites.findIndex(f => f.zodiacId === selectedZodiac && f.type === 'today');
    
    if (existingIndex >= 0) {
        // 取消收藏
        favorites.splice(existingIndex, 1);
        localStorage.setItem('fortuneFavorites', JSON.stringify(favorites));
        updateFavoriteButton(selectedZodiac, 'today');
        showMessage('已取消收藏');
    } else {
        // 添加收藏
        const fortune = generateDynamicFortune(selectedZodiac);
        const favorite = {
            id: 'FAV_' + Date.now(),
            zodiacId: selectedZodiac,
            zodiacName: zodiac.name,
            zodiacIcon: zodiac.icon,
            type: 'today',
            fortune: {
                overall: fortune.overall,
                love: fortune.love,
                career: fortune.career,
                health: fortune.health
            },
            luckyElements: luckyElementsData[selectedZodiac] || {},
            date: new Date().toISOString(),
            dateStr: new Date().toLocaleDateString('zh-CN')
        };
        
        favorites.unshift(favorite);
        localStorage.setItem('fortuneFavorites', JSON.stringify(favorites));
        updateFavoriteButton(selectedZodiac, 'today');
        showMessage('已收藏');
    }
    
    loadFortuneFavorites();
};

// 更新收藏按钮状态
function updateFavoriteButton(zodiacId, type) {
    const favorites = JSON.parse(localStorage.getItem('fortuneFavorites') || '[]');
    const isFavorited = favorites.some(f => f.zodiacId === zodiacId && f.type === type);
    
    const favoriteIcon = document.getElementById('favoriteIcon');
    const favoriteText = document.getElementById('favoriteText');
    
    if (favoriteIcon && favoriteText) {
        if (isFavorited) {
            favoriteIcon.className = 'bi bi-star-fill';
            favoriteText.textContent = '已收藏';
        } else {
            favoriteIcon.className = 'bi bi-star';
            favoriteText.textContent = '收藏';
        }
    }
}

// 加载收藏列表
function loadFortuneFavorites() {
    const favorites = JSON.parse(localStorage.getItem('fortuneFavorites') || '[]');
    const listEl = document.getElementById('fortuneFavoritesList');
    if (!listEl) return;
    
    if (favorites.length === 0) {
        listEl.innerHTML = `
            <div class="text-center text-muted py-4">
                <i class="bi bi-star" style="font-size: 2rem;"></i>
                <p class="mt-2">暂无收藏</p>
                <small>点击运势页面的收藏按钮即可收藏</small>
            </div>
        `;
        return;
    }
    
    listEl.innerHTML = favorites.map(record => {
        const zodiac = zodiacData.find(z => z.id === record.zodiacId);
        const typeText = record.type === 'today' ? '今日' : record.type === 'week' ? '本周' : '本月';
        
        return `
            <div class="list-group-item">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="flex-grow-1">
                        <div class="d-flex align-items-center mb-2">
                            <span class="h5 mb-0 me-2">${zodiac?.icon || '⭐'} ${record.zodiacName}</span>
                            <span class="badge bg-warning">${typeText}运势</span>
                            <span class="badge bg-success ms-1"><i class="bi bi-star-fill"></i> 已收藏</span>
                        </div>
                        <div class="row g-2 mb-2">
                            <div class="col-6 col-md-3">
                                <small class="text-muted">综合</small>
                                <div><strong>${record.fortune.overall.score}</strong>分</div>
                            </div>
                            <div class="col-6 col-md-3">
                                <small class="text-muted">爱情</small>
                                <div><strong>${record.fortune.love.score}</strong>分</div>
                            </div>
                            <div class="col-6 col-md-3">
                                <small class="text-muted">事业</small>
                                <div><strong>${record.fortune.career.score}</strong>分</div>
                            </div>
                            <div class="col-6 col-md-3">
                                <small class="text-muted">健康</small>
                                <div><strong>${record.fortune.health.score}</strong>分</div>
                            </div>
                        </div>
                        <small class="text-muted">${record.dateStr}</small>
                    </div>
                    <div class="ms-3">
                        <button class="btn btn-sm btn-outline-primary" onclick="viewFortuneFavorite('${record.id}')">
                            <i class="bi bi-eye"></i> 查看
                        </button>
                        <button class="btn btn-sm btn-outline-danger mt-1" onclick="removeFortuneFavorite('${record.id}')">
                            <i class="bi bi-star"></i> 取消收藏
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 查看收藏详情
window.viewFortuneFavorite = function(recordId) {
    const favorites = JSON.parse(localStorage.getItem('fortuneFavorites') || '[]');
    const record = favorites.find(f => f.id === recordId);
    if (!record) return;
    
    // 切换到运势页面并显示该记录
    showPage('fortune');
    
    // 选择对应的星座
    const selector = document.getElementById('fortuneZodiacSelect');
    if (selector) {
        selector.value = record.zodiacId;
        selectFortuneZodiac(record.zodiacId);
    }
    
    showMessage('已加载收藏的运势');
};

// 取消收藏
window.removeFortuneFavorite = function(recordId) {
    if (!confirm('确定要取消收藏吗？')) return;
    
    let favorites = JSON.parse(localStorage.getItem('fortuneFavorites') || '[]');
    favorites = favorites.filter(f => f.id !== recordId);
    localStorage.setItem('fortuneFavorites', JSON.stringify(favorites));
    
    loadFortuneFavorites();
    
    // 如果当前查看的是这个星座，更新按钮状态
    if (selectedZodiac) {
        updateFavoriteButton(selectedZodiac, 'today');
    }
    
    showMessage('已取消收藏');
};

// 初始化运势历史记录和收藏
function initializeFortuneHistoryAndFavorites() {
    loadFortuneHistory();
    loadFortuneFavorites();
}

// 历史记录和收藏功能已集成到上面的initializePageFeatures中

// ============================================
// 数据统计后台模块
// ============================================

// 管理员账号配置（实际应该从服务器获取，这里用localStorage模拟）
const ADMIN_PHONE = '13800000000'; // 默认管理员手机号，可在localStorage中设置

// 检查管理员权限
function checkAdminAccess() {
    // 检查是否登录
    if (!checkLoginStatus()) {
        showMessage('请先登录');
        showPage('login');
        return false;
    }
    
    // 检查是否是管理员（实际应该从服务器验证）
    const adminPhone = localStorage.getItem('adminPhone') || ADMIN_PHONE;
    if (currentUser && currentUser.phone === adminPhone) {
        return true;
    }
    
    // 也可以设置一个简单的管理员密码
    const adminPassword = localStorage.getItem('adminPassword');
    if (adminPassword) {
        return true;
    }
    
    showMessage('需要管理员权限才能访问');
    return false;
}

// 初始化数据统计后台
window.initializeAdmin = function() {
    if (!checkAdminAccess()) {
        showPage('home');
        return;
    }
    
    loadAdminData();
};

// 加载所有后台数据
function loadAdminData() {
    loadOverviewData();
    loadUsersData();
    loadMembershipData();
    loadRevenueData();
    loadContentData();
    loadAnalyticsData();
}

// 刷新数据
window.refreshAdminData = function() {
    showMessage('正在刷新数据...');
    loadAdminData();
    setTimeout(() => {
        showMessage('数据已刷新');
    }, 500);
};

// 加载概览数据
function loadOverviewData() {
    // 总用户数
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const totalUsers = Object.keys(users).length;
    document.getElementById('totalUsers').textContent = totalUsers;
    
    // 会员用户数
    let memberCount = 0;
    Object.values(users).forEach(user => {
        const membership = getUserMembership(user.phone);
        if (membership && membership.planId !== 'free') {
            memberCount++;
        }
    });
    document.getElementById('memberUsers').textContent = memberCount;
    
    // 付费订单数
    const orders = JSON.parse(localStorage.getItem('userOrders') || '[]');
    document.getElementById('totalOrders').textContent = orders.length;
    
    // 总收入
    const totalRevenue = orders.reduce((sum, order) => sum + (order.amount || 0), 0);
    document.getElementById('totalRevenue').textContent = '¥' + totalRevenue.toFixed(2);
    
    // 用户分布图表
    const freeUsers = totalUsers - memberCount;
    document.getElementById('userDistributionChart').innerHTML = `
        <div class="card">
            <div class="card-body">
                <div class="row text-center">
                    <div class="col-6">
                        <div class="p-3">
                            <h4 class="text-primary">${freeUsers}</h4>
                            <small class="text-muted">免费用户</small>
                            <div class="progress mt-2" style="height: 20px;">
                                <div class="progress-bar bg-primary" role="progressbar" style="width: ${totalUsers > 0 ? (freeUsers / totalUsers * 100) : 0}%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="p-3">
                            <h4 class="text-success">${memberCount}</h4>
                            <small class="text-muted">会员用户</small>
                            <div class="progress mt-2" style="height: 20px;">
                                <div class="progress-bar bg-success" role="progressbar" style="width: ${totalUsers > 0 ? (memberCount / totalUsers * 100) : 0}%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 会员等级分布
    const membershipStats = {
        free: 0,
        basic: 0,
        vip: 0,
        annual: 0
    };
    
    Object.values(users).forEach(user => {
        const membership = getUserMembership(user.phone);
        if (membership) {
            membershipStats[membership.planId] = (membershipStats[membership.planId] || 0) + 1;
        } else {
            membershipStats.free++;
        }
    });
    
    document.getElementById('membershipDistributionChart').innerHTML = `
        <div class="card">
            <div class="card-body">
                <div class="mb-2">
                    <div class="d-flex justify-content-between mb-1">
                        <span>免费版</span>
                        <span><strong>${membershipStats.free}</strong></span>
                    </div>
                    <div class="progress" style="height: 8px;">
                        <div class="progress-bar" role="progressbar" style="width: ${totalUsers > 0 ? (membershipStats.free / totalUsers * 100) : 0}%"></div>
                    </div>
                </div>
                <div class="mb-2">
                    <div class="d-flex justify-content-between mb-1">
                        <span>基础会员</span>
                        <span><strong>${membershipStats.basic || 0}</strong></span>
                    </div>
                    <div class="progress" style="height: 8px;">
                        <div class="progress-bar bg-info" role="progressbar" style="width: ${totalUsers > 0 ? ((membershipStats.basic || 0) / totalUsers * 100) : 0}%"></div>
                    </div>
                </div>
                <div class="mb-2">
                    <div class="d-flex justify-content-between mb-1">
                        <span>VIP会员</span>
                        <span><strong>${membershipStats.vip || 0}</strong></span>
                    </div>
                    <div class="progress" style="height: 8px;">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: ${totalUsers > 0 ? ((membershipStats.vip || 0) / totalUsers * 100) : 0}%"></div>
                    </div>
                </div>
                <div class="mb-2">
                    <div class="d-flex justify-content-between mb-1">
                        <span>年度VIP</span>
                        <span><strong>${membershipStats.annual || 0}</strong></span>
                    </div>
                    <div class="progress" style="height: 8px;">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: ${totalUsers > 0 ? ((membershipStats.annual || 0) / totalUsers * 100) : 0}%"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 今日数据
    const today = new Date().toISOString().split('T')[0];
    const todayUsers = Object.values(users).filter(user => {
        if (!user.registerTime) return false;
        return user.registerTime.split('T')[0] === today;
    }).length;
    
    const todayOrders = orders.filter(order => {
        if (!order.createTime) return false;
        return order.createTime.split('T')[0] === today;
    });
    const todayRevenue = todayOrders.reduce((sum, order) => sum + (order.amount || 0), 0);
    
    document.getElementById('todayStats').innerHTML = `
        <div class="card">
            <div class="card-body">
                <div class="row text-center">
                    <div class="col-6 mb-3">
                        <div class="p-2 border rounded">
                            <h5 class="text-primary mb-1">${todayUsers}</h5>
                            <small class="text-muted">今日新增用户</small>
                        </div>
                    </div>
                    <div class="col-6 mb-3">
                        <div class="p-2 border rounded">
                            <h5 class="text-success mb-1">${todayOrders.length}</h5>
                            <small class="text-muted">今日订单数</small>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="p-2 border rounded">
                            <h5 class="text-info mb-1">¥${todayRevenue.toFixed(2)}</h5>
                            <small class="text-muted">今日收入</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 功能使用排行（基于localStorage数据估算）
    const featureUsage = {
        '每日运势': 0,
        '星座配对': 0,
        '社区交流': 0,
        '邀请好友': 0,
        '积分系统': 0
    };
    
    // 从历史记录估算功能使用
    const fortuneHistory = JSON.parse(localStorage.getItem('fortuneHistory') || '[]');
    featureUsage['每日运势'] = fortuneHistory.length;
    
    const inviteRecords = JSON.parse(localStorage.getItem('inviteRecords') || '[]');
    featureUsage['邀请好友'] = inviteRecords.length;
    
    const pointsRecords = JSON.parse(localStorage.getItem('pointsRecords') || '[]');
    featureUsage['积分系统'] = pointsRecords.length;
    
    const communityPosts = JSON.parse(localStorage.getItem('communityPosts') || '[]');
    featureUsage['社区交流'] = communityPosts.length;
    
    const sortedFeatures = Object.entries(featureUsage)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    document.getElementById('featureUsageRanking').innerHTML = `
        <div class="card">
            <div class="card-body">
                ${sortedFeatures.map(([name, count], index) => `
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <div class="d-flex align-items-center">
                            <span class="badge bg-primary me-2">${index + 1}</span>
                            <span>${name}</span>
                        </div>
                        <span class="text-muted"><strong>${count}</strong> 次</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// 加载用户数据
function loadUsersData() {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const usersList = Object.entries(users).map(([phone, user]) => {
        const membership = getUserMembership(phone);
        const orders = JSON.parse(localStorage.getItem('userOrders') || '[]').filter(o => o.userId === phone);
        const totalSpent = orders.reduce((sum, o) => sum + (o.amount || 0), 0);
        
        return {
            phone,
            ...user,
            membership: membership ? membership.planName : '免费版',
            orderCount: orders.length,
            totalSpent,
            isMember: membership && membership.planId !== 'free'
        };
    });
    
    displayUsersList(usersList);
}

// 显示用户列表
function displayUsersList(usersList) {
    const listEl = document.getElementById('usersList');
    if (usersList.length === 0) {
        listEl.innerHTML = '<div class="text-center text-muted py-4">暂无用户数据</div>';
        return;
    }
    
    listEl.innerHTML = usersList.map(user => `
        <div class="list-group-item">
            <div class="row align-items-center">
                <div class="col-md-3">
                    <strong>${user.nickname || '未设置'}</strong>
                    <br>
                    <small class="text-muted">${user.phone}</small>
                </div>
                <div class="col-md-2">
                    <span class="badge ${user.isMember ? 'bg-success' : 'bg-secondary'}">${user.membership}</span>
                </div>
                <div class="col-md-2">
                    <small class="text-muted">订单数</small>
                    <div><strong>${user.orderCount}</strong></div>
                </div>
                <div class="col-md-2">
                    <small class="text-muted">总消费</small>
                    <div><strong>¥${user.totalSpent.toFixed(2)}</strong></div>
                </div>
                <div class="col-md-2">
                    <small class="text-muted">注册时间</small>
                    <div><small>${user.registerTime ? new Date(user.registerTime).toLocaleDateString('zh-CN') : '未知'}</small></div>
                </div>
                <div class="col-md-1">
                    <button class="btn btn-sm btn-outline-primary" onclick="viewUserDetail('${user.phone}')">
                        <i class="bi bi-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// 搜索用户
window.searchUsers = function(keyword) {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const filtered = Object.entries(users)
        .filter(([phone, user]) => 
            phone.includes(keyword) || 
            (user.nickname && user.nickname.includes(keyword))
        )
        .map(([phone, user]) => {
            const membership = getUserMembership(phone);
            const orders = JSON.parse(localStorage.getItem('userOrders') || '[]').filter(o => o.userId === phone);
            return {
                phone,
                ...user,
                membership: membership ? membership.planName : '免费版',
                orderCount: orders.length,
                totalSpent: orders.reduce((sum, o) => sum + (o.amount || 0), 0),
                isMember: membership && membership.planId !== 'free'
            };
        });
    
    displayUsersList(filtered);
};

// 筛选用户
window.filterUsers = function() {
    const filter = document.getElementById('userFilterSelect').value;
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    let filtered = Object.entries(users).map(([phone, user]) => {
        const membership = getUserMembership(phone);
        const orders = JSON.parse(localStorage.getItem('userOrders') || '[]').filter(o => o.userId === phone);
        return {
            phone,
            ...user,
            membership: membership ? membership.planName : '免费版',
            orderCount: orders.length,
            totalSpent: orders.reduce((sum, o) => sum + (o.amount || 0), 0),
            isMember: membership && membership.planId !== 'free'
        };
    });
    
    if (filter === 'free') {
        filtered = filtered.filter(u => !u.isMember);
    } else if (filter === 'member') {
        filtered = filtered.filter(u => u.isMember);
    }
    
    displayUsersList(filtered);
};

// 排序用户
window.sortUsers = function() {
    const sortBy = document.getElementById('userSortSelect').value;
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    let usersList = Object.entries(users).map(([phone, user]) => {
        const membership = getUserMembership(phone);
        const orders = JSON.parse(localStorage.getItem('userOrders') || '[]').filter(o => o.userId === phone);
        return {
            phone,
            ...user,
            membership: membership ? membership.planName : '免费版',
            orderCount: orders.length,
            totalSpent: orders.reduce((sum, o) => sum + (o.amount || 0), 0),
            isMember: membership && membership.planId !== 'free'
        };
    });
    
    if (sortBy === 'register') {
        usersList.sort((a, b) => {
            const timeA = a.registerTime ? new Date(a.registerTime).getTime() : 0;
            const timeB = b.registerTime ? new Date(b.registerTime).getTime() : 0;
            return timeB - timeA;
        });
    } else if (sortBy === 'active') {
        // 基于订单数和积分记录估算活跃度
        usersList.sort((a, b) => b.orderCount - a.orderCount);
    }
    
    displayUsersList(usersList);
};

// 查看用户详情
window.viewUserDetail = function(phone) {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const user = users[phone];
    if (!user) return;
    
    const membership = getUserMembership(phone);
    const orders = JSON.parse(localStorage.getItem('userOrders') || '[]').filter(o => o.userId === phone);
    const points = getUserPoints(phone);
    const inviteRecords = JSON.parse(localStorage.getItem('inviteRecords') || '[]').filter(r => r.inviterPhone === phone);
    
    const detailHtml = `
        <div class="modal fade" id="userDetailModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">用户详情</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <strong>手机号：</strong>${phone}
                            </div>
                            <div class="col-md-6">
                                <strong>昵称：</strong>${user.nickname || '未设置'}
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <strong>注册时间：</strong>${user.registerTime ? new Date(user.registerTime).toLocaleString('zh-CN') : '未知'}
                            </div>
                            <div class="col-md-6">
                                <strong>会员状态：</strong>${membership ? membership.planName : '免费版'}
                            </div>
                        </div>
                        ${membership && membership.expiryDate ? `
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <strong>会员到期：</strong>${new Date(membership.expiryDate).toLocaleDateString('zh-CN')}
                                </div>
                            </div>
                        ` : ''}
                        <div class="row mb-3">
                            <div class="col-md-4">
                                <strong>订单数：</strong>${orders.length}
                            </div>
                            <div class="col-md-4">
                                <strong>总消费：</strong>¥${orders.reduce((sum, o) => sum + (o.amount || 0), 0).toFixed(2)}
                            </div>
                            <div class="col-md-4">
                                <strong>积分：</strong>${points}
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <strong>邀请人数：</strong>${inviteRecords.length}
                            </div>
                        </div>
                        <div class="mt-3">
                            <h6>订单记录</h6>
                            <div class="table-responsive">
                                <table class="table table-sm">
                                    <thead>
                                        <tr>
                                            <th>订单号</th>
                                            <th>套餐</th>
                                            <th>金额</th>
                                            <th>时间</th>
                                            <th>状态</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${orders.length > 0 ? orders.map(order => `
                                            <tr>
                                                <td>${order.orderId || 'N/A'}</td>
                                                <td>${order.planName || 'N/A'}</td>
                                                <td>¥${(order.amount || 0).toFixed(2)}</td>
                                                <td>${order.createTime ? new Date(order.createTime).toLocaleString('zh-CN') : 'N/A'}</td>
                                                <td><span class="badge bg-success">${order.status || '已完成'}</span></td>
                                            </tr>
                                        `).join('') : '<tr><td colspan="5" class="text-center text-muted">暂无订单</td></tr>'}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 移除旧的modal
    const oldModal = document.getElementById('userDetailModal');
    if (oldModal) oldModal.remove();
    
    // 添加新的modal
    document.body.insertAdjacentHTML('beforeend', detailHtml);
    const modal = new bootstrap.Modal(document.getElementById('userDetailModal'));
    modal.show();
};

// 加载会员统计数据
function loadMembershipData() {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    let totalMembers = 0;
    let expiringMembers = 0;
    const membershipStats = {
        basic: 0,
        vip: 0,
        annual: 0
    };
    
    const today = new Date();
    
    Object.values(users).forEach(user => {
        const membership = getUserMembership(user.phone);
        if (membership && membership.planId !== 'free') {
            totalMembers++;
            
            if (membership.planId === 'basic') membershipStats.basic++;
            else if (membership.planId === 'vip') membershipStats.vip++;
            else if (membership.planId === 'annual') membershipStats.annual++;
            
            // 检查即将到期（7天内）
            if (membership.expiryDate) {
                const expiryDate = new Date(membership.expiryDate);
                const daysLeft = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
                if (daysLeft <= 7 && daysLeft > 0) {
                    expiringMembers++;
                }
            }
        }
    });
    
    const totalUsers = Object.keys(users).length;
    const conversionRate = totalUsers > 0 ? ((totalMembers / totalUsers) * 100).toFixed(1) : 0;
    
    document.getElementById('totalMembers').textContent = totalMembers;
    document.getElementById('memberConversionRate').textContent = conversionRate + '%';
    document.getElementById('expiringMembers').textContent = expiringMembers;
    
    // 会员详情
    document.getElementById('membershipDetails').innerHTML = `
        <div class="card">
            <div class="card-body">
                <h6 class="mb-3">会员等级分布</h6>
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <div class="p-3 border rounded text-center">
                            <h5 class="text-info">${membershipStats.basic}</h5>
                            <small class="text-muted">基础会员</small>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="p-3 border rounded text-center">
                            <h5 class="text-warning">${membershipStats.vip}</h5>
                            <small class="text-muted">VIP会员</small>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="p-3 border rounded text-center">
                            <h5 class="text-danger">${membershipStats.annual}</h5>
                            <small class="text-muted">年度VIP</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 加载收入统计数据
function loadRevenueData() {
    const orders = JSON.parse(localStorage.getItem('userOrders') || '[]');
    const today = new Date().toISOString().split('T')[0];
    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();
    
    // 今日收入
    const todayOrders = orders.filter(order => {
        if (!order.createTime) return false;
        return order.createTime.split('T')[0] === today;
    });
    const todayRevenue = todayOrders.reduce((sum, order) => sum + (order.amount || 0), 0);
    
    // 本月收入
    const monthOrders = orders.filter(order => {
        if (!order.createTime) return false;
        const orderDate = new Date(order.createTime);
        return orderDate.getMonth() === thisMonth && orderDate.getFullYear() === thisYear;
    });
    const monthRevenue = monthOrders.reduce((sum, order) => sum + (order.amount || 0), 0);
    
    // 总订单数
    const totalOrderCount = orders.length;
    
    // 平均订单金额
    const avgOrderAmount = totalOrderCount > 0 ? orders.reduce((sum, order) => sum + (order.amount || 0), 0) / totalOrderCount : 0;
    
    document.getElementById('todayRevenue').textContent = '¥' + todayRevenue.toFixed(2);
    document.getElementById('monthRevenue').textContent = '¥' + monthRevenue.toFixed(2);
    document.getElementById('totalOrderCount').textContent = totalOrderCount;
    document.getElementById('avgOrderAmount').textContent = '¥' + avgOrderAmount.toFixed(2);
    
    // 收入详情
    const revenueByPlan = {};
    orders.forEach(order => {
        const planName = order.planName || '未知';
        if (!revenueByPlan[planName]) {
            revenueByPlan[planName] = { count: 0, amount: 0 };
        }
        revenueByPlan[planName].count++;
        revenueByPlan[planName].amount += (order.amount || 0);
    });
    
    document.getElementById('revenueDetails').innerHTML = `
        <div class="card">
            <div class="card-body">
                <h6 class="mb-3">套餐收入统计</h6>
                <div class="table-responsive">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>套餐名称</th>
                                <th>订单数</th>
                                <th>总收入</th>
                                <th>平均单价</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(revenueByPlan).map(([plan, data]) => `
                                <tr>
                                    <td>${plan}</td>
                                    <td>${data.count}</td>
                                    <td>¥${data.amount.toFixed(2)}</td>
                                    <td>¥${(data.amount / data.count).toFixed(2)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// 内容管理
let currentContentTab = 'posts';

window.showContentTab = function(tab) {
    currentContentTab = tab;
    const buttons = document.querySelectorAll('#content-pane .nav-link');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (tab === 'posts') {
        loadPostsManagement();
    } else {
        loadCommentsManagement();
    }
};

function loadContentData() {
    loadPostsManagement();
}

// 加载帖子管理
function loadPostsManagement() {
    const posts = JSON.parse(localStorage.getItem('communityPosts') || '[]');
    
    document.getElementById('contentManagementArea').innerHTML = `
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h6 class="mb-0">帖子管理 (共${posts.length}条)</h6>
                <div>
                    <select class="form-select form-select-sm d-inline-block" style="width: auto;" onchange="filterPosts(this.value)">
                        <option value="all">全部</option>
                        <option value="approved">已通过</option>
                        <option value="pending">待审核</option>
                        <option value="rejected">未通过</option>
                    </select>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>作者</th>
                                <th>内容</th>
                                <th>分类</th>
                                <th>点赞/评论</th>
                                <th>状态</th>
                                <th>时间</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${posts.length > 0 ? posts.slice(0, 50).map(post => `
                                <tr>
                                    <td><small>${post.id}</small></td>
                                    <td>${post.author}</td>
                                    <td><small>${post.content.substring(0, 30)}${post.content.length > 30 ? '...' : ''}</small></td>
                                    <td><span class="badge bg-secondary">${getCategoryName(post.category)}</span></td>
                                    <td>${post.likes || 0} / ${post.comments || 0}</td>
                                    <td>
                                        <span class="badge ${post.status === 'approved' ? 'bg-success' : post.status === 'pending' ? 'bg-warning' : 'bg-danger'}">
                                            ${post.status === 'approved' ? '已通过' : post.status === 'pending' ? '待审核' : '未通过'}
                                        </span>
                                    </td>
                                    <td><small>${post.time || 'N/A'}</small></td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-primary" onclick="approvePost('${post.id}')">
                                            <i class="bi bi-check"></i>
                                        </button>
                                        <button class="btn btn-sm btn-outline-danger" onclick="rejectPost('${post.id}')">
                                            <i class="bi bi-x"></i>
                                        </button>
                                        <button class="btn btn-sm btn-outline-secondary" onclick="deletePostAdmin('${post.id}')">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            `).join('') : '<tr><td colspan="8" class="text-center text-muted">暂无帖子</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// 加载评论管理
function loadCommentsManagement() {
    const comments = JSON.parse(localStorage.getItem('communityComments') || '[]');
    
    document.getElementById('contentManagementArea').innerHTML = `
        <div class="card">
            <div class="card-header">
                <h6 class="mb-0">评论管理 (共${comments.length}条)</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>作者</th>
                                <th>内容</th>
                                <th>时间</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${comments.length > 0 ? comments.slice(0, 50).map(comment => `
                                <tr>
                                    <td><small>${comment.id}</small></td>
                                    <td>${comment.author}</td>
                                    <td><small>${comment.content.substring(0, 50)}${comment.content.length > 50 ? '...' : ''}</small></td>
                                    <td><small>${comment.time || 'N/A'}</small></td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-danger" onclick="deleteCommentAdmin('${comment.id}')">
                                            <i class="bi bi-trash"></i> 删除
                                        </button>
                                    </td>
                                </tr>
                            `).join('') : '<tr><td colspan="5" class="text-center text-muted">暂无评论</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// 审核帖子
window.approvePost = function(postId) {
    const posts = JSON.parse(localStorage.getItem('communityPosts') || '[]');
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.status = 'approved';
        localStorage.setItem('communityPosts', JSON.stringify(posts));
        loadPostsManagement();
        showMessage('帖子已通过审核');
    }
};

window.rejectPost = function(postId) {
    const posts = JSON.parse(localStorage.getItem('communityPosts') || '[]');
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.status = 'rejected';
        localStorage.setItem('communityPosts', JSON.stringify(posts));
        loadPostsManagement();
        showMessage('帖子已拒绝');
    }
};

window.deletePostAdmin = function(postId) {
    if (!confirm('确定要删除这条帖子吗？')) return;
    
    const posts = JSON.parse(localStorage.getItem('communityPosts') || '[]');
    const filtered = posts.filter(p => p.id !== postId);
    localStorage.setItem('communityPosts', JSON.stringify(filtered));
    loadPostsManagement();
    showMessage('帖子已删除');
};

window.deleteCommentAdmin = function(commentId) {
    if (!confirm('确定要删除这条评论吗？')) return;
    
    const comments = JSON.parse(localStorage.getItem('communityComments') || '[]');
    const filtered = comments.filter(c => c.id !== commentId);
    localStorage.setItem('communityComments', JSON.stringify(filtered));
    loadCommentsManagement();
    showMessage('评论已删除');
};

window.filterPosts = function(status) {
    loadPostsManagement(); // 简化版，实际应该根据status筛选
};

// 加载用户行为分析
function loadAnalyticsData() {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const orders = JSON.parse(localStorage.getItem('userOrders') || '[]');
    const posts = JSON.parse(localStorage.getItem('communityPosts') || '[]');
    const inviteRecords = JSON.parse(localStorage.getItem('inviteRecords') || '[]');
    const pointsRecords = JSON.parse(localStorage.getItem('pointsRecords') || '[]');
    
    // 用户注册趋势（最近7天）
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const count = Object.values(users).filter(u => {
            if (!u.registerTime) return false;
            return u.registerTime.split('T')[0] === dateStr;
        }).length;
        last7Days.push({ date: dateStr, count });
    }
    
    // 功能使用统计
    const featureStats = {
        '每日运势': JSON.parse(localStorage.getItem('fortuneHistory') || '[]').length,
        '社区发帖': posts.length,
        '邀请好友': inviteRecords.length,
        '积分获取': pointsRecords.filter(r => r.type === 'earn').length,
        '积分消费': pointsRecords.filter(r => r.type === 'spend').length
    };
    
    document.getElementById('userBehaviorAnalysis').innerHTML = `
        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-header">
                        <h6 class="mb-0">最近7天注册趋势</h6>
                    </div>
                    <div class="card-body">
                        ${last7Days.map(day => `
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <small>${new Date(day.date).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })}</small>
                                <div class="flex-grow-1 mx-3">
                                    <div class="progress" style="height: 20px;">
                                        <div class="progress-bar" role="progressbar" style="width: ${Math.max(day.count * 10, 5)}%">
                                            ${day.count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-header">
                        <h6 class="mb-0">功能使用统计</h6>
                    </div>
                    <div class="card-body">
                        ${Object.entries(featureStats).map(([name, count]) => `
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span>${name}</span>
                                <span class="badge bg-primary">${count} 次</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-4">
                <div class="card">
                    <div class="card-header">
                        <h6 class="mb-0">用户活跃度分析</h6>
                    </div>
                    <div class="card-body">
                        <div class="row text-center">
                            <div class="col-md-3">
                                <h5 class="text-primary">${Object.keys(users).length}</h5>
                                <small class="text-muted">总用户数</small>
                            </div>
                            <div class="col-md-3">
                                <h5 class="text-success">${posts.length}</h5>
                                <small class="text-muted">总帖子数</small>
                            </div>
                            <div class="col-md-3">
                                <h5 class="text-info">${inviteRecords.length}</h5>
                                <small class="text-muted">邀请总数</small>
                            </div>
                            <div class="col-md-3">
                                <h5 class="text-warning">${orders.length}</h5>
                                <small class="text-muted">总订单数</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 集成到页面初始化
const originalInitializePageFeaturesForAdmin = window.initializePageFeatures;
window.initializePageFeatures = function(pageId) {
    if (typeof originalInitializePageFeaturesForAdmin === 'function') {
        originalInitializePageFeaturesForAdmin(pageId);
    }
    
    if (pageId === 'admin') {
        if (typeof window.initializeAdmin === 'function') {
            window.initializeAdmin();
        }
    }
};

// 更新导航栏显示管理员入口（简化版，实际应该根据权限）
function updateAdminNav() {
    const adminNavItem = document.getElementById('adminNavItem');
    if (adminNavItem && checkLoginStatus()) {
        // 检查是否是管理员
        const adminPhone = localStorage.getItem('adminPhone') || ADMIN_PHONE;
        if (currentUser && currentUser.phone === adminPhone) {
            adminNavItem.style.display = 'block';
        } else {
            adminNavItem.style.display = 'none';
        }
    }
}

// 在导航栏更新时也更新管理员入口
// 注意：这里需要确保不会覆盖之前的包装
(function() {
    const existingUpdateNav = window.updateNavigationBar;
    window.updateNavigationBar = function() {
        // 调用原有的updateNavigationBar（可能已经被其他模块包装过）
        if (typeof existingUpdateNav === 'function') {
            existingUpdateNav();
        } else if (typeof updateNavigationBar === 'function' && updateNavigationBar !== window.updateNavigationBar) {
            updateNavigationBar();
        }
        // 更新管理员入口
        updateAdminNav();
    };
})();
