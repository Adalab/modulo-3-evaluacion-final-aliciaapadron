import { Link } from 'react-router-dom';

function User(props) {
  return (
    <Link to={`/movie/${props.movie.id}`}>
      <img
        className="list__item--img"
        alt={props.movie.movie}
        src={props.movie.poster}
      />
      <h4 className="list__item--title">{props.movie.name}</h4>
      <p className="list__item--year">{props.movie.year}</p>
      <p className="list__item--quote">{props.movie.quote}</p>
    </Link>
  );
}
export default User;
