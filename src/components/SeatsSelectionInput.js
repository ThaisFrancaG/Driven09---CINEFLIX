import { useState } from "react";
import styled from "styled-components";

export default function SeatsSelectionInput() {
  const [userName, SetUserName] = useState("");
  const [userCPF, SetUserCPF] = useState("");
  console.log(userName);
  return (
    <div>
      <Form>
        <input
          placeholder="Digite seu nome..."
          value={userName}
          onChange={(event) => SetUserName(event.target.value)}
        />
        <input
          placeholder="Digite seu CPF..."
          value={userCPF}
          onChange={(event) => SetUserCPF(event.target.value)}
        />
      </Form>
    </div>
  );
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
