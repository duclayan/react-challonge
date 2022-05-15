import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { Heading, Container, Stack} from "@chakra-ui/react";
import { challonge_api, getURL } from "../../utils/utils";
import { useParams } from "react-router-dom";

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
          </Stack>
        </Container>
        </>
      )
    }
    {
      return (
        <>  
            {matches.map((list, index) => (
              <h3> {list.match.id} </h3>
            ))}
        </>
      );
    }
  }
}
export default MatchesColumn;
