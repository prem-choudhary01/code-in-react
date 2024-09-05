import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import './App.css'
// import { useMemo } from 'react'

function App() {

  const [amount ,  setAmount] = useState(0)


  return (
    <>
      <h1 className='text-3xl bg-orange-600 p-4'>currency Converter with chai or bhiskut</h1>
    </>
  )
}

export default App
