import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SessionState = Readonly<typeof initialState>;

const initialState = {
  user: null ,
  actionErrorMessage: null,
  actionPending: false,
  actionSuccessMessage: null ,
};

export const SessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setPendingAction: (state, action: PayloadAction<boolean>) => {
      state.actionPending = action.payload;
    },
    setActionSuccessMessage: (
      state,
      action: PayloadAction<any>
    ) => {
      state.actionSuccessMessage = action.payload;
    },
    setActionErrorMessage: (state, action: PayloadAction<any>) => {
      state.actionErrorMessage = action.payload;
    },
    initialiserActionErrorMessage: (state) => {
      state.actionErrorMessage = null;
    },
    initialiserActionSuccessMessage: (state) => {
      state.actionSuccessMessage = null;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const SessionStore = SessionSlice.actions;

export default SessionSlice.reducer;
