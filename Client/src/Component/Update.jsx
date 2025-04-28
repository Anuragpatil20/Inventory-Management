import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Update() {
  const { id } = useParams();
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/getproduct/${id}`)
      .then(result => {
        console.log(result);
        setProductName(result.data.productName);
        setQuantity(result.data.quantity);
        setPrice(result.data.price);
      })
      .catch(err => console.log(err));
  }, [id]); // Add id in dependency array

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updateProduct/${id}`, { productName, quantity, price })
      .then(res => {
        console.log(res);
        toast.success('Product updated successfully! 🎉');
        navigate('/products');
      })
      .catch(error => {
        console.log(error);
        toast.error('Failed to update product ❌');
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleUpdate}
        className="max-w-lg w-full p-8 bg-white shadow-xl rounded-lg space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800">Update Product</h2>

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
            Price (₹)
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
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}

export default Update;
