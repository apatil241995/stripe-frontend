import { createSlice } from "@reduxjs/toolkit";
import * as action from "./actions"

const initialState = { product: [] }

const productReducer = createSlice({
  name: "productReducer",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(action.Get_Product.fulfilled, (state, payload) => {
      state.product = payload.payload
    })
  }
})

export default productReducer.reducer