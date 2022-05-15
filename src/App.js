import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import React, { Component } from "react";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import TournamentColumn from "./components/tournaments/tournaments";
import CallToActionWithAnnotation from "./components/heading/Header";
import WithSubnavigation from "./components/heading/Navbar";
import CreateTournament from "./components/tournaments/createTournament";
import UpdateTournament from "./components/tournaments/updateTournament";
const apiKey = `8KKWQ4LPxEjTdW0FRpZj6t87z0yjnyDquMjiaqGY`;
const userName = `duclayan`;

function App () {
    return (
      <>
        {/* Creating the routers for Tournaments, Matches and Participants */}
        <ChakraProvider>
          <Routes>
            <Route path='/' element={<TournamentColumn/>} exact/>
            <Route path='/createTournament' element={<CreateTournament/>} exact/>
            <Route path='/tournament/:tournament_id' element={<UpdateTournament/>} exact />
            <Route element={Error} />
          </Routes>
        </ChakraProvider>
      </>
    );
}

export default App;

