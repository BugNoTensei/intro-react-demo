import PropTypes from "prop-types";
import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Selfintroduction = ({ name = "unknown", dateOfbirth, hobbies = [] }) => {
  return (
    <div>
      <h1>
        "My name is <span style={{ color: "red" }}>{name}</span>."
      </h1>
      {dateOfbirth ? <h2>I was born in {dateOfbirth}</h2> : null}
      {hobbies.length > 0 ? (
        <div>
          <h2>My hobbies are:</h2>
          {hobbies.map((item, index) => (
            <div key={item}>
              {index + 1}. {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
Selfintroduction.PropTypes = {
  name: PropTypes.string.isRequired,
};

function App() {
  const [data, setData] = useState({ name: undefined, dateOfbirth: undefined });
  const [name, setName] = useState("");
  const [dateOf, setDateof] = useState("");
  return (
    <div className="App">
      <label htmlFor="name">NameNaJasaimalay:</label>
      <input
        id="name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label htmlFor="dateOfbirth">Date Of birth:</label>
      <input
        type="date"
        id="dateOfbirth"
        value={dateOf}
        onChange={(event) => {
          setDateof(event.target.value);
        }}
      />

      <button
        onClick={() => {
          setData({ name, dateOf });
          setName("");
          setDateof("");
        }}
      >
        SaveJA
      </button>
      <Selfintroduction
        name={data.name}
        dateOfbirth={data.dateOf}
        hobbies={["play game0", "Eat"]}
      />
    </div>
  );
}
export default App;
