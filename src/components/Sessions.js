import { useState, useEffect } from "react";
import styled from "styled-components";
import {Link, useParams} from "react-router-dom"


export default function Sessions(props) {
  let sessionDetails = props.sessions;

  console.log(sessionDetails);

  let individualSession = sessionDetails.map((teste,i) => (
    <DayContainer key={i}>
      {teste.weekday}-{teste.date}
      <ButtonContainer>
        {teste.showtimes.map((test2,j) => (
           <Link to="/">
          <Button key = {j}>{test2.name}</Button>
          </Link>
          
        ))}
     </ButtonContainer>
    </DayContainer>
  ))

  return (
    <>
      {individualSession}

     
    </>
  );
}

const DayContainer = styled.div`
background-color:grey;
`

const Button = styled.button`
width:82px;
height:43px;

background-color:#E8833A;

display: flex;
align-items:center;
justify-content:center;

color:#ffffff;
font-size:18px;

`

const ButtonContainer = styled.div`
background-color:blue ;
`
