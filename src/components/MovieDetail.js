import { Link } from 'react-router-dom';
function MovieDetail(props) {
  return (
    <section>
      <Link to="/">Volver</Link>
      <img
        className="card__img"
        alt={props.movie.movie}
        src={props.movie.poster}
      />
      <h4 className="card__title">Título: {props.movie.name}</h4>
      <p className="card__description">Año: {props.movie.year}</p>
      <p className="card__description">Frase: {props.movie.quote}</p>
      <p className="card__description">Director: {props.movie.director}</p>
      <a target="_blank" className="card__description" href={props.movie.audio}>
        Audio
      </a>
    </section>
  );
}
export default MovieDetail;
