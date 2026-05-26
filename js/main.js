// 论文展示相关功能

const papers = {
    'all': [
        // 2026
        {
            title: 'Anon: Extrapolating Optimizer Adaptivity Across the Real Spectrum',
            authors: 'Y Zhang, K Zhao, S Wu, Y Wang, J Wu, S Drew, X Niu',
            journal: 'arXiv preprint arXiv:2605.02317',
            year: '2026',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Resolution-Progressive Diffusion Model for Pansharpening',
            authors: 'S Wu, K Jin, L Chen, L Jian, X Liu, L Jing, X Niu',
            journal: 'ICASSP 2026 - IEEE International Conference on Acoustics, Speech and Signal Processing',
            year: '2026',
            doi: '',
            type: 'conference'
        },
        {
            title: 'EDT: Efficient and Effective Decision Transformer with Experience-Aware Sampling for Robotic Manipulation',
            authors: 'K Zhao, B Zhang, Y Wang, X Liu, X Li, Y Chen, X Niu',
            journal: 'arXiv preprint arXiv:2605.00159',
            year: '2026',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Modeling Dataset-Level Priors With Learnable Probability Tables for Pansharpening',
            authors: 'S Wu, L Chen, L Jian, G Vivone, K Xiao, X Niu',
            journal: 'IEEE Transactions on Geoscience and Remote Sensing',
            year: '2026',
            doi: '',
            type: 'sci'
        },
        {
            title: 'InvisiSense: A privacy-preserving deep learning framework for driving status perception using IMU data',
            authors: 'Y Xu, P Sun, L Jing, S Wu, K Xiao, X Niu',
            journal: 'Knowledge-Based Systems',
            year: '2026',
            doi: '',
            type: 'sci'
        },
        {
            title: 'ProtoFormer: Transformer with Learnable Prototype Tokens for Pansharpening',
            authors: 'S Wu, L Jian, L Chen, G Vivone, L Jing, Y Xu, X Niu',
            journal: 'IEEE Transactions on Geoscience and Remote Sensing',
            year: '2026',
            doi: '',
            type: 'sci'
        },
        {
            title: 'FedPAD: Aggregation-Free Federated Learning with Prototype-Based Adaptive Distillation',
            authors: 'T Zhong, K Zhao, S Drew, X Niu',
            journal: 'Knowledge-Based Systems',
            year: '2026',
            doi: '',
            type: 'sci'
        },
        // 2025
        {
            title: 'Revisiting interpolation for noisy label correction',
            authors: 'Y Xu, X Niu, J Yang, R Su, J Zhang, S Liu, S Drew',
            journal: 'Proceedings of the AAAI Conference on Artificial Intelligence',
            year: '2025',
            doi: '',
            type: 'conference'
        },
        {
            title: 'HVAdam: A Full-Dimension Adaptive Optimizer',
            authors: 'Y Zhang, S Wu, Y Xu, J Wu, S Xu, S Drew, X Niu',
            journal: 'Proceedings of the AAAI Conference on Artificial Intelligence',
            year: '2025',
            doi: '',
            type: 'conference'
        },
        {
            title: 'MPAM: Dual-Transformer for Millimeter-Wave Sensing Based Multi-person Activity Monitoring System',
            authors: 'H Wu, S Wu, Z Zhang, H Zhou, X Wu, X Niu, D Li',
            journal: 'International Conference on Wireless Artificial Intelligent Computing',
            year: '2025',
            doi: '',
            type: 'conference'
        },
        {
            title: 'LanPerAct: A Framework for Language-Driven Perception and Robotic Manipulation',
            authors: 'H Wu, S Wu, Y Tu, H Zhou, S Drew, X Niu',
            journal: '2025 IEEE Smart World Congress (SWC)',
            year: '2025',
            doi: '',
            type: 'conference'
        },
        {
            title: 'A Fusion Positioning Technology Based on Indoor Pseudolite System and Smartphone',
            authors: 'X Lu, R Chen, Y Dai, Y Wu, W Li, G Guo, X Niu, L Chen',
            journal: '2025 International Ubiquitous Positioning, Indoor Navigation and Location Based Services',
            year: '2025',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Enhancing Label Noise Robustness for Hyperspectral Image Classification by Neighborhood Contrastive Learning',
            authors: 'Y Xu, T Peng, S Wu, R Su, X Niu',
            journal: 'IEEE Geoscience and Remote Sensing Letters',
            year: '2025',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Avnet: learning attitude and velocity for vehicular dead reckoning using smartphone by adapting an invariant EKF',
            authors: 'L Qian, X Lin, X Niu, Q Huang, L Li, G Guo, Z Wang, R Chen',
            journal: 'Satellite Navigation',
            year: '2025',
            doi: '',
            type: 'sci'
        },
        {
            title: 'ReNiL: Relative Neural Inertial Locator with Any-Scale Bayesian Inference',
            authors: 'K Wu, Y Xu, Z Zhang, W Zhu, S Drew, X Niu',
            journal: 'arXiv preprint arXiv:2508.06053',
            year: '2025',
            doi: '',
            type: 'sci'
        },
        {
            title: 'A Survey on Task Scheduling in Carbon-Aware Container Orchestration',
            authors: 'J Yang, Z Saad, J Wu, X Niu, H Leung, S Drew',
            journal: 'arXiv preprint arXiv:2508.05949',
            year: '2025',
            doi: '',
            type: 'sci'
        },
        // 2024
        {
            title: 'Dynamic selection for reconstructing instance-dependent noisy labels',
            authors: 'J Yang, X Niu, Y Xu, Z Zhang, G Guo, S Drew, R Chen',
            journal: 'Pattern Recognition',
            year: '2024',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Rethinking cross-attention for infrared and visible image fusion',
            authors: 'L Jian, S Xiong, H Yan, X Niu, S Wu, D Zhang',
            journal: 'arXiv preprint arXiv:2401.11675',
            year: '2024',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Efficient diversity-based experience replay for deep reinforcement learning',
            authors: 'K Zhao, Y Wang, Y Chen, Y Li, X Niu',
            journal: 'arXiv preprint arXiv:2410.20487',
            year: '2024',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Enhancing llm agents for code generation with possibility and pass-rate prioritized experience replay',
            authors: 'Y Chen, K Zhao, Y Wang, M Yang, J Zhang, X Niu',
            journal: 'arXiv preprint arXiv:2410.12236',
            year: '2024',
            doi: '',
            type: 'sci'
        },
        {
            title: 'User identification under the collaborative auto-calibration of multi-mmWave radars',
            authors: 'Y Wu, W Li, R Chen, Y Yu, H Zhou',
            journal: 'IEEE Sensors Journal',
            year: '2024',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Label-Expanded Feature Debiasing for Single Domain Generalization',
            authors: 'J Yang, L Jing, Y Xu, S Wu, S Drew, X Niu',
            journal: 'International Conference on Pattern Recognition',
            year: '2024',
            doi: '',
            type: 'conference'
        },
        {
            title: 'AARR-Net: An Attention Assistance Feature Fusion and Model Recursive Recovery Network for Category-Level 6D Object Pose Estimation',
            authors: 'W Haoning, Z Kaiyan, W Shaowu, W XiaoPing, N Xiaoguang',
            journal: 'International Conference on Neural Information Processing',
            year: '2024',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Sample Difficulty-Aware Pre-trained Models for Class-Incremental Learning',
            authors: 'S Li, S Xu, S Wu, X Wu, X Niu',
            journal: 'International Conference on Neural Information Processing',
            year: '2024',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Smartphone Indoor Fusion Localization with Trust Region-Based Magnetic Matching',
            authors: 'Y Zhu, Y Jia, K Zou, X Niu',
            journal: 'International Conference on Wireless Artificial Intelligent Computing',
            year: '2024',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Real-time Private Data Aggregation over Distributed Spatial-temporal Infinite Streams with Local Differential Privacy',
            authors: 'X Xiong, S Liu, X Liu, X Niu, W You',
            journal: '2024 IEEE 23rd International Conference on Trust, Security and Privacy in Computing and Communications',
            year: '2024',
            doi: '',
            type: 'conference'
        },
        // 2023
        {
            title: 'USDNL: Uncertainty-based single dropout in noisy label learning',
            authors: 'Y Xu, X Niu, J Yang, S Drew, J Zhou, R Chen',
            journal: 'Proceedings of the AAAI Conference on Artificial Intelligence',
            year: '2023',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Federated learning with client availability budgets',
            authors: 'Y Bao, S Drew, X Wang, J Zhou, X Niu',
            journal: 'GLOBECOM 2023 - IEEE Global Communications Conference',
            year: '2023',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Application status, development and future trend of high-precision indoor navigation and tracking',
            authors: 'R Chen, G Guo, L Chen, X Niu',
            journal: 'Geomatics and Information Science of Wuhan University',
            year: '2023',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Ultramotion: High-precision ultrasonic arm tracking for real-world exercises',
            authors: 'X Niu, K Zou, D Shen, S Drew, S Wu, G Guo, R Chen',
            journal: 'IEEE Transactions on Mobile Computing',
            year: '2023',
            doi: 'https://doi.org/10.1109/TMC.2023.3241077',
            type: 'sci'
        },
        {
            title: 'ChirpTracker: A precise-location-aware system for acoustic tag using single smartphone',
            authors: 'X Lin, R Chen, L Huang, Z Liu, X Niu, G Guo, Z Li, L Qian',
            journal: 'IEEE Internet of Things Journal',
            year: '2023',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Large-scale indoor localization solution for pervasive smartphones using corrected acoustic signals and data-driven PDR',
            authors: 'G Guo, R Chen, K Yan, Z Li, L Qian, S Xu, X Niu, L Chen',
            journal: 'IEEE Internet of Things Journal',
            year: '2023',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Factor graph framework for smartphone indoor localization: Integrating data-driven PDR and Wi-Fi RTT/RSS ranging',
            authors: 'G Guo, R Chen, X Niu, K Yan, S Xu, L Chen',
            journal: 'IEEE Sensors Journal',
            year: '2023',
            doi: '',
            type: 'sci'
        },
        // 2022
        {
            title: 'OCP: an OLAP-based bus crowdedness smart-perceiving mechanism for urban transportation',
            authors: 'S Gong, D Liu, MZA Bhuiyan, X Niu',
            journal: 'Connection Science',
            year: '2022',
            doi: '',
            type: 'sci'
        },
        // 2021
        {
            title: 'Corrigendum to "A Comprehensive Survey on Local Differential Privacy"',
            authors: 'X Xiong, S Liu, D Li, Z Cai, X Niu',
            journal: 'Security and Communication Networks',
            year: '2021',
            doi: '',
            type: 'sci'
        },
        {
            title: 'MAGINS: Neural network inertial navigation system corrected by magnetic information',
            authors: 'C Qiu, Y Xu, Y Zhu, L Xie, D Shen, J Huang, X Niu',
            journal: '2021 IEEE International Performance, Computing, and Communications Conference',
            year: '2021',
            doi: '',
            type: 'conference'
        },
        // 2020
        {
            title: 'A comprehensive survey on local differential privacy',
            authors: 'X Xiong, S Liu, D Li, Z Cai, X Niu',
            journal: 'Security and Communication Networks',
            year: '2020',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Real-time and private spatio-temporal data aggregation with local differential privacy',
            authors: 'X Xiong, S Liu, D Li, Z Cai, X Niu',
            journal: 'Journal of Information Security and Applications',
            year: '2020',
            doi: '',
            type: 'sci'
        },
        {
            title: 'AtLAS: An activity-based indoor localization and semantic labeling mechanism for residences',
            authors: 'X Niu, L Xie, J Wang, H Chen, D Liu, R Chen',
            journal: 'IEEE Internet of Things Journal',
            year: '2020',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Anti-steganalysis for image on convolutional neural networks',
            authors: 'S Li, D Ye, S Jiang, C Liu, X Niu, X Luo',
            journal: 'Multimedia Tools and Applications',
            year: '2020',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Improved window segmentation for deep learning based inertial odometry',
            authors: 'S Chen, Y Zhu, X Niu, Z Hu',
            journal: '2020 IEEE 39th International Performance Computing and Communications Conference',
            year: '2020',
            doi: '',
            type: 'conference'
        },
    ]
};


