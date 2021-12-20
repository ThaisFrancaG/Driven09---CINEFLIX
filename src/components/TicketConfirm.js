import styled from "styled-components";
import { Link } from "react-router-dom";
export default function TicketConfirm(props) {
  let userDetails = props.request[props.request.length - 1];

  let cpf = userDetails.cpf;
  let cpfMap = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  return (
    <div className="screen-general">
      <header className="screen-title sucess">Pedido feito com sucesso!</header>
      <TicketInformation>
        <Details>
          <DetailsTitle>Filme e sessão</DetailsTitle>
          <span>{props.request[1]}</span>
          <span>
            {props.request[props.request.length - 3]}{" "}
            {props.request[props.request.length - 4]}
          </span>
        </Details>
        <Details>
          <DetailsTitle>Ingressos</DetailsTitle>
          {props.request[props.request.length - 2].map((seat) => (
            <span key={seat}> Assento {seat}</span>
          ))}
        </Details>
        <Details>
          <DetailsTitle>Comprador</DetailsTitle>
          <span>Nome: {userDetails.name}</span>
          <span>CPF: {cpfMap}</span>
        </Details>
      </TicketInformation>
      <Link to={"/"}>
        <Button>Voltar para Home</Button>
      </Link>
    </div>
  );
}
const TicketInformation = styled.div`
  width: 100vw;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 110px;
  font-size: 22px;
  line-height: 30px;
  color: #293845;
`;
const DetailsTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
`;

const Button = styled.button`
  width: 225px;
  height: 42px;
  margin-top: 30px;
  background-color: #e8833a;
  color: #ffffff;
  font-size: 18px;
  border: none;
`;
