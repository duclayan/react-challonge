import { Heading, Stack, Text } from "@chakra-ui/react";
import { TournamentButton } from "../tournamentButton";

export function Title(props) {
  console.log("title", props);
  return (
    <>
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
          {props.titleBig}{" "}
          <Text as={"span"} color={"orange.400"}>
            {props.titleSmall}
          </Text>
        </Heading>

          <TournamentButton
            buttonCaption = {props.buttonCaption}
            path = {props.path}
          />

      </Stack>
    </>
  );
}
