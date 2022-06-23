import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const cartItem = {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        price: action.payload.price,
      };
      //check if the item is already in the cart
      const itemInCart = state.find((item) => item.id === cartItem.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        cartItem.quantity = 1;
        state.push(cartItem);
      }
    },
    increaseQuantity: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload);
      itemInCart.quantity += 1;

      // New price
      const newPrice = Number(itemInCart.price * itemInCart.quantity);
      itemInCart.price = newPrice;
    },
    decreaseQuantity: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload);
      itemInCart.quantity -= 1;
      // New price

      if (itemInCart.quantity === 0) {
        state.splice(state.indexOf(itemInCart), 1);
      }
    },
  },
});
export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
