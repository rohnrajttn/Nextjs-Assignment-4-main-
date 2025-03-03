import dummyProductData from "@/data/dummyProducts.json";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";

const initialState = {
  items: dummyProductData.products,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case GET_PRODUCTS:
      return {
        ...state,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((product) => product.id !== action.payload.id),
      };

    default:
      return state;
  }
};
