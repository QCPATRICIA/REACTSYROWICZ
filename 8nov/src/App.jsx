import { useState } from 'react'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'


function App() {
  
  return (
    <>
      < Navbar/>
      < ItemListContainer greeting = "Bienvenidas a Poch. ropa para mujeres" />                
    </>
  )
}

export default App