// 主要JavaScript功能文件

// 实验数据
const experiments = [
    {
        id: 1,
        title: "丝绸与有机玻璃板摩擦",
        description: "使用丝绸摩擦有机玻璃板，观察静电现象",
        materials: ["丝绸", "有机玻璃板", "轻小物体"],
        steps: [
            "准备干燥的丝绸和干净的有机玻璃板",
            "用丝绸快速摩擦有机玻璃板表面",
            "将摩擦后的玻璃板靠近纸屑等轻小物体",
            "观察纸屑被吸引的现象"
        ],
        result: "有机玻璃板带负电，丝绸带正电，能够吸引轻小物体"
    },
    {
        id: 2,
        title: "钢笔与头发摩擦",
        description: "用钢笔在头发上摩擦产生静电",
        materials: ["钢笔", "头发", "纸屑"],
        steps: [
            "确保头发和钢笔都是干燥的",
            "用钢笔在头发上快速摩擦10-20次",
            "将摩擦后的钢笔靠近小纸屑",
            "观察纸屑跳动并被吸引的现象"
        ],
        result: "钢笔获得电荷，能够吸引纸屑等轻小物体"
    },
    {
        id: 3,
        title: "塑料尺与毛织物摩擦",
        description: "使用毛织物摩擦塑料尺产生静电",
        materials: ["塑料尺", "毛织物", "头发丝"],
        steps: [
            "准备干净的塑料尺和毛织物",
            "用毛织物包住塑料尺快速摩擦",
            "将摩擦后的塑料尺靠近头发丝",
            "观察头发丝被吸引并立起的现象"
        ],
        result: "塑料尺带电后能够吸引头发丝，使其立起"
    },
    {
        id: 4,
        title: "手与塑料薄膜摩擦",
        description: "用手摩擦塑料薄膜观察静电效应",
        materials: ["塑料薄膜", "手", "墙壁"],
        steps: [
            "准备干净的塑料薄膜",
            "用干燥的手快速摩擦薄膜表面",
            "将摩擦后的薄膜贴近墙壁",
            "观察薄膜吸附在墙上的现象"
        ],
        result: "塑料薄膜带电后能够吸附在墙壁上"
    },
    {
        id: 5,
        title: "手与泡沫塑料板摩擦",
        description: "用手摩擦泡沫塑料板产生静电",
        materials: ["泡沫塑料板", "手", "轻小物体"],
        steps: [
            "准备泡沫塑料板",
            "用干燥的手在泡沫板上快速摩擦",
            "将摩擦后的泡沫板靠近纸屑或头发",
            "观察吸引现象"
        ],
        result: "泡沫塑料板带电，能够吸引轻小物体"
    },
    {
        id: 6,
        title: "化纤布与毛衣摩擦",
        description: "化纤布料与毛衣摩擦产生静电",
        materials: ["化纤布", "毛衣", "轻小物体"],
        steps: [
            "准备化纤布和毛衣",
            "将两种材料快速摩擦",
            "分别测试两种材料的静电效应",
            "观察它们对轻小物体的吸引力"
        ],
        result: "两种材料带上相反电荷，都能吸引轻小物体"
    },
    {
        id: 7,
        title: "普通塑料板和泡沫塑料板摩擦",
        description: "两种不同塑料材料相互摩擦",
        materials: ["普通塑料板", "泡沫塑料板", "纸屑"],
        steps: [
            "准备两种塑料板",
            "将两块塑料板相互快速摩擦",
            "分别测试两块板的静电效应",
            "观察它们对纸屑的吸引力差异"
        ],
        result: "两种塑料板带上不同电荷，吸引力有差异"
    },
    {
        id: 8,
        title: "有机玻璃板与泡沫塑料板摩擦",
        description: "有机玻璃与泡沫塑料摩擦实验",
        materials: ["有机玻璃板", "泡沫塑料板", "轻小物体"],
        steps: [
            "准备有机玻璃板和泡沫塑料板",
            "将两种材料相互摩擦",
            "测试摩擦后的静电效应",
            "比较两种材料的带电情况"
        ],
        result: "两种材料产生相反电荷，都具有吸引轻小物体的能力"
    },
    {
        id: 9,
        title: "有机玻璃板与橡胶片摩擦",
        description: "玻璃与橡胶材料摩擦实验",
        materials: ["有机玻璃板", "橡胶片", "毛发"],
        steps: [
            "准备有机玻璃板和橡胶片",
            "用橡胶片摩擦玻璃板表面",
            "将摩擦后的材料靠近毛发",
            "观察毛发的反应"
        ],
        result: "玻璃板与橡胶片带上相反电荷，能够影响毛发"
    },
    {
        id: 10,
        title: "橡胶片与泡沫塑料板摩擦",
        description: "橡胶与泡沫塑料摩擦实验",
        materials: ["橡胶片", "泡沫塑料板", "纸屑"],
        steps: [
            "准备橡胶片和泡沫塑料板",
            "将两种材料相互摩擦",
            "测试摩擦后的静电现象",
            "用纸屑验证带电效果"
        ],
        result: "两种材料产生静电，能够吸引纸屑"
    },
    {
        id: 11,
        title: "塑料梳子与头发摩擦",
        description: "日常用品梳子摩擦头发实验",
        materials: ["塑料梳子", "头发", "纸屑"],
        steps: [
            "准备干燥的塑料梳子",
            "用梳子在干燥的头发上快速梳理",
            "将梳子靠近小纸屑",
            "观察纸屑被吸引和跳跃的现象"
        ],
        result: "梳子带电后能够吸引纸屑，纸屑会跳跃"
    },
    {
        id: 12,
        title: "摩擦后的纸片贴墙壁",
        description: "纸片摩擦后吸附墙壁实验",
        materials: ["纸片", "毛织物", "墙壁"],
        steps: [
            "准备薄纸片和毛织物",
            "用毛织物快速摩擦纸片",
            "将摩擦后的纸片贴近墙壁",
            "观察纸片吸附在墙上的现象"
        ],
        result: "纸片带电后能够吸附在干燥的墙壁上"
    },
    {
        id: 13,
        title: "气球吸引易拉罐",
        description: "经典的气球静电实验",
        materials: ["气球", "易拉罐", "头发"],
        steps: [
            "向气球内充入适当气体",
            "将充有适当气体的气球放在头发上快速摩擦",
            "把易拉罐放在平整的桌面上",
            "将与头发摩擦了的气球靠近易拉罐",
            "观察易拉罐随气球滚动的现象"
        ],
        result: "摩擦后的气球能够吸引易拉罐，使其滚动"
    },
    {
        id: 14,
        title: "有趣的纸片实验",
        description: "使用指针观察静电方向性",
        materials: ["玻璃杯", "钢针", "软木塞", "剪刀", "毛料布", "纸片"],
        steps: [
            "将钢针插在软木塞上，针尖向上",
            "把纸片剪成一个小箭头，支在针尖上",
            "将玻璃杯口向下扣在软木塞外边",
            "用毛料布摩擦玻璃杯",
            "观察摩擦哪里，指针就指向哪里",
            "慢慢移动摩擦位置，观察箭头跟着移动"
        ],
        result: "箭头会跟随摩擦位置移动，显示静电的方向性"
    }
];

