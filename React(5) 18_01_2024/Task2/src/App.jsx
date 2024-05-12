import React from 'react'

const App = () => {

  const [count, setCount] = React.useState(100);
  console.log(count);

  function handleCount() {
    setCount(count-10)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleCount} >DEC</button>
    </div>
  )
}

export default App
