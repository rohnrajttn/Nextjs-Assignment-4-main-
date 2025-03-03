"use client";

import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { fetchReducer } from "@/reducers/fetchReducer";
const rootReducer = combineReducers({
  fetchQuote: fetchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;