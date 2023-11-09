import React, { useReducer, createContext } from "react";

const initialState = {
  selectedItems: [],
  totalItems: 0,
  totalPrice: 0,
  checkout: false,
};
const totalProducts = (arrayOfItems) => {
  const totalItems = arrayOfItems.reduce(
    (currentQuantity, product) => currentQuantity + product.quantity,
    0
  );
  const totalPrice = arrayOfItems
    .reduce(
      (currentPrice, product) =>
        currentPrice + product.price * product.quantity,
      0
    )
    .toFixed(2);
  return {
    totalItems: totalItems,
    totalPrice: totalPrice,
  };
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems = [
          ...state.selectedItems,
          { ...action.payload, quantity: 1 },
        ];
      }
      return {
        ...state,
        ...totalProducts(state.selectedItems),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = [...newSelectedItems];
      return {
        ...state,
        ...totalProducts(state.selectedItems),
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...totalProducts(state.selectedItems),
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...totalProducts(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        totalItems: 0,
        totalPrice: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        totalItems: 0,
        totalPrice: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const cardContext = createContext();

const AddItemContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cardContext.Provider value={{ state, dispatch }}>
      {props.children}
    </cardContext.Provider>
  );
};

export default AddItemContextProvider;
