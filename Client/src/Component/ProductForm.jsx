import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/Create', { productName, quantity, price })
      .then((result) => {
        console.log(result);
        toast.success('Product added successfully! 🎉');
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6"
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Add New Product
      </h2>

      <div>
        <label htmlFor="productName" className="block text-lg font-medium text-gray-600 mb-2">
          Product Name
        </label>
        <input
          id="productName"
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
      </div>

      <div>
        <label htmlFor="quantity" className="block text-lg font-medium text-gray-600 mb-2">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-lg font-medium text-gray-600 mb-2">
          Price ($)
        </label>
        <input
          id="price"
          type="number"
          step="0.01"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
