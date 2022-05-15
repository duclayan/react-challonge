import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import {Tr,Tbody } from "@chakra-ui/react";
import { challonge_api, getURL } from "../../utils/utils";

function MatchesColumn(props) {
  const [tournament_id, setTournamentId] = useState(props.tournament_id);
  const [matches, setMatches] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const apiUrl = getURL(tournament_id, 'matches')

  async function getData() {
    await axios
      .get(apiUrl, { auth: { ...challonge_api} })
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
      return <></>;
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
