import { createStore, combineReducers } from "redux";
import churrasReducer from "./reducers/churras.reducer";
import participantsReducer from "./reducers/participants.reducer";

const store = createStore(
  combineReducers({
    churrasState: churrasReducer,
    participantsState: participantsReducer,
  })
);

export default store;
