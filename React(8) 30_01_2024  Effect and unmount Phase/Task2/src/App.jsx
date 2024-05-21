import  { useEffect, useState } from "react"
import ErrorIndicator from "./components/ErrorIndicator";
import LoadingIndicator from "./components/LoadingIndicator";

const App = () => {

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [products, setProducts] = useState();

  async function fetchAndUpdateData() {
    setLoading(true)
    try {
      let res = await fetch(`https://dummyjson.com/products`);
      let finalResponse = await res.json();
      // console.log(finalResponse.products);
      setProducts(finalResponse?.products);
      setLoading(false)
    } catch (error) {
      setErr(true)
      setLoading(false)
    }
  }

  console.log("before useEffect");
  useEffect(function () {
    console.log("inside useEffect");
    // during mount phase this thing will do
    //side effects can be performed here;
    //this will be called after rendering is completed;
    //thereby it does not block the rendering process
    fetchAndUpdateData()
  }, [])
  console.log("after useEffect");

  if (err) {
    return <ErrorIndicator/>
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  // fetchAndUpdateData()  we can also perform initial rendering but this
  // thing block the rendering process

  return (
    <>
      {/* <button onClick={fetchAndUpdateData}>get all data</button> */}
      {
        // when we perform side effect 
        // when we need to perform mount phase only --> lifecycle
        // if normal operation like click event, onchange, onclick so on this time we perform side effect directly
        // but when we communicate with external world so un this time we perform side effect 
      }
      <div className="product-container"> {JSON.stringify(products)} </div>
    </>
  )
}

export default App
