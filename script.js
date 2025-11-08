// Portfolio Content Data
const portfolioContent = {
    about: {
        title: 'About Me',
        content: `
            <section class="px-6 py-16 bg-gradient-to-b from-gray-900 to-black text-white font-serif">
                <div class="max-w-4xl mx-auto space-y-8">
                    <div class="text-center mb-6" data-aos="fade-down">
                        <span class="text-5xl">🌕</span>
                        <h3 class="text-2xl font-medium text-amber-300 mt-2">The Story Behind My Name</h3>
                    </div>

                    <p class="text-lg leading-relaxed text-gray-200" data-aos="fade-up" data-aos-delay="100">
                    My name is <strong class="text-amber-300">Nguyệt Tuyền Hoàng</strong>, and it holds a story that I treasure deeply, one that reflects my family, my culture, and my spirit.
                    </p>

                    <div class="grid md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="200">
                        <!-- Moon -->
                        <div class="bg-gradient-to-br from-black/40 via-black/30 to-black/10 p-6 rounded-lg border border-amber-400 border-opacity-30 backdrop-blur-sm">
                            <h4 class="text-amber-300 font-medium mb-2 text-lg">🌙 Nguyệt (Moon)</h4>
                            <p class="text-sm text-gray-200 opacity-90">
                            I was born on a full moon night. As my mother looked out the hospital window, she saw the moon glowing gently in the sky, like a quiet guardian. That moment inspired her to name me <em>Nguyệt</em>, which means <strong>“Moon”</strong> in Vietnamese. It reflects calm beauty, emotional depth, and quiet strength.
                            </p>
                        </div>

                        <!-- Stream -->
                        <div class="bg-gradient-to-br from-black/40 via-black/30 to-black/10 p-6 rounded-lg border border-blue-400 border-opacity-30 backdrop-blur-sm">
                            <h4 class="text-blue-300 font-medium mb-2 text-lg">💧 Tuyền (Spring)</h4>
                            <p class="text-sm text-gray-200 opacity-90">
                            In Vietnamese astrology, I was born under the element <em>Tuyền Trung Thủy</em> = "Water in the Heart of the Spring." It represents deep, pure, hidden water, not the kind that rushes or roars, but the kind that nourishes quietly beneath the surface. It symbolizes intuition, adaptability, and quiet strength.
                            </p>
                        </div>
                    </div>
                    <div class="bg-gradient-to-br from-black/40 via-black/30 to-black/10 p-6 rounded-lg border border-yellow-400 border-opacity-30 backdrop-blur-sm">
                        <h4 class="text-yellow-300 font-medium mb-2 text-lg">👑 Hoàng (Legacy)</h4>
                        <p class="text-sm text-gray-200 opacity-90">
                        <em>Hoàng</em> means "royal" or "golden", once the color of emperors. But to me, it's more than a symbol of nobility. It carries the strength of my parents, the love of generations before me, and the values I strive to uphold with quiet dignity.
                        </p>
                    </div>
                    <p class="text-2xl italic text-center text-amber-200">
                        Together, my name means <strong>"The golden moon over a flowing spring"</strong>
                    </p>


                </div>
            </section>
        `
    },
    
    projects: {
        title: 'Featured Projects',
        content: `
            <div class="space-y-6">
                <div class="text-center mb-6">
                    <span class="text-4xl">🌿</span>
                    <h3 class="text-xl font-medium text-green-300 mt-2">Digital Creations & Innovations</h3>
                </div>
                
                <div class="space-y-6">
                    <div class="project-card bg-gradient-to-br from-green-900 to-amber-900 bg-opacity-40 p-6 rounded-lg border border-green-500 border-opacity-30">
                        <div class="flex items-start justify-between mb-4">
                            <h4 class="text-xl font-medium text-green-300">🤖 interactL (Group Graduate Project)</h4>
                            <span class="text-xs bg-green-600 bg-opacity-50 px-2 py-1 rounded text-green-200">Complete</span>
                        </div>
                        <p class="text-amber-100 mb-4 leading-relaxed">
                            Full-stack web application using React & Flask for interactive educational platform teaching federated learning with hands-on simulations and real-time progress tracking.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="tech-tag">React.js</span>
                            <span class="tech-tag">Flask (Python)</span>
                            <span class="tech-tag">Flower (FL Frameworks)</span>
                            <span class="tech-tag">RESTful API</span>
                            <span class="tech-tag">WebSockets</span>
                        </div>
                        <div class="text-sm text-amber-200 opacity-80 mb-4">
                            <strong>Key Features:</strong> Simulator, Live Visualisations, Adaptive Learning
                        </div>
                        
                        <!-- YouTube Video Embed -->
                        <div class="relative pt-[56.25%]">
                            <iframe id="yt-demo" class="absolute top-0 left-0 w-full h-full rounded-lg"
                                    src="https://www.youtube.com/embed/nMY8dJva8uY?enablejsapi=1"
                                    title="interactL Demo"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                            </iframe>
                        </div>
                    </div>

                    
                    <div class="project-card bg-gradient-to-br from-blue-900 to-purple-900 bg-opacity-40 p-6 rounded-lg border border-blue-500 border-opacity-30">
                        <h4 class="text-xl font-medium text-blue-300 mb-4">📊 Data & AI Driven Projects</h4>
                        <p class="text-amber-100 mb-4 leading-relaxed">
                            Innovative projects leveraging AI and data analytics to solve real-world problems, delivering actionable insights and intelligent solutions across healthcare and agriculture domains.
                        </p>

                        <div class="project-card bg-gradient-to-br from-yellow-900 to-orange-900 bg-opacity-40 p-5 rounded-lg border border-yellow-500 border-opacity-30">
                            <div class="flex items-center justify-between mb-2">
                                <h5 class="text-amber-300 font-medium">Advanced AI Baby Monitor System</h5>
                                <span class="text-xs bg-yellow-600 bg-opacity-50 px-2 py-1 rounded text-yellow-200">On Going</span>
                            </div>
                            <p class="text-amber-100 text-sm mb-2">
                                Built a complete AI Baby Monitor with real-time breathing/movement detection, smart alerts, video streaming, and a professional dashboard.
                            </p>
                            <div class="flex flex-wrap gap-2 mb-6">
                                <span class="tech-tag">Python</span>
                                <span class="tech-tag">OpenCV</span>
                                <span class="tech-tag">TensorFlow / PyTorch</span>
                                <span class="tech-tag">Flask</span>
                                <span class="tech-tag">WebRTC</span>
                                <span class="tech-tag">Smart Alerts</span>
                            </div>
                            <div class="text-sm text-amber-200 opacity-80">
                                <strong>Impact:</strong> Real-time monitoring of baby movement and breathing, with intelligent alerts for enhanced safety and parental peace of mind.
                            </div>

                        </div>
                        <br>
                        <div class="project-card bg-gradient-to-br from-red-900 to-pink-700 bg-opacity-40 p-5 rounded-lg border border-red-500 border-opacity-30">
                            <div class="flex items-center justify-between mb-2">
                                <h5 class="text-amber-300 font-medium">Pig Skin Disease Detection System</h5>
                                <span class="text-xs bg-red-600 bg-opacity-50 px-2 py-1 rounded text-red-200">On Going</span>
                            </div>
                            <p class="text-amber-100 text-sm mb-2">
                                AI-powered system that automatically detects pig skin diseases through camera monitoring and sends real-time alerts to farmers for early intervention.
                            </p>
                            <div class="flex flex-wrap gap-2 mb-5">
                                <span class="tech-tag">Python</span>
                                <span class="tech-tag">OpenCV</span>
                                <span class="tech-tag">TensorFlow / PyTorch</span>
                                <span class="tech-tag">Flask</span>
                                <span class="tech-tag">Real-Time Alerts</span>
                            </div>
                            <div class="text-sm text-amber-200 opacity-80">
                                <strong>Impact:</strong> Automated detection of pig skin diseases for early intervention, improving farm health monitoring efficiency.
                            </div>
                        </div>
                    </div>
                    
                    <div class="project-card bg-gradient-to-br from-purple-900 to-pink-900 bg-opacity-40 p-6 rounded-lg border border-purple-500 border-opacity-30">
                        <h4 class="text-xl font-medium text-purple-300 mb-4">🌐 Business Websites</h4>
                        <p class="text-amber-100 mb-4 leading-relaxed">
                            Designed, developed, and deployed fully functional websites for businesses using GoDaddy’s platform. Focused on user experience, responsive design, and content management to deliver live websites that meet client needs.
                        </p>

                        <div class="flex flex-wrap gap-2">
                            <span class="tech-tag">GoDaddy</span>
                            <span class="tech-tag">Web Design</span>
                            <span class="tech-tag">Content Management</span>
                            <span class="tech-tag">Responsive Layout</span>
                        </div>

                        <br>
                        
                        <div class="grid md:grid-cols-2 gap-6">
                            <a href="https://selectivefurniture.com.au" target="_blank" class="project-card bg-gradient-to-br from-green-900 to-amber-900 bg-opacity-40 p-5 rounded-lg border border-green-500 border-opacity-30 hover:shadow-lg transition-shadow duration-200">
                                <div class="flex items-center justify-between mb-2">
                                    <h5 class="text-amber-300 font-medium">Selective Furniture Website</h5>
                                    <span class="text-xs bg-green-600 bg-opacity-50 px-2 py-1 rounded text-green-200">Complete</span>
                                </div>
                                <p class="text-amber-100 text-sm mb-2">Live: selectivefurniture.com.au</p>
                            </a>

                            <a href="https://qv-law.com.au" target="_blank" class="project-card bg-gradient-to-br from-blue-900 to-purple-900 bg-opacity-40 p-5 rounded-lg border border-blue-500 border-opacity-30 hover:shadow-lg transition-shadow duration-200">
                                <div class="flex items-center justify-between mb-2">
                                    <h5 class="text-amber-300 font-medium">QV Law Website</h5>
                                    <span class="text-xs bg-blue-600 bg-opacity-50 px-2 py-1 rounded text-blue-200">Complete</span>
                                </div>
                                <p class="text-amber-100 text-sm mb-2">Live: qv-law.com.au</p>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-8 p-4 bg-black bg-opacity-30 rounded-lg border border-amber-500 border-opacity-30">
                    <p class="text-amber-300 font-medium">🚀 More Projects Coming Soon</p>
                    <p class="text-sm text-amber-200 opacity-80 mt-1">Currently working on AI-powered applications and blockchain solutions</p>
                </div>
            </div>
            
            <style>
                .tech-tag {
                    background: rgba(255, 215, 0, 0.2);
                    color: #fbbf24;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.25rem;
                    font-size: 0.75rem;
                    border: 1px solid rgba(255, 215, 0, 0.3);
                }
                
                .project-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .project-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                }
            </style>
        `
    },
    
    skills: {
        title: 'Skills & Languages',
        content: `
            <div class="space-y-6">

                <div class="text-center mb-6">
                    <span class="text-4xl">✨</span>
                    <h3 class="text-xl font-medium text-blue-300 mt-2">Technical Skills</h3>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="skill-category">
                        <h4 class="skill-category-title">🎨 Frontend Development</h4>
                        <div class="skill-list">
                            <div class="skill-item">
                                <span class="skill-name">React / Next.js</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 90%"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">JavaScript / TypeScript</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 85%"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">HTML5 / CSS3</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 95%"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">Tailwind CSS</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 88%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h4 class="skill-category-title">⚙️ Backend Development</h4>
                        <div class="skill-list">
                            <div class="skill-item">
                                <span class="skill-name">Python / Django</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 87%"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">Node.js / Express</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 82%"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">PostgreSQL / MongoDB</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 80%"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">RESTful APIs</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 90%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h4 class="skill-category-title">📊 Data Analysis</h4>
                        <div class="skill-list">
                            <div class="skill-item">
                                <span class="skill-name">Python (Pandas, NumPy)</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 92%"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">SQL / Data Modeling</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 88%"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">Tableau / Power BI</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 75%"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">Mathematics</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 90%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h4 class="skill-category-title">🤖 AI & Machine Learning</h4>
                        <div class="skill-list">
                            <div class="skill-item">
                                <span class="skill-name">Computer Vision</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 90%"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">Natural Language Processing</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 75%"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">Algorithmic Trading</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 80%"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">Image Classification/ Detection</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 85%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Core Strengths & Languages-->
                    <div class="mt-8 p-6 bg-gradient-to-r from-amber-900 to-blue-900 bg-opacity-40 rounded-lg border border-amber-500 border-opacity-30">
                        <div class="grid md:grid-cols-1 gap-6">
                            
                            <!-- Core Strengths -->
                            <div>
                                <h4 class="text-amber-300 font-medium mb-4 text-center">🌟 Core Strengths</h4>
                                <div class="grid gap-4 text-center">
                                    <div class="language-strength">
                                        <span class="text-2xl mb-2 block">🧠</span>
                                        <h5 class="text-amber-200 font-medium">Problem Solving</h5>
                                        <p class="text-xs text-amber-100 opacity-80 mt-1">Analytical thinking & creative solutions</p>
                                    </div>
                                    <div class="language-strength">
                                        <span class="text-2xl mb-2 block">🌱</span>
                                        <h5 class="text-amber-200 font-medium">Adaptability</h5>
                                        <p class="text-xs text-amber-100 opacity-80 mt-1">Thriving in dynamic environments</p>
                                    </div>
                                    <div class="language-strength">
                                        <span class="text-2xl mb-2 block">⚡</span>
                                        <h5 class="text-amber-200 font-medium">Fast & Continuous Learning</h5>
                                        <p class="text-xs text-amber-100 opacity-80 mt-1">Quickly mastering new technologies</p>
                                    </div>
                                    <div class="language-strength">
                                        <span class="text-2xl mb-2 block">🤝</span>
                                        <h5 class="text-amber-200 font-medium">Teamwork</h5>
                                        <p class="text-xs text-amber-100 opacity-80 mt-1">Collaborating effectively with diverse teams</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 p-6 bg-gradient-to-r from-amber-900 to-blue-900 bg-opacity-40 rounded-lg border border-amber-500 border-opacity-30">
                        <div class="grid md:grid-cols-1 gap-6"> 
                            <div>
                                <h4 class="text-amber-300 font-medium mb-4 text-center">🌐 Languages</h4>
                                <div class="grid gap-4 text-center">
                                    <div class="language-strength">
                                        <span class="text-2xl mb-2 block">🇻🇳</span>
                                        <h5 class="text-amber-200 font-medium">Vietnamese</h5>
                                        <p class="text-xs text-amber-100 opacity-80 mt-1">Native proficiency</p>
                                    </div>
                                    <div class="language-strength">
                                        <span class="text-2xl mb-2 block">🇦🇺</span>
                                        <h5 class="text-amber-200 font-medium">English</h5>
                                        <p class="text-xs text-amber-100 opacity-80 mt-1">Full professional proficiency</p>
                                    </div>
                                    <div class="language-strength">
                                        <span class="text-2xl mb-2 block">🇨🇳</span>
                                        <h5 class="text-amber-200 font-medium">Chinese</h5>
                                        <p class="text-xs text-amber-100 opacity-80 mt-1">Professional working proficiency</p>
                                    </div>
                                    <div class="language-strength">
                                        <span class="text-2xl mb-2 block">🇩🇪</span>
                                        <h5 class="text-amber-200 font-medium">German</h5>
                                        <p class="text-xs text-amber-100 opacity-80 mt-1">Elementary proficiency</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            

                </div>
                
            
            </div>
            
            <style>
                .skill-category {
                    background: rgba(0, 0, 0, 0.3);
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                    border: 1px solid rgba(255, 215, 0, 0.2);
                }
                
                .skill-category-title {
                    color: #fbbf24;
                    font-weight: 500;
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }
                
                .skill-list {
                    space-y: 0.75rem;
                }
                
                .skill-item {
                    margin-bottom: 0.75rem;
                }
                
                .skill-name {
                    color: #fef3c7;
                    font-size: 0.9rem;
                    display: block;
                    margin-bottom: 0.25rem;
                }
                
                .skill-bar {
                    background: rgba(0, 0, 0, 0.3);
                    height: 6px;
                    border-radius: 3px;
                    overflow: hidden;
                }
                
                .skill-progress {
                    background: linear-gradient(90deg, #fbbf24, #d4af37);
                    height: 100%;
                    border-radius: 3px;
                    transition: width 1s ease-in-out;
                    box-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
                }
                
                .language-strength {
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 0.5rem;
                    border: 1px solid rgba(255, 215, 0, 0.1);
                }
            </style>
        `
    },
    
    contact: {
        title: 'Let\'s Connect',
        content: `
            <div class="space-y-6">

                <div class="text-center mb-6">
                    <span class="text-4xl">🌊</span>
                    <h3 class="text-xl font-medium text-purple-300 mt-2">Ready to Create Something Magical?</h3>
                </div>
                
                <div class="text-center mb-8">
                    <p class="text-lg text-amber-100 leading-relaxed">
                        Like streams that converge to form mighty rivers, let's combine our talents to create something extraordinary. I'm always excited to discuss new opportunities and innovative projects.
                    </p>
                </div>
                <a href="NguyetTuyenHoang_CV.pdf" target="_blank" class="section-button cv-btn">
                    <span class="button-icon">📄</span>
                    <span class="button-text">View CV</span>
                    <span class="button-subtitle">Open in browser</span>
                </a>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="contact-method">
                        <div class="contact-icon">📧</div>
                        <h4 class="contact-title">Email</h4>
                        <p class="contact-info">hoangnguyettuyen2004@gmail.com</p>
                        <p class="contact-description">For professional inquiries and project discussions</p>
                    </div>
                    
                    <a href="https://www.linkedin.com/in/nth866/" target="_blank" rel="noopener noreferrer" class="contact-method-link">
                        <div class="contact-method">
                            <div class="contact-icon">💼</div>
                            <h4 class="contact-title">LinkedIn</h4>
                            <p class="contact-info">linkedin.com/in/nth866/</p>
                            <p class="contact-description">Connect with me professionally</p>
                        </div>
                    </a>

                    
                    <div class="contact-method">
                        <div class="contact-icon">🐙</div>
                        <h4 class="contact-title">GitHub</h4>
                        <p class="contact-info">github.com/elyh8899</p>
                        <p class="contact-description">Explore my code and contributions</p>
                    </div>
                    
                    <a href="https://elyh8899.github.io/" target="_blank" rel="noopener noreferrer" class="contact-method-link">
                        <div class="contact-method">
                            <div class="contact-icon">🌐</div>
                            <h4 class="contact-title">Portfolio</h4>
                            <p class="contact-info">elyh8899.github.io</p>
                            <p class="contact-description">View my complete portfolio</p>
                        </div>
                    </a>

                </div>
                
                <div class="mt-8 p-6 bg-gradient-to-br from-purple-900 to-pink-900 bg-opacity-40 rounded-lg border border-purple-500 border-opacity-30">
                    <h4 class="text-purple-300 font-medium mb-4 text-center">🤝 What I'm Looking For</h4>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="opportunity-item">
                            <h5 class="text-amber-200 font-medium mb-2">💻 Full-Stack Development</h5>
                            <p class="text-sm text-amber-100 opacity-90">Challenging projects that combine frontend creativity with backend complexity</p>
                        </div>
                        <div class="opportunity-item">
                            <h5 class="text-amber-200 font-medium mb-2">📊 Data & AI Projects</h5>
                            <p class="text-sm text-amber-100 opacity-90">Opportunities to extract insights from complex datasets</p>
                        </div>
                        <div class="opportunity-item">
                            <h5 class="text-amber-200 font-medium mb-2">🚀 Startup Collaborations</h5>
                            <p class="text-sm text-amber-100 opacity-90">Early-stage companies building innovative solutions</p>
                        </div>
                        <div class="opportunity-item">
                            <h5 class="text-amber-200 font-medium mb-2">🌱 Mentorship & Knowledge Sharing</h5>
                            <p class="text-sm text-amber-100 opacity-90">Sharing knowledge with aspiring developers</p>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-8 p-4 bg-black bg-opacity-30 rounded-lg border border-amber-500 border-opacity-30">
                    <p class="text-amber-300 font-medium mb-2">✨ "Coding isn’t just work for me, it’s how I bring ideas to life."</p>
                    <p class="text-sm text-amber-200 opacity-80">Let's build something amazing together!</p>
                </div>
            </div>
            
            <style>
                .contact-method {
                    background: rgba(0, 0, 0, 0.3);
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                    border: 1px solid rgba(255, 215, 0, 0.2);
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .contact-method:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                    border-color: rgba(255, 215, 0, 0.4);
                }
                
                .contact-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3));
                }
                
                .contact-title {
                    color: #fbbf24;
                    font-weight: 500;
                    font-size: 1.1rem;
                    margin-bottom: 0.5rem;
                }
                
                .contact-info {
                    color: #fef3c7;
                    font-weight: 400;
                    margin-bottom: 0.5rem;
                    word-break: break-all;
                }
                
                .contact-description {
                    color: #d4af37;
                    font-size: 0.85rem;
                    opacity: 0.8;
                }
                
                .opportunity-item {
                    background: rgba(0, 0, 0, 0.2);
                    padding: 1rem;
                    border-radius: 0.5rem;
                    border: 1px solid rgba(255, 215, 0, 0.1);
                }
                .contact-method-link {
                    text-decoration: none; /* remove underline */
                    color: inherit;        /* keep text color */
                    display: block;        /* make it block-level for proper styling */
                }
  
            </style>
        `
    }
};

