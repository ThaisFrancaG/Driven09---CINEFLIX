import reactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style.css";
import Movies from "./components/MoviesRender";
import RenderSeats from "./components/SeatsRender";
import SessionsMovie from "./components/SessionsMovie";
import TicketConfirm from "./components/TicketConfirm";
import { useState } from "react";
export default function App() {
  const [request, setRequest] = useState([]);

  return (
    <>
      <header className="main-header">
        <span>CINEFLEX</span>
      </header>
      <div className="screen-general">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Movies request={request} setRequest={setRequest} />}
            ></Route>
            <Route
              path="/filme/:idMovie"
              element={
                <SessionsMovie request={request} setRequest={setRequest} />
              }
            ></Route>
            <Route
              path="/filme/:idMovie/sessao/:idSession"
              element={
                <RenderSeats request={request} setRequest={setRequest} />
              }
            />
            <Route
              path="/filme/sucesso"
              element={
                <TicketConfirm request={request} setRequest={setRequest} />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
