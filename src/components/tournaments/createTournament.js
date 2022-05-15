import React, { Component, useState } from "react";
import {
  Heading,
  Container,
  Button,
  Input,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import FormSubHeading from "./forms/formSubheading";
import axios from "axios";
import { challonge_api, withRouter } from "../../utils/utils";

class CreateTournament extends React.Component {
  state= {
    api_key: challonge_api.apiKey,
    id: parseInt(this.props.router.params.tournament_id)
  };


  handleChange = (event) => {
    console.log(!!this.state.id)
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if((!!this.state.id)) {
      axios.put(`${challonge_api.baseURL}/tournaments/${this.state.id}.json`, {...this.state}).then((res)=> console.log('UPDATE'))
    } else {
      axios.post("https://api.challonge.com/v1/tournaments.json", {...this.state}).then((res) => console.log('CREATE'));
    }
  };

  render() {
    return (
      <>
        <Container maxW={"3xl"}>
          <form onSubmit={this.handleSubmit}>
            <Heading color={"green.400"} fontSize="50px">
              New Tournament
            </Heading>

            <FormSubHeading title="Basic Info" />

            <FormLabel htmlFor="tournament-name">Tournament Name</FormLabel>
            <Input
              id="tournament-name"
              placeholder="Tournament Name"
              name="name"
              onChange={this.handleChange}
            />

            <FormLabel htmlFor="tournament-description">
              Tournament Description
            </FormLabel>
            <Input
              id="tournament-description"
              placeholder="tournament description"
              name="description"
              onChange={this.handleChange}
            />
            <FormLabel htmlFor="tournament-description">Format </FormLabel>
            <Select
              placeholder="Select option"
              name="tournament_type"
              onChange={this.handleChange}
            >
              <option value="single elimination">Single Elimination</option>
              <option value="double elimination">Double Elimination</option>
              <option value="round robin">Round Robin</option>
              <option value="swiss">Swiss</option>
              <option value="free for all">Free for all</option>
              <option value="leaderboard">Leaderboard</option>
            </Select>
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </form>
        </Container>
      </>
    );
  }
}
export default withRouter(CreateTournament);