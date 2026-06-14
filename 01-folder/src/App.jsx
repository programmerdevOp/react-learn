// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { Card } from './component/Card'

function App() {

  return (
   <div className='parent'>
      <Card user='bhumi thapliyal' age={21} img='https://images.unsplash.com/photo-1781147049036-385ae99b9aaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D'
      //style={{width: "200px", height: "200px"}}
      />

      <Card user='sumit pal' age={22} img='https://images.unsplash.com/photo-1780995175154-a8c5ae56a230?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D' />
   </div>
  )
}

export default App
