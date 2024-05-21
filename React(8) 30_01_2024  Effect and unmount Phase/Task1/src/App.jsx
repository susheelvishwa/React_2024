import {useState } from "react"

const App = () => {
  const [products, setProducts] = useState();

  async function fetchAndUpdateData() {
    try {
      let res = await fetch(`https://dummyjson.com/products`);
      let finalResponse = await res.json();
      // console.log(finalResponse.products);
      setProducts(finalResponse?.products);
    } catch (error) {
      console.log("Something went Wrong");
    }
  }

  return (
    <>
      <button onClick={fetchAndUpdateData}>get all data</button>
      <div className="product-container"> {JSON.stringify(products)} </div>
    </>
  )
}

export default App
