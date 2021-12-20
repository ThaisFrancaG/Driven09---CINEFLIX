import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SeatsSession(props) {
  let allSeats = props.seats;
  let firstRow = allSeats.slice(0, 10);
  let secondRow = allSeats.slice(10, 20);
  let thirdRow = allSeats.slice(20, 30);
  let fourthRow = allSeats.slice(30, 40);
  let fifthRow = allSeats.slice(40, 50);

  let quantitySeats = props.quantitySeats;
  let selectedSeats = props.selectedSeats;
  let seatId = props.seatId;

  function selectSeat(seatSelected) {
    let isAvaliable = seatSelected.isAvailable;
    isAvaliable
      ? changeSelection(seatSelected)
      : alert("Esse assento já está ocupado");
  }

  function changeSelection(seatSelected) {
    if (selectedSeats.includes(seatSelected.name)) {
      alert("será desselecionado");
      let index = selectedSeats.indexOf(seatSelected.name);
      selectedSeats.splice(index, 1);
      seatId.splice(index, 1);

      props.setQuantitySeats(quantitySeats - 1);
    } else {
      props.setSelectedSeats([...selectedSeats, seatSelected.name]);
      props.setSeatId([...seatId, seatSelected.id]);

      props.setQuantitySeats(quantitySeats + 1);
    }
  }

  useEffect(() => {
    props.setSelectedSeats(selectedSeats);
  }, [quantitySeats]);

  return (
    <SeatsSpace>
      <SeatRow>
        {firstRow.map((seat) => (
          <Seat
            key={seat.id}
            selected={selectedSeats.includes(seat.name)}
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
            selected={selectedSeats.includes(seat.name) ? true : false}
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
            selected={selectedSeats.includes(seat.name) ? true : false}
            available={seat.isAvailable}
            onClick={() => selectSeat(seat)}
          >
            {seat.name}
          </Seat>
        ))}
      </SeatRow>
      <SeatRow>
        {fourthRow.map((seat) => (
          <Seat
            key={seat.id}
            selected={selectedSeats.includes(seat.name) ? true : false}
            available={seat.isAvailable}
            onClick={() => selectSeat(seat)}
          >
            {seat.name}
          </Seat>
        ))}
      </SeatRow>
      <SeatRow>
        {fifthRow.map((seat) => (
          <Seat
            key={seat.id}
            selected={selectedSeats.includes(seat.name) ? true : false}
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
