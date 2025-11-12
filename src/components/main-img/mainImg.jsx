import { motion, animate,useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
// import img1 from '../../../public/images/16pro max.png'
import { GoArrowUpRight } from "react-icons/go";

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
      img: "",
      beforeImg: '/before1.jpg',
      afterImg: '/after1.jpg',
      description: 'Полный цикл производства музыкального клипа для начинающего артиста',
      stats: { reach: '2.5M', engagement: '15%', growth: '+300%' }
    },
    { 
      id: 2, 
      title: 'Реклама кофейни Urban', 
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
    <div className="flex flex-col items-center w-full overflow-x-hidden" ref={containerRef}>
        <header className='fixed top-0 left-0 w-full z-40 py-6 '>
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
      <section className="min-h-screen w-full flex flex-col justify-center items-center text-center p-10 pt-80   bg-[radial-gradient(ellipse_70%_40%_at_bottom_right,_#2f2a37_85%,_#c8ec68_150%)] text-white relative z-0">
        <div className="absolute inset-0 bg-[#2f2a37] opacity-60 z-0"></div>
  
  <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2f2a37] rounded-full blur-3xl opacity-40"></div>
  <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#2f2a37] rounded-full blur-2xl opacity-50"></div>
  
  <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#c8ec68] rounded-full blur-2xl opacity-30 -mr-24 -mb-24"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-5xl font-bold mb-6 relative z-20"
        >
          reProd
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="text-lg max-w-2xl mb-8 relative z-20"
        >
         Мы - видеопродакшн полного цикла <br/>Спецы в вертикальном контенте
        </motion.p>
        <motion.button 
          onClick={scrollToCases}  
          className='bg-white relative z-20 text-black hover:bg-black hover:text-white transition-colors duration-300 text-base font-bold w-[96vw]  border border-black py-3 rounded-4xl lg:w-100'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Узнать больше
        </motion.button>
      </section>
      <section className="w-full py-20 px-10 bg-[#080808] text-white relative z-0" ref={caseRef}>
        <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#080808]"></div>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            О нас
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 "
            >
              <h3 className="text-xl font-bold mb-4">Полный цикл</h3>
              <p className="text-gray-400">
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
              <p className="text-gray-400">
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
              <p className="text-gray-400">
                Помогаем малым и средним бизнесам увеличивать охваты, вовлеченность и конверсии через качественный контент.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section ref={consultationRef} className="w-full py-20 px-10  bg-[radial-gradient(ellipse_70%_40%_at_bottom_left,_#c8ec68_0%,_#2f2a37_100%,_#080808_150%)]">
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl text-white font-bold mb-6">Бесплатная консультация</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
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
      <section  className="w-full py-20 px-4 bg-[radial-gradient(ellipse_70%_40%_at_top_left,_#c8ec68_0%,_#2f2a37_100%,_#080808_150%)] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Наши кейсы</h2>
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
                    ? 'bg-[#080808] text-white border-[#080808]' 
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

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 gap-4 ">
                {filteredCases.map((cas, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index*0.15}}
                    className={`bg-white rounded-2xl relative overflow-hidden h-[230px] shadow-inner shadow-black/100 lg:h-[400px]  ${
                      index % 3 === 0 ? 'col-span-2 lg:col-span-2'  : ''
                    }`}
                  >
                    <div className='text-black z-20 absolute right-2 '>
                      <GoArrowUpRight className='h-8'/>
                    </div>
                    <div className='h-[150px] lg:h-[310px] '>
                      <img src={cas.img} alt={cas.title} className=' object-cover'/>
                    </div>
                    <div className='relative z-10   flex items-end justify-center min-h-[80px]'>
                      <h3 className='text-center text-black text-wrap'>{cas.title}</h3>
                    </div>
                    <div className='absolute inset-0 bg-white/20  pointer-events-none rounded-2xl'></div>
                  </motion.div>
                ))}
              </div>
        </div>
        <div className='flex flex-col text-center justify-end mt-30 relative top-8'>
           <motion.h2 initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}}
           className='text-white text-2xl font-bold text-center'>Как вы сохраняете время работая с <br/>нами </motion.h2>
        </div>
       
      </section>
        <section className='w-full py-20 relative overflow-hidden bg-[radial-gradient(ellipse_at_right,#c8ec68__15%,_#2f2a37_50%,_#080808_70%)]'>
  <div className='flex flex-col relative z-10'>
    <div className='flex flex-row mt-15'>    
      <motion.div className='w-[50vw]'></motion.div>
      <motion.div 
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.7}}
        className='w-[80vw] h-30 bg-black/50 backdrop-blur-sm rounded-xl px-4 pt-1 mr-2 flex justify-center items-center '
      >
        <p className='text-white text-center pb-2 font-bold'>поможем в разработке виральной идеи, от вас только задумка!</p>
      </motion.div>
    </div>
    
    <div className='flex flex-row mt-15'>
      <motion.div 
        className='w-[80vw] h-30 bg-black/50  rounded-xl px-4 pt-1 ml-2 flex justify-center items-center'
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.7}}
      >
        <p className='text-white justify-center text-center font-bold'>Съемка полностьб на нас, подбирае студию, образ, продюссер ставит вас в кадре</p>
      </motion.div>
      <motion.div className='w-[50vw]'></motion.div>
    </div>
    
    <div className='flex flex-row mt-15 mb-15'>    
      <motion.div className='w-[50vw]'></motion.div>
      <motion.div 
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.7}}
        className='w-[80vw] h-30 bg-black/50  rounded-xl px-4 pt-1 ml-2 flex justify-center items-center mr-2 '
      >
        <p className='text-white justify-center text-center font-bold'>Монтаж и правки полностью на нас, от вас - принять работу и указать пожелания</p>
      </motion.div>
    </div>
  </div>
</section>
      {/* <section className="w-full  bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
          </motion.div>

          <div className="space-y-16">
            {beforeAfterCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-row w-full justify-center gap-1 lg:justify-center  "
              >
                <div className="text-center flex-1 max-w-2xl">
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
                
                <div className="text-center flex-1 max-w-2xl">
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
      </section> */}
      
      <section className="w-full py-20 px-10  bg-[#080808] text-white">
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