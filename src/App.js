import reactDom from "react-dom";
import "./assets/style.css"
import Movies from "./components/Movies";

export default function App(){
    return(
        <>
        <header className="main-header">
            <span>CINEFLEX</span>
        </header>
        <main className="screen-general">
        <Movies/>
        </main>
        </>
    )
}