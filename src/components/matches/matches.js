import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { Heading, Container, Stack, Table, Thead, Tr, Th, Tbody, Button, Td} from "@chakra-ui/react";
import { challonge_api, getURL } from "../../utils/utils";
import { useParams, Link} from "react-router-dom";
import { TournamentButton } from "../chakra/tournamentButton";
import { Title } from "../chakra/heading/Title";

function MatchesColumn() {
  const [matches, setMatches] = useState();
  const current = useParams()
  const apiUrl = getURL(parseInt(current.tournament_id), "matches");

  async function getData() {
    await axios
      .get(apiUrl, { auth: { ...challonge_api } })
      .then((results) => {
        setMatches(results.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
  
  useEffect(() => {
    getData();
  }, []);

  if (matches) {
    if (matches.length === 0) {
      return (
        <>
          <Container maxW={"5xl"}>
          <Stack
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
          >
            <Heading> SORRY CURRENTLY THERE IS NO MATCH AVAILABLE</Heading>
            <TournamentButton />
          </Stack>
        </Container>
        </>
      )
    }
    {
      return (
        <>  
            <Title titleBig ={'this is your'} titleSmall = {'matches'} buttonCaption = {'back to Tournaments'} path = {'/tournaments'}/>

            <Table>
            <Thead>
              <Tr>
                <Th>Name of Tournament</Th>
                <Th> Started at</Th>
                <Th> Updated at </Th>

              </Tr>
            </Thead>
            <Tbody>

              {matches.map((list, index) => (
                <Tr
                  _hover={{
                    background: "orange.200",
                    color: "white.600",
                  }}
                >
                  <Td key="${list.tournament.id}"> Match ID {list.match.id} </Td>
                  <Td key="${list.tournament.id}"> {list.match.started_at} </Td>
                  <Td key="${list.tournament.id}"> {list.match.updated_at} </Td>
                </Tr>   
              ))}
            </Tbody>
          </Table>

        </>
      );
    }
  }
}
export default MatchesColumn;
