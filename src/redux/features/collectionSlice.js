import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};
const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExits = state.items.find(
        (item) => item.id == action.payload.id
      );
      if (!alreadyExits) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id );
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addToast: () => {
      toast.success("Added To Colletion", {
        position: "top-center",
      });
    },
    removeToast: () => {
      toast.error("Remove from Colletion", {
        position: "top-center",
      });
    },
    
    clearToast: () => {
      toast.warning("Clear Collection", {
        position: "top-center",
      });
    },
  },
});
export const {
  addCollection,
  removeCollection,
  clearCollection,
  addToast,
  removeToast,
  clearToast
} = collectionSlice.actions;
export default collectionSlice.reducer;
