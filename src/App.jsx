import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [vida, setVida] = useState(100)
  const[vivo, setVivo] = useState(true)
  const[imagem, setImagem] = useState('/public/bonequinho-vivo.png')
  const[mensagem, setMensagem] = useState('Está tudo bem!')

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVida((vidaAtual) => {
      if(vidaAtual <= 0){
        clearInterval(intervalo)
        setVivo(false)
        return 0 
      }
        return vidaAtual - 1 
     
    })
   }, 500);
    
    
    //console.log(vida);
  return() => clearInterval(intervalo)
  },[])

  useEffect(() => {
    atualizarImagem()
  }, [vida])


  function curar(){
  if(vivo){
    if(vida <= 90){
      setVida(vida + 10)
    }else{
      setVida(100)
    }
  
    }else{
    alert("faliceu")
  }
  console.log(vida);
  }

 function atualizarImagem(){
  if(vida <= 0){
    setImagem('/public/bonequinho-morto.png')
    setMensagem('Morreu')
}else if(vida < 20 ){ 
  setImagem('/public/bonequinho-doente.png')
  setMensagem('agora deu o caraio mermo viu')



}else if(vida > 20){
  setImagem('public/bonequinho-vivo.png')
  setMensagem('Ta vivo')
}
 }


  return (
    <>
      
      <div>
        
      <img className='imagem' src={imagem} alt="era para ter uma imagem aqui" />
      
      </div>
      
      
      <div>Vida: {vida}</div>
      
       <button onClick={curar}>Curar</button>
       
       
    
    <div>
      <p>{mensagem}</p>
    </div>

    </>
  )
}

export default App
