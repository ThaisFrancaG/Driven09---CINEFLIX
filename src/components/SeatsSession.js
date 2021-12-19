import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SeatsSession(props) {
  let allSeats = props.seats;
  let firstRow = allSeats.slice(0, 10);
  let secondRow = allSeats.slice(10, 20);
  let thirdRow = allSeats.slice(20, 30);

  const [seastState, setSeatState] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  function selectSeat(question) {
    let isAvaliable = question.isAvailable;
    isAvaliable
      ? setSelectedSeats([...selectedSeats, question.id])
      : alert("Esse assento já está ocupado");
  }

  console.log(selectedSeats);

  return (
    <SeatsSpace>
      <SeatRow>
        {firstRow.map((seat) => (
          <Seat
            key={seat.id}
            selected={selectedSeats.includes(seat.id)}
            available={seat.isAvailable}
            onClick={() => selectSeat(seat)}
          >
            {seat.name}
          </Seat>
        ))}
      </SeatRow>
      <SeatRow>
        {secondRow.map((seat) => (
          <Seat
            key={seat.id}
            selected={selectedSeats.includes(seat.id) ? true : false}
            available={seat.isAvailable}
            onClick={() => selectSeat(seat)}
          >
            {seat.name}
          </Seat>
        ))}
      </SeatRow>
      <SeatRow>
        {thirdRow.map((seat) => (
          <Seat
            key={seat.id}
            selected={selectedSeats.includes(seat.id) ? true : false}
            available={seat.isAvailable}
            onClick={() => selectSeat(seat)}
          >
            {seat.name}
          </Seat>
        ))}
      </SeatRow>
    </SeatsSpace>
  );
}

const Seat = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #808f9d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;

  background-color: ${(props) =>
    props.selected ? "#8dd7cf" : props.available ? "#c3cfd9" : "#fbe192"};
`;

const SeatsSpace = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 20px;
`;

const SeatRow = styled.div`
  display: flex;
  column-gap: 7px;
`;
