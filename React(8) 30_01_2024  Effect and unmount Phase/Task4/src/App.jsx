import  { useEffect, useState } from "react";
import ErrorIndicator from "./components/ErrorIndicator";
import LoadingIndicator from "./components/LoadingIndicator";
import "./App.css"; 

const App = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let res = await fetch(`https://dummyjson.com/products`);
      let finalResponse = await res.json();
      setProducts(finalResponse?.products ?? []);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  if (err) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <div className="product-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product">
              <h2>ID number : {product.id}</h2>
              <h2>{product.title}</h2>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Stock: {product.stock}</p>
              <p>Category: {product.category}</p>
              <h3>Reviews:</h3>
              <ul>
                {product.reviews.map((review, index) => (
                  <li key={index}>
                    <strong>{review.reviewerName}:</strong> {review.comment}{" "}
                    (Rating: {review.rating})
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
};

export default App;
