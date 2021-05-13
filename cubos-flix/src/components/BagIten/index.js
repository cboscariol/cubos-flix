import React from 'react'
import minus from './Images/minus-icon.svg'
import plus from './Images/plus-icon.svg'
import './style.css'



function BagIten(props) {
    return (
        <div className="container-bag-iten">
            <img className="joker-pic" src={props.backgroundImg} alt="banner-movie"/>

            <div className="bag-iten-movie"> 
                <p>{props.title}</p>
                <p>R$ {props.price * props.qtd}</p>
            </div>

            <div className='amount'>
                <button onClick={() => props.addBag(props.title)}><img src={plus} alt="plus"/></button>
                <p>{props.qtd}</p>
                <button onClick={() => props.deleteBag(props.title)}><img src={minus} alt="minus"/></button> 
            </div>



            
            
        </div>
    )
}

export default BagIten
