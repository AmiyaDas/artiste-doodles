import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { db } from "../../utils/firebase";
import { onValue, ref, remove } from "firebase/database";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";
import HomeCarousel from "../HomeCarousel";
import "./ProductDetails.scss"
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    let { productId } = useParams();
    const storage = getStorage();
    const navigateTo = useNavigate();

    const [productDetails, setProductDetails] = useState({});
    const [imagesList, setImagesList] = useState([]);
    let discount = 0;


    useEffect(() => {
        try {
            setProductDetails({});
            const query = ref(db, "products/" + productId);
            return onValue(query, async (snapshot) => {
                const data = snapshot.val();
                if (snapshot.exists()) {
                    discount = 100 - Math.round(data.price * 100 / data.mrp);

                    const images = data.images.split(",");
                    let imageUrls = [];
                    for (const imageName of images) {
                        const imageUrl = await getDownloadURL(storageRef(storage, 'products/' + imageName));
                        imageUrls.push(imageUrl);
                    }
                    setImagesList(imageUrls);
                    setProductDetails(data);
                }
            });
        } catch (error) {
            console.log("Unknown error occured!:productDetails");
            console.log(error);
            alert("Unknown error occured!:productDetails");
        }

    }, []);

    const handleProductDelete = async () => {
        if (confirm("Do you want to delete this product?")) {
            const query = ref(db, "products/" + productId);
            await remove(query);
            navigateTo("/admin/products");
        }
    }


    return (
        <div>
            <div className="productContainer">
                <div className="imageContainer">
                    <HomeCarousel imageUrls={imagesList} />
                </div>
                <div className="detailsContainer">
                    <div className="titleSection">
                        <div className="title">{productDetails.title}</div>
                        <div className="description">{productDetails.description}</div>
                        <div >
                            <span className='mrp'>{"Rs." + productDetails.mrp}</span>
                            <span className='discount'>{"(" + discount + "% OFF)"}</span>
                        </div>
                        <div className='price'>
                            {"Rs." + productDetails.price}
                        </div>
                    </div>
                    <div className="detailsSection">
                        <div className="detailsHeader">
                            Product Details:
                        </div>
                        {
                            Object.keys(productDetails).map(key => {
                                return (
                                    <div>{key}: <b>{productDetails[key]}</b></div>
                                )
                            })
                        }
                    </div>
                    <div className="actionButtonsSection">
                        <button className="activeButton" onClick={handleProductDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails