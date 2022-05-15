import { ChakraProvider } from "@chakra-ui/react";
import React, { Component } from "react";
import { Navbar } from "reactstrap";
import LargeWithAppLinksAndSocial from "./chakra/footer";
import GridBlurredBackdrop from "./chakra/testimonials";
import CallToActionWithAnnotation from "./heading/Header";
import WithSubnavigation from "./heading/Navbar";

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
