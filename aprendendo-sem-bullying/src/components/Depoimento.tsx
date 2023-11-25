import { Depoimento as Interface } from '../pages/Depoimentos'
import Editar from '../public/depoimentos/editar.png'
import Excluir from '../public/depoimentos/excluir.png'

const Depoimento = (
  dadosdepoimento: Interface
) => {
  return (
    <li className='w-full md:w-1/2 px-4 bg-header py-2 rounded-lg flex gap-2'>
      <p className='text-color-text font-custom text-lg md:text-2xl text-justify flex-grow'>
        {dadosdepoimento.texto}
      </p>

      <button>
        <img src={Editar} alt='Editar' className='w-6 h-6 mr-2' />
      </button>

      <button>
        <img src={Excluir} alt='Excluir' className='w-6 h-6' />
      </button>
    </li>
  )
}

export default Depoimento