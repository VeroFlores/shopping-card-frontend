import React,{useEffect, useState} from 'react'
import ProductCard from './../../components/ProductCard/ProductCard';
import {Table} from './styles'
const Home = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
    fetch('https://server-shopping-cart.herokuapp.com/allProducts')
    .then(response => response.json())
    .then(data=>{
        setProducts(data);
    });
    //    return () => {
    //        cleanup
    //    }
   }, [])
    return (
        <Table >
            {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
            ))}

        </Table>
    )
}

export default Home
