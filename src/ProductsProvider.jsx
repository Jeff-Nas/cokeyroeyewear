import { createContext, useContext } from "react";
import catalogo from "./constants/catalogo.json";

export const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const displayed = catalogo.slice(0, 9);

  return (
    <ProductsContext.Provider value={{ displayed }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  return useContext(ProductsContext);
};
