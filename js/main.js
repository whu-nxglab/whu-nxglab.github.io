// 论文展示相关功能

const papers = {
    'all': [
        // 2026
        {
            title: 'Anon: Extrapolating Adaptivity Beyond SGD and Adam',
            authors: 'Y Zhang, K Zhao, S Wu, Y Wang, J Wu, L Hou U, S Drew, X Niu',
            journal: 'arXiv preprint arXiv:2605.02317',
            year: '2026',
            doi: '',
            type: 'sci'
        },
        {
            title: 'E2DT: Efficient and Effective Decision Transformer with Experience-Aware Sampling for Robotic Manipulation',
            authors: 'K Zhao, B Zhang, Y Wang, X Liu, X Li, Y Chen, X Niu',
            journal: 'IEEE International Conference on Robotics and Automation (ICRA)',
            year: '2026',
            doi: '',
            type: 'conference'
        },
        {
            title: 'FedPAD: Aggregation-Free Federated Learning with Prototype-Based Adaptive Distillation',
            authors: 'T Zhong, K Zhao, S Drew, X Niu',
            journal: 'Knowledge-Based Systems, vol. 333, Article 114951',
            year: '2026',
            doi: '',
            type: 'sci'
        },
        {
            title: 'InvisiSense: A Privacy-Preserving Deep Learning Framework for Driving Status Perception Using IMU Data',
            authors: 'Y Xu, P Sun, L Jing, S Wu, K Xiao, X Niu',
            journal: 'Knowledge-Based Systems, vol. 342, Article 115873',
            year: '2026',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Modeling Dataset-Level Priors With Learnable Probability Tables for Pansharpening',
            authors: 'S Wu, L Chen, L Jian, G Vivone, K Xiao, X Niu',
            journal: 'IEEE Transactions on Geoscience and Remote Sensing, vol. 64, pp. 1–18',
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
            title: 'Resolution-Progressive Diffusion Model for Pansharpening',
            authors: 'S Wu, K Jin, L Chen, L Jian, X Liu, L Jing, X Niu',
            journal: 'ICASSP 2026 - 2026 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)',
            year: '2026',
            doi: '',
            type: 'conference'
        },
        // 2025
        {
            title: 'A Fusion Positioning Technology Based on Indoor Pseudolite System and Smartphone',
            authors: 'X Lu, R Chen, Y Dai, Y Wu, W Li, G Guo, X Niu, L Chen',
            journal: '2025 International Ubiquitous Positioning, Indoor Navigation and Location-Based Services (UPINLBS), pp. 1–6',
            year: '2025',
            doi: '',
            type: 'conference'
        },
        {
            title: 'A Survey on Task Scheduling in Carbon-Aware Container Orchestration',
            authors: 'J Yang, Z Saad, J Wu, X Niu, H Leung, S Drew',
            journal: 'arXiv preprint arXiv:2508.05949',
            year: '2025',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Avnet: Learning Attitude and Velocity for Vehicular Dead Reckoning Using Smartphone by Adapting an Invariant EKF',
            authors: 'L Qian, X Lin, X Niu, Q Huang, L Li, G Guo, Z Wang, R Chen',
            journal: 'Satellite Navigation, vol. 6, no. 1, Article 15',
            year: '2025',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Efficient Diversity-Based Experience Replay for Deep Reinforcement Learning',
            authors: 'K Zhao, Y Wang, Y Chen, Y Li, L Hou U, X Niu',
            journal: 'Proceedings of the 34th International Joint Conference on Artificial Intelligence (IJCAI 2025), pp. 7083–7091',
            year: '2025',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Enhancing Label Noise Robustness for Hyperspectral Image Classification by Neighborhood Contrastive Learning',
            authors: 'Y Xu, T Peng, S Wu, R Su, X Niu',
            journal: 'IEEE Geoscience and Remote Sensing Letters, vol. 22, pp. 1–5',
            year: '2025',
            doi: '',
            type: 'sci'
        },
        {
            title: 'HVAdam: A Full-Dimension Adaptive Optimizer',
            authors: 'Y Zhang, S Wu, Y Xu, J Wu, S Xu, S Drew, X Niu',
            journal: 'Proceedings of the AAAI Conference on Artificial Intelligence, vol. 39, no. 21, pp. 22623–22631',
            year: '2025',
            doi: '',
            type: 'conference'
        },
        {
            title: 'LanPerAct: A Framework for Language-Driven Perception and Robotic Manipulation',
            authors: 'H Wu, S Wu, Y Tu, H Zhou, S Drew, X Niu',
            journal: 'Proceedings of the 2025 IEEE Smart World Congress (SWC), pp. 484–490',
            year: '2025',
            doi: '',
            type: 'conference'
        },
        {
            title: 'MPAM: Dual-Transformer for Millimeter-Wave Sensing Based Multi-person Activity Monitoring System',
            authors: 'H Wu, S Wu, Z Zhang, H Zhou, X Wu, X Niu, D Li',
            journal: 'Wireless Artificial Intelligent Computing Systems and Applications: 19th International Conference, WASA 2025, pp. 320–331',
            year: '2025',
            doi: '',
            type: 'conference'
        },
        {
            title: 'ReNiL: Event-Driven Pedestrian Bayesian Localization Using IMU for Real-World Applications',
            authors: 'K Wu, Y Xu, Z Zhang, W Zhu, J Zhang, S Drew, X Niu',
            journal: 'arXiv preprint arXiv:2508.06053',
            year: '2025',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Revisiting Interpolation for Noisy Label Correction',
            authors: 'Y Xu, X Niu, J Yang, R Su, J Zhang, S Liu, S Drew',
            journal: 'Proceedings of the AAAI Conference on Artificial Intelligence, vol. 39, no. 20, pp. 21833–21841',
            year: '2025',
            doi: '',
            type: 'conference'
        },
        {
            title: 'User Identification Under the Collaborative Auto-Calibration of Multi-mmWave Radars',
            authors: 'Y Wu, W Li, R Chen, Y Yu, H Zhou',
            journal: 'IEEE Sensors Journal, vol. 25, no. 3, pp. 4930–4942',
            year: '2025',
            doi: '',
            type: 'sci'
        },
        // 2024
        {
            title: 'AARR-Net: An Attention Assistance Feature Fusion and Model Recursive Recovery Network for Category-Level 6D Object Pose Estimation',
            authors: 'H Wu, K Zhao, S Wu, X Wu, X Niu',
            journal: 'International Conference on Neural Information Processing (ICONIP 2024), pp. 402–416',
            year: '2024',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Dynamic Selection for Reconstructing Instance-Dependent Noisy Labels',
            authors: 'J Yang, X Niu, Y Xu, Z Zhang, G Guo, S Drew, R Chen',
            journal: 'Pattern Recognition, vol. 156, Article 110803',
            year: '2024',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Enhancing LLM Agents for Code Generation with Possibility and Pass-Rate Prioritized Experience Replay',
            authors: 'Y Chen, K Zhao, Y Wang, M Yang, J Zhang, X Niu',
            journal: 'arXiv preprint arXiv:2410.12236',
            year: '2024',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Full-Stage Augmentation for Exemplar-Free Class-Incremental Learning',
            authors: 'S Li, J Yang, L Song, Z Zhang, S Drew, X Niu',
            journal: 'SSRN Electronic Journal / Available at SSRN 4758921',
            year: '2024',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Label-Expanded Feature Debiasing for Single Domain Generalization',
            authors: 'J Yang, L Jing, Y Xu, S Wu, S Drew, X Niu',
            journal: 'Pattern Recognition: 27th International Conference, ICPR 2024, pp. 195–210',
            year: '2024',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Real-time Private Data Aggregation over Distributed Spatial-temporal Infinite Streams with Local Differential Privacy',
            authors: 'X Xiong, S Liu, X Liu, X Niu, W You',
            journal: '2024 IEEE 23rd International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom), pp. 1343–1352',
            year: '2024',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Rethinking Cross-Attention for Infrared and Visible Image Fusion',
            authors: 'L Jian, S Xiong, H Yan, X Niu, S Wu, D Zhang',
            journal: 'arXiv preprint arXiv:2401.11675',
            year: '2024',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Sample Difficulty-Aware Pre-trained Models for Class-Incremental Learning',
            authors: 'S Li, S Xu, S Wu, X Wu, X Niu',
            journal: 'International Conference on Neural Information Processing (ICONIP 2024), pp. 196–211',
            year: '2024',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Smartphone Indoor Fusion Localization with Trust Region-Based Magnetic Matching',
            authors: 'Y Zhu, Y Jia, K Zou, X Niu',
            journal: 'Wireless Artificial Intelligent Computing Systems and Applications: 18th International Conference, WASA 2024, pp. 14–25',
            year: '2024',
            doi: '',
            type: 'conference'
        },
        // 2023
        {
            title: 'Application status, development and future trend of high-precision indoor navigation and tracking',
            authors: 'R CHEN, G GUO, L CHEN, X NIU',
            journal: 'Geomatics and Information Science of Wuhan University 48 (10), 1591-1600',
            year: '2023',
            doi: '',
            type: 'sci'
        },
        {
            title: 'ChirpTracker: A precise-location-aware system for acoustic tag using single smartphone',
            authors: 'X Lin, R Chen, L Huang, Z Liu, X Niu, G Guo, Z Li, L Qian',
            journal: 'IEEE Internet of Things Journal 11 (1), 848-862',
            year: '2023',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Factor graph framework for smartphone indoor localization: Integrating data-driven PDR and Wi-Fi RTT/RSS ranging',
            authors: 'G Guo, R Chen, X Niu, K Yan, S Xu, L Chen',
            journal: 'IEEE Sensors Journal 23 (11), 12346-12354',
            year: '2023',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Federated Learning with Client Availability Budgets',
            authors: 'Y Bao, S Drew, X Wang, J Zhou, X Niu',
            journal: 'GLOBECOM 2023 - 2023 IEEE Global Communications Conference, pp. 1902–1907',
            year: '2023',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Large-scale indoor localization solution for pervasive smartphones using corrected acoustic signals and data-driven PDR',
            authors: 'G Guo, R Chen, K Yan, Z Li, L Qian, S Xu, X Niu, L Chen',
            journal: 'IEEE Internet of Things Journal 10 (17), 15338-15349',
            year: '2023',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Ultramotion: High-precision ultrasonic arm tracking for real-world exercises',
            authors: 'X Niu, K Zou, D Shen, S Drew, S Wu, G Guo, R Chen',
            journal: 'IEEE Transactions on Mobile Computing 23 (2), 1846-1862',
            year: '2023',
            doi: '',
            type: 'sci'
        },
        {
            title: 'USDNL: Uncertainty-Based Single Dropout in Noisy Label Learning',
            authors: 'Y Xu, X Niu, J Yang, S Drew, J Zhou, R Chen',
            journal: 'Proceedings of the AAAI Conference on Artificial Intelligence, vol. 37, no. 9, pp. 10648–10656',
            year: '2023',
            doi: '',
            type: 'conference'
        },
        // 2022
        {
            title: 'OCP: an OLAP-based bus crowdedness smart-perceiving mechanism for urban transportation',
            authors: 'S Gong, D Liu, MZA Bhuiyan, X Niu',
            journal: 'Connection Science 34 (1), 2066-2083',
            year: '2022',
            doi: '',
            type: 'sci'
        },
        // 2021
        {
            title: 'Corrigendum to" A Comprehensive Survey on Local Differential Privacy".',
            authors: 'X Xiong, S Liu, D Li, Z Cai, X Niu',
            journal: 'Security & Communication Networks',
            year: '2021',
            doi: '',
            type: 'sci'
        },
        {
            title: 'MAGINS: Neural Network Inertial Navigation System Corrected by Magnetic Information',
            authors: 'C Qiu, Y Xu, Y Zhu, L Xie, D Shen, J Huang, X Niu',
            journal: '2021 IEEE International Performance, Computing, and Communications Conference (IPCCC), pp. 1–8',
            year: '2021',
            doi: '',
            type: 'conference'
        },
        // 2020
        {
            title: 'A comprehensive survey on local differential privacy',
            authors: 'X Xiong, S Liu, D Li, Z Cai, X Niu',
            journal: 'Security and Communication Networks 2020 (1), 8829523',
            year: '2020',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Anti-steganalysis for image on convolutional neural networks',
            authors: 'S Li, D Ye, S Jiang, C Liu, X Niu, X Luo',
            journal: 'Multimedia Tools and Applications 79 (7), 4315-4331',
            year: '2020',
            doi: '',
            type: 'sci'
        },
        {
            title: 'AtLAS: An activity-based indoor localization and semantic labeling mechanism for residences',
            authors: 'X Niu, L Xie, J Wang, H Chen, D Liu, R Chen',
            journal: 'IEEE Internet of Things Journal 7 (10), 10606-10622',
            year: '2020',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Improved Window Segmentation for Deep Learning-Based Inertial Odometry',
            authors: 'S Chen, Y Zhu, X Niu, Z Hu',
            journal: '2020 IEEE 39th International Performance Computing and Communications Conference (IPCCC)',
            year: '2020',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Real-time and private spatio-temporal data aggregation with local differential privacy',
            authors: 'X Xiong, S Liu, D Li, Z Cai, X Niu',
            journal: 'Journal of Information Security and Applications 55, 102633',
            year: '2020',
            doi: '',
            type: 'sci'
        },
        // 2019
        {
            title: 'Bce: A behavior-learning-based crowdedness estimation mechanism for crowdsensing buses',
            authors: 'X Niu, D Shen, Z Zhang, Z Wang, J Wang, H Chen',
            journal: 'IEEE Access 7, 143067-143080',
            year: '2019',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Locally differentially private continuous location sharing with randomized response',
            authors: 'X Xiong, S Liu, D Li, J Wang, X Niu',
            journal: 'International Journal of Distributed Sensor Networks 15 (8), 1550147719870379',
            year: '2019',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Online learning-based WIFI radio map updating considering high-dynamic environmental factors',
            authors: 'X Niu, Z Zhang, A Wang, J Liu, S Liu',
            journal: 'IEEE Access 7, 110074-110085',
            year: '2019',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Privacy protection based on local differential privacy for numerical sensitive data of wearable devices',
            authors: 'F Ma, S Liu, X Xiong, X NIU',
            journal: 'Journal of Computer Applications 39 (7), 1985-1990',
            year: '2019',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Task-bundling-based incentive for location-dependent mobile crowdsourcing',
            authors: 'Z Wang, J Hu, Q Wang, R Lv, J Wei, H Chen, X Niu',
            journal: 'IEEE Communications Magazine 57 (2), 54-59',
            year: '2019',
            doi: '',
            type: 'sci'
        },
        // 2018
        {
            title: 'A Bayesian density model based radio signal fingerprinting positioning method for enhanced usability',
            authors: 'Z Li, J Liu, F Yang, X Niu, L Li, Z Wang, R Chen',
            journal: 'Sensors 18 (11), 4063',
            year: '2018',
            doi: '',
            type: 'sci'
        },
        {
            title: 'A Crowdsourcing-Based Wi-Fi Fingerprinting Mechanism Using Un-Supervised Learning',
            authors: 'X Niu, C Zhang, A Wang, J Liu, Z Wang',
            journal: 'International Conference on Wireless Algorithms, Systems, and Applications (WASA 2018), pp. 357–373',
            year: '2018',
            doi: '',
            type: 'conference'
        },
        {
            title: 'A privacy-preserving identification mechanism for mobile sensing systems',
            authors: 'X Niu, Q Ye, Y Zhang, D Ye',
            journal: 'IEEE Access 6, 15457-15467',
            year: '2018',
            doi: '',
            type: 'sci'
        },
        {
            title: 'A Privacy‐Preserving Incentive Mechanism for Participatory Sensing Systems',
            authors: 'X Niu, J Wang, Q Ye, Y Zhang',
            journal: 'Security and Communication Networks 2018 (1), 2593537',
            year: '2018',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Attack on deep steganalysis neural networks',
            authors: 'S Li, D Ye, S Jiang, C Liu, X Niu, X Luo',
            journal: 'International conference on cloud computing and security, 265-276',
            year: '2018',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Heterogeneous incentive mechanism for time-sensitive and location-dependent crowdsensing networks with random arrivals',
            authors: 'Z Wang, R Tan, J Hu, J Zhao, Q Wang, F Xia, X Niu',
            journal: 'Computer networks 131, 96-109',
            year: '2018',
            doi: '',
            type: 'sci'
        },
        // 2017
        {
            title: 'A hierarchical-learning-based crowdedness estimation mechanism for crowdsensing buses',
            authors: 'X Niu, Z Wang, Q Ye, Y Zhang, J Wang',
            journal: '2017 IEEE 36th International Performance Computing and Communications Conference (IPCCC)',
            year: '2017',
            doi: '',
            type: 'conference'
        },
        // 2016
        {
            title: 'A task-centric cooperative sensing scheme for mobile crowdsourcing systems',
            authors: 'Z Liu, X Niu, X Lin, T Huang, Y Wu, H Li',
            journal: 'Sensors 16 (5), 746',
            year: '2016',
            doi: '',
            type: 'sci'
        },
        {
            title: 'An energy-efficient source-anonymity protocol in surveillance systems',
            authors: 'X Niu, Y Zhang, Y Yao, X Chen, JM Jornet, J Liu',
            journal: 'Personal and Ubiquitous Computing 20 (5), 771-783',
            year: '2016',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Energy-consumption-balanced efficient source-location privacy preserving protocol in WSN',
            authors: 'X Niu, C Wei, Y Yao',
            journal: 'Journal on Communications (In China) 37 (4), 23-33',
            year: '2016',
            doi: '',
            type: 'sci'
        },
        {
            title: 'OSim: An OLAP-Based Similarity Search Service Solver for Dynamic Information Networks',
            authors: 'X Niu, Y Zhang, T Huang, X Wu',
            journal: 'International Conference on Wireless Algorithms, Systems, and Applications (WASA)',
            year: '2016',
            doi: '',
            type: 'conference'
        },
        // 2015
        {
            title: 'A Data-centric Cooperative Sensing Scheme in Crowdsourcing Systems',
            authors: 'Z Liu, X Niu, C Wei, Z Huang, Y Wu, H Li',
            journal: '2015 International Conference on Identification, Information, and Knowledge in the Internet of Things (IIKI)',
            year: '2015',
            doi: '',
            type: 'conference'
        },
        {
            title: 'A novel source-location anonymity protocol in surveillance systems',
            authors: 'X Niu, Y Yao, C Wei, Y Liu, J Liu, X Chen',
            journal: '2015 International Conference on Identification, Information, and Knowledge in the Internet of Things (IIKI)',
            year: '2015',
            doi: '',
            type: 'conference'
        },
        {
            title: 'An online-traffic-prediction based route finding mechanism for smart city',
            authors: 'X Niu, Y Zhu, Q Cao, X Zhang, W Xie, K Zheng',
            journal: 'International Journal of Distributed Sensor Networks 11 (8), 970256',
            year: '2015',
            doi: '',
            type: 'sci'
        },
        {
            title: 'GreenOCR: an energy-efficient optimal clustering routing protocol',
            authors: 'J Liu, J Li, X Niu, X Cui, Y Sun',
            journal: 'The Computer Journal 58 (6), 1344-1359',
            year: '2015',
            doi: '',
            type: 'sci'
        },
        {
            title: 'ONSA: 传感网中基于优化非均匀统计特性的源匿名协议',
            authors: '牛晓光， 魏川博， 冯为江， 彭国军， 张焕国',
            journal: '通信学报 6',
            year: '2015',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Social sensing enhanced time estimation for bus service',
            authors: 'J Liu, J Li, X Cui, X Niu, X Sun, J Zhou',
            journal: 'Concurrency and Computation: Practice and Experience 27 (15), 3961-3981',
            year: '2015',
            doi: '',
            type: 'sci'
        },
        // 2014
        {
            title: 'A novel urban traffic prediction mechanism for smart city using learning approach',
            authors: 'X Niu, Y Zhu, Q Cao, L Zhao, W Xie',
            journal: 'China Conference on Wireless Sensor Networks, 548-557',
            year: '2014',
            doi: '',
            type: 'conference'
        },
        {
            title: 'DeepSense: A novel learning mechanism for traffic prediction with taxi GPS traces',
            authors: 'X Niu, Y Zhu, X Zhang',
            journal: '2014 IEEE global communications conference, 2745-2750',
            year: '2014',
            doi: '',
            type: 'conference'
        },
        {
            title: 'EPPI: An E-Cent-Based Privacy-Preserving Incentive Mechanism for Participatory Sensing Systems',
            authors: 'X Niu, M Li, Q Chen, Q Cao, H Wang',
            journal: '2014 IEEE 33rd International Performance Computing and Communications Conference (IPCCC), pp. 1–8',
            year: '2014',
            doi: '',
            type: 'conference'
        },
        {
            title: 'OSAP: Optimal-cluster-based source anonymity protocol in delay-sensitive wireless sensor networks',
            authors: 'X Niu, C Wei, W Feng, Q Chen',
            journal: '2014 IEEE Wireless Communications and Networking Conference (WCNC), 2880-2885',
            year: '2014',
            doi: '',
            type: 'conference'
        },
        {
            title: 'Progress and challenges in the architecture and service pattern of Earth Observation Sensor Web for Digital Earth',
            authors: 'N Chen, X Chen, K Wang, X Niu',
            journal: 'International Journal of Digital Earth 7 (12), 935-951',
            year: '2014',
            doi: '',
            type: 'sci'
        },
        {
            title: 'WTrack: HMM-based walk pattern recognition and indoor pedestrian tracking using phone inertial sensors',
            authors: 'X Niu, M Li, X Cui, J Liu, S Liu, KR Chowdhury',
            journal: 'Personal and ubiquitous computing 18 (8), 1901-1915',
            year: '2014',
            doi: '',
            type: 'sci'
        },
        // 2013
        {
            title: 'POR: a packet-based opportunistic routing protocol for wireless sensor networks',
            authors: 'Z Liu, C Wei, C Qin, H Li, X Niu, L Wang',
            journal: '2013 International conference on computer sciences and applications, 158-162',
            year: '2013',
            doi: '',
            type: 'conference'
        },
        {
            title: 'UCOR: an unequally clustering-based hierarchical opportunistic routing protocol for WSNs',
            authors: 'Z Liu, C Wei, Y Ma, H Li, X Niu, L Wang',
            journal: 'International Conference on Wireless Algorithms, Systems, and Applications (WASA)',
            year: '2013',
            doi: '',
            type: 'conference'
        },
        // 2011
        {
            title: 'eFKM: an enhanced fingerprint-based key management protocol for wireless sensor networks',
            authors: 'X Niu, C Tan, C Wei',
            journal: '2011 Second International Conference on Networking and Distributed Computing (ICNDC)',
            year: '2011',
            doi: '',
            type: 'conference'
        },
        {
            title: 'The design of a wireless sensor network for seismic-observation-environment surveillance',
            authors: 'X Niu, C Wei, L Wang',
            journal: 'International Conference on Wireless Algorithms, Systems, and Applications (WASA)',
            year: '2011',
            doi: '',
            type: 'conference'
        },
        // 2010
        {
            title: 'Hybrid optimal cluster routing protocol for mobile ad hoc network',
            authors: 'XG Niu, L Cui, CC Huang',
            journal: 'Journal of China Institute of Communications 31 (10), 58-67',
            year: '2010',
            doi: '',
            type: 'sci'
        },
        {
            title: 'Throughput Capacity of Opportunistic Routing in Wireless Sensor Networks',
            authors: 'X Niu, L Cui',
            journal: 'International Journal of Distributed Sensor Networks 6 (1), 148359',
            year: '2010',
            doi: '',
            type: 'sci'
        },
        // 2009
        {
            title: 'FKM: a fingerprint-based key management protocol for soc-based sensor networks',
            authors: 'X Niu, Y Zhu, L Cui, LM Ni',
            journal: '2009 IEEE Wireless Communications and Networking Conference, 1-6',
            year: '2009',
            doi: '',
            type: 'conference'
        },
        // 2008
        {
            title: 'EasiTPQ: QoS-based topology control in wireless sensor network',
            authors: 'W Liu, L Cui, X Niu, W Liu',
            journal: 'Journal of signal processing systems 51 (2), 173-181',
            year: '2008',
            doi: '',
            type: 'sci'
        },
        // 2007
        {
            title: 'The design and evaluation of a wireless sensor network for mine safety monitoring',
            authors: 'X Niu, X Huang, Z Zhao, Y Zhang, C Huang, L Cui',
            journal: 'IEEE GLOBECOM 2007-IEEE Global Telecommunications Conference, 1291-1295',
            year: '2007',
            doi: '',
            type: 'conference'
        },
        // 2006
        {
            title: 'Hybrid cluster routing: An efficient routing protocol for mobile ad hoc networks',
            authors: 'X Niu, Z Tao, G Wu, C Huang, L Cui',
            journal: '2006 IEEE International Conference on Communications 8, 3554-3559',
            year: '2006',
            doi: '',
            type: 'conference'
        },
        // 2005
        {
            title: 'Search and index in locality-based clustering overlay',
            authors: 'Y He, J Zhang, X Niu, Q Zhao',
            journal: 'CCGrid 2005 - IEEE International Symposium on Cluster Computing and the Grid',
            year: '2005',
            doi: '',
            type: 'conference'
        },
    ]
};


