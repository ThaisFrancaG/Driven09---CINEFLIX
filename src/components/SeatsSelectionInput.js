import { useState } from "react";
import styled from "styled-components";

export default function SeatsSelectionInput(props) {
  let userName = props.userName;
  let userCPF = props.userCPF;

  return (
    <div>
      <Form>
        <FormItem>
          <span>Nome do comprador:</span>
          <input
            placeholder="Digite seu nome..."
            value={userName}
            onChange={(event) => props.setUserName(event.target.value)}
          />
        </FormItem>
        <FormItem>
          <span>CPF do comprador:</span>
          <input
            placeholder="Digite seu CPF..."
            value={userCPF}
            onChange={(event) => props.setUserCPF(event.target.value)}
          />
        </FormItem>
      </Form>
    </div>
  );
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 240px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  padding: 10px;
  box-sizing: border-box;
`;
