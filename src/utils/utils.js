import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { TournamentButton } from "../components/chakra/tournamentButton";
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
  Text,
  Button
} from "@chakra-ui/react";
import { Title } from "../components/chakra/heading/Title";

export const challonge_api = {
  apiKey: process.env.REACT_APP_CHALLONGE_API_KEY,
  userName: process.env.REACT_APP_CHALLONGE_USERNAME,
  baseURL: process.env.REACT_APP_BASE_URL,
  configURL: process.env.REACT_APP_CONFIG_URL,
};

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

export function getURL(tournament_id, category) {
  return `http://${challonge_api.userName}:${challonge_api.apiKey}@api.challonge.com/v1/tournaments/${tournament_id}/${category}.json`;
}

export function EmptyPage(){
  return (
    <>
      <Container maxW={"5xl"}>
    <Stack
      textAlign={"center"}
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
    >
      <Heading> SORRY CURRENTLY THERE IS NOTHING AVAILABLE</Heading>
      <TournamentButton />
    </Stack>
  </Container>
    </>
  )
}

export function RenderParticipantsTable(props){
  const current = {...props}
  return(
    <>
          <Title
            titleBig={"this is your"}
            titleSmall={`${props.title}`}
            buttonCaption={"back to Tournaments"}
            path={"/tournaments"}
            data-test_id= 'participants-page-title'
          />

          <Table data-test_id = 'participants-table'>
            <Thead data-test_id = 'participants-table-head'>
              <Tr>
                <Th data-test_id = 'participant-table-head-1'>Name of Tournament</Th>
                <Th data-test_id = 'participant-table-head-2'> Invitation Mail</Th>
                <Th data-test_id = 'participant-table-head-3'> Username </Th>
              </Tr>
            </Thead>
            <Tbody data-test_id = 'participant-table-body'>
              { current.props.map((list, index) => (
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
                      list.participant.display_name_with_invitation_email_address
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
  )
}

export function RenderTournamentsTable(props){
  const maximum_length = 10
  const displayTournament = {...props}
  
  return(
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
        {displayTournament.props.slice(0, maximum_length).map((list, index) => (
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
  )
}