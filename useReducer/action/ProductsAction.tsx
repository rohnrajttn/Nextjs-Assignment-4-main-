import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS } from "@/Reducer/ProductReducer";

export const handleProductsActionGet = (dispatch) => {
  dispatch({ type: GET_PRODUCTS });
};

export const handleProductsActionAdd = (dispatch, payload) => {
  dispatch({ type: ADD_PRODUCT, payload });
};

export const handleProductsActionDelete = (dispatch, payload) => {
  dispatch({ type: DELETE_PRODUCT, payload });
};
