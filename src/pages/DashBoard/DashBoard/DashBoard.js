import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import "./DashBoard.css"
import {
        Switch,
        Route,
         useRouteMatch
      } from "react-router-dom";
import { Button } from 'react-bootstrap';
import MakeAAdmin from '../MakeAAdmin/MakeAAdmin';
import AddProduct from '../../AddProduct/AddProduct';
import MyOrder from '../MyOrder/MyOrder';
import Reviews from '../ReviewMaking/ReviewMaking';
import AddBlog from '../AddBlog/AddBlog';
const DashBoard = () => {
    const { path, url } = useRouteMatch();
    const {user,logOut}=useAuth()
    return (
        <div className="mt-5 dashboard">
            <h1 className="pt-5 bg-primary">DashBoard</h1>
            <div className="dashboard-style" style={{textAlign:"left"}}>
                <ul className="mx-5">
                    <li>
                    <Link className="text-decoration-none"  to="/home">Home</Link>
                    </li>
                    <li>
                    <Link className="text-decoration-none" as ={HashLink} to={`${url}/pay`}>Pay</Link>
                    </li>
                  
                    <li>
                    <Link className="text-decoration-none" as ={HashLink} to={`${url}/myorder`}>My Orders</Link>
                    </li>
                    <li>
                    <Link className="text-decoration-none" as ={HashLink} to={`${url}/reviews`}>Reviews</Link>
                    </li>
                    <li>
                    <Link className="text-decoration-none" as ={HashLink} to={`${url}/addproduct`}>Add Product</Link>
                    </li>
                    <li>
                    <Link className="text-decoration-none" as ={HashLink} to={`${url}/addblog`}>Add Blog</Link>
                    </li>
                    <li>
                    <Link className="text-decoration-none" as ={HashLink} to={`${url}/makeaadmin`}>MakeAdmin</Link>
                    </li>
                    {
                   user?.email &&
                     <Button onClick={logOut} className="bg-light text-dark">Logout</Button>
                   
                 }
                </ul>
                <Switch>
                    <Route exact path={`${path}`}>
                        <h1>Welcome to DashBoard</h1>
                    </Route>
                    <Route path={`${path}/makeaadmin`}>
                       <MakeAAdmin></MakeAAdmin>
                  </Route>
                    <Route path={`${path}/addproduct`}>
                       <AddProduct></AddProduct>
                  </Route>
                    <Route path={`${path}/myorder`}>
                       <MyOrder></MyOrder>
                  </Route>
                    <Route path={`${path}/reviews`}>
                       <Reviews></Reviews>
                  </Route>
                    <Route path={`${path}/addblog`}>
                       <AddBlog></AddBlog>
                  </Route>
                </Switch>
            </div>
            
        </div>
    );
};

export default DashBoard;
