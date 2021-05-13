import './App.css';
import Bag from './components/Bag';
import Header from './components/Header'
import ListMovies from './components/ListMovies'
import data from './data'
import React, {useState} from 'react'


function App() {
  const [bagList, setBagList] = useState([])
  const [movies, setMovies] = useState(data)
  const topFilmes = movies.filter((movie, index) => index < 5)
  const filters = [
    {
      label:'Todos',
      categorie: 'all'
    }, 
    {
      label:'Ação',
      categorie: 'action'
    },   
    {
      label:'Romance',
      categorie: 'romance'
    },   
    {
      label:'Ficção científica',
      categorie: 'science fiction'
    },   
    {
      label:'Terror',
      categorie: 'horror'
    }
  ]

  function favoritar(title) {
    setMovies(movies.map(movie => {
      if(movie.title === title){
        movie.isStarred = !movie.isStarred
      } 
      return movie
    }))
  }

  function addBag(title) {
   const movie = movies.find((movie) => movie.title === title)
   setBagList([...bagList, movie])
  }

  function deleteBag(title) {
    const indexMovie = bagList.findIndex((movie) => movie.title === title)
    const filteredMovies = bagList.filter((movie, index) => index !== indexMovie);
    setBagList(filteredMovies);
  }


  return (
    <>
    <Header/>
    <Bag data={bagList} addBag={addBag} deleteBag={deleteBag}/>
    <div className='content'>
      <ListMovies title='Top Filmes' list={topFilmes} favoritar={favoritar} addBag={addBag}/>
      <ListMovies title='Filmes' list={movies} favoritar={favoritar} addBag={addBag} filters={filters}/>
    </div>
    </>
  );
}

export default App;