// 语言状态
let currentLang = 'cn';  // 默认为中文

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
    updatePublicationStats();

    // 初始显示所有论文
    updatePapers('all');
    
    // 设置过滤器事件
    setupFilterButtons();
    setupPublicationSearch();
    
    // 平滑滚动设置
    setupSmoothScroll();
    
    // 设置成员卡片点击事件
    setupMemberCards();

    // 设置成员分组切换
    setupMemberTabs();
    
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

    const searchInput = document.getElementById('publication-search-input');
    if (searchInput) {
        searchInput.placeholder = currentLang === 'cn'
            ? '搜索标题、作者、期刊/会议或年份'
            : 'Search title, author, venue, or year';
    }

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

// 更新论文统计
function updatePublicationStats() {
    const stats = {
        'papers-total-count': papers.all.length,
        'papers-journal-count': papers.sci.length,
        'papers-conference-count': papers.conference.length
    };

    Object.entries(stats).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    });
}

// 更新论文列表显示
function updatePapers(type) {
    const paperList = document.querySelector('#publications-list');
    if (paperList) {
        // 根据类型筛选论文
        const filteredPapers = papers[type] || papers.all;
        const query = (document.getElementById('publication-search-input')?.value || '').trim().toLowerCase();
        const papersToShow = query
            ? filteredPapers.filter(paper => [
                paper.title,
                paper.authors,
                paper.journal,
                paper.year
            ].join(' ').toLowerCase().includes(query))
            : filteredPapers;
        
        // 生成HTML
        const emptyText = currentLang === 'cn' ? '没有找到匹配的论文' : 'No matching publications found';
        paperList.innerHTML = papersToShow.length
            ? papersToShow.map(generatePaperHTML).join('')
            : `<div class="bg-gray-50 p-6 rounded-lg text-gray-500">${emptyText}</div>`;
    }
}

