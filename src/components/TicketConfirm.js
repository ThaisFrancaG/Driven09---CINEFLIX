import styled from "styled-components";

export default function TicketConfirm(props) {
  console.log(props.userName);
  return (
    <div>
      <Details>
        <DetailsTitle>Filme e sessão</DetailsTitle>
      </Details>
      <Details>
        <DetailsTitle>Ingressos</DetailsTitle>
      </Details>
      <Details>
        <DetailsTitle>Comprador</DetailsTitle>
      </Details>
    </div>
  );
}

const Details = styled.div`
  background-color: blue;
`;
const DetailsTitle = styled.span`
  background-color: pink;
`;