// 知识测试题目
const quizQuestions = [
    {
        question: "摩擦起电的根本原因是什么？",
        options: [
            "不同物质的原子核对核外电子的束缚力不同",
            "不同物质的密度不同",
            "不同物质的硬度不同",
            "不同物质的温度不同"
        ],
        correct: 0,
        explanation: "不同物质的原子核对核外电子的束缚力大小不同，这是摩擦起电现象的根本原因。"
    },
    {
        question: "摩擦时，哪种物体容易失去电子？",
        options: [
            "束缚力较大的物体",
            "束缚力较小的物体", 
            "质量较大的物体",
            "体积较大的物体"
        ],
        correct: 1,
        explanation: "束缚力较小的物体容易失去电子带正电，束缚力较大的物体容易得到电子带负电。"
    },
    {
        question: "脱毛衣时看到火花的原因是什么？",
        options: [
            "摩擦产生热量",
            "静电放电现象",
            "化学反应",
            "光线反射"
        ],
        correct: 1,
        explanation: "毛衣与内衬摩擦产生静电，当电压足够高时，空气被击穿产生放电现象，形成火花。"
    }
];

// 材料属性数据（简化版）
const materialProperties = {
    silk: { name: "丝绸", tendency: "positive", strength: 3 },
    plastic: { name: "塑料", tendency: "negative", strength: 2 },
    glass: { name: "玻璃", tendency: "positive", strength: 4 },
    rubber: { name: "橡胶", tendency: "negative", strength: 5 },
    wool: { name: "毛织物", tendency: "positive", strength: 2 },
    hair: { name: "头发", tendency: "positive", strength: 1 },
    foam: { name: "泡沫", tendency: "negative", strength: 3 },
    metal: { name: "金属", tendency: "neutral", strength: 0 }
};

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initExperiments();
    initSimulator();
    initQuiz();
    initScrollAnimations();
});