function setupPublicationSearch() {
    const searchInput = document.getElementById('publication-search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const activeType = document.querySelector('#publications button.bg-gray-900')?.getAttribute('data-type') || 'all';
        updatePapers(activeType);
    });
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

            const emailToCopy = this.getAttribute('data-copy-email');
            if (emailToCopy) {
                copyTextToClipboard(emailToCopy).then(() => {
                    showCopyFeedback(this);
                });
                return;
            }
            
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

async function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function showCopyFeedback(button) {
    const cnText = button.querySelector('[data-lang="cn"]');
    const enText = button.querySelector('[data-lang="en"]');
    const icon = button.querySelector('[data-copy-icon]');
    const originalCn = cnText?.textContent;
    const originalEn = enText?.textContent;
    const originalIcon = icon?.innerHTML;

    if (cnText) cnText.textContent = '邮箱已复制';
    if (enText) enText.textContent = 'Email Copied';
    if (icon) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';
    }

    window.setTimeout(() => {
        if (cnText && originalCn) cnText.textContent = originalCn;
        if (enText && originalEn) enText.textContent = originalEn;
        if (icon && originalIcon) icon.innerHTML = originalIcon;
    }, 1800);
}

// 设置成员卡片点击展开/收起的功能
function setupMemberCards() {
    const memberCards = document.querySelectorAll('.member-card');
    
    memberCards.forEach(card => {
        card.addEventListener('click', function() {
            const info = this.querySelector('.member-info');
            if (!info) return;
            
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

function setupMemberTabs() {
    const tabButtons = document.querySelectorAll('[data-member-tab]');
    const membersDetail = document.querySelector('.members-detail');
    const currentCategories = [
        document.getElementById('phd'),
        document.getElementById('master')
    ].filter(Boolean);
    const alumniCategory = document.getElementById('alumni');

    if (!tabButtons.length || !membersDetail || !alumniCategory) return;

    function activateMemberTab(tabName) {
        const isAlumni = tabName === 'alumni';

        tabButtons.forEach(button => {
            const active = button.getAttribute('data-member-tab') === tabName;
            button.classList.toggle('active', active);
            button.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        currentCategories.forEach(category => {
            category.classList.toggle('hidden', isAlumni);
        });
        alumniCategory.classList.toggle('hidden', !isAlumni);
        membersDetail.classList.add('active');
        membersDetail.scrollTo({ top: 0, behavior: 'smooth' });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            activateMemberTab(this.getAttribute('data-member-tab'));
        });
    });
}
