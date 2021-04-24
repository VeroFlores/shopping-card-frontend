import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Table } from "./style";
const FilteredProducts = () => {
  const [filteredProducts, setfilteredProducts] = useState([]);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const searchProduct = query.get("search");
  useEffect(() => {
    fetch(
      `https://server-shopping-cart.herokuapp.com/product?search=${searchProduct}`
    )
      .then((response) => response.json())
      .then((data) => {
        setfilteredProducts(data);
      });
  }, [searchProduct]);
  return (
    <Table>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </Table>
  );
};

export default FilteredProducts;
