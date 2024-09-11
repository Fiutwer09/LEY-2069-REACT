import React from 'react'
import { Navbar } from "../../components/Navbar/Navbar"
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
    <h1 className='Titlle-header'>Camino al Éxito</h1>
    <Navbar/>
    <button className='btn-header'>Emprendedor</button>
    </header>
  )
}
