import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SeatsSession from "./SeatsSession";
import styled from "styled-components";
import SeatsSelectionInput from "./SeatsSelectionInput";
import TicketConfirm from "./TicketConfirm";

export default function RenderSeats() {
  const [seats, setSeats] = useState([]);
  const { idSession } = useParams();

  const [userName, setUserName] = useState("");
  const [userCPF, setUserCPF] = useState("");

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
    console.log(response.data);
    setSeats(response.data.seats);
  }
  console.log(userName);
  return (
    <>
      <header className="screen-title">Selecione o Horário</header>
      <div class="screen-all">
        <div className="seats-display">
          <SeatsSession seats={seats} />
        </div>
        <Map>
          <MapDetails>
            <span className="seats-map available"></span>
            <span> Selecionado</span>
          </MapDetails>
          <MapDetails>
            <span className="seats-map selected"></span>
            <span> Disponível</span>
          </MapDetails>
          <MapDetails>
            <span className="seats-map unavailable"></span>
            <span> Indisponível</span>
          </MapDetails>
        </Map>
        <SeatsSelectionInput
          userName={userName}
          setUserName={setUserName}
          userCPF={userCPF}
          setUserCPF={setUserCPF}
        />
        <Button>okay</Button>
      </div>
    </>
  );
}

const Map = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  .selected {
    background-color: #8dd7cf;
  }
  .available {
    background-color: #c3cfd9;
  }
  .unavailable {
    background-color: #fbe192;
  }
`;

const MapDetails = styled.div`
  width: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 13px;
`;
const Button = styled.button`
  width: 225px;
  height: 42px;
  background-color: #e8833a;
`;