// DOM Elements
let modal, modalTitle, modalBody, loadingScreen;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    modal = document.getElementById('modal');
    modalTitle = document.getElementById('modal-title');
    modalBody = document.getElementById('modal-body');
    loadingScreen = document.getElementById('loading');
    overlay = document.getElementById('desktop-warning');
    
    // Initialize video with sound
    initializeVideo();
    
    // Add keyboard event listeners
    document.addEventListener('keydown', handleKeyPress);
    
    // Add click outside modal to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Hide loading screen after a short delay
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 500);
        }
    }, 1500);
    
    // Desktop warning: click outside box to hide
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    }
});



// Video initialization with automatic sound
function initializeVideo() {
    const video = document.getElementById('background-video');
    
    if (video) {
        // Set volume to a comfortable level
        video.volume = 0.7;
        
        // Try to play with sound immediately
        video.addEventListener('loadeddata', function() {
            // First try to play with sound
            video.muted = false;
            video.play().catch(function(error) {
                console.log('Video with sound autoplay failed, trying muted:', error);
                // If that fails, try muted first then unmute after user interaction
                video.muted = true;
                video.play().then(() => {
                    // Add one-time click listener to unmute
                    const enableSoundOnClick = () => {
                        video.muted = false;
                        document.removeEventListener('click', enableSoundOnClick);
                        document.removeEventListener('keydown', enableSoundOnClick);
                    };
                    document.addEventListener('click', enableSoundOnClick);
                    document.addEventListener('keydown', enableSoundOnClick);
                }).catch(() => {
                    // If even muted playback fails, show fallback
                    showFallbackBackground();
                });
            });
        });
        
        // Handle video errors
        video.addEventListener('error', function() {
            console.log('Video failed to load');
            showFallbackBackground();
        });
        
        // Optimize video for mobile
        if (window.innerWidth <= 768) {
            video.addEventListener('loadstart', function() {
                // Reduce video quality on mobile if needed
                video.style.filter = 'brightness(0.8)';
                // Lower volume on mobile
                video.volume = 0.5;
            });
        }
    }
}

