import { configureStore } from "@reduxjs/toolkit";
import cassetteReducer from "./cassettes/cassettesSlice.ts";


export const store = configureStore({
  reducer: {
    cassettes: cassetteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
