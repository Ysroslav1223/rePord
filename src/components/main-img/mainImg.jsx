import { motion, animate,useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export const MainImg = () => {
  const caseRef = useRef(null);
  const consultationRef = useRef(null);
  const containerRef = useRef(null);
  
  const [category, setCategory] = useState('all');

    const { scrollY } = useScroll();

   const logoYPosition = useTransform(
    scrollY,
    [0, 100],
    [-60, 0]  
  );



  const scrollToCases = () => {
    if (caseRef.current) {
      const top = caseRef.current.offsetTop;
      animate(window.scrollY, top, {
        duration: 0.4,
        onUpdate(value) {
          window.scrollTo(0, value);
        },
      });
    }
  };

  const scrollToConsultation = () => {
    if (consultationRef.current) {
      const top = consultationRef.current.offsetTop;
      animate(window.scrollY, top, {
        duration: 0.4,
        onUpdate(value) {
          window.scrollTo(0, value);
        },
      });
    }
  };
  const cases = [
    { 
      id: 1, 
      title: 'Музыкальный клип - "Лето в городе"', 
      category: 'music', 
      img: '/music1.jpg',
      beforeImg: '/before1.jpg',
      afterImg: '/after1.jpg',
      description: 'Полный цикл производства музыкального клипа для начинающего артиста',
      stats: { reach: '2.5M', engagement: '15%', growth: '+300%' }
    },
    { 
      id: 2, 
      title: 'Реклама кофейни "Urban Brew"', 
      category: 'ads', 
      img: '/ads1.jpg',
      beforeImg: '/before2.jpg',
      afterImg: '/after2.jpg',
      description: 'Вертикальные рекламные ролики для социальных сетей',
      stats: { reach: '1.8M', engagement: '12%', growth: '+250%' }
    },
    { 
      id: 3, 
      title: 'Мастерская деревянных изделий', 
      category: 'craft', 
      img: '/craft1.jpg',
      beforeImg: '/before3.jpg',
      afterImg: '/after3.jpg',
      description: 'Контент-стратегия для мастера по дереву',
      stats: { reach: '850K', engagement: '18%', growth: '+400%' }
    },
    { 
      id: 4, 
      title: 'Эксперт по финансам', 
      category: 'expert', 
      img: '/expert1.jpg',
      beforeImg: '/before4.jpg',
      afterImg: '/after4.jpg',
      description: 'Личный бренд финансового консультанта',
      stats: { reach: '1.2M', engagement: '22%', growth: '+350%' }
    },
    { 
      id: 5, 
      title: 'Музыкальный фестиваль', 
      category: 'music', 
      img: '/music2.jpg',
      beforeImg: '/before5.jpg',
      afterImg: '/after5.jpg',
      description: 'Охват мероприятия через вертикальный контент',
      stats: { reach: '3.1M', engagement: '14%', growth: '+280%' }
    },
    { 
      id: 6, 
      title: 'Локальный бренд одежды', 
      category: 'ads', 
      img: '/ads2.jpg',
      beforeImg: '/before6.jpg',
      afterImg: '/after6.jpg',
      description: 'Продвижение через сторис и рилсы',
      stats: { reach: '950K', engagement: '16%', growth: '+320%' }
    },
  ];

  const filteredCases = category === 'all' ? cases : cases.filter(c => c.category === category);

  const beforeAfterCases = cases.slice(0, 3); 

  return (
    <div className="flex flex-col items-center w-full" ref={containerRef}>
        <header className='fixed top-0 left-0 w-full z-40 py-6 bg-transparent'>
        <div className="mx-auto px-6 ">
          <h3 className="text-xl font-bold text-white">
            Продажа дизайна
          </h3>
        </div>
      </header>

      <motion.div 
        className='fixed top-0 left-0 w-full z-50 py-4 bg-white shadow-lg'
        style={{
          y: logoYPosition
        }}
      >
        <div className="mx-auto px-6">
          <h3 className="text-xl font-bold text-black">
            logo
          </h3>
        </div>
      </motion.div>
      <section className="min-h-screen w-full flex flex-col justify-center items-center text-center p-10 bg-gradient-to-b from-gray-900 to-black text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-5xl font-bold mb-6"
        >
          Мы создаём вертикальный контент, который работает на вас
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="text-lg max-w-2xl mb-8 "
        >
          Фото/видео продакшен полного цикла. Специализируемся на создании вирального вертикального контента для малого и среднего бизнеса. От идеи до реализации.
        </motion.p>
        <motion.button 
          onClick={scrollToCases}  
          className='bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 text-base font-bold w-60 border border-black py-3 rounded-lg'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Посмотреть кейсы
        </motion.button>
      </section>
      <section className="w-full py-20 px-10 bg-white" ref={caseRef}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Кто мы такие
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-bold mb-4">Полный цикл</h3>
              <p className="text-gray-600">
                От разработки концепции до финального монтажа. Мы берем на себя все этапы производства контента.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-bold mb-4">Вертикальный формат</h3>
              <p className="text-gray-600">
                Специализируемся на контенте для Instagram, TikTok, YouTube Shorts и других вертикальных платформ.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-bold mb-4">Для бизнеса</h3>
              <p className="text-gray-600">
                Помогаем малым и средним бизнесам увеличивать охваты, вовлеченность и конверсии через качественный контент.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section  className="w-full py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Наши кейсы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Реальные примеры работ, которые принесли результат нашим клиентам
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
          >
            {[
              { key: 'all', label: 'Все' },
              { key: 'music', label: 'Музыка' },
              { key: 'ads', label: 'Реклама' },
              { key: 'craft', label: 'Ремесло' },
              { key: 'expert', label: 'Экспертные' }
            ].map(({ key, label }) => (
              <motion.button 
                key={key}
                className={`px-6 py-2 rounded-full border transition-all ${
                  category === key 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-black border-gray-300 hover:border-black'
                }`}
                onClick={() => setCategory(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={caseItem.img} 
                    alt={caseItem.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{caseItem.title}</h3>
                  <p className="text-gray-600 mb-4">{caseItem.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <div className="text-center">
                      <div className="font-bold text-black">{caseItem.stats.reach}</div>
                      <div>Охват</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-black">{caseItem.stats.engagement}</div>
                      <div>Вовлеченность</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-black">{caseItem.stats.growth}</div>
                      <div>Рост</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Результаты наших работ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Увидьте разницу между обычным контентом и профессионально созданным
            </p>
          </motion.div>

          <div className="space-y-16">
            {beforeAfterCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-red-500">До</h3>
                  <div className="bg-gray-100 rounded-2xl p-4">
                    <img 
                      src={caseItem.beforeImg} 
                      alt={`До - ${caseItem.title}`}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                  <p className="mt-4 text-gray-600">Обычный пользовательский контент</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-green-500">После</h3>
                  <div className="bg-gray-100 rounded-2xl p-4">
                    <img 
                      src={caseItem.afterImg} 
                      alt={`После - ${caseItem.title}`}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                  <p className="mt-4 text-gray-600">Профессиональный контент от нашего продакшена</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section ref={consultationRef} className="w-full py-20 px-10 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Бесплатная консультация</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Придумаем идею, цели, форматы и бюджет проекта вместе с вами
            </p>
            <motion.button
              onClick={scrollToConsultation}
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Получить консультацию
            </motion.button>
          </motion.div>
        </div>
      </section>
      <section className="w-full py-20 px-10 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Наши контакты</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4">Телефон</h3>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-300">hello@production.ru</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Telegram</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">YouTube</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};