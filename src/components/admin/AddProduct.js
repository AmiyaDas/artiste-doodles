import React, { useState } from 'react'



const AddProduct = () => {

  //fetch and show categories & sub categories

  const [product, setProduct] = useState({
    title: "",
    description: "",
    id: "",
    imageName: "",
    keywords: "",
    mrp: "",
    price: "",
    quantity: "",
    dateAdded: "",
    category: "",
    subCategory: "",
    details: {}
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempProd = {
      ...product,
      dateAdded: new Date().getTime()
    }
    setProduct(tempProd);
    console.log(tempProd);
    //image uploader
    //detaile adder
  };

  const handleChange = (event) => {
    setProduct((prevalue) => {
      return {
        ...prevalue,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleImageUpload = (event) => {

  }

  const handleCancel = () => {
    setProduct({
      title: "",
      description: "",
      id: "",
      imageName: "",
      keywords: "",
      mrp: "",
      price: "",
      quantity: "",
      dateAdded: "",
      category: "",
      subCategory: "",
      details: {}
    })
  }
  return (
    <div >
      <form className='addProductForm' onSubmit={handleSubmit}>
        <input placeholder='Title' name="title" value={product.title} onChange={handleChange}></input>
        <input placeholder='Description' name="description" value={product.description} onChange={handleChange}></input>
        <input placeholder='ID' name="id" value={product.id} onChange={handleChange}></input>
        <input placeholder='Keywords:separated by comma' name="keywords" value={product.keywords} onChange={handleChange}></input>
        <input placeholder='MRP' type="number" name="mrp" value={product.mrp} onChange={handleChange}></input>
        <input placeholder='Price' type="number" name="price" value={product.price} onChange={handleChange}></input>
        <input placeholder='Quantity' type="number" name="quantity" value={product.quantity} onChange={handleChange}></input>
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