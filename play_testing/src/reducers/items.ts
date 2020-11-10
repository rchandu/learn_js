import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum ItemCategory {
  Books,
  Groceries,
  TV,
  Computers,
}

interface IItemData {
  id: string;
  name: string;
  category: ItemCategory;
}

const initialState = {
  addedToCart: [] as IItemData[],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IItemData>) {
      state.addedToCart.push(action.payload);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.addedToCart = state.addedToCart.filter((x) => x.id !== action.payload);
    },
    clearCart(state) {
      state.addedToCart = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = itemSlice.actions;
export default itemSlice.reducer;
