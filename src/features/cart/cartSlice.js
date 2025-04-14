import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage
const loadCart = () => {
  try {
    const data = localStorage.getItem('cartItems');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Error loading from localStorage:', err);
    return [];
  }
};

// Save to localStorage
const saveCart = (cartItems) => {
  try {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  } catch (err) {
    console.error('Error saving to localStorage:', err);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: loadCart(),
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem=state.cartItems.find(
        item=>item.id===action.payload.id
      )
      if(existingItem){
        existingItem.quantity+=1;
      } else{
        state.cartItems.push({...action.payload,quantity:1});
      }

      saveCart(state.cartItems)
    },
    increaseQuantity:(state,action)=>{
      const item=state.cartItems.find(item=>item.id===action.payload);
      if(item){
        item.quantity+=1;
      }
      saveCart(state.cartItems)

    },
    decreaseQuantity:(state,action)=>{
      const item=state.cartItems.find(item=>item.id===action.payload);
      if(item){
        item.quantity-=1;
      }
      saveCart(state.cartItems)

    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      saveCart(state.cartItems);
    },
  },
});
export const { addToCart,increaseQuantity, decreaseQuantity,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
