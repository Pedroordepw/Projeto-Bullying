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

  useEffect(() => {
    fetch('http://localhost:8080/depoimentos', { method: 'GET' })
      .then(response => response.json())
      .then(data => setDepoimentos(data))
  }, [])

  const criarDepoimento = (texto: string) => {
    fetch('http://localhost:8080/depoimentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ texto })
    })
      .then(response => response.json())
      .then(data => setDepoimentos([...depoimentos, data]))
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
            {...depoimento}
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