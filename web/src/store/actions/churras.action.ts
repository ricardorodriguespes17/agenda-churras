import { ChurrasType } from "../../types/ChurrasType";
import { ADD_CHURRAS, DELETE_CHURRAS, EDIT_CHURRAS } from "../actionTypes";

export function addChurras(newChurras: ChurrasType) {
  return {
    type: ADD_CHURRAS,
    payload: newChurras,
  };
}

export function editChurras(churras: ChurrasType) {
  return {
    type: EDIT_CHURRAS,
    payload: churras,
  };
}

export function deleteChurras(id: number) {
  return {
    type: DELETE_CHURRAS,
    payload: id,
  };
}
