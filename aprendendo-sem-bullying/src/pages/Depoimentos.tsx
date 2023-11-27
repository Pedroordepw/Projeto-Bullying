import { useEffect, useState } from "react"
import Depoimento from "../components/Depoimento";
import CriarDepoimento from "../components/CriarDepoimento";

export interface Depoimento {
  id: number;
  texto: string;
}

const Depoimentos = () => {
  const [depoimentos, setDepoimentos] = useState<Depoimento[]>([])
  const [mostrarCriarDepoimento, setMostrarCriarDepoimento] = useState(false)

  const URL = `${import.meta.env.VITE_BACKEND}/depoimentos`

  useEffect(() => {
    fetch(`${URL}`, { method: 'GET' })
      .then(response => response.json())
      .then(data => setDepoimentos(data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const criarDepoimento = (texto: string) => {
    fetch(`${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ texto })
    })
      .then(response => response.json())
      .then(data => setDepoimentos([...depoimentos, data]))
  }

  const excluirDepoimento = (id: number) => {
    fetch(`${URL}/${id}`, {
      method: 'DELETE'
    })
      .then(() => setDepoimentos(depoimentos.filter(depoimento => depoimento.id !== id)))
  }

  const editarDepoimento = (id: number, texto: string) => {
    fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ texto })
    })
      .then(response => response.json())
      .then(data => setDepoimentos(depoimentos.map(depoimento => depoimento.id === id ? data : depoimento)))
  }

  return (
    <div className='px-4 md:px-10 py-10 flex flex-col'>
      <h1 className='text-color-text font-bold text-4xl md:text-6xl font-custom pb-5 w-full text-center'>
        Depoimentos
      </h1>

      <button
        className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg'
        onClick={() => setMostrarCriarDepoimento(true)}
      >
        Criar Depoimento
      </button>

      <ul className='flex flex-col mt-4 gap-4'>
        {depoimentos.map(depoimento => (
          <Depoimento 
            key={depoimento.id} 
            dadosDepoimento={depoimento}
            excluirDepoimento={excluirDepoimento}
            editarDepoimento={editarDepoimento}
          />
        ))}
      </ul>

      {mostrarCriarDepoimento && (
        <CriarDepoimento
          fechar={() => setMostrarCriarDepoimento(false)}
          criarDepoimento={criarDepoimento}
        />
      )}
    </div>
  )
}

export default Depoimentos