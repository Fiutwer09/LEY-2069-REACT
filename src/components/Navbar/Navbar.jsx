import React from 'react'
import { NavItems } from '../NavItems/NavItems'
import './Navbar.css'


export const Navbar = () => {
  return (
     <div className='NavItems'>
    <NavItems to = "/" content= 'Hello'/>
    <NavItems to = "/Inicio" content= 'Inicio'/>
    <NavItems to = "/Calculadora" content= 'Sobre Nosotros'/>
    <NavItems to = "/Game" content= 'Juego'/>
    <NavItems to = "/ContacUs" content= 'Contacto'/>
    </div>
  )
}

