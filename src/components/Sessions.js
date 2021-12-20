import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sessions(props) {
  let sessionDetails = props.sessions;

  let moviePoster = props.request[0];
  let movieName = props.request[1];

  let individualSession = sessionDetails.map((session, i) => (
    <DayContainer key={i}>
      {session.weekday}-{session.date}
      <ButtonContainer>
        {session.showtimes.map((showtime, j) => (
          <Link
            key={showtime.id}
            to={`sessao/${showtime.id}`}
            state={[movieName, moviePoster, showtime.name, session.date]}
          >
            <Button
              key={j}
              onClick={() =>
                props.setRequest([
                  ...props.request,
                  showtime.name,
                  session.date,
                ])
              }
            >
              {showtime.name}
            </Button>
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
