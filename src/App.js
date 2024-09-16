import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Movielist from './components/movielist';
import Addmovie from './components/Addmovie';
import { useState } from 'react';
import Movies from './components/data';

function App() {
  const [movies,setmovies]=useState(Movies)
  const dark=true
  const name="mohamed"
  return (
    <div className="App">
      <Header dark={dark} name={name} /> 
      <Addmovie setmovies={setmovies}movies={movies}/>
      <Movielist movies={movies} dark={dark} setmovies={setmovies} />
    
    </div>
  );
}

export default App;
