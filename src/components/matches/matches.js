import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { Tr, Tbody,Heading, Container, Stack} from "@chakra-ui/react";
import { challonge_api, getURL } from "../../utils/utils";
import LoadingScreen from "../chakra/loading";
import { useNavigate } from "react-router-dom";

function MatchesColumn(props) {
  const [tournament_id, setTournamentId] = useState(props.tournament_id);
  const [matches, setMatches] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const apiUrl = getURL(tournament_id, "matches");

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
  }, [isLoaded]);


  if (matches) {
    if (matches.length === 0) {
      return (
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
      )
    }
    {
      return (
        <>
          <Tbody>
            {matches.map((list, index) => (
              <Tr> {list.match.id} </Tr>
            ))}
          </Tbody>
        </>
      );
    }
  }
}
export default MatchesColumn;
