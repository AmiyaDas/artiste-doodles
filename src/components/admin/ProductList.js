import React, { useEffect, useState } from "react";
import Header from '../Header'
import ProductCard from './ProductCard'
import { db } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";
import "./ProductList.scss";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigateTo = useNavigate();
    const storage = getStorage();

    useEffect(() => {
        setProducts([]);
        const query = ref(db, "products");
        return onValue(query, (snapshot) => {
            const data = snapshot.val();

            if (snapshot.exists()) {
                Object.values(data).map(async (product) => {
                    const images = product.images.split(",");
                    let imageUrls = [];
                    for (const imageName of images) {
                        const imageUrl = await getDownloadURL(storageRef(storage, 'products/' + imageName));
                        imageUrls.push(imageUrl);
                    }

                    product.images = imageUrls;
                    setProducts((products) => [...products, product]);
                });
            }
        });
    }, []);

    const navToAddPage = () => {
        navigateTo("/admin/addProduct")
    }

    return (
        <div>
            <Header />
            <div className='filterHeader'>
                <button className="activeButton" onClick={navToAddPage}>Add Product</button>
            </div>
            <div className='productsContainer'>
                {products.map((product) => (
                    // pass list of images
                    <ProductCard key={product.id} images={product.images} id={product.id} title={product.title} price={product.price} mrp={product.mrp} />
                ))}

            </div>
        </div>
    )
}

export default ProductList