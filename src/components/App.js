import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/api';
import MovieList from './MovieList';
import Filters from './Filters';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYears, setFilterYears] = useState('');

  useEffect(() => {
    if (dataMovies.length === 0) {
      getApiData().then((dataFromApi) => {
        setDataMovies(dataFromApi);
      });
    }
  }, []);

  //filtro por nombre de película
  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };
  //filtro por año
  const handleFilterYear = (value) => {
    setFilterYears(value);
  };

  const movieFilters = dataMovies
    .filter((movie) => {
      return movie.name.toLowerCase().includes(filterMovie.toLocaleLowerCase());
    })
    .filter((movie) => {
      if (filterYears === '') {
        return true;
      } else {
        return filterYears.includes(movie.year);
      }
    });

  const getYears = () => {
    const movieYears = dataMovies.map((movie) => movie.year);
    const uniqueYears = movieYears.filter((year, index) => {
      return movieYears.indexOf(year) === index;
    });
    return uniqueYears;
    /*
        const uniqueCities1 = new Set(movieYears);
        const uniques = [...uniqueCities1];
        console.log(uniqueCities1);*/
  };

  return (
    <>
      <h1 className="title--big">Directorio de películas</h1>
      <div className="col2">
        <Filters
          handleFilterMovie={handleFilterMovie}
          handleFilterYear={handleFilterYear}
          years={getYears()}
        />
        <MovieList movies={movieFilters} />
      </div>
    </>
  );
}

export default App;
