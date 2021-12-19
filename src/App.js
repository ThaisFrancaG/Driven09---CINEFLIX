import reactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style.css";
import Movies from "./components/MoviesRender";
import RenderSeats from "./components/SeatsRender";
import SessionsMovie from "./components/SessionsMovie";
import TicketConfirm from "./components/TicketConfirm";

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
            <Route
              path="/filme/:idMovie/sessao/:idSession/sucesso"
              element={<TicketConfirm />}
            />
            {/* <Route path="/sessao/:idSessao" element={<RenderSeats />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
