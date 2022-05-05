import Movie from '../movie/Movie';
function MovieList(props) {
  const movieElements = props.movies.map((movie, index) => {
    return (
      <li className="list__item" key={index}>
        <Movie movie={movie} />
      </li>
    );
  });
  return (
    <section>
      <ul className="list">{movieElements}</ul>
    </section>
  );
}
export default MovieList;
