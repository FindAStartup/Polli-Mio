"use client";

import { useEffect, useState } from "react";
import { uploadImage } from "@/lib/uploadImage";
import Navbar from "./Navbar";

export default function AdminProductForm() {
  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    description: "",
    image: null,
    image_url: "",
  });
  const image = {
    default: '/assets/placeholder.png'
  }
  const [preview, setPreview] = useState("");


  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data.products || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

 const handleChange = (e) => {
  const { name, value, files } = e.target;

  if (name === "image") {
    const file = files[0];
    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  } else {
    setForm({ ...form, [name]: value });
  }
};


const resetForm = () => {
  setForm({
    id: null,
    name: "",
    price: "",
    description: "",
    image: null,
    image_url: "",
  });
  setPreview("");
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = form.image_url;

    if (form.image) {
      imageUrl = await uploadImage(form.image);
    }

    const payload = {
      name: form.name,
      price: form.price,
      description: form.description,
      image_url: imageUrl,
    };

    if (form.id) {
      await fetch(`/api/products/${form.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    resetForm();

    alert(`Product ${form.id ? "updated" : "added"} successfully!`);

    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: null,
      image_url: product.image_url,
    });
      setPreview("");
  };

  const handleDelete = async (id) => {
    window.confirm("Are you sure you want to delete this product?") &&
    await fetch(`/api/products/${id}`, { method: "DELETE" });

    fetchProducts();

  };

  return (
    <>
        <Navbar/>

    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 mb-12 border border-slate-200"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            {form.id ? "Edit Product" : "Add New Product"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="col-span-1 border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              className="col-span-1 border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6"
            rows="3"
            required
          />

          <div className="mt-6">
            <input
              name="image"
              type="file"
              onChange={handleChange}
              className="w-full border-2 border-dashed border-slate-300 p-4 rounded-lg cursor-pointer"
            />
          </div>

          <img
                src={preview || form.image_url || image.default}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg border-2 border-slate-300 mt-6"
                />


          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            {form.id ? "Update Product" : "Add Product"}
          </button>

          {form.id && (
                    <button
                    type="button"
                    onClick={resetForm}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                    Cancel
                    </button>
                )}

          
        </form>

        {/* Products Grid Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Products</h2>

          {products.length === 0 ? (
            <p className="text-gray-500 text-center py-12">No products added yet.</p>
          ) : (
            // <CHANGE> Changed from space-y-4 div to responsive grid with 3-4 columns
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Product Image */}
                  <div className="w-full h-48 bg-slate-100 overflow-hidden">
                    <img
                      src={p?.image_url ? p.image_url : image.default}
                      alt={p.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <p className="font-bold text-slate-800 text-lg truncate">{p.name}</p>
                    <p className="text-slate-600 text-sm mt-2 line-clamp-2">{p.description}</p>
                    <p className="text-blue-600 font-bold text-lg mt-3">₹{p.price}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 p-4 border-t border-slate-200">
                    <button
                      onClick={() => handleEdit(p)}
                      className="flex-1 px-3 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors text-sm"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(p.id)}
                      className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
  

}




