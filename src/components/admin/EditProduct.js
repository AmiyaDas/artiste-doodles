import React, { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { set, ref as refDatabase, onValue } from "firebase/database";
import { uploadImage } from "../../utils/imageHandler";
import { useNavigate } from "react-router-dom";
import "./AdminStyle.scss";

const EditProduct = () => {
  const navigateTo = useNavigate();
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
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
    details: {},
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
        return <option key={category.key} value={category.value} />;
      })}
    </datalist>
  );
  const subCategoryOptions = (
    <datalist id="subCategoriesList">
      {subCategories.map((subCategory) => {
        return <option key={subCategory.key} value={subCategory.value} />;
      })}
    </datalist>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempProd = {
      ...product,
      dateAdded: new Date().getTime(),
    };
    setProduct(tempProd);
    checkAddCategory(tempProd.category, tempProd.subCategory);
    addProductToDB(tempProd);
    console.log(tempProd);
    //detaile adder
  };

  const checkAddCategory = async (category, subCategory) => {
    // check and add category & subCategories
    const categoryExist = categories.find((cat) => cat.key === category);
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].key === category) {
        categories[i].subCategories[categories[i].subCategories.length] = [
          ...categories[i].subCategories,
          { key: subCategory, value: subCategory },
        ];
        const query = refDatabase(db, "categories/" + i);
        await set(query, categories[i]);
        return;
      }
    }
    const newCategory = {
      key: category,
      value: category,
      subCategories: {
        0: {
          key: subCategory,
          value: subCategory,
        },
      },
    };

    const query = refDatabase(db, "categories/" + categories.length);
    await set(query, newCategory);
  };

  const addProductToDB = async (product) => {
    const query = refDatabase(db, "products/" + product.id);
    const savedData = await set(query, product);
    console.log("data saved", savedData);
  };

  const handleChange = (event) => {
    setProduct((prevalue) => {
      return {
        ...prevalue,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleCategoryChange = (event) => {
    try {
      setCategoryName(event.target.value);
      const selectedCategoryKey = event.target.value
        .replace(/ /g, "")
        .toUpperCase();
      setProduct({
        ...product,
        category: selectedCategoryKey,
      });
      const selectedCategory = categories.find(
        (category) => category.key === selectedCategoryKey
      );
      if (selectedCategory) {
        setSubCategories(Object.values(selectedCategory.subCategories));
      } else {
        setSubCategories([]);
      }
    } catch (error) {
      console.log("Unknown error occured!:AddProduct");
      console.log(error);
      alert("Unknown error occured!:AddProduct");
    }
  };

  const handleSubCategoryChange = (event) => {
    setSubCategoryName(event.target.name);
    const selectedSubCategory = event.target.value
      .replace(/ /g, "")
      .toUpperCase();
    setProduct({
      ...product,
      subCategory: selectedSubCategory,
    });
  };

  const handleImageUpload = (event) => {
    event.preventDefault();
    try {
      let imagesList = "";
      for (const file of event.target.files) {
        const fileName =
          new Date().getTime() + file?.name?.match(/\.[0-9a-z]+$/i)[0];
        uploadImage("products", fileName, file);
        imagesList = imagesList ? imagesList + "," + fileName : fileName;
      }
      setProduct({
        ...product,
        images: imagesList,
      });
    } catch (error) {
      console.log("Unknown error occured!:FileUpload");
      console.log(error);
      alert("Unknown error occured!:FileUpload");
    }

    // option to add more images
  };

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
      details: {},
    });
    navigateTo(-1);
  };

  return (
    <div>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <input
          required
          placeholder="Title"
          name="title"
          value={product.title}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
        ></input>
        <input
          required
          placeholder="ID"
          name="id"
          value={product.id}
          onChange={handleChange}
        ></input>
        <input
          list="categoriesList"
          name="category"
          placeholder="Select Category"
          onBlur={handleCategoryChange}
        ></input>
        {categoryOptions}
        <input
          list="subCategoriesList"
          name="subCategory"
          placeholder="Select Sub-Category"
          onBlur={handleSubCategoryChange}
        ></input>
        {subCategoryOptions}
        <input
          placeholder="Keywords:separated by comma"
          name="keywords"
          value={product.keywords}
          onChange={handleChange}
        ></input>
        <input
          required
          placeholder="MRP"
          type="number"
          name="mrp"
          value={product.mrp}
          onChange={handleChange}
        ></input>
        <input
          required
          placeholder="Price"
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        ></input>
        <input
          required
          placeholder="Quantity"
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
        ></input>
        {/* <div className='productDetails'>

        </div> */}
        <div className="productImages">
          Select Imgaes :
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            multiple
          />
          <div></div>
        </div>
        <button className="activeButton" type="submit">
          Save
        </button>
        <button className="neutralButton" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
