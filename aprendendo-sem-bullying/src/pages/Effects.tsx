import React from 'react'
import efeito_1 from '../public/efeitos/efeito_1.png';
import efeito_2 from '../public/efeitos/efeito_2.png';
import efeito_3 from '../public/efeitos/efeito_3.jpg';
import efeito_4 from '../public/efeitos/efeito_4.jpg';
import efeito_5 from '../public/efeitos/efeito_5.webp';

const Effects = () => {
  return (
    <div className='px-4 md:px-10 py-10'>
      <div className='w-full mx-auto pb-5'>
        <h1 className='text-color-text text-4xl md:text-6xl font-custom pb-5'>
          Impactos do Bullying: Além das Marcas Visíveis
        </h1>
        <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
          O bullying pode ter efeitos graves e duradouros na vida das vítimas e dos agressores. A seguir, apresentamos alguns dos efeitos mais comuns do bullying:
        </p>
      </div>

      {/* ------------------------------------------------------------------- */}

      <div className='flex flex-row flex-wrap mb-8'>
        {/* Bullying Físico */}
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text text-2xl md:text-4xl font-custom pb-5'>
            Desafios Emocionais: Cicatrizes Invisíveis na Alma
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
            O impacto do bullying vai além das marcas físicas, deixando cicatrizes emocionais profundas na vítima. Problemas emocionais, como depressão, ansiedade e baixa autoestima, podem surgir como consequência do trauma vivenciado (KÄLLMÉN; HALLGREN, 2021). A curto prazo, esses problemas podem comprometer o bem-estar emocional, enquanto a longo prazo, influenciam as relações interpessoais e a qualidade de vida.
          </p>
          <div className='flex items-center justify-center'>
            <img src={efeito_1} alt='kid bullying other kid' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        {/* Bullying Social */}
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text text-2xl md:text-4xl font-custom pb-5'>
            A Face Física do Bullying: Lesões e Comprometimento da Saúde
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
            Além das sequelas emocionais, o bullying pode se manifestar fisicamente. A vítima pode sofrer lesões, dores de cabeça e distúrbios do sono devido ao estresse contínuo (KÄLLMÉN; HALLGREN, 2021). De maneira preocupante, o impacto não se restringe ao corpo, podendo afetar o sistema imunológico e tornar a vítima mais suscetível a doenças. A atenção à saúde física é essencial para uma recuperação completa.
          </p>
          <div className='flex items-center justify-center'>
            <img src={efeito_2} alt='kid bullying other kid' className='w-full md:w-96 max-w-1/2' />
          </div>


        </div>

        {/* Bullying Verbal */}
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text text-2xl md:text-4xl font-custom pb-5'>
            Desafios Sociais: Isolamento e Dificuldade nas Relações
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
            O bullying reverbera no tecido social da vítima, resultando em problemas de relacionamento. Isolamento, dificuldade em fazer amigos e em se conectar com outras pessoas são desafios sociais que podem persistir a curto e longo prazo (KÄLLMÉN; HALLGREN, 2021). O resgate da vida social exige esforços e suporte, pois a reintegração pode ser um processo gradual.
          </p>
          <div className='flex items-center justify-center'>
            <img src={efeito_3} alt='kid bullying other kid' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        {/* Bullying Cibernético */}
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text text-2xl md:text-4xl font-custom pb-5'>
            Impacto na Vida Acadêmica: Queda no Desempenho e Falta de Interesse
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
            A sala de aula não escapa aos efeitos do bullying. Problemas acadêmicos, como queda no desempenho escolar, falta de interesse nas atividades e dificuldade de concentração, podem surgir como resultado direto do assédio (KÄLLMÉN; HALLGREN, 2021). A intervenção precoce é crucial para preservar o ambiente educacional e garantir que todos os estudantes possam prosperar academicamente.
          </p>
          <div className='flex items-center justify-center'>
            <img src={efeito_4} alt='kid bullying other kid' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        {/* Bullying Cibernético */}
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text text-2xl md:text-4xl font-custom pb-5'>
            Repercussões Legais: Além das Fronteiras do Comportamento Aceitável          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
            Em casos mais graves, o bullying pode transcender as barreiras escolares e resultar em implicações legais. Processos judiciais e multas são desdobramentos possíveis, evidenciando a seriedade do problema(KÄLLMÉN; HALLGREN, 2021). Além das consequências legais, os agressores também podem enfrentar desafios em suas vidas pessoais e profissionais a longo prazo. A prevenção do bullying não apenas preserva a segurança emocional das vítimas, mas também resguarda os agressores de consequências legais indesejadas.
          </p>
          <div className='flex items-center justify-center'>
            <img src={efeito_5} alt='kid bullying other kid' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        <div className='w-full mx-auto pb-5'>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
            É importante lembrar que o bullying não afeta apenas as vítimas e os agressores, mas também toda a comunidade escolar. Por isso, é fundamental que a comunidade escolar esteja atenta aos sinais de bullying e trabalhe em conjunto para prevenir e combater o bullying. O projeto "Aprendendo Sem Bullying" pode ser uma ferramenta valiosa nesse processo, fornecendo informações e recursos para ajudar a comunidade escolar a lidar com o bullying de forma eficaz.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Effects