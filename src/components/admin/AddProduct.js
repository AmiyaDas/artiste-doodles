import React, { useState, useEffect } from 'react';
import { db } from "../../utils/firebase";
import { set, ref as refDatabase, onValue } from "firebase/database";
import { uploadImage } from "../../utils/imageHandler";
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
  const navigateTo = useNavigate();
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    id: "",
    images: "",
    keywords: "",
    mrp: "",
    price: "",
    quantity: "",
    dateAdded: "",
    category: "",
    subCategory: "",
    details: {}
  });

  useEffect(() => {
    const query = refDatabase(db, "categories");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        setCategories(Object.values(data));
      }
    });
  }, []);

  const categoryOptions = (
    <datalist id="categoriesList">
      {categories.map((category) => {
        return <option key={category.key} value={category.value} />
      })}
    </datalist>
  )
  const subCategoryOptions = (
    <datalist id="subCategoriesList">
      {subCategories.map((subCategory) => {
        return <option key={subCategory.key} value={subCategory.value} />
      })}
    </datalist>
  )

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempProd = {
      ...product,
      dateAdded: new Date().getTime()
    }
    setProduct(tempProd);
    // check and add category & subCategories
    addProductToDB(tempProd);
    console.log(tempProd);
    //detaile adder
  };

  const addProductToDB = async (product) => {
    const query = refDatabase(db, "products/" + product.id);
    const savedData = await set(query, product);
    console.log(savedData);

  }

  const handleChange = (event) => {
    setProduct((prevalue) => {
      return {
        ...prevalue,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleCategoryChange = (event) => {
    const selectedCategoryKey = event.target.value.replace(/ /g, '').toUpperCase();
    setProduct({
      ...product,
      category: selectedCategoryKey
    });
    const selectedCategory = categories.find(category => category.key === selectedCategoryKey);
    setSubCategories(Object.values(selectedCategory.subCategories));
  }

  const handleSubCategoryChange = (event) => {
    const selectedSubCategory = event.target.value.replace(/ /g, '').toUpperCase();
    setProduct({
      ...product,
      subCategory: selectedSubCategory
    });
  }

  const handleImageUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const fileName = new Date().getTime() + file?.name?.match(/\.[0-9a-z]+$/i)[0];
    uploadImage("products", fileName, file);
    // option to add more images
  }

  const handleCancel = () => {
    setProduct({
      title: "",
      description: "",
      id: "",
      images: "",
      keywords: "",
      mrp: "",
      price: "",
      quantity: "",
      dateAdded: "",
      category: "",
      subCategory: "",
      details: {}
    });
    navigateTo(-1);
  }



  return (
    <div >
      <form className='addProductForm' onSubmit={handleSubmit}>
        <input required placeholder='Title' name="title" value={product.title} onChange={handleChange}></input>
        <input placeholder='Description' name="description" value={product.description} onChange={handleChange}></input>
        <input required placeholder='ID' name="id" value={product.id} onChange={handleChange}></input>
        <input list="categoriesList" name="category" placeholder='Select Category' onChange={handleCategoryChange}></input>
        {categoryOptions}
        <input list="subCategoriesList" name="subCategory" placeholder='Select Sub-Category' onChange={handleSubCategoryChange}></input>
        {subCategoryOptions}
        <input placeholder='Keywords:separated by comma' name="keywords" value={product.keywords} onChange={handleChange}></input>
        <input required placeholder='MRP' type="number" name="mrp" value={product.mrp} onChange={handleChange}></input>
        <input required placeholder='Price' type="number" name="price" value={product.price} onChange={handleChange}></input>
        <input required placeholder='Quantity' type="number" name="quantity" value={product.quantity} onChange={handleChange}></input>
        {/* <div className='productDetails'>

        </div> */}
        <div className='productImages'>
          Select Imgaes :
          <input type='file' accept="image/*" onChange={handleImageUpload} />
          <div>

          </div>
        </div>
        <button className='activeButton' type='submit'>Save</button>
        <button className='neutralButton' onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default AddProduct