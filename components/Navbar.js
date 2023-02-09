import React from 'react'
import styles from '../styles/Home.module.css'
const Navbar = () => {
  return (
    <div className='bg-[#81818B]/10'>
        <div className="container mx-auto text-black flex justify-between items-center py-3">
            <img  src="/assets/LOGO.jpg" alt=""/>
            <div className="flex gap-10 items-center">
                <p>Accueil</p>
                <p>Articles</p>
                <p>Services</p>
                <p>Projets Référents</p>
                <p>Contact</p>
                <p className='btn btn-primary rounded-full text-white'>Formulaire du devis</p>
                <ul><a href="#">FR ▼ </a></ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar