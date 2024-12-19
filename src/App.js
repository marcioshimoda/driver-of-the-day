import React, { useState } from "react";
import './App.css';


const drivers = [
  // Pilotos da última temporada (2024)
  { id: 0, name: 'Lewis Hamilton', country: 'gb', titles: 7, victories: 103, poles: 104, races: 322 },
  { id: 1, name: 'Max Verstappen', country: 'nl', titles: 4, victories: 60, poles: 30, races: 220 },
  { id: 2, name: 'Valtteri Bottas', country: 'fi', titles: 0, victories: 10, poles: 20, races: 230 },
  { id: 3, name: 'Lando Norris', country: 'gb', titles: 0, victories: 6, poles: 10, races: 100 },
  { id: 4, name: 'Sergio Pérez', country: 'mx', titles: 0, victories: 6, poles: 4, races: 250 },
  { id: 5, name: 'Charles Leclerc', country: 'mc', titles: 0, victories: 7, poles: 20, races: 150 },
  { id: 6, name: 'Daniel Ricciardo', country: 'au', titles: 0, victories: 8, poles: 3, races: 220 },
  { id: 7, name: 'Carlos Sainz', country: 'es', titles: 0, victories: 2, poles: 3, races: 180 },
  { id: 8, name: 'Esteban Ocon', country: 'fr', titles: 0, victories: 1, poles: 1, races: 130 },
  { id: 9, name: 'Pierre Gasly', country: 'fr', titles: 0, victories: 2, poles: 3, races: 120 },
  { id: 10, name: 'Oscar Piastri', country: 'au', titles: 0, victories: 0, poles: 0, races: 24 },
  { id: 11, name: 'George Russell', country: 'gb', titles: 0, victories: 1, poles: 1, races: 90 },
  { id: 12, name: 'Yuki Tsunoda', country: 'jp', titles: 0, victories: 0, poles: 0, races: 74 },
  { id: 13, name: 'Zhou Guanyu', country: 'cn', titles: 0, victories: 0, poles: 0, races: 58 },
  { id: 14, name: 'Alexander Albon', country: 'th', titles: 0, victories: 0, poles: 0, races: 80 },
  { id: 15, name: 'Logan Sargeant', country: 'us', titles: 0, victories: 0, poles: 0, races: 24 },
  { id: 16, name: 'Nico Hülkenberg', country: 'de', titles: 0, victories: 0, poles: 1, races: 200 },
  { id: 17, name: 'Kevin Magnussen', country: 'dk', titles: 0, victories: 0, poles: 1, races: 150 },
  { id: 18, name: 'Fernando Alonso', country: 'es', titles: 2, victories: 32, poles: 22, races: 370 },
  { id: 19, name: 'Liam Lawson', country: 'nz', titles: 0, victories: 0, poles: 0, races: 6 },
  { id: 20, name: 'Nyck de Vries', country: 'nl', titles: 0, victories: 0, poles: 0, races: 10 },
  
  // Campeões mundiais (incluindo todos desde 1950)
  { id: 21, name: 'Michael Schumacher', country: 'de', titles: 7, victories: 91, poles: 68, races: 306 },
  { id: 22, name: 'Ayrton Senna', country: 'br', titles: 3, victories: 41, poles: 65, races: 161 },
  { id: 23, name: 'Alain Prost', country: 'fr', titles: 4, victories: 51, poles: 33, races: 199 },
  { id: 24, name: 'Juan Manuel Fangio', country: 'ar', titles: 5, victories: 24, poles: 29, races: 51 },
  { id: 25, name: 'Sebastian Vettel', country: 'de', titles: 4, victories: 53, poles: 57, races: 300 },
  { id: 26, name: 'Niki Lauda', country: 'at', titles: 3, victories: 25, poles: 24, races: 171 },
  { id: 27, name: 'Jackie Stewart', country: 'gb', titles: 3, victories: 27, poles: 17, races: 99 },
  { id: 28, name: 'Jim Clark', country: 'gb', titles: 2, victories: 25, poles: 33, races: 72 },
  { id: 29, name: 'Nelson Piquet', country: 'br', titles: 3, victories: 23, poles: 24, races: 204 },
  { id: 30, name: 'Kimi Räikkönen', country: 'fi', titles: 1, victories: 21, poles: 18, races: 349 },
  { id: 31, name: 'Jenson Button', country: 'gb', titles: 1, victories: 15, poles: 8, races: 309 },
  { id: 32, name: 'Nigel Mansell', country: 'gb', titles: 1, victories: 31, poles: 32, races: 187 },
  { id: 33, name: 'Damon Hill', country: 'gb', titles: 1, victories: 22, poles: 20, races: 115 },
  { id: 34, name: 'Jacques Villeneuve', country: 'ca', titles: 1, victories: 11, poles: 13, races: 165 },
  { id: 35, name: 'Mario Andretti', country: 'us', titles: 1, victories: 12, poles: 18, races: 128 },
  { id: 36, name: 'Emerson Fittipaldi', country: 'br', titles: 2, victories: 14, poles: 6, races: 144 },
  { id: 37, name: 'Graham Hill', country: 'gb', titles: 2, victories: 14, poles: 13, races: 176 },
  { id: 38, name: 'Phil Hill', country: 'us', titles: 1, victories: 3, poles: 6, races: 49 },
  { id: 39, name: 'Jochen Rindt', country: 'at', titles: 1, victories: 6, poles: 10, races: 60 },
  { id: 40, name: 'Mike Hawthorn', country: 'gb', titles: 1, victories: 3, poles: 4, races: 47 },
  { id: 41, name: 'Alberto Ascari', country: 'it', titles: 2, victories: 13, poles: 14, races: 33 },
  { id: 42, name: 'Jody Scheckter', country: 'za', titles: 1, victories: 10, poles: 3, races: 112 },
  { id: 43, name: 'Alan Jones', country: 'au', titles: 1, victories: 12, poles: 6, races: 116 },
  { id: 44, name: 'John Surtees', country: 'gb', titles: 1, victories: 6, poles: 8, races: 111 },
  { id: 45, name: 'Denny Hulme', country: 'nz', titles: 1, victories: 8, poles: 1, races: 112 },
  { id: 46, name: 'Keke Rosberg', country: 'fi', titles: 1, victories: 5, poles: 5, races: 114 },
  { id: 47, name: 'Nico Rosberg', country: 'de', titles: 1, victories: 23, poles: 30, races: 206 }
];


const DriverList = ({ drivers, selectedDriver, onSelectDriver }) => {
  const filteredDrivers = drivers.filter((driver) => {
      if (selectedDriver === "") return false;
      return driver.name.toLowerCase().includes(selectedDriver.toLowerCase());
    }
  );
  
  return (
    <div className="driver-list" data-testid="driver-list">
      {filteredDrivers.map((driver) => (
        <div className="driver-list-item" key={driver.id} onClick={() => onSelectDriver(driver)} data-testid="driver-list-item">
          <div>{driver.name}</div>
        </div>
      ))}
    </div>
  );
};

const CrownSvg = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />  
    </svg>
  );
};

const TrophySvg = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.6 630.2 359 721.8 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.8 758.4 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM248 439.6c-37.1-11.9-64-46.7-64-87.6V232h64v207.6zM840 352c0 41-26.9 75.8-64 87.6V232h64v120z" />
    </svg>
  );
};

const OneSvg = () => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312z" />
    </svg>
  );
};

const CheckeredFlagSvg = () => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M32 0c14.3 0 26.4 9.4 30.5 22.3h.1l-.1.1.1.3v-.4C89.8 11.5 128.1 0 168 0c38.8 0 74.6 9.1 105.7 17 32.3 8.2 59.2 15 86.3 15 26.8 0 52.9-6.8 73-14.1 9.9-3.6 17.9-7.2 23.4-9.8 2.7-1.3 4.8-2.4 6.2-3.1.7-.4 1.1-.6 1.4-.8l.2-.1c9.9-5.6 22.1-5.6 31.9.2S512 20.6 512 32v288c0 12.1-6.8 23.2-17.7 28.6L480 320l14.3 28.6h-.1l-.2.1-.7.4c-.6.3-1.5.7-2.5 1.2-2.2 1-5.2 2.4-9 4-7.7 3.3-18.5 7.6-31.5 11.9-25.8 8.7-61.5 17.8-98.3 17.8-37 0-65.2-9.4-89-17.3l-1-.3c-24-8-43.7-14.4-70-14.4-27.9 0-64.7 7.2-96.2 15-12.1 3-23 6-31.8 8.6V480c0 17.7-14.3 32-32 32S0 497.7 0 480V32C0 14.3 14.3 0 32 0zm32 158.4c17.5-4.9 40.4-10.7 64-15.2V68.8c-15 3.3-29.3 8.1-42 13-8.5 3.4-16 6.7-22 9.6v67zm0 80v70.8c5.1-1.4 10.6-2.8 16.2-4.2 14.3-3.6 30.8-7.3 47.8-10.4v-71.5c21.9-4.2 44.4-7.1 64-7.1 5.6 0 10.9.2 16 .7v71.9c29.5 2.2 53 10 73.3 16.8l.9.3c2 .7 3.9 1.3 5.8 1.9v-70.4c19 5.9 39.1 10.8 64 10.8 5.3 0 10.7-.2 16-.6v71.9c22-2 43.9-7.6 61.9-13.6 6.8-2.3 12.9-4.6 18.1-6.6v-69.9c-20.9 7.5-49.9 15.8-80 18.1v-80c30.1-2.3 59.1-10.6 80-18.1V80.5c-21.6 7.3-49.5 14.3-80 15.4v71.5c-5.3.4-10.7.6-16 .6-24.9 0-45-4.9-64-10.8V86.5c-9.3-2.1-18.3-4.4-27-6.7l-3.1-.8c-17.4-4.4-33.8-8.5-49.9-11.3v69c-5.1-.4-10.4-.7-16-.7-19.6 0-42.1 3-64 7.1v80c-23.6 4.5-46.5 10.3-64 15.2zm144-101.7v80c24.4 2.1 44.3 8.7 64.2 15.3 5.2 1.7 10.5 3.5 15.8 5.2v-80c-5.3-1.7-10.6-3.4-15.8-5.2-19.9-6.6-39.8-13.2-64.2-15.3z" />
    </svg>
  );
};

const AttemptDriverInfoTitles = ({attemptDriver,driverOfTheDay}) => {
  return (
    <div className={"driver-info-titles " + ((attemptDriver.titles === driverOfTheDay.titles) ? "success": "error")}>
      <div className="a">
        <CrownSvg />
      </div>
      <div className="b">{attemptDriver.titles}</div>
    </div>
  );
}

const AttemptDriverInfoVictories = ({attemptDriver,driverOfTheDay}) => {
  return (
    <div className={"driver-info-victories " + ((attemptDriver.victories === driverOfTheDay.victories) ? "success": "error")}>
      <div className="a">
        <TrophySvg />
      </div>
      <div className="b">{attemptDriver.victories}</div>
    </div>
  );
}

const AttemptDriverInfoPoles = ({attemptDriver,driverOfTheDay}) => {
  return (
    <div className={"driver-info-poles " + ((attemptDriver.poles === driverOfTheDay.poles) ? "success": "error")}>
      <div className="a">
        <OneSvg />
      </div>
      <div className="b">{attemptDriver.poles}</div>
    </div>
  );
}

const AttemptDriverInfoRaces = ({attemptDriver,driverOfTheDay}) => {
  return (
    <div className={"driver-info-races " + ((attemptDriver.races === driverOfTheDay.races) ? "success": "error")}>
      <div className="a">
        <CheckeredFlagSvg />
      </div>
      <div className="b">{attemptDriver.races}</div>
    </div>
  );
}

const AttemptDriverInfoCountry = ({attemptDriver,driverOfTheDay}) => {
  return (
    <div className={"driver-info-country " + ((attemptDriver.country === driverOfTheDay.country) ? "success": "error")}>
      <img
        src={`https://flagcdn.com/w320/${attemptDriver.country}.png`}
        width="32"
        alt={attemptDriver.country}
      />
    </div> 
  );
}

const AttemptsList = ({ attempts, driverOfTheDay }) => {
  return (
    <div className="attempts">
        {attempts.map((driver) => (
          <div key={driver.id} className="attempts-item">
            <div className="driver-image"></div>
            <div className="driver-name">{driver.name}</div>
            <div className="driver-info">
              <AttemptDriverInfoTitles 
                attemptDriver = {driver}
                driverOfTheDay = {driverOfTheDay}
              />
              <AttemptDriverInfoVictories
                attemptDriver = {driver}
                driverOfTheDay = {driverOfTheDay}
              />
              <AttemptDriverInfoPoles
                attemptDriver = {driver}
                driverOfTheDay = {driverOfTheDay}
              />
              <AttemptDriverInfoRaces
                attemptDriver = {driver}
                driverOfTheDay = {driverOfTheDay}
              />
              <AttemptDriverInfoCountry 
                attemptDriver = {driver}
                driverOfTheDay = {driverOfTheDay}
              />
            </div>
          </div>
        ))}
      </div>
  );
};

const Toolbar = () => {
  return (
    <div className="toolbar">
      <a>Nome</a>
      <a>Diário</a>
      <a>Personalizado</a>
    </div>
  );
};

const driverOfTheDayIndex = Math.floor(Math.random() * drivers.length);

const App = () => {
  const [selectedDriver, setSelectedDriver] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [showModal, setShowModal] = useState(false);
    
  const handleSelectDriver = (driver) => {
    if (driver.id === drivers[driverOfTheDayIndex].id) {
      setShowModal(true);
    } else {
      setAttempts((prev) => [...prev, driver]);
    }
    setSelectedDriver("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setAttempts([]);
  };

  const handleInputChange = (event) => {
    setSelectedDriver(event.target.value);
  };

  return (
    <div className="app">
      <Toolbar />
      <h1>Piloto do dia</h1>
      <div className="driver-input">
        <label htmlFor="driver-input">Qual é o piloto do dia?</label>
        <input
          id="driver-input"
          type="text"
          value={selectedDriver}
          onChange={handleInputChange}
          placeholder="Escreva aqui"
        />
      </div>
      <DriverList
        drivers={drivers}
        selectedDriver={selectedDriver}
        onSelectDriver={handleSelectDriver}
      />
      <AttemptsList
      	attempts={attempts}
      	driverOfTheDay={drivers[driverOfTheDayIndex]}
      />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-message">Parabéns, você acertou em {attempts.length+1} tentativas!</div>
            <div className="modal-message-driver">O piloto do dia é {drivers[driverOfTheDayIndex].name}</div>
            <button className="modal-button" onClick={handleCloseModal}>Fechar</button>
          </div>          
        </div>
      )}
    </div>
  );
};

export default App;

