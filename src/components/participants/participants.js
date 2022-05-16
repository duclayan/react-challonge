import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {
  challonge_api,
  EmptyPage,
  getURL,
  RenderParticipantsTable,
} from "../../utils/utils";
import { useParams } from "react-router-dom";

function ParticipantsColumn(props) {
  const [participants, setParticipants] = useState();
  const current = useParams();
  const apiUrl = getURL(parseInt(current.tournament_id), "participants");

  useEffect(() => {
    axios
      .get(apiUrl, { auth: { ...challonge_api } })
      .then((res) => {
        setParticipants(res.data);})
      .catch((error) => {
        console.log("error:", error);});
  }, []);

  if (participants) {
    return (
      <>
        {participants.length === 0 ? (
          <EmptyPage />
        ) : (
          <RenderParticipantsTable props={participants} title="participants" />
        )}
      </>
    );
  }
}
export default ParticipantsColumn;
