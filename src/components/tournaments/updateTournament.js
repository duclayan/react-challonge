import React, { useEffect, useState } from "react";

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

import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class UpdateTournament extends React.Component {
  state = {
    name: "sample",
    description: "",
    tournament_type: "",
    id: null,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const tournament = {
      id: parseInt(this.props.router.params.tournament_id),
      api_key: "8KKWQ4LPxEjTdW0FRpZj6t87z0yjnyDquMjiaqGY",
      name: this.state.name,
      description: this.state.description,
      tournament_type: this.state.tournament_type,
    };

    console.log("tournament output", tournament);
    const apiKey = `8KKWQ4LPxEjTdW0FRpZj6t87z0yjnyDquMjiaqGY`;
    const userName = `duclayan`;

    axios
      .put(
        `http://api.challonge.com/v1/tournaments/${tournament.id}.json?api_key=${apiKey}&tournament[tournament_type]=${this.state.tournament_type}`
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.log("response", error.response);
          console.log("tournamentid", tournament.id);
        } else if (error.request) {
          console.log("request", error.request);
        } else if (error.message) {
          console.log("message", error.message);
        }
      });
  };

  render() {
    return (
      <>
        <Container maxW={"3xl"}>
          <form onSubmit={this.handleSubmit}>
            <Heading color={"green.400"} fontSize="50px">
              Update Tournament
            </Heading>

            <h3> `${this.state.name}</h3>

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

export default withRouter(UpdateTournament);
