function User(props) {
  return (
    <a href="#">
      <img
        className="card__img"
        alt={props.movie.name}
        src={props.movie.poster}
      />
      <h4 className="card__title">{props.movie.name}</h4>
      <p className="card__description">{props.movie.year}</p>
      <p className="card__description">{props.movie.quote}</p>
    </a>
  );
}
export default User;
