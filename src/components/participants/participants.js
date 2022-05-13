import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { Tr, Tbody } from "@chakra-ui/react";

function ParticipantsColumn(props) {
  const [tournament_id, setTournamentId] = useState(props.tournament_id);
  const [participants, setParticipants] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const apiKey = `8KKWQ4LPxEjTdW0FRpZj6t87z0yjnyDquMjiaqGY`;
  const userName = `duclayan`;
  const apiUrl = `http://${userName}:${apiKey}@api.challonge.com/v1/tournaments/${tournament_id}/participants.json`;

  async function getData() {
    await axios
      .get(apiUrl, { auth: { username: userName, password: apiKey } })
      .then((results) => {
        setParticipants(results.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }

  useEffect(() => {
    getData();
  }, [isLoaded]);

  if (participants) {
    if (participants.length === 0) {
      return <></>;
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
