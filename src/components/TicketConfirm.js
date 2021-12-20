import styled from "styled-components";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
export default function TicketConfirm(props) {
  let location = useLocation();
  let details = location.state;
  let cpf = details[5];
  let cpfMap = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  console.log(details);

  let confirmationToSend = {
    ids: details[8],
    name: details[4],
    cpf: details[5],
  };

  console.log(confirmationToSend);
  function errorAlert() {
    alert(
      "Algo deu errado na sua requisição, favou tentar novamente mais tarde"
    );
  }
  function sendConfirmation() {
    alert("ok");
    const requisition = axios.post(
      "https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many",
      confirmationToSend
    );
    requisition.then(console.log("ok"));
    requisition.catch(errorAlert);
  }
  return (
    <div>
      <header className="screen-title">Pedido feito com sucesso!</header>
      <TicketInformation>
        <Details>
          <DetailsTitle>Filme e sessão</DetailsTitle>
          <span>{details[0]}</span>
          <span>
            {details[3]} {details[2]}
          </span>
        </Details>
        <Details>
          <DetailsTitle>Ingressos</DetailsTitle>
          {details[7].map((seat) => (
            <span key={seat}> Assento {seat}</span>
          ))}
        </Details>
        <Details>
          <DetailsTitle>Comprador</DetailsTitle>
          <span>Nome: {details[4]}</span>
          <span>CPF: {cpfMap}</span>
        </Details>
      </TicketInformation>
      <button onClick={() => sendConfirmation()}></button>
    </div>
  );
}
const TicketInformation = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
`;
const DetailsTitle = styled.span`
  background-color: pink;
`;
