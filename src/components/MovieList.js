import Movie from './Movie';
function MovieList(props) {
  const movieElements = props.movies.map((movie, index) => {
    return (
      <li className="card" key={index}>
        <Movie movie={movie} />
      </li>
    );
  });
  return (
    <section>
      <ul className="cards">{movieElements}</ul>
    </section>
  );
}
export default MovieList;