// 语言状态
let currentLang = 'cn';  // 默认为英文

// 控制论文显示数量
let showAllPapers = false;
const initialPaperCount = 3;

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 设置语言切换按钮事件
    const langSwitch = document.getElementById('lang-switch');
    const mobileLangSwitch = document.getElementById('mobile-lang-switch');
    
    if (langSwitch) {
        langSwitch.addEventListener('click', switchLanguage);
    }
    if (mobileLangSwitch) {
        mobileLangSwitch.addEventListener('click', switchLanguage);
    }

    // 初始化语言显示
    updateLanguageDisplay();

    // 根据类型过滤论文
    papers.sci = papers.all.filter(paper => paper.type === 'sci');
    papers.conference = papers.all.filter(paper => paper.type === 'conference');

    // 初始显示所有论文
    updatePapers('all');
    
    // 设置过滤器事件
    setupFilterButtons();
    
    // 添加"查看更多"按钮的点击事件
    const viewMoreButton = document.getElementById('view-more-papers');
    if (viewMoreButton) {
        viewMoreButton.addEventListener('click', function() {
            showAllPapers = !showAllPapers; // 切换显示状态
            // 获取当前选中的论文类型
            const activeFilterButton = document.querySelector('#publications button.bg-gray-900');
            const type = activeFilterButton ? activeFilterButton.getAttribute('data-type') : 'all';
            updatePapers(type);
            updateViewMoreButtonText(); // 更新按钮文本
        });
    }
    
    // 平滑滚动设置
    setupSmoothScroll();
    
    // 设置成员卡片点击事件
    setupMemberCards();
    
    // 设置成员头像点击事件
    setupMembersPreview();
});

