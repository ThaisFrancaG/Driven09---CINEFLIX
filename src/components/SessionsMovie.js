import{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sessions from "./Sessions";

export default function Session(){
    const[sessions,checkSession] = useState([]);
    const {idMovie} = useParams();
    
    useEffect(()=>{
    
        const requisition  = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`)
    
        requisition.then(response=>printSessions(response))
        requisition.catch(response=>{alert("algo deu errado, favor atualizar a página")})
    },[])

    function printSessions(response){
        checkSession(response.data.days)
    }

    return(
        <>  
        <header className = "screen-title">Selecione o Horário</header>
        <div className = "session-display">
        <Sessions sessions = {sessions}/>
        </div>
        </>
    )
    
}