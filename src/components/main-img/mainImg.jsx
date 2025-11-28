import { motion, animate,useScroll, useTransform,AnimatePresence } from 'framer-motion';
import { useRef, useState,useEffect } from 'react';
import img1 from '../../../public/images/tik-tok.jpg'
import img2 from '../../../public/images/tik-tok2.jpg'
import img3 from '../../../public/images/case3.jpg'
import img4 from '../../../public/images/case4.jpg'
import img5 from '../../../public/images/case5.jpg'
import img6 from '../../../public/images/case6.jpg'
import { GoArrowUpRight } from "react-icons/go";
import { ContactForm } from '../contact-form/contact-from';
import { Link } from 'react-router-dom';

export const MainImg = () => {
  const caseRef = useRef(null);
  const consultationRef = useRef(null);
  const containerRef = useRef(null);
  
  const [category, setCategory] = useState('all');
  const [isOpen,setIsOpen]=useState(false)
  const[isOpenModal,setIsOpenModal]=useState(false)

 
  const [willChange, setWillChange] = useState(false);

 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const checkMobile = () => {
      return window.innerWidth <= 768;
    };
    
    setIsMobile(checkMobile());
    
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);
    
  
    const timer = setTimeout(() => {
      setWillChange(true);
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const { scrollY } = useScroll();

  const logoYPosition = useTransform(
    scrollY,
    [0, 100],
    [-75, 0]  
  );

 
  const scrollToElement = (element) => {
    if (element.current) {
      const top = element.current.offsetTop;
  
      if (isMobile) {
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        animate(window.scrollY, top, {
          duration: 0.4,
          onUpdate(value) {
            window.scrollTo(0, value);
          },
        });
      }
    }
  };

  const scrollToCases = () => scrollToElement(caseRef);


  const handleClickForm = ()=>{
    setIsOpen(false)
    setIsOpenModal(true)
  }

  const mobileOptimizedAnimation = {
    initial: isMobile ? { opacity: 1 } : { opacity: 0, y: 20 },
    whileInView: isMobile ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0.9 : 0.9 }
  };

 

 
  const cases = [
    { 
      id: 1, 
      title: ' Тревел блог Броукдэйли', 
      category: 'music', 
      img: img1,
      beforeImg: '/before1.jpg',
      link: 'https://www.tiktok.com/@brokedaily0?_r=1&_t=ZN-91TxZvdf8qM',
      description: 'Полный цикл производства музыкального клипа для начинающего артиста',
      stats: { reach: '2.5M', engagement: '15%', growth: '+300%' }
    },
    { 
      id: 2, 
      title: 'Музыкальное сми "88viral"', 
      category: 'ads', 
      img: img2,
      beforeImg: '/before2.jpg',
      link: 'https://www.tiktok.com/@888viral?_r=1&_t=ZN-91TxWTV39oU',
      description: 'Вертикальные рекламные ролики для социальных сетей',
      stats: { reach: '1.8M', engagement: '12%', growth: '+250%' }
    },
    { 
      id: 3, 
      title: 'Певец RAUFFF', 
      category: 'craft', 
      img: img3,
      beforeImg: '/before3.jpg',
      link: 'https://www.instagram.com/iam_raufff/',
      description: 'Контент-стратегия для мастера по дереву',
      stats: { reach: '850K', engagement: '18%', growth: '+400%' }
    },
    { 
      id: 4, 
      title: 'Влог из Европы', 
      category: 'expert', 
      img: img6,
      beforeImg: '/before4.jpg',
      link: 'https://youtu.be/kbx_sgRn9ZI?si=tHSk91v42MXIll01',
      description: 'Личный бренд финансового консультанта',
      stats: { reach: '1.2M', engagement: '22%', growth: '+350%' }
    },
    { 
      id: 5, 
      title: 'Музыка', 
      category: 'music', 
      img: img4,
      beforeImg: '/before5.jpg',
      link: 'https://www.instagram.com/o.k_pro',
      description: 'Охват мероприятия через вертикальный контент',
      stats: { reach: '3.1M', engagement: '14%', growth: '+280%' }
    },
    { 
      id: 6, 
      title: 'Ресторан "Gambit"', 
      category: 'ads', 
      img: img5,
      beforeImg: '/before6.jpg',
      link: 'https://www.instagram.com/restaurant_gambit?igsh=MW54cHd5c3Q4Z24yaA==',
      description: 'Продвижение через сторис и рилсы',
      stats: { reach: '950K', engagement: '16%', growth: '+320%' }
    },
  ];

  const filteredCases = category === 'all' ? cases : cases.filter(c => c.category === category);

  const beforeAfterCases = cases.slice(0, 3); 

  
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);


  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden " ref={containerRef}>
       <AnimatePresence className=''>
            {isOpen && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-60 flex justify-center items-center  "
            >
            <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full h-full p-5 rounded-none md:rounded-2xl md:w-[550px] md:h-132 "
            >
          
            <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-2xl font-bold">Связаться с нами</h2>
            <button onClick={()=>handleClickForm()} className="text-2xl font-bold">×</button>
            </div>
            <ContactForm className=''/>
           
            </motion.div>
            </motion.div>
            )}
            </AnimatePresence>
 
        <header className='fixed top-0 left-0 w-full z-40 py-6 '>
        <div className="mx-auto px-6 ">
          <h3 className="text-xl font-bold text-white">
           reProd
          </h3>
        </div>
      </header>
       <motion.div 
        className='fixed top-0 left-0 w-full z-50 py-4 bg-white shadow-lg'
        style={{
          y: logoYPosition,
          
          willChange: willChange ? 'transform' : 'auto'
        }}
      >
        <div className="mx-auto px-6 flex flex-row justify-between">
          <h3 className="text-xl font-bold text-black">
            reProd
          </h3>
          <div className=''>
            <button onClick={()=>setIsOpen(true)} className='border border-black rounded-4xl px-4 py-2 mt-[-5px] text-[14px] bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 text-base' >Связаться</button>
          </div>
          
        </div>
      </motion.div>
          
    
      <section className="min-h-screen w-full flex flex-col justify-center items-center text-center p-10 pt-20   bg-[radial-gradient(ellipse_70%_40%_at_bottom_right,_#2f2a37_85%,_#c8ec68_250%)] text-white relative z-0">
        
        <div className="absolute inset-0 bg-[#2f2a37] opacity-60 z-0"></div>
  
        <div className={`absolute top-1/4 left-10 w-96 h-96 bg-[#2f2a37] rounded-full  blur-3xl opacity-40`}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#2f2a37] rounded-full blur-2xl opacity-50`}></div>
        
        <div className={`absolute bottom-0 right-0 w-48 h-48 bg-[#c8ec68] rounded-full blur-2xl opacity-30 -mr-24 -mb-24`}></div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: isMobile ? 0.5 : 0.8 }}
          className="text-5xl font-bold mb-6 relative z-20"
        >
          reProd
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: isMobile ? 0.5 : 0.8 }}
          className="text-lg max-w-2xl mb-8 relative z-20"
        >
         Мы - видеопродакшн полного цикла <br/>Спецы в вертикальном контенте
        </motion.p>
        <motion.button 
          onClick={scrollToCases}  
          className='bg-white relative z-20 text-black hover:bg-black hover:text-white transition-colors duration-300 text-base font-bold w-[96vw]  border border-black py-3 rounded-4xl lg:w-100'
          whileHover={!isMobile ? { scale: 1.05 } : {}}
          whileTap={!isMobile ? { scale: 0.95 } : {}}
        >
          Узнать больше
        </motion.button>
      </section>
      
      <section className="w-full py-20 px-10 bg-[#080808] text-white relative z-0" ref={caseRef}>
       
        <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#080808]"></div>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
           {...mobileOptimizedAnimation}
           transition={{delay:0.2, duration:0.5}}
            className="text-4xl font-bold text-center mb-12"
          >
            О нас
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              {...mobileOptimizedAnimation}
              transition={{delay:0.3, duration:0.5}}
              className="text-center p-6 "
            >
              <h3 className="text-xl font-bold mb-4">Полный цикл</h3>
              <p className="text-gray-400">
                От разработки концепции до финального монтажа. Мы берем на себя все этапы производства контента.
              </p>
            </motion.div>
            <motion.div 
              {...mobileOptimizedAnimation}
              transition={{delay:0.4, duration:0.6}}
              className="text-center p-6"
            >
              <h3 className="text-xl font-bold mb-4">Вертикальный формат</h3>
              <p className="text-gray-400">
                Специализируемся на контенте для Instagram, TikTok, YouTube Shorts и других вертикальных платформ.
              </p>
            </motion.div>
            <motion.div 
              {...mobileOptimizedAnimation}
               transition={{delay:0.5, duration:0.7}}
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
      <section ref={consultationRef} className="w-full py-20 px-10  bg-[radial-gradient(ellipse_70%_10%_at_bottom_left,_#c8ec68_0%,_#2f2a37_100%,_#080808_150%)]">
        
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
              onClick={()=>setIsOpen(true)}
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-bold   border border-white"
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
          
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 gap-4 ">
                {filteredCases.map((cas, index) => (
                  <motion.a initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index*0.15}} href={cas.link} className={`bg-white rounded-2xl relative overflow-hidden shadow-inner shadow-black/100 lg:h-[316px]   ${index === 0 || index === 5|| index===6 ? `
          col-span-2 lg:col-span-2 lg:h-[310px]
        ` : `
          h-[230px] lg:h-[230px]
        `}
      `}>
                  <motion.div 
                    key={index} 
                  >
                    <div className='text-black z-20 absolute right-2 '>
                      <GoArrowUpRight className='h-8'/>
                    </div>
                    <div className={` lg:h-[10px] ${index === 0 || index === 5 || index===6 ? " h-[120px]" : "h-[150px]"}`}>
                      <img src={cas.img} alt={cas.title} className=' object-cover'/>
                    <div className='absolute inset-0 rounded-2xl shadow-[inset_0_0_100px_rgba(0,0,0,0.99)] pointer-events-none'></div>
                      
                    </div>
                    <div className='relative z-10   flex items-end justify-center min-h-[80px] lg:min-h-[300px]'>
                      <h3 className='text-center text-white text-wrap font-bold'>{cas.title}</h3>
                    </div>
                    <div className='absolute inset-0 bg-white/15  pointer-events-none rounded-2xl'></div>
                   
                  </motion.div>
                  </motion.a>
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
        className='w-[80vw] h-30 bg-black/50 backdrop-blur-sm rounded-xl px-4 pt-1 mr-2 flex justify-center items-center lg:w-[40vw] lg:rounded-[30px] lg:text-[18px]'
      >
        <p className='text-white text-center pb-2 font-bold'>поможем в разработке виральной идеи, от вас только задумка!</p>
      </motion.div>
    </div>
    
    <div className='flex flex-row mt-15 lg: ml-30'>
      <motion.div 
        className='w-[80vw] h-30 bg-black/50  rounded-xl px-4 pt-1 ml-2 flex justify-center items-center lg:w-[40vw] lg:rounded-[30px] lg:text-[18px]'
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.7}}
      >
        <p className='text-white justify-center text-center font-bold'>Съемка полность на нас, подбирае студию, образ, продюссер ставит вас в кадре</p>
      </motion.div>
      <motion.div className='w-[50vw]'></motion.div>
    </div>
    
    <div className='flex flex-row mt-15 mb-15'>    
      <motion.div className='w-[50vw]'></motion.div>
      <motion.div 
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.7}}
        className='w-[80vw] h-30 bg-black/50  rounded-xl px-4 pt-1 ml-2 flex justify-center items-center mr-2 lg:w-[40vw] lg:rounded-[30px] lg:text-[18px]'
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
              <a href='tel:+79963116213'className="text-gray-300">+7 (996) 311-62-13</a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-300">reproding@gmail.com</p>
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