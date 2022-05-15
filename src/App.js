import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import TournamentColumn from "./components/tournaments/tournaments";
import WithSubnavigation from "./components/heading/Navbar";
import CreateTournament from "./components/tournaments/createTournament";
import Challonge from "./components/challonge";
import MatchesColumn from "./components/matches/matches";
import ParticipantsColumn from "./components/participants/participants";

function App() {
  return (
    <>
      {/* Creating the routers for Tournaments, Matches and Participants */}
      <ChakraProvider>
        {/* Renders Nav-bar */}
        <WithSubnavigation />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Challonge />} exact />

          {/* Tournament List */}
          <Route path="/tournaments" element={<TournamentColumn />} exact />

          {/* Create new tournament */}
          <Route
            path="/tournament/create"
            element={<CreateTournament />}
            exact
          />

          {/* Update tournament */}
          <Route
            path="/tournament/:tournament_id"
            element={<CreateTournament />}
            exact
          />

          {/* Matches inside a tournament */}
          <Route
            path="/tournament/:tournament_id/matches"
            element={<MatchesColumn />}
            exact
          />

          {/* Participants inside a tournament */}
          <Route
            path="/tournament/:tournament_id/participants"
            element={<ParticipantsColumn />}
            exact
          />
          <Route element={Error} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
