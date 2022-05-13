import "./App.css";
import { ChakraProvider, StylesProvider } from "@chakra-ui/react";
import React, { Component } from "react";
import axios from "axios";
import TournamentColumn from "./components/tournaments/tournaments";

const apiKey = `8KKWQ4LPxEjTdW0FRpZj6t87z0yjnyDquMjiaqGY`;
const userName = `duclayan`;
const apiUrl = `http://${userName}:${apiKey}@api.challonge.com/v1/tournaments.json`;

class App extends Component {
  render() {
    return (
      <ChakraProvider>
        <h2> Hello </h2>
        <TournamentColumn />
      </ChakraProvider>
    );
  }
}

export default App;
