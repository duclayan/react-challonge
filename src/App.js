import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import React, { Component } from "react";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import TournamentColumn from "./components/tournaments/tournaments";
import CallToActionWithAnnotation from "./components/heading/Header";
import WithSubnavigation from "./components/heading/Navbar";
import CreateTournament from "./components/tournaments/createTournament";
import Challonge from "./components/challonge";

function App () {
    return (
      <>
        {/* Creating the routers for Tournaments, Matches and Participants */}
        <ChakraProvider>
          <Routes>
            <Route path='/' element={<Challonge/>} exact/>
            <Route path='/tournaments' element={<TournamentColumn/>} exact/>
            <Route path='/tournament/create' element={<CreateTournament/>} exact/>
            <Route path='/tournament/:tournament_id' element={<CreateTournament/>} exact />
            <Route element={Error} />
          </Routes>


        </ChakraProvider>
      </>
    );
}

export default App;

