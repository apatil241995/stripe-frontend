import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


// created product actions here

export const Get_Product = createAsyncThunk('get/product', async () => {
  const response = await axios.get("http://127.0.0.1:8000/ProductDetails").catch(err => console.log(err))
  return response.data
})
