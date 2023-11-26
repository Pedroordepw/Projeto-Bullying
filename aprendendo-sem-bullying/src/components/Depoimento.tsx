import { useState } from 'react'
import { Depoimento as Interface } from '../pages/Depoimentos'
import Editar from '../public/depoimentos/editar.png'
import Excluir from '../public/depoimentos/excluir.png'
import AtualizarDepoimento from './AtualizarDepoimento'

const Depoimento = ({
  dadosDepoimento,
  excluirDepoimento,
  editarDepoimento
} : {
  dadosDepoimento: Interface
  excluirDepoimento: (id: number) => void
  editarDepoimento: (id: number, texto: string) => void
}) => {
  const [ mostrarAtualizarDepoimento, setMostrarAtualizarDepoimento ] = useState(false)

  return (
    <li className='w-full md:w-1/2 px-4 bg-header py-2 rounded-lg flex gap-2 justify-between'>
      <p className='text-color-text font-custom text-lg md:text-2xl text-justify flex-grow max-w-[75%]'>
        {dadosDepoimento.texto}
      </p>

      <button
        onClick={() => setMostrarAtualizarDepoimento(true)}
      >
        <img src={Editar} alt='Editar' className='w-6 h-6 mr-2' />
      </button>

      <button
        onClick={() => excluirDepoimento(dadosDepoimento.id)}
      >
        <img src={Excluir} alt='Excluir' className='w-6 h-6' />
      </button>

      { mostrarAtualizarDepoimento && (
        <AtualizarDepoimento 
          fechar={() => setMostrarAtualizarDepoimento(false)}
          atualizarDepoimento={editarDepoimento}
          id={dadosDepoimento.id}
          textoOriginal={dadosDepoimento.texto}
        />
      )}
    </li>
  )
}

export default Depoimento