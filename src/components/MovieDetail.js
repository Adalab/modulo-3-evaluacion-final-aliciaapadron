import { Link } from 'react-router-dom';
function MovieDetail(props) {
  return (
    <section className="detail">
      <img
        className="detail__img"
        alt={props.movie.movie}
        src={props.movie.poster}
      />

      <article>
        <h4 className="detail__article--title">
          Título: <span className="span">{props.movie.name}</span>
        </h4>
        <p className="detail__article--director">
          Director: {props.movie.director}
        </p>
        <p className="detail__article--year">Año: {props.movie.year}</p>
        <p className="detail__article--quote">Frase: {props.movie.quote}</p>

        <div className="div">
          <a target="_blank" className="div__audio" href={props.movie.audio}>
            Audio
          </a>
        </div>
        <div className="div">
          <Link className="div__btn" to="/">
            Volver
          </Link>
        </div>
      </article>
    </section>
  );
}
export default MovieDetail;
