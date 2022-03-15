import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import HomePage from "../src/HomePage";
import Login from "../src/components/Login/Login";
import UserDashboard from "./components/Main/Dashboard/UserDashboard";
import Dashboard from "./components/Main/Dashboard/Dashboard";
import Orders from "./components/Main/Dashboard/Orders/Orders";
import UserFaves from "./components/Main/Dashboard/Favorites/UserFaves";
import UserInfo from "./components/Main/Dashboard/EditForms/UserInfo";
import UserPassword from "./components/Main/Dashboard/EditForms/UserPassword";
import ProductDashboard from "./components/Main/ProductCategory/ProductDashboard";
import AllProduct from "./components/Main/ProductCategory/AllProducts";
import Shop from './components/ShopPage/ShopPage'
import CartPage from "./components/Cart/CartPage/CartPage";
import SearchProductFilter from "./components/search/SearchProductFilter";
import Contact from "./components/Contact/pages/Contact.jsx"
import Navbar from "./components/Main/Navbar/Navbar"
import Footer from "./components/Main/Footer/Footer";
import Nutrition from "./components/Main/ProductCategory/Nutrition";
import Training from "./components/Main/ProductCategory/Training";
import CheckingOut from "./components/CheckOut/CheckingOut";
import EmailCheck from "./components/EmailConfirmation/EmailCheck";
import AdminDashboard from "./components/adminDashboard/AdminDashboard";
import OrdersList from "./components/adminDashboard/adminOrders/OrdersList";
import UsersList from "./components/adminDashboard/viewAllUsers/UsersList";
import AddProduct from "./components/adminDashboard/addProductForm/AddProduct";
import ProductsList from "./components/adminDashboard/productRow/ProductsList";
import Signup from "./components/Signup/Signup";
import CreateAddress from "./components/CreateAddress/CreateAddress";
import ThankYouPage from "./components/Thankyou/ThankYouPage";

function App() {
  return (
    <div className='app'>
      <div className='section'>
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={ <Signup/>} />
            <Route exact path="/createaddress" element={ <CreateAddress/>} />
            <Route path="/product" element={<ProductDashboard/>}/>
            <Route exact path="/userdashboard" element={<UserDashboard />}>
              <Route index element={<Dashboard />} />
              <Route path="/userdashboard/edit-user-info" element={<UserInfo/>}/>
              <Route path="/userdashboard/orders" element={<Orders/>}/>
              <Route path="/userdashboard/user-faves" element={<UserFaves/>}/>
              <Route path="/userdashboard/edit-user-pass" element={<UserPassword/>}/>
            </Route>
            <Route exact path="/product" element={<ProductDashboard />}>
              <Route index element={<AllProduct/>} />
              <Route path="/product/nutrition" element={<Nutrition/>}/>
              <Route path="/product/training" element={<Training/>}/>
            </Route>
            <Route></Route>
            <Route exact path="/search" element={<SearchProductFilter/>}/>
            <Route exact path="/cart" element={<CartPage/>}/>
            <Route exact path="/shop" element={<Shop/>}/>
            <Route
              exact
              path='/contact'
              element={
                <div>
                  <Navbar />
                  <Contact />
                  <Footer />
                </div>
              }
            />
            <Route exact path="/checkout/*" element={<CheckingOut/>} />
            <Route exact path="/verify-email/*" element={<EmailCheck/>} />
            <Route exact path="/admindashboard" element={<AdminDashboard />}>
              <Route index element={<OrdersList/>} />
              <Route path="/admindashboard/view-users" element={<UsersList/>}/>
              <Route path="/admindashboard/add-products" element={<AddProduct/>}/>
              <Route path="/admindashboard/view-products" element={<ProductsList/>}/>
              <Route path="/admindashboard/edit-admin-pass" element={<UserPassword/>}/>
            </Route>
              <Route exact path="/thank-you-page" element={<ThankYouPage/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App;
