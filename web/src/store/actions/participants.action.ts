import { ParticipantsType } from "../../types/ParticipantsType";
import {
  ADD_PARTICIPANT,
  DELETE_PARTICIPANT,
  EDIT_PARTICIPANT,
} from "../actionTypes";

export function addParticipant(participant: ParticipantsType) {
  return {
    type: ADD_PARTICIPANT,
    payload: participant,
  };
}

export function editParticipant(participant: ParticipantsType) {
  return {
    type: EDIT_PARTICIPANT,
    payload: participant,
  };
}

export function deleteParticipant(id: number) {
  return {
    type: DELETE_PARTICIPANT,
    payload: id,
  };
}
