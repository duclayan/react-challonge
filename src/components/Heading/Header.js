
import React from "react";
import { Heading, Text, Stack, Box } from '@chakra-ui/react'

function Header(){
    return(

        <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>

        <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        Tournaments <br />
        <Text as={'span'} color={'green.400'}>
         Tournaments
        </Text>
      </Heading>
      </Stack>
        
    )
}

export default Header