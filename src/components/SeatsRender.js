import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import SeatsSession from "./SeatsSession";
import styled from "styled-components";
import SeatsSelectionInput from "./SeatsSelectionInput";
import SeatsReference from "./SeatsReference";

export default function RenderSeats(props) {
  const [seats, setSeats] = useState([]);
  const { idSession } = useParams();

  const [userName, setUserName] = useState("");
  const [userCPF, setUserCPF] = useState("");

  const [quantitySeats, setQuantitySeats] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatId, setSeatId] = useState([]);

  const navigate = useNavigate();

  let confirmationToSend = {
    ids: seatId,
    name: userName,
    cpf: userCPF,
  };
  function errorAlert() {
    alert(
      "Algo deu errado na sua requisição, favou tentar novamente mais tarde"
    );
  }
  function checkInputs() {
    if (quantitySeats === 0) {
      alert("Por favor, selecione ao menos um assento");
      return false;
    }
    if (userName.length < 3) {
      alert("Por favor, adicione um nome de pelo menos 3 letras");
      return false;
    }
    if (userCPF.length < 11 || userCPF.length > 11) {
      alert("Formato de CPF inválido. Insira apenas números (11 dígitos)");
      return false;
    }
    props.setRequest([...props.request, selectedSeats, confirmationToSend]);
    sendConfirmation();
  }

  function sendConfirmation() {
    const requisition = axios.post(
      "https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many",
      confirmationToSend
    );
    requisition.then(navigate(`/filme/sucesso`));
    requisition.catch(errorAlert);
  }
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
      <div className="screen-all">
        <div className="seats-display">
          <SeatsSession
            seats={seats}
            quantitySeats={quantitySeats}
            setQuantitySeats={setQuantitySeats}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            seatId={seatId}
            setSeatId={setSeatId}
          />
        </div>
        <SeatsReference />
        <SeatsSelectionInput
          userName={userName}
          setUserName={setUserName}
          userCPF={userCPF}
          setUserCPF={setUserCPF}
        />
        <Button onClick={() => checkInputs()}>
          Reservar {quantitySeats} assento(s)
        </Button>
      </div>
    </>
  );
}

const Button = styled.button`
  width: 225px;
  height: 42px;
  background-color: #e8833a;
  color: #ffffff;
  font-size: 18px;
  border: none;
`;
