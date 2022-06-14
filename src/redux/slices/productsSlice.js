import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      name: "Cycle 1",
      image: "/photos/img_01.png",
      price: "$100",
      description: "This is a description of the product",
      quantity: 1,
      featured: true,
      category: "bike",
    },
    {
      id: 2,
      name: "Cycle 2",
      image: "/photos/img_01.png",
      price: "$200",
      description: "This is a description of the product",
      quantity: 1,
      featured: false,
      category: "bike",
    },
    {
      id: 3,
      name: "Cycle 3",
      image: "/photos/img_01.png",
      price: "$300",
      description: "This is a description of the product",
      quantity: 1,
      featured: false,
      category: "gloves",
    },
    {
      id: 4,
      name: "Cycle 4",
      image: "/photos/img_01.png",
      price: "$400",
      description: "This is a description of the product",
      quantity: 1,
      featured: false,
      category: "helmet",
    },
    {
      id: 5,
      name: "Cycle 5",
      image: "/photos/img_01.png",
      price: "$500",
      description: "This is a description of the product",
      quantity: 1,
      featured: true,
      category: "wheels",
    },
  ],
  reducers: {},
});

export default productsSlice.reducer;
