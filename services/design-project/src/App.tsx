import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";
import { vars, classes } from "@fastcampus/themes";

const Text = styled.p`
  ${classes.typography.heading["xl"]}
  color: ${vars.colors.$static.light.red[500]};
`;

const View = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Text>
      font color is {vars.colors.$static.light.red[500]}
      {vars.box.radii.base}
    </Text>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
);

function App() {
  return <View />;
}

export default App;
