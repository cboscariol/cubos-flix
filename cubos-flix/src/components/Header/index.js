import React from 'react'
import './style.css'  
import logo from './images/logo.svg'
import profile from './images/profile.jpg'
import sale from './images/promotion-icon.svg'
import fav from './images/bookmark-icon.svg'

function Header(props) {
    return (
        <div className="header-principal">
        <img src={logo} alt=''/>

        <div className='header-input'>
        
            <input type="text" placeholder="Pesquise filmes..."/>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.84448" cy="6.84448" r="5.99243" stroke="white" stroke-width="1.00001" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.4" d="M11.0122 11.3232L13.3616 13.6665" stroke="white" stroke-width="1.00001" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
            <div className='header-fav-sale'>
                <img src={fav} alt="bookmark-fav"/>
                <a href="">Favoritos</a>
            </div>

            <div className='header-fav-sale'> 
                <img src={sale} alt="bookmark-sale"/>
                <a href="">Promoções</a>
            </div>

         <div className='profile'>
            <span>Bem vindo, Fulano</span>
            <img src={profile} className="pic-profile"/>
         </div>

        </div>
      
    )
}

export default Header
