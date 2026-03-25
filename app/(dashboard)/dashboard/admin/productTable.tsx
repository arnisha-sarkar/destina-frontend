"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Package,
  Tag,
  Plus,
} from "lucide-react";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  stock?: number;
  image?: string;
}

const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // এপিআই থেকে প্রডাক্ট ডাটা ফেচ করা
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/items");
        const resData = await response.json();
        // এপিআই যদি { data: [...] } ফরম্যাটে থাকে
        setProducts(resData.data || resData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filtering Logic (নাম বা ক্যাটাগরি দিয়ে সার্চ)
  const filteredProducts = products.filter((product) => {
    // প্রডাক্টের নাম বা ক্যাটাগরি না থাকলে আমরা সেটিকে খালি স্ট্রিং ধরে নেব
    const productName = product?.name?.toLowerCase() || "";
    const productCategory = product?.category?.toLowerCase() || "";
    const searchInput = searchTerm.toLowerCase();

    return (
      productName.includes(searchInput) || productCategory.includes(searchInput)
    );
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-20 space-y-4">
        <Loader2 className="animate-spin text-orange-600" size={40} />
        <p className="text-slate-500 font-medium">Loading inventory...</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      {/* Search & Actions */}
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none text-sm transition-all"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-2xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-orange-100">
          <Plus size={18} /> Add New Item
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 text-xs uppercase font-bold tracking-widest">
              <th className="px-6 py-4">Product Info</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-slate-50/30 transition-all group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <Package className="text-slate-400" size={20} />
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-400">
                          ID: {item._id.slice(-6).toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300">
                      <Tag size={14} className="text-orange-500" />{" "}
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 dark:text-white">
                      ${item.price}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="text-xs font-bold text-blue-600 hover:underline">
                        Edit
                      </button>
                      <button className="text-xs font-bold text-red-600 hover:underline">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-20 text-center text-slate-400 italic"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <p className="text-xs text-slate-500 font-medium">
          Page {currentPage} of {totalPages || 1}
        </p>
        <div className="flex gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="p-2 border rounded-xl hover:bg-slate-50 disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="p-2 border rounded-xl hover:bg-slate-50 disabled:opacity-30 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
