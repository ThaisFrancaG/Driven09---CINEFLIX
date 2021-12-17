import{useState,useEffect} from "react";
import axios from "axios";

import MoviePoster from "./MoviePoster";

export default function Movies(props){
const [movies,checkMovies] = useState([]);

useEffect(()=>{
    const requisition  = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")

    requisition.then(response=>printMovies(response))
    requisition.catch(response=>{alert("algo deu errado, favor atualizar a página")})
},[])

function printMovies(response){
checkMovies(response.data)
}


const moviesList = movies.map((movie)=>
<MoviePoster 
title = {movie.title}
posterURL = {movie.posterURL}
idMovie = {movie.id}
/>
)

return(
    <>  
    <header className = "screen-title">Selecione o filme</header>
    <div className = "movies-display">
    {moviesList}
    </div>
    </>
)

}