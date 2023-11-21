import React from 'react'
import prevencao_1 from '../public/prevencoes/prevencao_1.jpg';
import prevencao_2 from '../public/prevencoes/prevencao_2.avif';
import prevencao_3 from '../public/prevencoes/prevencao_3.avif';
import prevencao_4 from '../public/prevencoes/prevencao_4.webp';
import prevencao_5 from '../public/prevencoes/prevencao_5.jpg';

const Prevention = () => {
  return (
    <div className='px-4 md:px-10 py-10'>
      <div className='w-full mx-auto pb-5'>
        <h1 className='text-color-text text-4xl md:text-6xl font-custom pb-5'>
          Construindo um Ambiente Escolar Livre de Bullying: Estratégias Eficazes de Prevenção
        </h1>
        <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
          A prevenção do bullying é uma peça fundamental na garantia de um ambiente escolar seguro e inclusivo. Abaixo, destacamos algumas estratégias que podem ser adotadas para prevenir o bullying:
        </p>
      </div>

      {/* ------------------------------------------------------------------- */}

      <div className='flex flex-row flex-wrap mb-8'>
        {/* Bullying Físico */}
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text text-2xl md:text-4xl font-custom pb-5'>
            Educação e Conscientização: Iluminando Caminhos para a Mudança
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
            A conscientização é a primeira linha de defesa na prevenção do bullying. Realizar palestras, workshops e campanhas educativas proporciona à comunidade escolar o entendimento dos efeitos do bullying, capacitando-a a identificar e prevenir comportamentos agressivos (MARTINS; FAUST, 2018).. A disseminação do conhecimento é uma ferramenta poderosa na construção de uma cultura escolar mais empática.
          </p>
          <div className='flex items-center justify-center'>
            <img src={prevencao_1} alt='kid bullying other kid' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        {/* Bullying Social */}
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text text-2xl md:text-4xl font-custom pb-5'>
            Políticas e Regulamentos: Linhas Claras Contra o Bullying
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
            Políticas e regulamentos robustos são essenciais. A escola deve estabelecer diretrizes claras contra o bullying, divulgá-las amplamente e aplicá-las de maneira consistente. Medidas disciplinares para agressores e apoio emocional para as vítimas formam a base de um ambiente escolar seguro (MARTINS; FAUST, 2018).
          </p>
          <div className='flex items-center justify-center'>
            <img src={prevencao_2} alt='kid bullying other kid' className='w-full md:w-96 max-w-1/2' />
          </div>
        </div>

        {/* Bullying Verbal */}
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text text-2xl md:text-4xl font-custom pb-5'>
            Ambiente Escolar Seguro: Protegendo o Bem-Estar de Todos
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
            Um ambiente escolar seguro e inclusivo é vital na prevenção do bullying. A instalação de câmeras de segurança, supervisão em áreas comuns e a criação de grupos de apoio contribuem para um espaço onde todos os alunos se sintam protegidos e valorizados(MARTINS; FAUST, 2018).. Essas medidas físicas e sociais fortalecem os alicerces da prevenção.
          </p>
          <div className='flex items-center justify-center'>
            <img src={prevencao_3} alt='kid bullying other kid' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        {/* Bullying Cibernético */}
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text text-2xl md:text-4xl font-custom pb-5'>
            Intervenção Precoce: Rompendo o Ciclo do Comportamento Agressivo
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
            A intervenção precoce é crucial para interromper o ciclo do bullying. Identificar e acompanhar os casos, além de promover a mediação de conflitos, são estratégias eficazes para evitar que o comportamento agressivo se torne crônico(MARTINS; FAUST, 2018).. Essa abordagem proativa promove um ambiente de aprendizado saudável.
          </p>
          <div className='flex items-center justify-center'>
            <img src={prevencao_4} alt='kid bullying other kid' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        {/* Bullying Cibernético */}
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text text-2xl md:text-4xl font-custom pb-5'>
            Envolvimento da Comunidade: Uma Aliança Contra o Bullying
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4' style={{ textIndent: '2em' }}>
            O envolvimento de pais, educadores, gestores e da comunidade é essencial na prevenção do bullying. Reuniões regulares, a criação de grupos de trabalho e a participação ativa de todos os stakeholders fortalecem a resposta coletiva contra o bullying (MARTINS; FAUST, 2018).. A união de esforços é a chave para criar uma cultura escolar mais solidária.
          </p>
          <div className='flex items-center justify-center'>
            <img src={prevencao_5} alt='kid bullying other kid' className='w-full md:w-96 max-w-full' />
          </div>
        </div>

        <div className='w-full mx-auto pb-5'>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8' >
            É crucial lembrar que a prevenção do bullying é um processo contínuo que exige o comprometimento de toda a comunidade escolar. O projeto "Aprendendo Sem Bullying" emerge como uma ferramenta valiosa, fornecendo informações e recursos para capacitar a comunidade escolar na prevenção e combate ao bullying de maneira eficaz (MARTINS; FAUST, 2018).
          </p>
        </div>
      </div>
    </div>
  )
}

export default Prevention