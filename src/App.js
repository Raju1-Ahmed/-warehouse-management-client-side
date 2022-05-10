import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import SingleDress from './Pages/SingleDress/SingleDress';
import Orders from './Pages/Orders/Orders';
import ShowAlldress from './Pages/Home/Alldress/ShowAlldress';
import Blog from './Pages/Shared/Blog/Blog';

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      
      <Route  path='/service/:productId'element={
        <RequireAuth>
          <SingleDress></SingleDress>
        </RequireAuth>
      }></Route>

      <Route path="/alldress" element={
        <RequireAuth>
          <ShowAlldress></ShowAlldress>
        </RequireAuth>
      }></Route>

      <Route path="/order" element={
        <RequireAuth>
          <Orders></Orders>
        </RequireAuth>
      }></Route>

      <Route path="/addservice" element={
        <RequireAuth>
          <AddService></AddService>
        </RequireAuth>
      }></Route>

      <Route path="/manage" element={
        <RequireAuth>
          <ManageProduct></ManageProduct>
        </RequireAuth>
      }></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
