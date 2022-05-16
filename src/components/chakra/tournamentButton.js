import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function TournamentButton(props) {

  return (
    <>
      <Link
        to={{
          pathname: '/tournaments',
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
          {props.buttonCaption || 'Go back to tournaments'}
        </Button>
      </Link>
    </>
  );
}
