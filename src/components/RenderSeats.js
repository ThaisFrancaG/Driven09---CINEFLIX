import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sessions from "./Sessions";
import SeatsSession from "./SeatsSession";

export default function RenderSeats() {
  const [seats, setSeats] = useState([]);
  const { idSession } = useParams();

  console.log(idSession);

  useEffect(() => {
    const requisition = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`
    );

    requisition.then((response) => printSeats(response));
    requisition.catch((response) => {
      alert(
        "algo deu errado, favor atualizar a página, ou voltar para a página inicial"
      );
    });
  }, []);

  function printSeats(response) {
    setSeats(response.data.seats);
  }

  return (
    <>
      <header className="screen-title">Selecione o Horário</header>
      <div className="seats-display">
        <SeatsSession seats={seats} />
      </div>
    </>
  );
}
