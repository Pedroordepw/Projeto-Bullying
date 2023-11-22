import React from 'react';
import bullyingImage from '../public/kids.png';

const Home = () => {
  return (
    <div className='px-4 md:px-10 py-10'>
      <h1 className='text-color-text font-bold text-4xl flex flex-col  md:text-6xl font-custom pb-5'>
            Você sabe o que é bullying?
      </h1>

      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col w-full md:w-1/2'>
          
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            O bullying é um comportamento repetitivo e prejudicial, que envolve o uso de poder desigual para intimidar, ameaçar, assediar ou causar danos emocionais, físicos ou psicológicos a outra pessoa. Geralmente, o bullying ocorre em um contexto de desequilíbrio de poder, em que uma pessoa ou grupo busca exercer controle e dominância sobre outra pessoa mais vulnerável. O objetivo do bullying é causar sofrimento à vítima, e pode ocorrer em diversas formas, incluindo verbal, física, psicológica, social e, mais recentemente, online (cyberbullying).
          </p>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            É importante enfatizar que o bullying é um comportamento prejudicial e inaceitável que deve ser combatido com conscientização, prevenção e apoio às vítimas. Colocar uma definição clara de bullying no início do seu site é uma ótima maneira de educar os visitantes e enfatizar a importância de combater essa prática.
          </p>
        </div>

        <div className='flex flex-col w-full md:w-1/2'>
        <div className='mt-5 md:mt-0 flex flex-col items-center justify-center'>
          <img
            src={bullyingImage}
            alt='kid bullying other kid'
            className='w-full md:w-96 max-w-full flex flex-col items-center justify-center'/>
        </div>
        </div>
      </div>
    
      

    </div>
  );
};

export default Home;
