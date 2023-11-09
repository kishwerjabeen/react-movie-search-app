import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="bg">
      <SearchBar/>
      <MovieCard/>
      </div>
    </div>
  )
}

export default App