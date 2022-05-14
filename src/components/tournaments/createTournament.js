import React, { Component, useState } from "react";
import { Heading, Container, Button, Input, FormLabel } from "@chakra-ui/react";
import FormSubHeading from "./forms/formSubheading";
import { RegularInput } from "./forms/regularInput";
import { useForm } from "react-hook-form";
import axios from "axios";

export function CreateTournament(props) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [tournament_name, setName] = useState("");
  const [tournamentType, setTournamentType] = useState("");
  const [url, setUrl] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [tournament_description, setDescription] = useState("");
  const [openSignup, setOpenSignup] = useState("");


function onSubmit(e) {

    const apiUrl = "https://api.challonge.com/v1/tournaments."
    const tournament = {
        "name": tournament_name, 
        "description": tournament_description
    }

    const sample_data = {
        "tournament": {
          "accept_attachments": false,
          "allow_participant_match_reporting": true,
          "anonymous_voting": false,
          "category": null,
          "check_in_duration": null,
          "completed_at": null,
          "created_at": "2015-01-19T16:47:30-05:00",
          "created_by_api": false,
          "credit_capped": false,
          "description": "",
          "game_id": 600,
          "group_stages_enabled": false,
          "hide_forum": false,
          "hide_seeds": false,
          "hold_third_place_match": false,
          "id": 1086875,
          "max_predictions_per_user": 1,
          "name": "Sample Tournament 1",
          "notify_users_when_matches_open": true,
          "notify_users_when_the_tournament_ends": true,
          "open_signup": false,
          "participants_count": 4,
          "prediction_method": 0,
          "predictions_opened_at": null,
          "private": false,
          "progress_meter": 0,
          "pts_for_bye": "1.0",
          "pts_for_game_tie": "0.0",
          "pts_for_game_win": "0.0",
          "pts_for_match_tie": "0.5",
          "pts_for_match_win": "1.0",
          "quick_advance": false,
          "ranked_by": "match wins",
          "require_score_agreement": false,
          "rr_pts_for_game_tie": "0.0",
          "rr_pts_for_game_win": "0.0",
          "rr_pts_for_match_tie": "0.5",
          "rr_pts_for_match_win": "1.0",
          "sequential_pairings": false,
          "show_rounds": true,
          "signup_cap": null,
          "start_at": null,
          "started_at": null,
          "started_checking_in_at": null,
          "state": "pending",
          "swiss_rounds": 0,
          "teams": false,
          "tie_breaks": [
            "match wins vs tied",
            "game wins",
            "points scored"
          ],
          "tournament_type": "single elimination",
          "updated_at": "2015-01-19T16:57:17-05:00",
          "url": "sample_tournament_1",
          "description_source": "",
          "subdomain": null,
          "full_challonge_url": "http://challonge.com/sample_tournament_1",
          "live_image_url": "http://images.challonge.com/sample_tournament_1.png",
          "sign_up_url": null,
          "review_before_finalizing": true,
          "accepting_predictions": false,
          "participants_locked": true,
          "game_name": "Table Tennis",
          "participants_swappable": false,
          "team_convertable": false,
          "group_stages_were_started": false
        }
      }
    axios.post(apiUrl,
        {data: {
            "tournament[name]":`${tournament_name}`,
            "tournament[description]":`${tournament_description}`
        }},
        {headers:{
            "content-type":'application/json',
            "Accept":'application/json'
        }}
    )
    
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.log(error)
        console.log('error data', error.response)
    })
    console.log("on Submit",tournament_description);
  }


  return (
    <>
      <Container maxW={"3xl"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading color={"green.400"} fontSize="50px">
            New Tournament
          </Heading>

          <FormSubHeading title="Basic Info" />

          <FormLabel htmlFor="tournament-name">Tournament Name</FormLabel>
          <Input
            id="tournament-name"
            placeholder="Tournament Name"
            onChange={(e) => setName(e.target.value)}
          />

<FormLabel htmlFor="tournament-description">Tournament Description</FormLabel>
          <Input
            id="tournament-description"
            placeholder="tournament description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
}
export default CreateTournament;
