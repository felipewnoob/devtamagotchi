import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [vida, setVida] = useState(100)
  const [fome, setFome] = useState(100)
  const [alegria, setAlegria] = useState(100)
  const [vivo, setVivo] = useState(true)
  const [imagem, setImagem] = useState('/public/bonequinho-vivo.png')
  const [mensagem, setMensagem] = useState('Está tudo bem!')

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVida((vidaAtual) => {
        if (vidaAtual <= 0) {
          clearInterval(intervalo)
          setVivo(false)
          return 0
        }
        return vidaAtual - 1
      })

      setFome((fomeAtual) => Math.max(0, fomeAtual - 1))
      setAlegria((alegriaAtual) => Math.max(0, alegriaAtual - 1))
    }, 500)    

    return () => clearInterval(intervalo)
  }, [])

  useEffect(() => {
    atualizarImagem()
  }, [vida])

  function curar() {
    if (vivo) {
      if (vida <= 90) {
        setVida(vida + 10)
      } else {
        setVida(100)
      }
    } else {
      alert('Faliceu')
    }
  }

  function alimentar() {
    if (vivo) {
      setFome((prev) => Math.min(100, prev + 10))
    } else {
      alert('Faliceu')
    }
  }

  function divertir() {
  if (vivo) {
    if (alegria <= 90) {
      setAlegria(alegria + 10)
    } else {
      setAlegria(100)
    }
  } else {
    alert('Faliceu')
  }
}

  function atualizarImagem() {
    if (vida <= 0) {
      setImagem('/public/bonequinho-morto.png')
      setMensagem('Morreu')
    } else if (vida < 20) {
      setImagem('/public/bonequinho-doente.png')
      setMensagem('mamãe estou dodói!')
    } else {
      setImagem('/public/bonequinho-vivo.png')
      setMensagem('Tá vivo')
    }
  }

  return (
    <>
      <div>
        <img className='imagem' src={imagem} alt="era para ter uma imagem aqui" />
      </div>

      <div>Vida: {vida}</div>
      <div>Fome: {fome}</div>
      <div>Alegria: {alegria}</div>

      <button className='button-cura' onClick={curar}>Curar</button>
      <button className='button-alimentar'onClick={alimentar}>Alimentar</button>
      <button className='button-brincar' onClick={divertir}>Brincar</button>

      <div>
        <p>{mensagem}</p>
      </div>
    </>
  )
}

export default App
