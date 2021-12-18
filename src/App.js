import reactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style.css";
import Movies from "./components/Movies";
import RenderSeats from "./components/RenderSeats";
import SessionsMovie from "./components/SessionsMovie";

export default function App() {
  return (
    <>
      <header className="main-header">
        <span>CINEFLEX</span>
      </header>
      <div className="screen-general">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />}></Route>
            <Route path="/filme/:idMovie" element={<SessionsMovie />}></Route>
            <Route
              path="/filme/:idMovie/sessao/:idSession"
              element={<RenderSeats />}
            />
            {/* <Route path="/sessao/:idSessao" element={<RenderSeats />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
