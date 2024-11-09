import React from 'react'
import Logo from './Logo'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <div className='navbar'>
        <Logo/>
        <ul className='navbar-links'>
            <li className='navbar-item'>
               <a href="">BIENVENIDA</a> 
            </li>
            <li className='navbar-item'>
               <a href="">VERDURAS</a> 
            </li>
            <li className='navbar-item'>
               <a href="">FRUTAS</a> 
            </li>
            <li className='navbar-item'>
               <a href="">COMIDAS SIN ULTRAPROCESADOS</a> 
            </li>
            <li className='navbar-item'>
               <a href="">CONSULTAS CON ESPECIALISTAS</a> 
            </li>
        </ul>

        <CartWidget/>

    </div>
  )
}

export default Navbar