// 切换语言函数
function switchLanguage() {
    currentLang = currentLang === 'en' ? 'cn' : 'en';
    updateLanguageDisplay();
}

// 更新语言显示
function updateLanguageDisplay() {
    // 切换所有带有 data-lang 属性的元素
    document.querySelectorAll('[data-lang]').forEach(el => {
        if (el.getAttribute('data-lang') === currentLang) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });

    // 更新论文列表
    const currentType = document.querySelector('#publications button.bg-gray-900')?.getAttribute('data-type') || 'all';
    updatePapers(currentType);
}

// 生成论文HTML
function generatePaperHTML(paper) {
    const doiLink = paper.doi
        ? `<a href="${paper.doi}" class="text-blue-600 hover:text-blue-800 flex items-center gap-1" target="_blank">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    DOI
                </a>`
        : '';

    return `
        <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900 mb-2">${paper.title}</h3>
            <p class="text-gray-600 mb-4">${paper.authors}</p>
            <div class="flex items-center gap-4 text-sm text-gray-500">
                <span>${paper.journal}</span>
                <span>${paper.year}</span>
                ${doiLink}
            </div>
        </div>
    `;
}

// 更新"查看更多"按钮的状态
function updateViewMoreButton(totalCount) {
    const viewMoreButton = document.getElementById('view-more-papers');
    if (viewMoreButton) {
        // 始终显示按钮，并根据 showAllPapers 状态更新文本
        viewMoreButton.style.display = 'inline-flex';
        updateViewMoreButtonText();
    }
}

