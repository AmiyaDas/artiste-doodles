import React, { useEffect, useState } from "react";
import Header from '../Header'
import ProductCard from './ProductCard'
import category1 from '../../assets/category1.png'
import { db } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";

const ProductList = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        const query = ref(db, "products");
        return onValue(query, (snapshot) => {
            const data = snapshot.val();

            if (snapshot.exists()) {
                
                console.log(data);
                Object.values(data).map((product) => {
                    setProducts((products) => [...products, product]);
                });
            }
        });
    }, []);

    return (
        <div>
            <Header />
            <div className='filterHeader'>
                <button className="actionButton"/>
            </div>
            <div className='productsContainer'>
                <ProductCard image={category1} id="123" title="test prod" price="100" mrp="150" />

            </div>
            <div>
                {products.map((product, index) => (
                    <div key={index} >{product.title}</div>
                ))}
            </div>
        </div>
    )
}

export default ProductList