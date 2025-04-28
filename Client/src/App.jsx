import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';  // Import routing components
import ProductForm from './Component/ProductForm';  // Import your components
import ProductList from './Component/ProductList';
import Update from './Component/Update';
import { ToastContainer } from 'react-toastify';  // Import Toast for notifications
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify styles

function App() {
  const [menuOpen, setMenuOpen] = useState(false);  // Track mobile menu state

  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <div className="bg-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Inventory App</h1>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300 transition">Add Product</Link>
            <Link to="/products" className="text-white hover:text-gray-300 transition">Product List</Link>
          </div>
          {/* Mobile menu (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}  // Toggle mobile menu
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 text-white p-4 space-y-4">
          <Link to="/" className="block hover:text-gray-300">Add Product</Link>
          <Link to="/products" className="block hover:text-gray-300">Product List</Link>
        </div>
      )}

      {/* Main Content */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<ProductForm />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>

      {/* Toast Notifications */}
      <ToastContainer 
        position="top-center" 
        autoClose={3000}  // 3000 milliseconds = 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
