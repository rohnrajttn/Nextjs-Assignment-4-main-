import { FETCH_SUCCESS, FETCH_ERROR, FETCH_REQUEST } from "@/actions/fetchAction";
import { ActionType, QuoteInterface } from "@/actions/fetchAction";
import { FetchSuccessInterface, FetchErrorInterface } from "@/actions/fetchAction";

interface FetchState {
    loading: boolean;
    quotes: QuoteInterface[];
    error: string | null;
}

const initialState: FetchState = {
    loading: false,
    quotes: [],
    error: null,
};

export const fetchReducer = (state: FetchState = initialState, action: ActionType): FetchState => {
    switch (action.type) {
        case FETCH_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                quotes: (action as FetchSuccessInterface).payload,
                error: null
            };

        case FETCH_ERROR:
            return { ...state, loading: false, error: (action as FetchErrorInterface).payload };

        default:
            return state;
    }
};
