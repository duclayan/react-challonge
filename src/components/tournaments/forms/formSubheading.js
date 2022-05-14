import { Text, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";

export function FormSubHeading(props) {
  
  return(
    <Text
    as={'span'}
    position={'relative'}
    fontSize={'2xl'}
    fontWeight={'semibold'}
    _after={{
      content: "''",
      width: 'full',
      height: useBreakpointValue({ base: '20%', md: '30%' }),
      position: 'absolute',
      bottom: 1,
      left: 0,
      bg: 'green.400',
      zIndex: -1,
      }}>
    {props.title}
</Text>
  )
}

export default FormSubHeading;
