import React, {useState, useEffect} from 'react'
import MovieIten from '../MovieIten'
import './style.css'


function ListMovies(props) {
 const [filters, setFilters] = useState(["all"]);

 const filteredList = (list) => {
     if(filters.includes('all')){
        return list
     }
    
    return list.filter(movie => {
        return movie.categories.some((categorie) => filters.includes(categorie))
    })
}


    const toggleFilter = (filter) => {
        if(filters.includes(filter) && filter !== "all"){
            return setFilters(filters.filter(iten => iten !== filter))
        }
         
        if(filter === 'all'){
            setFilters(['all'])
        } else {
            setFilters([...filters.filter(iten => iten !== 'all'), filter])
        }

    }

    useEffect(() => {
        if(filters.length === 0){
            setFilters(['all'])
        }
    }, [filters])

    return (
        <div className='list-movies-card-principal'>
            <h1>{props.title}</h1>
    
            {props.filters ? (
                <div>{props.filters.map(filter => (
                        <button className={filters.includes(filter.categorie) ? 'filter-list-movies active' : 'filter-list-movies'} onClick={() => toggleFilter(filter.categorie)}>{filter.label}</button>
                ))}</div>
            ) : null}
            <div className='card-top-filmes'>
                {filteredList(props.list).map((movie) => (
                      <MovieIten title={movie.title} backgroundImg={movie.backgroundImg} price={movie.price} 
                      starsCount={movie.starsCount} favoritar={props.favoritar} isStarred={movie.isStarred}
                      addBag={props.addBag} />  
                ))}
            </div>
            
        </div>
    )
}

export default ListMovies
