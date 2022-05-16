import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import LargeWithAppLinksAndSocial from "./chakra/footer";
import GridBlurredBackdrop from "./chakra/testimonials";
import CallToActionWithAnnotation from "./chakra/heading/Header"
function Challonge() {
  return (
    <>
      {/* Creating the routers for Tournaments, Matches and Participants */}
      <ChakraProvider>
        {/* Renders Hero Page */}
        <CallToActionWithAnnotation />
        <GridBlurredBackdrop />
        <LargeWithAppLinksAndSocial />
      </ChakraProvider>
    </>
  );
}

export default Challonge;
