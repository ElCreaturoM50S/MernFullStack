import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './ProductList'
import MyInput from './MyInput'

function App() {
  const [data, setData] = useState("początek")
  
  return (
    <>
      <div>
        <h2>To są dane testowe {data}</h2>
        <MyInput changeData={setData}/>
        <ProductList jakistekst={"fewfef"}/>
      </div>
    </>
  )
}

export default App
