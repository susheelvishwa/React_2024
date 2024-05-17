import React from 'react'
import Task1 from "./Task1"

const Mount = () => {

    const [count, setCount] = React.useState(0);
    const [showCounter, setShowCounter] = React.useState(true);
    
    function handleCount() {
        setCount(count + 1)
        setShowCounter(!showCounter);
        // console.log(setCount);
        console.log(showCounter);
    }

    return (
        <div>
            <h1>Counter : {count}</h1>
            {showCounter ? <Task1 /> : null}
            <button onClick={handleCount}>Toggle</button>
        </div>
    )
}
export default Mount
