// import { Button } from '@mui/material';
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";

import { useRouter, usePathname } from "next/navigation";

const links = [
  {
    endpoint: "live",
    name: "Live",
  },
  { endpoint: "login", name: "Login" },
  {
    endpoint: "signup",
    name: "Signup",
  },
];

const NavLink = () => {
  const router = useRouter();
  const currentPage = usePathname();
  return (
    <div className="capitalize m-2">
      {links.map((category, i) => {
        if (category.name === "Tüm Ürünler") {
          return (
            <Link
              key={i}
              title={category.name}
              href={"/products/"}
              className={`text-xs lg:text-base capitalize  ${
                currentPage === "/products" ? "text-green-500" : ""
              } `}
            >
              <span className="hover:text-green-500 capitalize ">
                {category.name}
              </span>
            </Link>
          );
        } else
          return (
            <Link
              key={i}
              title={category.name}
              href={category.endpoint}
              className={`text-xs lg:text-base pr-8 capitalize 
              ${
                currentPage === `/${category.endpoint}` ? "text-green-500" : ""
              }`}
            >
              <span className="hover:text-green-500 capitalize transition-colors">
                {category.name}
              </span>
            </Link>
          );
      })}
    </div>
  );
};

export default NavLink;
