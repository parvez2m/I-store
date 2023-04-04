"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navItem = [
  { name: "User List", id: 1, url: "/profile/admin/users" },
  { name: "Orders", id: 1, url: "/profile/admin/orders" },

  { name: "Prduct List", id: 2, url: "/profile/admin/products" },
  { name: "Add Product", id: 2, url: "/profile/admin/addproducts" },
];

const AdminNav = () => {
  const path = usePathname();
  return (
    <ul className="flex flex-row  mx-1 lg:[&>*]:mx-5 text-sm lg:text-lg">
      {navItem.map((item) => (
        <li
          key={item.name}
          className={`${
            item.url === path ? "text-red-500" : ""
          }px-2 uppercase whitespace-nowrap hover:text-slate-300 cursor-pointer`}
        >
          <Link
            href={item.url}
            className={`${item.url === path ? "font-bold border-b" : ""}`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AdminNav;
