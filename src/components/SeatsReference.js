import styled from "styled-components";
export default function SeatsReference() {
  return (
    <Map>
      <MapDetails>
        <span className="seats-map available"></span>
        <span> Selecionado</span>
      </MapDetails>
      <MapDetails>
        <span className="seats-map selected"></span>
        <span> Disponível</span>
      </MapDetails>
      <MapDetails>
        <span className="seats-map unavailable"></span>
        <span> Indisponível</span>
      </MapDetails>
    </Map>
  );
}

const Map = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  .selected {
    background-color: #8dd7cf;
  }
  .available {
    background-color: #c3cfd9;
  }
  .unavailable {
    background-color: #fbe192;
  }
`;

const MapDetails = styled.div`
  width: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 13px;
`;
