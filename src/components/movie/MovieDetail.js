import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import NotFoundPage from '../applications/NotFoundPage';
function MovieDetail(props) {
  if (props.movie === undefined) {
    return <NotFoundPage />;
  }
  return (
    <>
      <section className="detail">
        <img
          title="Portada de la película"
          className="detail__img"
          alt={props.movie.movie}
          src={props.movie.poster}
        />

        <article>
          <h4 className="detail__article--title">
            Title: <span className="span">{props.movie.name}</span>
          </h4>
          <p className="detail__article--director">
            <FontAwesomeIcon className="icon" icon={faVideoCamera} />
            Director: {props.movie.director}
          </p>
          <p className="detail__article--year">
            <FontAwesomeIcon className="icon" icon={faCalendarDays} />
            Year: {props.movie.year}
          </p>
          <p className="detail__article--quote">
            <FontAwesomeIcon className="icon" icon={faQuoteRight} />
            Quote: "{props.movie.quote}"
          </p>

          <article className="articlebtn">
            <div className="div">
              <a
                title="Escuchar audio"
                target="_blank"
                className="div__audio"
                href={props.movie.audio}
              >
                Audio
              </a>
            </div>
            <div className="div">
              <a
                title="Ver vídeo"
                target="_blank"
                className="div__audio"
                href={props.movie.video}
              >
                Video
              </a>
            </div>
            <div className="div">
              <Link className="div__btn" to="/" title="Volver al inicio">
                Back
              </Link>
            </div>
          </article>
        </article>
      </section>
      <Footer />
    </>
  );
}
export default MovieDetail;
