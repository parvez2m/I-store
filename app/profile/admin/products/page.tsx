import AdminProductList from "@/components/Amin/AdminProductList";
import React from "react";
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    price: 10.99,
    image: "https://via.placeholder.com/150",
    category: "Category 1",
    inventory: 10,
    status: "Active",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for product 2",
    price: 15.99,
    image: "https://via.placeholder.com/150",
    category: "Category 2",
    inventory: 5,
    status: "Active",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for product 3",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    category: "Category 1",
    inventory: 0,
    status: "Inactive",
  },
];

const page = () => {
  return (
    <div>
      <AdminProductList products={products} />
    </div>
  );
};

export default page;
