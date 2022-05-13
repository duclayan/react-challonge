import React from "react";
import { TableContainer, TableCaption, Table, Tfoot, Tbody, Tr, Th, Thead, Td } from '@chakra-ui/react'

function TableDisplay(title){
    return(
    <TableContainer>
    <Table variant='striped' colorScheme='twitter'>
        <Thead>
        <Tr>
            <Th> {title.title} </Th>
            <Th> Matches </Th>
            <Th> Participant </Th>
            <Th> Edit </Th>
        </Tr>
        </Thead>
        <Tbody>
        <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>0.91444</Td>
        </Tr>
        <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td>30.48</Td>
            <Td>0.91444</Td>
        </Tr>
        <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>0.91444</Td>
            <Td>0.91444</Td>
        </Tr>
        <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>0.91444</Td>
            <Td>0.91444</Td>
        </Tr>
        </Tbody>
    </Table>
    </TableContainer>

    )
}

export default TableDisplay