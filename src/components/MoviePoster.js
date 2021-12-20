import "../assets/style.css";
import { Link, useParams } from "react-router-dom";

export default function MoviePoster(props) {
  let movieDetails = [props.title, props.posterURL];
  return (
    <Link to={`/filme/${props.idMovie}`} state={movieDetails}>
      <figure className="movie-poster">
        <img src={props.posterURL} alt={props.title} />
      </figure>
    </Link>
  );
}
