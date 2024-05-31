import  { useState } from "react";
import axios from "axios";
import { Error } from "./Error";
import { Loading } from "./Loading";
import ProductItem from "./ProductItem"; // Ensure this is the correct path

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true);
    setError(false); // Reset error state before making a new request
    try {
      let res = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      });

      let productData = res?.data;
      console.log(productData);

      setProducts(productData);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <h1>Product List</h1>
      <button onClick={fetchAndUpdateData}>
        Click this button to get Products
      </button>
      {products.map((product) => (
        <ProductItem {...product} key={product?.id} />
      ))}
    </>
  );
};

export { Products };
