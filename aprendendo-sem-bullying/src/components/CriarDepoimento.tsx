import { useState } from "react"

const CriarDepoimento = ({ 
  fechar,
  criarDepoimento
 }: {
  fechar: () => void
  criarDepoimento: (texto: string) => void
}) => {
  const [ texto, setTexto ] = useState('')

  return (
    <div className="absolute w-full h-screen top-0 left-0 flex items-center justify-center bg-black/80">
      <div className="bg-header p-4 rounded-xl">
        <h1 className="text-color-text text-2xl font-bold text-center">Criar Depoimento</h1>
        <form 
          className="flex flex-col gap-4 mt-4"
          onSubmit={event => {
            event.preventDefault()
            criarDepoimento(texto)
            fechar()
          }}
        >
          <textarea 
            className="w-full h-40 p-4 bg-header rounded-lg text-color-text font-custom text-lg md:text-2xl" 
            placeholder="Digite seu depoimento aqui..."
            value={texto}
            onChange={event => setTexto(event.target.value)}
          />
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg">Enviar</button>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg" onClick={fechar}>Cancelar</button>
        </form>
      </div>
    </div>
  )
}

export default CriarDepoimento