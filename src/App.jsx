import React, { createContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movies from './common movies/Movies';
import MainComponent from './common movies/MainComponent';
import Home from './common movies/Home';
import {comedyMovies,latestMovies,popularMovies} from './Url'
import Banner from './common movies/banner';
import Details from './common movies/Details';

const movieContext = createContext();
const App = () => {
  const [movieList, setmovieList] = useState([])
  return (
    <div>
      <movieContext.Provider value={{movieList,setmovieList}}>
      <BrowserRouter>
      <MainComponent/>
      <Banner/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/popular' element = {<Movies movieApi={popularMovies} />}/>
        <Route path = '/latest' element = {<Movies movieApi={latestMovies}/>}/>
        <Route path = '/comedy' element = {<Movies movieApi={comedyMovies}/>}/>
        <Route path = '/details' element = {<Details/>}/>
      </Routes>
      </BrowserRouter>
      </movieContext.Provider>
    </div>
  )
}

export default App
export {movieContext}