import '../styles/App.scss';
//rutas
import { Routes, Route, Link } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router-dom';

//useState y useEffect
import { useState, useEffect } from 'react';

//componentes
import getApiData from '../services/api';
import MovieList from './MovieList';
import Filters from './Filters';
import MovieDetail from './MovieDetail';

//componentes de estado
function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYears, setFilterYears] = useState('');

  //useEffect
  useEffect(() => {
    if (dataMovies.length === 0) {
      getApiData().then((dataFromApi) => {
        setDataMovies(dataFromApi);
      });
    }
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

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
        const uniqueYears = new Set(movieYears);
        const uniques = [...uniqueYears];
     ;*/
  };

  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = dataMovies.find((item) => item.id === movieId);

  return (
    <>
      <h1 className="title--big">Directorio de películas</h1>
      <div className="col2">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleSubmit={handleSubmit}
                  handleFilterMovie={handleFilterMovie}
                  handleFilterYear={handleFilterYear}
                  years={getYears()}
                />
                <MovieList movies={movieFilters} />
              </>
            }
          />
          <Route
            path="/movie/:movieId"
            element={<MovieDetail movie={movieFound} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
