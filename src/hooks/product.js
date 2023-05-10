import { useState, useEffect } from "react";

export function useProduct() {
  const [product, setProduct] = useState([]);
  const [productLoading, setProductLoaing] = useState(true);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/product`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success === 1) setProductLoaing(false);
        setProduct(data.data.products);
      });
  }, []);
  return { product, productLoading };
}
