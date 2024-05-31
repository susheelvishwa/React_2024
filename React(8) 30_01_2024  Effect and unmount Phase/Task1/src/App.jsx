import  { useState } from "react";
import "./App.css"; 

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchAndUpdateData() {
    try {
      const res = await fetch(`https://dummyjson.com/products`);
      const finalResponse = await res.json();
      setProducts(finalResponse.products ?? []);
      setError(null);
    } catch (error) {
      setError("Something went wrong: " + error.message);
    }
  }

  return (
    <>
      <button onClick={fetchAndUpdateData}>Get All Data</button>
      <div className="product-container">
        {error ? (
          <h1>{error}</h1>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product">
              <h1>ID Number 🥷 : {product.id}</h1>
              <h2>{product.title}</h2>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.description}</p>
              <p>Price 💵: ${product.price}</p>
              <p>Rating ⭐: {product.rating}</p>
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
        )}
      </div>
    </>
  );
};

export default App;
