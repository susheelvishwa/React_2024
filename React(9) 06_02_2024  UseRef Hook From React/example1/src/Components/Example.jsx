import { useEffect } from "react"

const Example = () => {

  useEffect(() => {
    // But then you are going out of scope of react and interacting with browser API. React doesn’t have much control there and that is not react way of doing things
    document.getElementById("todo-input").focus(); // not a react way of doing things ??
  }, [])

  return (
    <div>
      <input type="text" placeholder="add todo" id="todo-input" />
    </div>
  )
}

export default Example
