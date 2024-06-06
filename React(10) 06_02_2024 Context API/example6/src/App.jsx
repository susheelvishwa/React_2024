import './App.css'
import UserContextProVider from './context/UserContextProVider'

function App() {

  return (
    <>
      <UserContextProVider>
        <h1>Hii.....</h1>
        <p>Today we discuss about Context API................</p>
      </UserContextProVider>
    </>
  );
}

export default App
