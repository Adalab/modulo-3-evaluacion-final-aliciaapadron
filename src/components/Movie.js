import { Link } from 'react-router-dom';

function User(props) {
  return (
    <Link to={`/movie/${props.movie.id}`}>
      <img
        className="card__img"
        alt={props.movie.movie}
        src={props.movie.poster}
      />
      <h4 className="card__title">{props.movie.name}</h4>
      <p className="card__description">{props.movie.year}</p>
      <p className="card__description">{props.movie.quote}</p>
    </Link>
  );
}
export default User;
