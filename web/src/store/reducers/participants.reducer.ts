import { ActionType } from "../../types/ActionType";
import { ParticipantsStateType } from "../../types/StoreType";
import {
  ADD_PARTICIPANT,
  DELETE_PARTICIPANT,
  EDIT_PARTICIPANT,
} from "../actionTypes";

const initialState = {
  participants: [],
} as ParticipantsStateType;

export default function participantsReducer(
  state = initialState,
  action: ActionType
): ParticipantsStateType {
  switch (action.type) {
    case ADD_PARTICIPANT:
      return {
        ...state,
        participants: state.participants.concat(action.payload),
      };
    case EDIT_PARTICIPANT:
      return {
        ...state,
        participants: state.participants.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_PARTICIPANT:
      return {
        ...state,
        participants: state.participants.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
