import React from "react";
import {Card,Box,Image,Button,Discount,TextPrice} from './styles'
const ProductCard = (props) => {
  const { product } = props;
  return (
    <Card >
        <Image src={product.url_image} aria-hidden alt="product image" />
      <Box>
        <h3 class="product-name color">{product.name}</h3>
        <Discount >
          <p class="product-price color">-{product.discount}%</p>
        </Discount>
        </Box>
          <TextPrice>${product.price}</TextPrice>
      <Button type="button" value="Add to cart" />
    </Card>
  );
};

export default ProductCard;
