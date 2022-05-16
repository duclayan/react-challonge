import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import {
  Heading,
  Container,
  Stack,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { challonge_api, getURL } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { TournamentButton } from "../chakra/tournamentButton";
import { Title } from "../chakra/heading/Title";

function ParticipantsColumn(props) {
  const [participants, setParticipants] = useState();
  const current = useParams();
  const apiUrl = getURL(parseInt(current.tournament_id), "participants");

  async function getData() {
    await axios
      .get(apiUrl, { auth: { ...challonge_api } })
      .then((res) => {
        setParticipants(res.data);
        console.log("Participants", res.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  if (participants) {
    if (participants.length === 0) {
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
      );
    }
    {
      return (
        <>
          <Title
            titleBig={"this is your"}
            titleSmall={"matches"}
            buttonCaption={"back to Tournaments"}
            path={"/tournaments"}
          />

          <Table>
            <Thead>
              <Tr>
                <Th>Name of Tournament</Th>
                <Th> Invitation Mail</Th>
                <Th> Username </Th>
              </Tr>
            </Thead>
            <Tbody>
              {participants.map((list, index) => (
                <Tr
                  _hover={{
                    background: "orange.200",
                    color: "white.600",
                  }}
                >
                  <Td key="${list.tournament.id}">
                    {" "}
                    {list.participant.username || list.participant.name}{" "}
                  </Td>
                  <Td key="${list.tournament.id}">
                    {" "}
                    {
                      list.participant
                        .display_name_with_invitation_email_address
                    }{" "}
                  </Td>
                  <Td key="${list.tournament.id}">
                    {" "}
                    {list.participant.username || "unavailable"}{" "}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </>
      );
    }
  }
}
export default ParticipantsColumn;
