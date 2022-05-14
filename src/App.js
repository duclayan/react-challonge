import "./App.css";
import {ChakraProvider} from "@chakra-ui/react";
import React, { Component } from "react";
import TournamentColumn from "./components/tournaments/tournaments";
import CallToActionWithAnnotation from "./components/Heading/Header";
import WithSubnavigation from "./components/Heading/Navbar";
import CreateTournament from "./components/tournaments/createTournament";
const apiKey = `8KKWQ4LPxEjTdW0FRpZj6t87z0yjnyDquMjiaqGY`;
const userName = `duclayan`;

function App(){
    return (
      <ChakraProvider>
        <div>
          <WithSubnavigation/>
          <CallToActionWithAnnotation />
        </div> 
        <CreateTournament/>
        <TournamentColumn/>
      </ChakraProvider>
    );
}

export default App;
