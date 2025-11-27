import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

export function ContactForm() {
  const [state, handleSubmit] = useForm("mkgyjawo");
  if (state.succeeded) {
      return <p className='flex justify-center items-center mt-40 font-bold text-3xl'>Спасибо за обратную связь!</p>;
  }
  return (
   <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            <input
            id="name"
            type="text"
            name="name"
            placeholder="Имя"
            className="border p-3 rounded-lg"
            required
            />
            <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
                />
            <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            required
            />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
      />
            <input
            type="text"
            placeholder="Telegram"
            id="telegram"
            name="telegram"
            className="border p-3 rounded-lg"
            />
            <ValidationError 
           prefix="Telegram"  
            field="telegram"
            errors={state.errors}
      />
            <textarea
            placeholder="Какая у вас задача?"
             id="message"
            name="message"
            className="border p-3 rounded-lg h-32"
            />
            <ValidationError 
            prefix="Message"  
            field="message"
            errors={state.errors}
      />
            <button type="submit" disabled={state.submitting} className="bg-black text-white py-3 rounded-xl font-bold">Отправить</button>
            {!state.succeeded?(
                 <div className='text-[12px] flex flex-col'>
            <p className=' lg:justify-center items-center text-center '>Нажимая на кнопку «Отправить» вы соглашаетесь на условия</p>
            <Link to='/privacy' className='justify-center items-center text-center mt-1 underline text-[#2f2a37]'>Политики конфиденциальности</Link>
            </div>
            ):''}
            
            </form>
  );
}

