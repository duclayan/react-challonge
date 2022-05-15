import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { Tr, Tbody, Container, Stack, Heading } from "@chakra-ui/react";
import { challonge_api, getURL } from "../../utils/utils";

function ParticipantsColumn(props) {
  const [tournament_id, setTournamentId] = useState(props.tournament_id);
  const [participants, setParticipants] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const apiUrl = getURL(tournament_id, "participants");

  async function getData() {
    await axios.get(apiUrl, { auth: { ...challonge_api } }).catch((error) => {
      console.log("error:", error);
    });
  }

  useEffect(() => {
    getData();
  }, [isLoaded]);

  if (participants) {
    if (participants.length === 0) {
      return <>
              <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading> SORRY CURRENTLY THERE IS NO MATCH AVAILABLE</Heading>
          
        </Stack>
        </Container>
        </>;
    }
    {
      return (
        <>
          <Tbody>
            {participants.map((list, index) => (
              <Tr> {list.participant.username || list.participant.name} </Tr>
            ))}
          </Tbody>
        </>
      );
    }
  }
}
export default ParticipantsColumn;