function showFallbackBackground() {
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        videoContainer.innerHTML = '<div class="fallback-background"></div><div class="video-overlay"></div>';
    }
}

// Modal functions
function showSection(sectionName) {
    if (!portfolioContent[sectionName]) {
        console.error('Section not found:', sectionName);
        return;
    }
    
    const section = portfolioContent[sectionName];
    
    // Set modal content
    modalTitle.textContent = section.title;
    modalBody.innerHTML = section.content;
    
    // Show modal with animation
    modal.classList.remove('hidden');
    
    // Trigger animations for skill bars if in skills section
    if (sectionName === 'skills') {
        setTimeout(() => {
            animateSkillBars();
        }, 300);
    }
    
    // Add body class to prevent scrolling
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.style.width || '0%';
        }, index * 100);
    });
}

// Keyboard navigation
function handleKeyPress(e) {
    switch(e.key) {
        case 'Escape':
            closeModal();
            break;
        case '1':
            showSection('about');
            break;
        case '2':
            showSection('projects');
            break;
        case '3':
            showSection('skills');
            break;
        case '4':
            showSection('contact');
            break;
    }
}

// Responsive handling
window.addEventListener('resize', function() {
    // Adjust video container on resize
    const video = document.getElementById('background-video');
    if (video) {
        // Force video to maintain aspect ratio
        video.style.objectFit = 'cover';
    }
});

