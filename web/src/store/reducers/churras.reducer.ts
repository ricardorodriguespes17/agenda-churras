import { ActionType } from "../../types/ActionType";
import { ChurrasStateType } from "../../types/StoreType";
import { ADD_CHURRAS, DELETE_CHURRAS, EDIT_CHURRAS } from "../actionTypes";

const initialState = {
  churras: [],
} as ChurrasStateType;

export default function churrasReducer(
  state = initialState,
  action: ActionType
): ChurrasStateType {
  switch (action.type) {
    case ADD_CHURRAS:
      return { ...state, churras: state.churras.concat(action.payload) };
    case EDIT_CHURRAS:
      return {
        ...state,
        churras: state.churras.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_CHURRAS:
      return {
        ...state,
        churras: state.churras.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
