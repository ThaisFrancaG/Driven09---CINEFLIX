import styled from "styled-components";

export default function TicketConfirm(props) {
  console.log(props);

  let userDetails = props.request[props.request.length - 1];
  console.log(userDetails);
  let cpf = userDetails.cpf;
  let cpfMap = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  return (
    <div>
      <header className="screen-title">Pedido feito com sucesso!</header>
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
      <button></button>
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
