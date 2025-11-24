import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchProducts,
  removeProduct,
  selectError,
  selectLoading,
  selectFilteredProducts,
} from "./productsSlice";

export const ProductsList = () => {
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState("all");
  const products = useAppSelector(selectFilteredProducts(category));
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(removeProduct(id));
  };

  const categories = [
    "all",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        Select category:
        <select
          className="ml-2 border px-3 py-2 rounded shadow"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-10">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {error && <p className="text-red-600 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <img
              src={product.image}
              className="h-40 w-full object-contain mb-2"
            />
            <h3 className="font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="font-bold text-green-700">${product.price}</p>
            <button
              onClick={() => handleDelete(product.id)}
              className="mt-auto bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
