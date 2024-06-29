import './App.css'
import UserContextProVider from './context/UserContextProVider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  return (
    <>
      <UserContextProVider>
        <h1>Hii.....</h1>
        <p>Today we discuss about Context API................</p>
        <Login />
        <Profile/>
      </UserContextProVider>
    </>
  );
}

export default App
