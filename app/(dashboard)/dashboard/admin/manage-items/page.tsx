// import ProductTable from "../productTable";

// export default function ManageItemsPage() {
//   return (
//     <div className="max-w-7xl mx-auto space-y-6 p-4 md:p-8">
//       <div>
//         <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
//           Manage Inventory
//         </h1>
//         <p className="text-slate-500 font-medium">
//           Update, delete, and track your store products.
//         </p>
//       </div>

//       {/* API Data Table for Products */}
//       <ProductTable />
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Plus,
  Edit3,
  Trash2,
  MapPin,
  DollarSign,
  Image as ImageIcon,
  Search,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ManageProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // আপনার এপিআই এন্ডপয়েন্ট: GET /api/v1/items
        const response = await axios.get("http://localhost:5000/api/v1/items");
        setProducts(response.data.data || response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-[#003B73]">
              Manage Packages
            </h1>
            <p className="text-gray-500">
              Add, edit or remove travel destinations from your site.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-100">
            <Plus size={20} /> Add New Package
          </Button>
        </div>

        {/* --- Table Section --- */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-wider">
                    Package Details
                  </th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-wider">
                    Location
                  </th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-wider">
                    Price
                  </th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-wider">
                    Category
                  </th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {products.map((item: any) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-50/30 transition-colors"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="font-bold text-gray-900 dark:text-white line-clamp-1">
                          {item.title}
                        </p>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                        <MapPin size={14} className="text-blue-500" />{" "}
                        {item.location}
                      </div>
                    </td>
                    <td className="p-6">
                      <span className="font-black text-[#003B73]">
                        ${item.price}
                      </span>
                    </td>
                    <td className="p-6">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-wider border border-blue-100">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          className="h-10 w-10 p-0 rounded-xl text-blue-500 hover:bg-blue-50"
                        >
                          <Edit3 size={18} />
                        </Button>
                        <Button
                          variant="ghost"
                          className="h-10 w-10 p-0 rounded-xl text-red-500 hover:bg-red-50"
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductsPage;
