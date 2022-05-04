import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/api';
import MovieList from './MovieList';
import Filters from './Filters';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataMovies(dataFromApi);
    });
  }, []);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const movieFilters = dataMovies.filter((movie) => {
    return movie.name.toLowerCase().includes(filterMovie.toLocaleLowerCase());
  });
  return (
    <>
      <h1 className="title--big">Directorio de películas</h1>
      <div className="col2">
        <Filters handleFilterMovie={handleFilterMovie} />
        <MovieList movies={movieFilters} />
      </div>
    </>
  );
}

export default App;
