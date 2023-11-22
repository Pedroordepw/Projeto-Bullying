import React from 'react';
import fisico from '../public/tipos/tipo_bullying_fisico_2.jpg';
import verbal from '../public/tipos/tipo_bullying_verbal.jpeg';
import social from '../public/tipos/tipo_bullying_social.png';
import cibernetico from '../public/tipos/tipo_bullying_cyber_3.webp';

const Types = () => {
  return (
    <div className='px-4 md:px-10 py-10'>
      <div className='w-full mx-auto pb-5'>
        <h1 className='text-color-text text-4xl md:text-6xl font-custom font-bold pb-5'>
          Você conhece os tipos de bullying?
        </h1>
        <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
          O fenômeno do bullying é uma preocupação social relevante, especialmente nas escolas primárias e secundárias, onde a incidência desse comportamento impacta negativamente a vida dos estudantes. Segundo Kerman ([s.d.]), o bullying é caracterizado por um comportamento prolongado de insultos verbais, rejeição social, intimidação psicológica e/ou agressão física, direcionado por um ou mais alunos a outro, que se torna a vítima.
        </p>
      </div>

      {/* ------------------------------------------------------------------- */}

      <div className='flex flex-row flex-wrap mb-8'>
        {/* Bullying Físico */}
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Bullying Físico: A Violência Manifesta
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            Uma das formas mais evidentes de bullying é o físico, que envolve agressões diretas como empurrões, socos, chutes, e até mesmo o roubo ou danos aos pertences pessoais da vítima([Kerman, s.d.]). Este tipo de intimidação deixa marcas visíveis, muitas vezes comprometendo a integridade física e emocional da vítima.
          </p>
          <div className='flex items-center justify-center'>
            <img src={fisico} alt='kids hitting other kid' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Bullying Social: A Crueldade da Exclusão
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            No bullying social, a crueldade se revela na exclusão social da vítima. Isolamento do grupo de pares, propagação de rumores maliciosos e rejeição em atividades ou eventos são práticas que podem causar danos emocionais profundos([Kerman, s.d.]). Este tipo de bullying ataca a necessidade humana básica de pertencimento, deixando a vítima em uma posição vulnerável.
          </p>
          <div className='flex items-center justify-center'>
            <img src={social} alt='children pointing fingers at girl' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Bullying Verbal: Palavras que Ferem Profundamente
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            O bullying verbal se manifesta por meio de insultos, apelidos ofensivos, humilhações, comentários racistas e difamação verbal([Kerman, s.d.]). As palavras têm um poder imenso, e este tipo de agressão deixa cicatrizes emocionais duradouras, afetando a autoestima e o bem-estar psicológico da vítima.
          </p>
          <div className='flex items-center justify-center'>
            <img src={verbal} alt='children gossiping girl' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Bullying Cibernético: A Ameaça no Mundo Digital
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            O avanço da tecnologia trouxe consigo o bullying cibernético, uma forma de assédio que ocorre através da internet e dispositivos eletrônicos. Ameaças, insultos, disseminação de boatos, compartilhamento de fotos constrangedoras são algumas das manifestações desse fenômeno([Kerman, s.d.]). Este tipo de bullying transcende os limites físicos da escola, tornando-se uma ameaça constante na vida online dos estudantes.
          </p>
          <div className='flex items-center justify-center'>
            <img src={cibernetico} alt='sad child in front of the computer' className='w-full md:w-96 max-w-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
