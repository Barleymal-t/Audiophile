import { Product } from "@/models/product";
import productsData from "@/lib/data/data.json";
import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
  products: productsData
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers:{}
})

export default productSlice.reducer;