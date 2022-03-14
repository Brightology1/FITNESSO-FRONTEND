import React from 'react';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./AdminDashboard.css";
import ProductRow from './productRow/ProductRow';
import { ProductData } from './Productdata';
import ViewOrder from './adminOrders/ViewOrder';
import { ViewOrderData } from './adminOrders/ViewOrderdata';
import AddProduct from './addProductForm/AddProduct';
import ViewAllUsersRow from './viewAllUsers/ViewAllUsersRow';
import { ViewAllUsersData } from './viewAllUsers/ViewAllUsersData';
import { Outlet } from 'react-router-dom';
import logOut from '../Login/logout';

const AdminDashboard = () => {
    
  return (
    <div>
         
<div className="admin-dashboard-body">


<section id="menu">
    <div className="admin-dashboard-logo">
        <img src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808d31a7eca1775993ae82_Black.svg" alt="" href="/"/>
    </div>

    <div className="admin-dashboard-items"> 
            <li><i className="fad fa-chart-pie-alt"></i><a href="/">{" Back to Home"}</a></li>
            <li><i className="fab fa-uikit"></i><a href="/admindashboard">Orders</a></li>
            <li><i className="fas fa-users"></i><a href="/admindashboard/view-users">Users</a></li>
            <li><i className="fas fa-edit"></i><a href="/admindashboard/add-products">Add Product </a></li>
            <li><i className="fas fa-edit"></i><a href="/admindashboard/add-services">Add Post </a></li>
            <li><i className="fa fa-user"></i><a href="/userdashboard">My Details</a></li>
            <li><i className="fas fa-dumbbell"></i><a href="/admindashboard/view-products">Product</a></li>
            <li><i className="fas fa-power-off"></i><a href="#"
            onClick={logOut}>LOG OUT</a></li>
    </div>
</section>

<section id="interface">
    <div className="admin-dashboard-navigation">
        <div className="admin-dashboard-n1">
            <div>
                <i style={{color:'#35babe'}} id="menu-btn" className="fa fa-bars"></i>
            </div>
            <div className="admin-dashboard-search"><i className="far fa-search"></i>
            <input type="text"/>
            </div>
        </div>

        <div className="admin-dashboard-profile">
            <i className="far fa-bell"></i>
            <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
        </div>
    </div>
    <h3 className="admin-dashboard-i-name">Dashboard</h3>

    <div className="admin-dashboard-values">
        <div className="admin-dashboard-val-box">
            <i className="fas fa-users"></i>
            <div>
                <h3>6,267</h3>
                <span>New Users</span>
            </div>
        </div>
        <div className="admin-dashboard-val-box">
            <i className="fas fa-shopping-cart"></i>
            <div>
                <h3>6,267</h3>
                <span>New Users</span>
            </div>
        </div>
        <div className="admin-dashboard-val-box">
            <i className="fas fa-acorn"></i>
            <div>
                <h3>6,267</h3>
                <span>New Users</span>
            </div>
        </div>
        <div className="admin-dashboard-val-box">
            <i className="fas fa-dollar-sign"></i>
            <div>
                <h3>6,267</h3>
                <span>New Users</span>
            </div>
        </div>
    </div>

    <Outlet/>

</section>


</div>

    </div>
  )
}

export default AdminDashboard