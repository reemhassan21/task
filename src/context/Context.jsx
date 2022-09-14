import axios from "axios";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();
const Context = (props) => {
  const { children } = props;
  const [Products, setProducts] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [productImgs, setProductImgs] = useState([]);

  useEffect(() => {
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/slider")
      .then((response) => {
        setImgs(response.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/products")
      .then((response) => {
        setProducts(response.data);
        response.data.map((item) =>
          setProductImgs((state) => [...state, item.img])
        );
      });
  }, []);

  const contextValue = useMemo(
    () => ({
      Products,
      imgs,
      productImgs,
    }),
    [Products, imgs, productImgs]
  );
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
export default Context;