// 更新"查看更多"按钮的文本
function updateViewMoreButtonText() {
    const viewMoreButton = document.getElementById('view-more-papers');
    if (viewMoreButton) {
        if (showAllPapers) {
            viewMoreButton.querySelector('span[data-lang="cn"]').textContent = '收起';
            viewMoreButton.querySelector('span[data-lang="en"]').textContent = 'Collapse';
        } else {
            viewMoreButton.querySelector('span[data-lang="cn"]').textContent = '查看更多论文';
            viewMoreButton.querySelector('span[data-lang="en"]').textContent = 'View More Papers';
        }
    }
}

// 更新论文列表显示
function updatePapers(type) {
    const paperList = document.querySelector('#publications-list');
    if (paperList) {
        // 根据类型筛选论文
        const filteredPapers = papers[type] || papers.all;
        
        // 根据 showAllPapers 决定显示多少篇论文
        const papersToShow = showAllPapers ? filteredPapers : filteredPapers.slice(0, initialPaperCount);
        
        // 生成HTML
        paperList.innerHTML = papersToShow.map(generatePaperHTML).join('');
        
        // 更新按钮状态
        updateViewMoreButton(filteredPapers.length);
    }
}

// 设置过滤器按钮
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('#publications .flex.flex-wrap.gap-4 button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            
            // 更新按钮样式
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-gray-900', 'text-white');
                btn.classList.add('border', 'border-gray-300', 'hover:bg-gray-50');
            });
            this.classList.remove('border', 'border-gray-300', 'hover:bg-gray-50');
            this.classList.add('bg-gray-900', 'text-white');
            
            // 重置显示状态
            showAllPapers = false;
            
            // 更新论文列表
            updatePapers(type);
        });
    });
}

