import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; // for better routing

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get("http://localhost:3001/Product")
      .then(result => setProducts(result.data))
      .catch(err => {
        console.log(err);
        toast.error('Failed to fetch products ❌');
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteProduct/${id}`)
      .then(res => {
        console.log(res);
        toast.success('Product deleted successfully! 🎯');
        fetchProducts(); // fetch updated list instead of reloading
      })
      .catch(error => {
        console.log(error);
        toast.error('Failed to delete product ❌');
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Product List</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{product.productName}</h3>
                <p className="text-gray-600 mt-2">Quantity: {product.quantity}</p>
                <p className="text-gray-600 mt-2">Price: ₹{product.price}</p>
              </div>
              <div className="flex justify-between items-center bg-gray-100 p-4">
                <Link
                  to={`/update/${product._id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
