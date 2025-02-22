import React from 'react'
import star from './Images/star.svg'
import goldenStar from './Images/golden-star.svg'
import './style.css'


function MovieIten(props) {
    return (
        
      <div className='card-movie-iten' style={{backgroundImage: `url(${props.backgroundImg})`}}>
            <button className="movie-iten-star" onClick={()=>props.favoritar(props.title)}>
                <svg className={props.isStarred ? 'starred' : ""} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2L11.7961 7.52786H17.6085L12.9062 10.9443L14.7023 16.4721L10 13.0557L5.29772 16.4721L7.09383 10.9443L2.39155 7.52786H8.20389L10 2Z" stroke="white" stroke-opacity="0.83"/>
                </svg>
            </button>
            <div className='title-rate'>
                <h2> {props.title} </h2>
                <div>
                    <img src={goldenStar} alt="goldenStar"/>
                    <strong>{props.starsCount}</strong>
                </div>
            </div>

        <button className='movieIten-bag' onClick={() => props.addBag(props.title)}>
            <p>Sacola <span> R${props.price}</span></p>
        </button>
            
      </div>
    )
}

export default MovieIten
