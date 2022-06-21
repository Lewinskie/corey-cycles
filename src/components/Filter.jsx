// import React, { useState } from "react";
// import { Container, Item } from "../containers/Grids";
// import { InputLabel, MenuItem, Select, Typography } from "@mui/material";
// import "../pages/shop.css";
// import { useSelector } from "react-redux";

// const Filter = (props) => {
//   //filter unique categories
//   // const uniqueCategories = [...new Set(props.categories)];
//   // console.log(uniqueCategories);
//   // const [cat, setCategory] = useState("");
//   // const handleChange = (e) => {
//   //   setCategory(e.target.value);
//   // };
//   // console.log(cat);
//   const state = useSelector((state) => state.products);
//   // console.log(state);

//   return (
//     <Container className="container">
//       {state.map((product) => (
//         <Item className="item itemAfter" backgroundUrl={product.image}>
//           <div className="border">
//             <Typography className="h2">{product.name}</Typography>
//           </div>
//         </Item>
//       ))}
//     </Container>
//     // <Container>
//     //   {/* {uniqueCategories && (
//     //     <Item>
//     //       <InputLabel>Filter products by Category</InputLabel>
//     //       <Select value={cat} onChange={handleChange}>
//     //         {uniqueCategories.map((item, index) => (
//     //           <MenuItem key={index}>{item}</MenuItem>
//     //         ))}
//     //       </Select>
//     //     </Item>
//     //   )} */}
//     //
//     // </Container>
//     // <div class="container">
//     //   <div class="card card0">
//     //     <div class="border">
//     //       <h2>Al Pacino</h2>
//     //       <div class="icons">
//     //         <i class="fa fa-codepen" aria-hidden="true"></i>
//     //         <i class="fa fa-instagram" aria-hidden="true"></i>
//     //         <i class="fa fa-dribbble" aria-hidden="true"></i>
//     //         <i class="fa fa-twitter" aria-hidden="true"></i>
//     //         <i class="fa fa-facebook" aria-hidden="true"></i>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default Filter;
