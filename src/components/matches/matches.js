import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { Table, Td, Th, Tr, Thead, Tbody } from "@chakra-ui/react";
import { Spinner } from "reactstrap";

function MatchesColumn(props) {
  const [tournament_id, setTournamentId] = useState(props.tournament_id);
  const [matches, setMatches] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const apiKey = `8KKWQ4LPxEjTdW0FRpZj6t87z0yjnyDquMjiaqGY`;
  const userName = `duclayan`;
  const apiUrl = `http://${userName}:${apiKey}@api.challonge.com/v1/tournaments/${tournament_id}/matches.json`;

  async function getData() {
    await axios
      .get(apiUrl, { auth: { username: userName, password: apiKey } })
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
