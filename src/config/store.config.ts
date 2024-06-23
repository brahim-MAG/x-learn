// store.js

import { SessionStore } from "@redux/session/session.store";
import { combineReducers, configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
  sessionState: SessionStore,
});

const store = configureStore({
  reducer: rootReducer,
  // Optionally add middleware like redux-thunk here
});

export default store;
