import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Sessions from "./Sessions";

export default function Session(props) {
  const [sessions, checkSession] = useState([]);
  const { idMovie } = useParams();

  useEffect(() => {
    const requisition = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`
    );

    requisition.then((response) => printSessions(response));
    requisition.catch((response) => {
      alert("algo deu errado, favor atualizar a página");
    });
  }, []);

  function printSessions(response) {
    checkSession(response.data.days);
  }

  return (
    <>
      <header className="screen-title">Selecione o Horário</header>
      <div className="session-display">
        <Sessions
          sessions={sessions}
          request={props.request}
          setRequest={props.setRequest}
        />
        <Footer>
          <img src={props.request[0]} alt={props.request[1]} />

          <span>{props.request[1]}</span>
        </Footer>
      </div>
    </>
  );
}

const Footer = styled.footer`
  height: 117px;
  display: row;
  display: flex;

  align-items: center;
  justify-content: center;

  background-color: #dfe6ed;
  border-top: 1px solid #9eadba;

  span {
    font-size: 26px;
    margin-left: 30px;
  }
  img {
    height: 72px;
    width: 48px;
  }
`;
