import '../styles/App.scss';
//rutas
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router-dom';

//useState y useEffect
import { useState, useEffect } from 'react';

//componentes
import getApiData from '../services/api';
import MovieList from '../components/movie/MovieList';
import Filters from '../components/filters/Filters';
import MovieDetail from '../components/movie/MovieDetail';
import NotFoundPage from './applications/NotFoundPage';
import Header from './Header';
import Footer from './Footer';

//localStorage
import ls from '../services/localStorage';

//componentes de estado
function App() {
  const [dataMovies, setDataMovies] = useState(ls.get('movies', []));
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYears, setFilterYears] = useState('');
  const [filterResults, setFilterResults] = useState(50);

  //useEffect
  useEffect(() => {
    if (dataMovies.length === 0) {
      getApiData(filterResults).then((dataFromApi) => {
        setDataMovies(dataFromApi);
      });
    }
  }, [filterResults]);

  //useEffect para localStorage
  useEffect(() => {
    ls.set('movies', dataMovies);
  }, [dataMovies]);

  //prevenir el intro
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
  //filtro de api
  const handleFilterResults = (value) => {
    setFilterResults(value);
  };
  //filtros
  const movieFilters = dataMovies
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((movie) => {
      return movie.name.toLowerCase().includes(filterMovie.toLocaleLowerCase());
    })
    .filter((movie) => {
      if (filterYears === '') {
        return true;
      } else {
        return filterYears.includes(movie.year);
      }
    })
    .filter((movie, index) => {
      return index < filterResults;
    });

  //mensaje que error
  const searchMovies = () => {
    if (filterMovie !== '' && movieFilters.length === 0) {
      return (
        <section className="section">
          <div className="section__diverror">
            <p className="section__diverror--msn">
              Ups! 😅 "{filterMovie}" does not exist, try another movie.
            </p>
          </div>
        </section>
      );
    } else {
      return <MovieList movies={movieFilters} />;
    }
  };

  //coger los años de la lista
  const getYears = (movies) => {
    const movieYears = movies.map((movie) => movie.year);
    const uniqueYears = movieYears.filter((year, index) => {
      return movieYears.indexOf(year) === index;
    });
    return uniqueYears.sort();
  };

  //limpiar inputs
  const resetInputs = () => {
    setFilterMovie('');
    setFilterYears('');
    setFilterResults(50);
  };
  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = dataMovies.find((item) => item.id === parseInt(movieId));
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Filters
                  handleSubmit={handleSubmit}
                  handleFilterMovie={handleFilterMovie}
                  handleFilterYear={handleFilterYear}
                  filterMovie={filterMovie}
                  filterYears={filterYears}
                  years={getYears(movieFilters)}
                  resetInputs={resetInputs}
                  handleFilterResults={handleFilterResults}
                  filterResults={filterResults}
                />
                {searchMovies()}
                <Footer />
              </>
            }
          />
          <Route
            path="/movie/:movieId"
            element={<MovieDetail movie={movieFound} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
