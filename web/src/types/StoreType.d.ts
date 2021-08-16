import { ChurrasType } from "./ChurrasType";
import { ParticipantsType } from "./ParticipantsType";

export interface StoreType {
  churrasState: ChurrasStateType;
  participantsState: ParticipantsStateType;
}

export interface ChurrasStateType {
  churras: ChurrasType[];
}

export interface ParticipantsStateType {
  participants: ParticipantsType[];
}
