import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Nav, Logo, Box, Input, Select } from "./styles";
const Navbar = () => {
  const initialValue = {
    id: 0,
    name: "select a category",
  };
  let history = useHistory();
  const [categories, setcategories] = useState([initialValue]);
  useEffect(() => {
    fetch("https://server-shopping-cart.herokuapp.com/category")
      .then((response) => response.json())
      .then((data) => {
        setcategories(data);
      });
  }, []);
  const handlingKeyup = (e) => {
    console.log(e.target.value)
    e.target.value
      ? history.push({
          pathname: "/product",
          search: `?search=${e.target.value}`,
        })
      : history.push({ pathname: "/" });
  };
  return (
    <Nav>
      <Logo>Retail</Logo>
      <Input
        type="text"
        placeholder="Buscar productos por nombre ..."
        onKeyUp={handlingKeyup}
      />
      <Select name="cars" id="category-list">
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </Select>
      <Box className="cart-detail">
        <p className="quantity-cart"></p>
        <span className="cart-btn margin">
          <i className="fas fa-shopping-cart"></i>
        </span>
      </Box>
    </Nav>
  );
};

export default Navbar;