// 导航功能
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // 关闭移动端菜单
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
}

// 初始化实验展示
function initExperiments() {
    const experimentsGrid = document.getElementById('experimentsGrid');
    if (!experimentsGrid) return;
    
    experiments.forEach(experiment => {
        const card = createExperimentCard(experiment);
        experimentsGrid.appendChild(card);
    });
}

// 创建实验卡片
function createExperimentCard(experiment) {
    const card = document.createElement('div');
    card.className = 'experiment-card';
    card.innerHTML = `
        <h3>${experiment.title}</h3>
        <p>${experiment.description}</p>
        <div class="experiment-materials">
            <h4>实验材料：</h4>
            <div class="materials-list">
                ${experiment.materials.map(material => 
                    `<span class="material-tag">${material}</span>`
                ).join('')}
            </div>
        </div>
        <div class="experiment-steps">
            <h4>实验步骤：</h4>
            <ol class="steps-list">
                ${experiment.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
        <div class="experiment-result">
            <h4>实验结果：</h4>
            <p>${experiment.result}</p>
        </div>
    `;
    
    // 添加点击展开/折叠功能
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
    
    return card;
}

// 初始化模拟器
function initSimulator() {
    initFrictionSimulator();
    initAttractionTester();
}

// 摩擦模拟器
function initFrictionSimulator() {
    const materialOptions = document.querySelectorAll('.material-option');
    const simulateBtn = document.getElementById('simulateBtn');
    const resultDisplay = document.getElementById('resultDisplay');
    
    let selectedMaterials = { left: null, right: null };
    
    materialOptions.forEach(option => {
        option.addEventListener('click', function() {
            const material = this.dataset.material;
            const parent = this.closest('.materials-selector');
            const isLeft = parent === parent.parentNode.firstElementChild;
            
            // 移除同组其他选择
            parent.querySelectorAll('.material-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // 添加选择状态
            this.classList.add('selected');
            
            // 保存选择
            if (isLeft) {
                selectedMaterials.left = material;
            } else {
                selectedMaterials.right = material;
            }
            
            // 检查是否可以开始模拟
            updateSimulateButton();
        });
    });
    
    simulateBtn.addEventListener('click', function() {
        if (selectedMaterials.left && selectedMaterials.right) {
            runFrictionSimulation(selectedMaterials.left, selectedMaterials.right);
        }
    });
    
    function updateSimulateButton() {
        const canSimulate = selectedMaterials.left && selectedMaterials.right;
        simulateBtn.disabled = !canSimulate;
        simulateBtn.style.opacity = canSimulate ? '1' : '0.5';
    }
    
    function runFrictionSimulation(material1, material2) {
        const prop1 = materialProperties[material1];
        const prop2 = materialProperties[material2];
        
        resultDisplay.innerHTML = `
            <div class="simulation-result">
                <h4>模拟结果：</h4>
                <div class="material-charges">
                    <div class="charge-result">
                        <strong>${prop1.name}</strong>: 
                        <span class="charge ${prop1.tendency}">${getChargeSymbol(prop1.tendency)}</span>
                    </div>
                    <div class="charge-result">
                        <strong>${prop2.name}</strong>: 
                        <span class="charge ${prop2.tendency}">${getChargeSymbol(prop2.tendency)}</span>
                    </div>
                </div>
                <p class="explanation">
                    ${prop1.name}与${prop2.name}摩擦后，${prop1.name}带${getChargeName(prop1.tendency)}，
                    ${prop2.name}带${getChargeName(prop2.tendency)}。
                </p>
            </div>
        `;
        
        // 添加动画效果
        resultDisplay.style.animation = 'fadeInUp 0.5s ease-out';
    }
    
    function getChargeSymbol(tendency) {
        return tendency === 'positive' ? '+' : tendency === 'negative' ? '-' : '0';
    }
    
    function getChargeName(tendency) {
        return tendency === 'positive' ? '正电' : tendency === 'negative' ? '负电' : '不带电';
    }
}

// 静电吸引测试器
function initAttractionTester() {
    const chargeRange = document.getElementById('chargeRange');
    const chargeValue = document.getElementById('chargeValue');
    const testObjects = document.querySelectorAll('.test-object');
    
    if (!chargeRange) return;
    
    chargeRange.addEventListener('input', function() {
        const charge = this.value;
        chargeValue.textContent = charge;
        updateAttractionEffect(charge);
    });
    
    function updateAttractionEffect(charge) {
        testObjects.forEach((obj, index) => {
            const intensity = charge / 100;
            const delay = index * 0.1;
            
            // 计算吸引效果
            const attractionDistance = Math.max(0, (intensity - 0.3) * 40);
            
            obj.style.transform = `translateX(-${attractionDistance}px)`;
            obj.style.transition = `transform 0.3s ease-out ${delay}s`;
            
            // 更新视觉效果
            const brightness = 1 + intensity * 0.5;
            obj.style.filter = `brightness(${brightness})`;
        });
    }
}

// 初始化测试
function initQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;
    
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
        if (currentQuestion >= quizQuestions.length) {
            showResults();
            return;
        }
        
        const question = quizQuestions[currentQuestion];
        quizContainer.innerHTML = `
            <div class="quiz-question">
                <h3>问题 ${currentQuestion + 1} / ${quizQuestions.length}</h3>
                <p class="question-text">${question.question}</p>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <button class="quiz-option" data-index="${index}">
                            ${String.fromCharCode(65 + index)}. ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        
        // 添加选项点击事件
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', function() {
                const selectedIndex = parseInt(this.dataset.index);
                const isCorrect = selectedIndex === question.correct;
                
                if (isCorrect) {
                    score++;
                    this.classList.add('correct');
                } else {
                    this.classList.add('incorrect');
                    document.querySelector(`[data-index="${question.correct}"]`).classList.add('correct');
                }
                
                // 显示解释
                setTimeout(() => {
                    showExplanation(question.explanation);
                }, 1000);
                
                // 禁用所有选项
                document.querySelectorAll('.quiz-option').forEach(opt => {
                    opt.disabled = true;
                });
            });
        });
    }
    
    function showExplanation(explanation) {
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'quiz-explanation';
        explanationDiv.innerHTML = `
            <p><strong>解释：</strong>${explanation}</p>
            <button class="next-question-btn">下一题</button>
        `;
        
        quizContainer.appendChild(explanationDiv);
        
        document.querySelector('.next-question-btn').addEventListener('click', () => {
            currentQuestion++;
            showQuestion();
        });
    }
    
    function showResults() {
        const percentage = Math.round((score / quizQuestions.length) * 100);
        let message = '';
        
        if (percentage >= 90) {
            message = '优秀！您对摩擦起电的理解很深入！';
        } else if (percentage >= 70) {
            message = '良好！您基本掌握了摩擦起电的原理！';
        } else if (percentage >= 60) {
            message = '及格！建议再次学习相关内容。';
        } else {
            message = '需要加强！请重新学习摩擦起电的基础知识。';
        }
        
        quizContainer.innerHTML = `
            <div class="quiz-results">
                <h3>测试完成！</h3>
                <div class="score-display">
                    <div class="score-circle">
                        <span class="score-number">${percentage}%</span>
                    </div>
                </div>
                <p class="score-text">您答对了 ${score} / ${quizQuestions.length} 题</p>
                <p class="result-message">${message}</p>
                <button class="restart-quiz-btn">重新测试</button>
            </div>
        `;
        
        document.querySelector('.restart-quiz-btn').addEventListener('click', () => {
            currentQuestion = 0;
            score = 0;
            showQuestion();
        });
    }
    
    // 开始测试
    showQuestion();
}

// 生活现象演示函数
function playSparkDemo() {
    const sparkEffect = document.querySelector('.spark-effect');
    sparkEffect.style.animation = 'spark 0.5s ease-in-out 3';
    
    // 添加音效模拟（使用CSS动画）
    setTimeout(() => {
        sparkEffect.style.animation = '';
    }, 1500);
}

function playAdhesionDemo() {
    const fabric = document.querySelector('.clinging-fabric');
    fabric.style.animation = 'cling 1s ease-in-out 3';
    
    setTimeout(() => {
        fabric.style.animation = 'cling 3s ease-in-out infinite';
    }, 3000);
}

function playShockDemo() {
    const arc = document.querySelector('.discharge-arc');
    arc.style.animation = 'discharge 0.3s ease-in-out 5';
    
    setTimeout(() => {
        arc.style.animation = '';
    }, 1500);
}

// 滚动动画
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    });
    
    // 观察需要动画的元素
    document.querySelectorAll('.principle-card, .experiment-card, .simulator-card, .example-card').forEach(card => {
        observer.observe(card);
    });
}

// 添加CSS动画类
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out;
    }
    
    .quiz-option {
        width: 100%;
        padding: 1rem;
        margin: 0.5rem 0;
        background: white;
        border: 2px solid #e9ecef;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: left;
    }
    
    .quiz-option:hover {
        border-color: #007bff;
        background: #f8f9fa;
    }
    
    .quiz-option.correct {
        background: #d4edda;
        border-color: #28a745;
        color: #155724;
    }
    
    .quiz-option.incorrect {
        background: #f8d7da;
        border-color: #dc3545;
        color: #721c24;
    }
    
    .quiz-explanation {
        margin-top: 1rem;
        padding: 1rem;
        background: #e7f3ff;
        border-radius: 10px;
        border-left: 4px solid #007bff;
    }
    
    .next-question-btn, .restart-quiz-btn {
        padding: 0.8rem 2rem;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        margin-top: 1rem;
        font-weight: 600;
    }
    
    .quiz-results {
        text-align: center;
    }
    
    .score-circle {
        width: 120px;
        height: 120px;
        border: 8px solid #e9ecef;
        border-top: 8px solid #28a745;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem auto;
        animation: rotate 2s linear;
    }
    
    .score-number {
        font-size: 2rem;
        font-weight: bold;
        color: #28a745;
    }
    
    .charge.positive { color: #dc3545; font-weight: bold; }
    .charge.negative { color: #007bff; font-weight: bold; }
    .charge.neutral { color: #6c757d; font-weight: bold; }
    
    .material-charges {
        display: flex;
        justify-content: space-around;
        margin: 1rem 0;
    }
    
    .charge-result {
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 10px;
        text-align: center;
    }
`;
document.head.appendChild(style);