import { useEffect, useState } from "react";
import ErrorIndicator from "./components/ErrorIndicator";
import LoadingIndicator from "./components/LoadingIndicator";
import axios from "axios";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortFactor, setSortFactor] = useState("price");

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let res = await axios.get(`https://dummyjson.com/products`);
      let finalResponse = res.data;
      if (finalResponse && finalResponse.products) {
        setProducts(finalResponse.products);
      } else {
        setProducts([]);
      }
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  const sortedProducts = [...products];
  sortedProducts.sort((a, b) => {
    if (sortFactor === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    } else if (sortFactor === "rating") {
      return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
    } else if (sortFactor === "id") {
      return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
    } else if (sortFactor === "stock") {
      return sortOrder === "asc" ? a.stock - b.stock : b.stock - a.stock;
    } else if (sortFactor === "title") {
      return sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }

    return 0;
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSortFactorChange = (e) => {
    setSortFactor(e.target.value);
  };

  if (err) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <div className="sort-container">
        <button onClick={toggleSortOrder}>
          Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
        </button>
        <select value={sortFactor} onChange={handleSortFactorChange}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="stock">Stock</option>
          <option value="title">Title</option>
          <option value="id">ID</option>
        </select>
      </div>
      <div className="product-container">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div key={product.id} className="product">
              <h2>ID number : {product.id}</h2>
              <h2>{product.title}</h2>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Stock: {product.stock}</p>
              <p>Category: {product.category}</p>
              {product.reviews && product.reviews.length > 0 && (
                <>
                  <h3>Reviews:</h3>
                  <ul>
                    {product.reviews.map((review, index) => (
                      <li key={index}>
                        <strong>{review.reviewerName}:</strong> {review.comment}{" "}
                        (Rating: {review.rating})
                      </li>
                    ))}
                  </ul>
                </>
              )}
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
