import ProductTable from "../productTable";

export default function ManageItemsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 p-4 md:p-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Manage Inventory
        </h1>
        <p className="text-slate-500 font-medium">
          Update, delete, and track your store products.
        </p>
      </div>

      {/* API Data Table for Products */}
      <ProductTable />
    </div>
  );
}
