import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import JobResult from './career/jobResult';
import AddJob from './addJob';
import Home from './career/home';
import SignUp from './authentication/signUp';
import Navbar from './navbar';
import Login from './authentication/login';
import CareerPanel from './admin/careerPanel';
import Products from './admin/Products';
import ProductCreate from './admin/ProductCreate';
import ProductEdit from './admin/ProductEdit';
import ProductViews from './user/ProductViews'
import ProductList from './user/Productlist'
import Cart from './user/Cart'
import Order from './user/Order'
import Cheakout from './user/Cheakout';
import Main from './product/Main';
import Thankyou from './user/Thankyou';
import Orderviews from './admin/Orderviews';
import News from './news/news';
import PostNews from './news/post-news/post-news';

import SinglePost from './news/single-post';
import ManagePost from './news/manage-news/manage-post';
import ManageNews from './news/manage-news';
import Mian from './home/main';


function App() {
  const context = useContext(AuthContext);
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/career' element={<Home />} />
          <Route path='/' element={<Mian />} />
          <Route path='/addJob' element={context.user ? <AddJob /> : <Login />} />
          <Route path='/categories/:category' element={<JobResult />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<Main />} />
          <Route path='/admin/career' element={context.userType === 'admin' ? <CareerPanel /> : <Login />} />
          <Route path='/admin/products' element={context.userType === 'admin' ? <Products /> : <Login />} />
          <Route path='/admin/products/create' element={<ProductCreate />} />
          <Route path='/admin/products/:productId/edit' element={<ProductEdit />} />
          <Route path='/user/products/:id/view' element={<ProductViews />} />
          <Route path='/user/productlist' element={<ProductList />} />
          <Route path='/user/cart' element={<Cart />} />
          <Route path='/user/Cheakout' element={context.user ? <Cheakout /> : <Login />} />
          <Route path='/user/Order' element={<Order />} />
          <Route path='/user/Thankyou' element={<Thankyou />} />
          <Route path='/admin/orderviews' element={<Orderviews />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/manage-news' element={<ManageNews />} />
          <Route path='/news/post-news' element={<PostNews />} />
          <Route path='/news/manage-post' element={<ManagePost />} />
          <Route path='/news/:_id' element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;