import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams, useLocation } from "react-router-dom";

export default function Sessions(props) {
  let sessionDetails = props.sessions;
  let location = useLocation();
  let movieTitle = location.state;
  console.log(movieTitle);

  let individualSession = sessionDetails.map((teste, i) => (
    <DayContainer key={i}>
      {teste.weekday}-{teste.date}
      <ButtonContainer>
        {teste.showtimes.map((test2, j) => (
          <Link to={`sessao/${test2.id}`}>
            <Button key={j}>{test2.name}</Button>
          </Link>
        ))}
      </ButtonContainer>
    </DayContainer>
  ));

  return <>{individualSession}</>;
}

const DayContainer = styled.div`
  background-color: grey;
`;

const Button = styled.button`
  width: 82px;
  height: 43px;

  background-color: #e8833a;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  background-color: blue;
`;
