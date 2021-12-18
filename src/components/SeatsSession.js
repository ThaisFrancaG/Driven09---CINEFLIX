import styled from "styled-components";
import { Link } from "react-router-dom";
export default function SeatsSession(props) {
  let allSeats = props.seats;
  let firstRow = allSeats.slice(0, 10);
  let secondRow = allSeats.slice(10, 20);
  let thirdRow = allSeats.slice(20, 30);

  console.log(thirdRow);
  return (
    <SeatsSpace>
      <SeatRow>
        {firstRow.map((seat) => (
          <Link to={"/"}>
            <Seat available={seat.isAvailable}>{seat.name}</Seat>
          </Link>
        ))}
      </SeatRow>
      <SeatRow>
        {secondRow.map((seat) => (
          <Link to={"/"}>
            <Seat available={seat.isAvailable}>{seat.name}</Seat>
          </Link>
        ))}
      </SeatRow>
      <SeatRow>
        {thirdRow.map((seat) => (
          <Link to={"/"}>
            <Seat available={seat.isAvailable}>{seat.name}</Seat>
          </Link>
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

  background-color: ${(props) => (props.available ? "red " : "blue")};
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 11px;
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
