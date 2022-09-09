import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';
import EventHandling from './components/EventHandling';
import Todo from './components/Todo';
import Register from './components/Register';
import UserManager from './components/UserManager';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <Toaster position='top-right' />
      <BrowserRouter>
        <Header />
        {/* <Link to="/home">Home</Link>
        <Link to="/login">Login</Link> */}
        <Routes>

          <Route element={<Home></Home>} path="/" />
          <Route element={<Home></Home>} path="home" />
          <Route element={<Login />} path="login" />
          <Route element={<EventHandling />} path="event" />
          <Route element={<Todo />} path="todo" />
          <Route element={<Register />} path="register" />
          <Route element={<UserManager />} path="usermanager" />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;