// Performance optimization
function optimizeForMobile() {
    if (window.innerWidth <= 768) {
        // Reduce animations on mobile
        document.documentElement.style.setProperty('--animation-duration', '0.2s');
        
        // Simplify video overlay
        const overlay = document.querySelector('.video-overlay');
        if (overlay) {
            overlay.style.backdropFilter = 'blur(1px)';
        }
    }
}

// Call optimization on load
document.addEventListener('DOMContentLoaded', optimizeForMobile);

// Smooth scrolling for modal content
function smoothScrollToTop(element) {
    element.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
});

// Preload critical resources
function preloadResources() {
    // Preload video if not already loaded
    const video = document.getElementById('background-video');
    if (video && video.readyState < 2) {
        video.load();
    }
}

// Call preload on page load
document.addEventListener('DOMContentLoaded', preloadResources);

// Export functions for global access
window.showSection = showSection;
window.closeModal = closeModal;



// Journey Section Functions
function showJourney() {
    // Initialize the mountain climbing journey
    initMountainJourney();
}

function exitJourney() {
    const journeyContainer = document.getElementById('journey-container');
    const mainContent = document.getElementById('main-content');
    
    if (journeyContainer && mainContent) {
        // Fade out journey
        journeyContainer.style.opacity = '0';
        
        setTimeout(() => {
            journeyContainer.classList.add('hidden');
            journeyContainer.style.opacity = '1';
            
            // Show main content
            mainContent.style.display = 'flex';
            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 100);
            
            // Clean up journey scene
            if (typeof cleanupPagodaJourney === 'function') {
                cleanupPagodaJourney();
            }
        }, 500);
    }
}

