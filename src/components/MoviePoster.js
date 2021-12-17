import "../assets/style.css"
import {Link, useParams} from "react-router-dom"

export default function MoviePoster (props){

    return(
        <Link 
        to = {`/sessoes/${props.idMovie}`}>
        <figure className="movie-poster">
        <img src = {props.posterURL} alt = {props.title}/>
        </figure>
        </Link>
    )
}