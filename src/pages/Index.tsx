import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = '> Добро пожаловать в матрицу...';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [fullText]);

  const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  
  const MatrixBackground = () => {
    return (
      <div className="matrix-bg">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="matrix-character"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-hacker-red text-white font-mono relative">
      <MatrixBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-hacker-red/80 backdrop-blur-sm border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold glitch" data-text="[DEV_MATRIX]">
              [DEV_MATRIX]
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-red-300 transition-colors">&gt; Главная</a>
              <a href="#about" className="hover:text-red-300 transition-colors">&gt; Обо мне</a>
              <a href="#skills" className="hover:text-red-300 transition-colors">&gt; Технологии</a>
              <a href="#projects" className="hover:text-red-300 transition-colors">&gt; Работы</a>
              <a href="#contact" className="hover:text-red-300 transition-colors">&gt; Связаться</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in-up">
              <span className="glitch" data-text="DEV">DEV</span>
              <span className="text-red-300">_HACKER</span>
            </h1>
            <div className="text-xl md:text-2xl mb-8 h-8">
              {displayText}
              {showCursor && <span className="animate-blink">_</span>}
            </div>
          </div>
          
          <div className="mb-12">
            <p className="text-lg md:text-xl text-white/80 mb-6">
              Начинающий веб-разработчик и программист
            </p>
            <p className="text-sm md:text-base text-white/60">
              Node.js | Python | React | Java | Backend Development
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-red-700 text-white hover:bg-red-600 border border-red-700 animate-glow"
              size="lg"
            >
              <Icon name="Code" className="mr-2" />
              Посмотреть проекты
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-900"
              size="lg"
            >
              <Icon name="Download" className="mr-2" />
              Скачать резюме
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-red-300">&gt;</span> Обо мне
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-hacker-gray/20 border-matrix-green/30 p-6">
                <div className="text-lg leading-relaxed">
                  <p className="mb-4">
                    <span className="text-red-300">$ whoami</span>
                  </p>
                  <p className="mb-4">
                    Привет! Я начинающий программист, изучающий веб-разработку и backend технологии. 
                    Увлекаюсь созданием приложений и изучением новых технологий.
                  </p>
                  <p className="mb-4">
                    Начал свой путь в программировании с изучения основ и постепенно погружаюсь 
                    в современные фреймворки и инструменты разработки.
                  </p>
                  <p>
                    <span className="text-red-300">Status:</span> В поиске возможностей для роста и развития
                  </p>
                </div>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-red-900/20 border-white/30 p-6">
                <h3 className="text-xl font-bold mb-4 text-red-300">
                  <Icon name="Target" className="inline mr-2" />
                  Цели
                </h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Освоить fullstack разработку</li>
                  <li>• Изучить архитектуру приложений</li>
                  <li>• Развить навыки в DevOps</li>
                  <li>• Создать портфолио проектов</li>
                </ul>
              </Card>
              
              <Card className="bg-red-900/20 border-white/30 p-6">
                <h3 className="text-xl font-bold mb-4 text-red-300">
                  <Icon name="Coffee" className="inline mr-2" />
                  Интересы
                </h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Открытый исходный код</li>
                  <li>• Кибербезопасность</li>
                  <li>• Машинное обучение</li>
                  <li>• Игровая разработка</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-red-950/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-red-300">&gt;</span> Технологии
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Node.js', level: 'Начинающий', icon: 'Server' },
              { name: 'Python', level: 'Начинающий', icon: 'Code2' },
              { name: 'React', level: 'Изучаю', icon: 'Layers' },
              { name: 'Java', level: 'Базовый', icon: 'Coffee' },
              { name: 'JavaScript', level: 'Начинающий', icon: 'Zap' },
              { name: 'HTML/CSS', level: 'Уверенный', icon: 'Palette' },
              { name: 'Git', level: 'Базовый', icon: 'GitBranch' },
              { name: 'SQL', level: 'Изучаю', icon: 'Database' }
            ].map((skill, index) => (
              <Card key={index} className="bg-red-900/20 border-white/30 p-6 hover:border-red-300/50 transition-all duration-300 animate-fade-in-up">
                <div className="text-center">
                  <Icon name={skill.icon} className="mx-auto mb-4 text-3xl text-red-300" />
                  <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                  <p className="text-sm text-white/60">{skill.level}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-red-300">&gt;</span> Работы
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Terminal Portfolio',
                description: 'Интерактивное портфолио в стиле терминала',
                tech: ['HTML', 'CSS', 'JavaScript'],
                status: 'В разработке'
              },
              {
                title: 'Todo App',
                description: 'Простое приложение для управления задачами',
                tech: ['React', 'Node.js', 'MongoDB'],
                status: 'Планируется'
              },
              {
                title: 'Weather Bot',
                description: 'Telegram бот для получения прогноза погоды',
                tech: ['Python', 'Telegram API'],
                status: 'Идея'
              }
            ].map((project, index) => (
              <Card key={index} className="bg-red-900/20 border-white/30 p-6 hover:border-red-300/50 transition-all duration-300 animate-fade-in-up">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-red-300">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-red-900/20 text-red-300 text-xs rounded border border-red-300/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-white/60">
                    Статус: {project.status}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-white/50 text-white hover:bg-white/20">
                    <Icon name="Eye" className="mr-1" size={16} />
                    Просмотр
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/50 text-white hover:bg-white/20">
                    <Icon name="Github" className="mr-1" size={16} />
                    GitHub
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-red-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="text-red-300">&gt;</span> Связаться
          </h2>
          
          <Card className="bg-red-900/20 border-white/30 p-8">
            <div className="mb-8">
              <p className="text-lg mb-4">
                <span className="text-red-300">$ contact --mode="collaboration"</span>
              </p>
              <p className="text-white/80 mb-6">
                Готов к новым проектам и возможностям обучения!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-red-700 text-white hover:bg-red-600">
                <Icon name="Mail" className="mr-2" />
                Email
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                <Icon name="Github" className="mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                <Icon name="Linkedin" className="mr-2" />
                LinkedIn
              </Button>
            </div>
            
            <div className="text-sm text-white/60">
              <p>Открыт для стажировок, junior позиций и интересных проектов</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/30">
        <p className="text-white/60">
          <span className="text-red-300">&gt;</span> Made with ❤️ and lots of ☕
        </p>
        <p className="text-xs text-white/40 mt-2">
          © 2024 DEV_HACKER. Powered by Matrix.
        </p>
      </footer>
    </div>
  );
};

export default Index;