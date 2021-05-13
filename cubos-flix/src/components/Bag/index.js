import React from 'react'
import './style.css'
import bagIcon from './images/bag-icon.svg'
import coupon from './images/coupon-icon.svg'
import BagIten from '../BagIten'
import person from './images/person-illustration.svg'

function Bag(props) {
    const getNoDuplicatedMovies = (movies)  => { 
        return movies.filter((item, index) => movies.indexOf(item) === index)
    }

    const getQuantity =(title) => {
        const foundMovies = props.data.filter((movie) => movie.title === title)
        return foundMovies.length;
    }

    const getTotal =() => {
        let total = 0;

        props.data.forEach(movie => {
            total += movie.price
        })

        return total;
    }

   
    return (
        <>
        <div className='bag-principal'>
        <div className='purple-bag'>
            <img src={bagIcon} alt="bag-icon"/>
            <p>Sacola</p>
        </div>

        {props.data.length === 0 ? (
            <div className='empty-bag'>
                <h1>Sua Sacola está vazia</h1>
                <h2>Adicione filmes agora</h2>
                <img src={person} alt="person-illustration"/>
            </div>
        ) : (
            <div>
                {getNoDuplicatedMovies(props.data).map((movie) => (
                    <BagIten title={movie.title} backgroundImg={movie.backgroundImg} price={movie.price} qtd={getQuantity(movie.title)} addBag={props.addBag} 
                    deleteBag={props.deleteBag}/> 
                ))}
                
            </div>
        )}

        <div className='container-bag'>
        <div className='coupon-bag'>
            <p>Insira seu cupom</p>
            <div className='coupon-bag-input-style'>
                <input type="text" placeholder="Cupom de desconto" />
                <img src={coupon} alt="coupon-icon"/>
            </div>
        </div>

        {props.data.length === 0 ? null : (
        <button className='pink-bag'>
            <p> Confirme seus dados <span>R$ {getTotal()}</span></p>
        </button>)}
       
        </div>
        

        </div>
        </>
    )
}

export default Bag
