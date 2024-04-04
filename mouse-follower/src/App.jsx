import { useEffect, useState } from 'react'
import './App.css'


const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(()=>{
    console.log('useEffect', enabled)
    const handleMove = (e) => {
      const {clientX, clientY} = e
      setPosition({x: clientX, y: clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove',handleMove)
    }
    //return para cuando se desmonte el componente
    //cuando cambian las dependencias, antes de ejecutar el efecto
    // [] -> solo se ejecuta una vez
    // [enabled] -> se ejecuta cuando enabled cambia y cuando se monta
    // [enabled, position] -> se ejecuta cuando enabled o position cambian
    // undefined -> se ejecuta cada que se renderiza el componente
    return () => {
      console.log("cleanup", enabled)
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(()=>{
    document.body.classList.toggle('no-cursor',  enabled)
    return () => {
      document.body.classList.remove('no-cursor')
    }
  },[enabled])

  return (
    <>
    <div style={
      {
        display: enabled ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        width: 40,
        height: 40,
        left: -20,
        top: -20,
        pointerEvents: 'none',
        opacity: 0.5,
        transform: `translate(${position.x}px, ${position.y}px)`
      }
    }>
      <svg xmlns="http://www.w3.org/2000/svg"
        aria-label="Ethereum" role="img"
        viewBox="0 0 512 512"><rect
        width="512" height="512"
        rx="15%"
        fill="#ffffff"/><path
        fill="#3C3C3B" d="m256 362v107l131-185z"/><path
        fill="#343434" d="m256 41l131 218-131 78-132-78"/><path
        fill="#8C8C8C" d="m256 41v158l-132 60m0 25l132 78v107"/><path
        fill="#141414" d="m256 199v138l131-78"/><path
        fill="#393939" d="m124 259l132-60v138"/></svg>
    </div>
    <button onClick={()=>{setEnabled(!enabled)}}>{enabled ? 'Desactivar' : 'Activar'} seguimiento de mouse</button>
  </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
