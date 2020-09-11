export const initialState = {
  basket: [],
  user: null,
};
export const getTotalPrice = (basket) =>
  basket?.reduce((price, item) => price + item.price, 0);

export const getTotalItems = (basket) =>
  basket?.reduce((total, item) => total + item.number, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      /* let newbas = [...state.basket];
      if (state.basket.length == 0) {
        newbas = [...state.basket, action.item];
      } else {
        newbas.map((item) => {
          if (action.item.id === item.id) {
            item.number = item.number + 1;

            console.log(item);
          } else {
            newbas = [...newbas, action.item];
            console.log("else" + newbas);
          }
        });
      }*/
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("I cant remove the Item");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT":
      return {
        basket: [],
        user: null,
      };
    default:
      return state;
  }
};
