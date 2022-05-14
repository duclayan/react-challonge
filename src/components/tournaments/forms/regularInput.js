import { FormControl, FormLabel, Input} from "@chakra-ui/react";
import React, { useState } from "react";

export function RegularInput(props) {

  return(
    <FormControl isRequired={props.isRequired}>
        <FormLabel htmlFor={props.tag}>{props.title}</FormLabel>
        <Input id={props.tag} placeholder={props.title} width={props.width} height={props.height}/>
    </FormControl>
  )
}

export default RegularInput;
