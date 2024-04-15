import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(25)

  const elements = [];
  for (let index = 1; index <= count; index++) {
    elements.push(index);
  }

  useEffect(()=>{

    const loadData = ()=>{
      if(window.innerHeight+ window.scrollY >= window.document.body.offsetHeight-30){
        setCount((prev)=>prev+30);
      }
    }

    document.addEventListener('scroll',loadData)

    return ()=> document.addEventListener('scroll',loadData)
  },[count])

  return (
    <>
    <div style={{
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {
        elements.map((e,id)=>(
          <p key={id}>{e}</p>
        ))
      }
      </div>
    </>
  )
}

export default App
