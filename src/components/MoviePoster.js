import "../assets/style.css";
import { Link } from "react-router-dom";

export default function MoviePoster(props) {
  function addToRequest(poster, title) {
    props.setRequest([...props.request, poster, title]);
  }
  return (
    <Link to={`/filme/${props.idMovie}`}>
      <figure
        onClick={() => addToRequest(props.posterURL, props.title)}
        className="movie-poster"
      >
        <img src={props.posterURL} alt={props.title} />
      </figure>
    </Link>
  );
}