// Enhanced keyboard navigation with journey controls
function handleKeyPress(e) {
    // Check if we're in journey mode
    const journeyContainer = document.getElementById('journey-container');
    const isInJourney = journeyContainer && !journeyContainer.classList.contains('hidden');
    
    if (isInJourney) {
        switch(e.key) {
            case 'Escape':
                exitJourney();
                break;
            case 'w':
            case 'W':
            case 'ArrowUp':
                e.preventDefault();
                if (typeof navigateFloor === 'function') {
                    navigateFloor('up');
                }
                break;
            case 's':
            case 'S':
            case 'ArrowDown':
                e.preventDefault();
                if (typeof navigateFloor === 'function') {
                    navigateFloor('down');
                }
                break;
        }
    } else {
        // Original keyboard navigation for main site
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case '1':
                showSection('about');
                break;
            case '2':
                showSection('projects');
                break;
            case '3':
                showSection('skills');
                break;
            case '4':
                showSection('contact');
                break;
            case '5':
                showJourney();
                break;
        }
    }
}

// Export journey functions for global access
window.showJourney = showJourney;
window.exitJourney = exitJourney;

// Load YouTube IFrame API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('yt-demo', {
    events: {
    'onStateChange': onPlayerStateChange
    }
});
}

function onPlayerStateChange(event) {
const bgVideo = document.getElementById('background-video');
if (!bgVideo) return;

// When video plays, mute background
if (event.data == YT.PlayerState.PLAYING) {
    bgVideo.muted = true;
}

// When video pauses or ends, restore background audio
if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
    bgVideo.muted = false;
}
}

