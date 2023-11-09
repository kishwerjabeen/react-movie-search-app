import React, { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'

const App = () => {
  const [allMovieData, setallMovieData] = useState(second);
  const [searchMovie, setSearchMovie] = useState(second);


  const [loading, setLoading] = useState(second);

  // api calling 
  // s vaiable as liya use horah ha osy movie name sya serch hoga or osko serachmovie kay use state mae store kardiay ha  
  const movieData = async () => {
    try {
      const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9`)

      // api ka sara data json mae data mae ajye ga 
      const data = await res.json();

      // send data to set all movie data 
      setallMovieData(data);

      setLoading(false)
    }
    catch (error) {
      console.log(error);
      setLoading(false)

    }
  }
  return (
    <div>
      <Navbar />
      <div className="bg">
        <SearchBar />
        <MovieCard />
      </div>
    </div>
  )
}

export default App