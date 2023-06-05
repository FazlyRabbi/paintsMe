import { API_TOKEN, API_URL } from "@/config/index";
import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {

  const [sidebars, setSidbars] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getSidebar();
    getProducts();
  }, []);

  const getSidebar = async () => {
    const res = await fetch(`${API_URL}/api/sidebars?populate=*`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: API_TOKEN,
      },
    });

    const sidebar = await res.json();
    if(!res.ok) return;
    setSidbars(sidebar?.data)
   
  };

  const getProducts = async ()=>{

    const res = await fetch(`${API_URL}/api/products?populate=*`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: API_TOKEN,
      },
    });

    const products = await res.json();

    if(!res.ok) return;

    setProducts(products?.data)

  }

  return (
    <SidebarContext.Provider
      value={{
        sidebars,
        products
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
