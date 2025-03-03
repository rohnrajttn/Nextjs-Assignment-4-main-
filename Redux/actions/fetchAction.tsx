import { Dispatch } from "redux";

export const FETCH_SUCCESS: string = "FETCH_SUCCESS";
export const FETCH_REQUEST: string = "FETCH_REQUEST";
export const FETCH_ERROR: string = "FETCH_ERROR";

export interface QuoteInterface {
  id: number;
  quote: string;
  author: string;
}

export interface FetchRequestInterface {
  type: typeof FETCH_REQUEST;
}

export interface FetchSuccessInterface {
  type: typeof FETCH_SUCCESS;
  payload: QuoteInterface[]; 
}

export interface FetchErrorInterface {
  type: typeof FETCH_ERROR;
  payload: string;
}

export type ActionType = FetchRequestInterface | FetchSuccessInterface | FetchErrorInterface;

export const fetchQuotesAction= async (dispatch: Dispatch<ActionType>) => {
  dispatch({ type: FETCH_REQUEST });

  try {
    const res = await fetch("https://dummyjson.com/quotes/");

    if (!res.ok) throw new Error("Error in fetch process");

    const data = await res.json();
    dispatch({ type: FETCH_SUCCESS, payload: data.quotes }); 
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: (error as Error).message });
  }
};
