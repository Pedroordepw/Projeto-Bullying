import React from 'react'
import sinal_1 from '../public/sinais/sinal_1.png';
import sinal_2 from '../public/sinais/sinal_2.png';
import sinal_3 from '../public/sinais/sinal_3.png';
import sinal_4 from '../public/sinais/sinal_4.png';
import sinal_5 from '../public/sinais/sinal_5.png';

const Signs = () => {
  return (
    <div className='px-4 md:px-10 py-10'>
      <div className='w-full mx-auto pb-5'>
        <h1 className='text-color-text font-bold text-4xl md:text-6xl font-custom pb-5'>
          Conheça alguns sinais comumente associados ao bullying
        </h1>
        <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
          Os sinais de que uma pessoa está sofrendo bullying podem variar de acordo com a personalidade e a situação individual de cada vítima. No entanto, existem alguns sinais comuns que podem indicar que uma pessoa está sendo vítima de bullying. A seguir, apresentamos alguns desses sinais:
        </p>
      </div>

      {/* ------------------------------------------------------------------- */}

      <div className='flex flex-row flex-wrap mb-8'>
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Mudanças no comportamento
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            A vítima pode apresentar mudanças no comportamento, como isolamento social, tristeza, ansiedade, medo, irritabilidade, entre outros.
          </p>
          <div className='flex items-center justify-center'>
            <img src={sinal_1} alt='sad kid' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Mudanças no desempenho escolar
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            A vítima pode apresentar queda no desempenho escolar, falta de interesse nas atividades escolares e dificuldade de concentração.
          </p>
          <div className='flex items-center justify-center'>
            <img src={sinal_2} alt='parents angry with child who got an f on the test' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Mudanças físicas
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            A vítima pode apresentar lesões físicas, como hematomas, arranhões, cortes, entre outros. Além disso, a vítima pode apresentar mudanças no apetite, no sono e na aparência física.
          </p>
          <div className='flex items-center justify-center'>
            <img src={sinal_3} alt='child with eye injury' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Perda de objetos pessoais
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            A vítima pode perder objetos pessoais, como livros, roupas, materiais escolares, entre outros. Isso pode indicar que os agressores estão roubando ou destruindo os pertences da vítima.
          </p>
          <div className='flex items-center justify-center'>
            <img src={sinal_4} alt='children stealing boys backpack' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Comportamento agressivo
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            Em alguns casos, a vítima pode apresentar comportamento agressivo, como forma de defesa ou de tentar se proteger dos agressores.
          </p>
          <div className='flex items-center justify-center'>
            <img src={sinal_5} alt='child angry and pointing finger' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        <div className='w-full mx-auto pb-5'>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            É importante lembrar que esses sinais não são exclusivos do bullying e podem indicar outros problemas emocionais ou sociais. Por isso, é fundamental que a comunidade escolar esteja atenta a esses sinais e trabalhe em conjunto para identificar e prevenir o bullying. O projeto "Aprendendo Sem Bullying" pode ser uma ferramenta valiosa nesse processo, fornecendo informações e recursos para ajudar a comunidade escolar a lidar com o bullying de forma eficaz.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signs