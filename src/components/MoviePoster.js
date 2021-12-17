import "../assets/style.css"


export default function MoviePoster (props){


    return(
        <figure className="movie-poster">
        <img src = {props.posterURL} alt = {props.title}/>
        </figure>
    )
}