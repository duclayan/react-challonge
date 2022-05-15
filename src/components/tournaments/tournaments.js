import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { Table, Td, Th, Tr, Thead, Tbody, Button } from "@chakra-ui/react";
import { Spinner } from "reactstrap";
import MatchesColumn from "../matches/matches";
import ParticipantsColumn from "../participants/participants";
import { Link } from "react-router-dom";
import { withRouter } from "next/router";
import CreateTournament from "./createTournament";

function TournamentColumn(props) {
  const apiKey = `8KKWQ4LPxEjTdW0FRpZj6t87z0yjnyDquMjiaqGY`;
  const userName = `duclayan`;
  const apiUrl = `http://${userName}:${apiKey}@api.challonge.com/v1/tournaments.json`;
  const maximum_length = 10;
  const [tournaments, setTournaments] = useState();
  const [displayTournament, setDisplayTournament] = useState();
  const [isLoading, setIsLoading] = useState();
  const [render, setRender] = useState(false);
  console.log(process.env)
  async function getData() {
    await axios
      .get(apiUrl, { auth: { username: userName, password: apiKey } })
      .then((results) => {
        setTournaments(results.data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getData();

    if (isLoading === false && tournaments) {
      setDisplayTournament(setTournaments(tournaments));
      getDisplayTournament(tournaments);
    } else {
      <Spinner />;
    }
  }, [isLoading]);

  useEffect(() => {
    if (displayTournament) {
      setRender(true);
    } else {
      <Spinner />;
      getDisplayTournament(tournaments);
    }
  }, [tournaments]);

  async function getDisplayTournament(tournaments) {
    if (tournaments) {
      const sorted_list = await tournaments.sort((a, b) =>
        a.tournament.created_at < b.tournament.created_at ? 1 : -1
      );
      setDisplayTournament(sorted_list);
    }
  }

  if (render === true) {
    return (
      <>
        <CreateTournament />
        <Table>
          <Thead>
            <Tr>
              <Th>Name of Tournament</Th>
              <Th>Matches of the Tournament</Th>
              <Th>Participant of the Tournament</Th>
              <Th>Update Tournament</Th>
            </Tr>
          </Thead>
          <Tbody>
            {displayTournament.slice(0, maximum_length).map((list, index) => (
              <Tr>
                <Td key="${list.tournament.id}"> {list.tournament.id} </Td>
                <Td>
                  {" "}
                  <MatchesColumn
                    key="tournament_matches"
                    tournament_id={list.tournament.id}
                  />{" "}
                </Td>
                <Td>
                  {" "}
                  <ParticipantsColumn
                    key="tournament_participants"
                    tournament_id={list.tournament.id}
                  />
                </Td>
                <Td>
                  <Link
                    to={{
                      pathname: `/tournament/${list.tournament.id}`,
                      state: { router: list.tournament_id },
                    }}
                  >
                    <Button>Update</Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </>
    );
  }
}
export default withRouter(TournamentColumn);
