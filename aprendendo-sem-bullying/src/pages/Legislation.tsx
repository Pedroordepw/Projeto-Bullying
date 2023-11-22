import React from 'react'

const Legislation = () => {
  return (
    <div className='px-4 md:px-10 py-10'>
      <div className='w-full mx-auto pb-5'>
        <h1 className='text-color-text font-bold text-4xl md:text-6xl font-custom pb-5'>
          Legislação Brasileira sobre Bullying: Uma Visão Abrangente
        </h1>
        <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
          Bullying é um problema sério que afeta muitas pessoas, especialmente crianças e adolescentes, em todo o mundo. No Brasil, várias leis foram promulgadas para combater essa questão e fornecer um ambiente seguro para todos. Este artigo explora quatro aspectos importantes da legislação brasileira sobre bullying: a Lei Nº 13.185 que instituiu o Programa de Combate à Intimidação Sistemática (Bullying), as características do bullying segundo a lei, a Lei 13.663/2018 que exige que as escolas promovam medidas de conscientização e combate a todos os tipos de violência, incluindo o bullying, e como o bullying se relaciona com o Código Penal Brasileiro. Cada seção fornece uma visão detalhada desses aspectos, ajudando a entender melhor a posição do Brasil no combate ao bullying.
        </p>
      </div>

      {/* ------------------------------------------------------------------- */}

      <div className='flex flex-row flex-wrap mb-8'>
        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Educação e Conscientização: Iluminando Caminhos para a Mudança
          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            Lei Nº 13.185: Combate à Intimidação Sistemática (Bullying) A Lei Nº 13.185, sancionada em 6 de novembro de 2015, instituiu o Programa de Combate à Intimidação Sistemática (Bullying) em todo o território nacional. Esta lei define bullying como qualquer ato de violência física ou psicológica, intencional e repetitivo, que ocorre sem motivação evidente, praticado por indivíduo ou grupo, contra uma ou mais pessoas, com o objetivo de intimidá-la ou agredi-la, causando dor e angústia à vítima, em uma relação de desequilíbrio de poder entre as partes envolvidas. O Programa instituído pode fundamentar as ações do Ministério da Educação e das Secretarias Estaduais e Municipais de Educação, bem como de outros órgãos, aos quais a matéria diz respeito.
          </p>
        </div>

        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Características do Bullying Segundo a Lei          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            A Lei Nº 13.185 caracteriza o bullying quando há violência física ou psicológica em atos de intimidação, humilhação ou discriminação. Isso inclui ataques físicos, insultos pessoais, comentários sistemáticos e apelidos pejorativos, ameaças por quaisquer meios, grafites depreciativos, expressões preconceituosas, isolamento social consciente e premeditado, entre outros. A lei também reconhece o cyberbullying, que ocorre na rede mundial de computadores, quando se usam os instrumentos que lhe são próprios para depreciar, incitar a violência, adulterar fotos e dados pessoais com o intuito de criar meios de constrangimento psicossocial.

          </p>
        </div>

        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Lei 13.663/2018: Combate à Violência nas Escolas          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            A Lei 13.663/2018, que entrou em vigor em 15 de maio de 2018, exige que as escolas promovam medidas de conscientização, de prevenção e de combate a todos os tipos de violência, incluindo o bullying. Esta lei altera o art. 12 da Lei nº 9.394, de 20 de dezembro de 1996, para incluir a promoção de medidas de conscientização, de prevenção e de combate a todos os tipos de violência e a promoção da cultura de paz entre as incumbências dos estabelecimentos de ensino. Esta lei reforça a regulamentação anterior de Combate ao Bullying (lei 13.185/2015)3.
          </p>
        </div>

        <div className='w-full md:w-1/2 mb-8 px-4'>
          <h2 className='text-color-text font-semibold text-2xl md:text-4xl font-custom pb-5'>
            Bullying e o Código Penal Brasileiro          </h2>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            Embora não exista na legislação brasileira um crime intitulado “bullying”, muitas ações que se enquadram na definição podem ser penalizadas segundo o Código Penal. Portanto, mesmo que não haja um “crime” específico de bullying, muitas de suas manifestações são tipificadas e penalizadas. As condutas inerentes ao bullying geralmente são de submissão de alguém a reiteradas condições rejeitadas por essas pessoas, comportamentos agressivos de forma psicológica e física, abusos diversos e diversas maneiras de coação e coerção. Todas essas condutas são, por sua vez, consideradas infrações específicas. Em outras palavras, não existe o “crime de bullying” como um conceito fechado, mas quase todas as práticas que configuram aquilo que entendemos por bullying são infratores do código penal.
          </p>
        </div>

        <div className='w-full mx-auto pb-5'>
          <p className='text-color-text font-custom text-lg md:text-2xl text-justify mb-4 indent-8'>
            A Lei nº 13.185 de 06 de novembro de 2015 institui o Programa de Combate à Intimidação Sistemática (Bullying), que visa prevenir e combater a violência física e psicológica nas escolas e em outros ambientes sociais. O programa define o conceito de bullying, estabelece as diretrizes e os objetivos da política nacional de enfrentamento ao problema, e determina as responsabilidades dos órgãos públicos e da sociedade civil na sua implementação. A lei representa um avanço na promoção dos direitos humanos e na garantia de uma educação de qualidade para todos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Legislation