// 设置平滑滚动
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 64, // 减去导航栏高度
                    behavior: 'smooth'
                });
                
                // 如果是移动端，点击后关闭菜单
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// 设置成员卡片点击展开/收起的功能
function setupMemberCards() {
    const memberCards = document.querySelectorAll('.member-card');
    
    memberCards.forEach(card => {
        card.addEventListener('click', function() {
            const info = this.querySelector('.member-info');
            
            // 切换显示/隐藏
            if (info.classList.contains('hidden')) {
                // 先隐藏所有其他展开的卡片
                document.querySelectorAll('.member-info:not(.hidden)').forEach(openInfo => {
                    openInfo.classList.add('hidden');
                    openInfo.closest('.member-card').classList.remove('expanded');
                });
                
                // 展开当前卡片
                info.classList.remove('hidden');
                this.classList.add('expanded');
            } else {
                // 收起当前卡片
                info.classList.add('hidden');
                this.classList.remove('expanded');
            }
        });
    });
}

// 设置成员头像预览点击事件
function setupMembersPreview() {
    const avatarPreviews = document.querySelectorAll('.member-avatar-preview');
    const membersDetail = document.querySelector('.members-detail');
    
    avatarPreviews.forEach(avatar => {
        avatar.addEventListener('click', function() {
            // 切换详情区域显示状态
            if (membersDetail.classList.contains('active')) {
                // 如果当前头像已经是激活状态，则关闭详情
                if (this.classList.contains('active')) {
                    membersDetail.classList.remove('active');
                    this.classList.remove('active');
                } else {
                    // 否则切换激活的头像
                    document.querySelector('.member-avatar-preview.active')?.classList.remove('active');
                    this.classList.add('active');
                    
                    // 滚动到对应的成员类别
                    const category = this.getAttribute('data-category');
                    const categoryElement = document.getElementById(category);
                    if (categoryElement) {
                        setTimeout(() => {
                            categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                    }
                }
            } else {
                // 打开详情区域
                membersDetail.classList.add('active');
                this.classList.add('active');
                
                // 滚动到对应的成员类别
                const category = this.getAttribute('data-category');
                const categoryElement = document.getElementById(category);
                if (categoryElement) {
                    setTimeout(() => {
                        categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                }
            }
        });
    });
}
