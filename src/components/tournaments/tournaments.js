import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import {
  Table,
  Td,
  Th,
  Tr,
  Thead,
  Tbody,
  Button,
  Container,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Spinner } from "reactstrap";
import MatchesColumn from "../matches/matches";
import ParticipantsColumn from "../participants/participants";
import { Link } from "react-router-dom";
import { withRouter } from "next/router";
import CreateTournament from "./createTournament";
import LoadingScreen from "../chakra/loading";

function TournamentColumn(props) {
  const maximum_length = 10;
  const [tournaments, setTournaments] = useState();
  const [displayTournament, setDisplayTournament] = useState();
  const [isLoading, setIsLoading] = useState();
  const [render, setRender] = useState(false);


  const apiKey = `8KKWQ4LPxEjTdW0FRpZj6t87z0yjnyDquMjiaqGY`;
  const userName = `duclayan`;
  const apiUrl = `http://${userName}:${apiKey}@api.challonge.com/v1/tournaments.json`;
  
  async function getData() {
    await axios
      .get(apiUrl, { auth: { username: userName, password: apiKey } })
      .then((results) => {
        setTournaments(results.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('error', err)
      });
  }

  useEffect(() => {
    getData();

    if (isLoading === false && tournaments) {
      setDisplayTournament(setTournaments(tournaments));
      getDisplayTournament(tournaments);
    } else {
      <LoadingScreen />;
    }
  }, [isLoading]);

  useEffect(() => {
    if (displayTournament) {
      setRender(true);
    } else {
      <LoadingScreen />;
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
        <Container maxW={"5xl"}>
          <Stack
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              your{" "}
              <Text as={"span"} color={"orange.400"}>
                tournaments
              </Text>
            </Heading>
            <Link
              to={{
                pathname: `/tournament/create`,
              }}
            >
              <Button
                colorScheme={"green"}
                bg={"green.300"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "orange.500",
                }}
              >
                new tournament
              </Button>
            </Link>
          </Stack>

          <Table>
            <Thead>
              <Tr>
                <Th>Name of Tournament</Th>
                <Th>Update Tournament</Th>
              </Tr>
            </Thead>
            <Tbody>
              {displayTournament.slice(0, maximum_length).map((list, index) => (
                <Tr
                  _hover={{
                    background: "orange.200",
                    color: "white.600",
                  }}
                >
                  <Td key="${list.tournament.id}"> {list.tournament.name} </Td>
                  
                  <Td align={"center"}>
                    <Stack direction={"row"} spacing={8} align={"center"}>
                      <Link
                        to={{
                          pathname: `/tournament/${list.tournament.id}`,
                          state: { router: list.tournament_id },
                        }}
                      >
                        <Button>Update</Button>
                      </Link>

                      <Link
                        to={{
                          pathname: `/tournament/${list.tournament.id}/matches`,
                          state: { router: list.tournament.id},
                        }}
                      >
                        <Button>Matches</Button>
                      </Link>

                      <Link
                        to={{
                          pathname: `/tournament/${list.tournament.id}/participants`,
                          state: { router: list.tournament_id },
                        }}
                      >
                        <Button>Participants</Button>
                      </Link>
                    </Stack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Container>
      </>
    );
  } else {
    return <LoadingScreen />;
  }
}
export default withRouter(TournamentColumn);
