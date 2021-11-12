// import React from 'react';
// import { Button, Nav } from 'react-bootstrap';
// import { HashLink } from 'react-router-hash-link';
// import useAuth from '../../../hooks/useAuth';
// import AddProduct from '../../AddProduct/AddProduct';
// import Blogs from '../../Home/Blogs/Blogs';
// import Home from '../../Home/Home/Home';
// import Explores from '../../MainExplore/Explores/Explores';
// import "./DashBoard.css"
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useParams,
//     useRouteMatch
//   } from "react-router-dom";
// import { MaxKey } from 'bson';
// import MakeAAdmin from '../MakeAAdmin/MakeAAdmin';
// const DashBoard = () => {
//     const { path, url } = useRouteMatch();
//     const {user,logOut}=useAuth()
//     return (
       
//         <div className="row">
            
//             <div className="mt-5 col-lg-2 col-md-6 col-sm-12 col-12">
//                 <div className="pt-5 sidebar ">
//                 <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
//                 <Nav.Link to={`${url}`}>DashBoard</Nav.Link>
//                 <Nav.Link to={`${url}/pay`}>Pay</Nav.Link>
//                 <Nav.Link to={`${url}/makeaadmin`}>Make A Admin</Nav.Link>
//                 <Nav.Link to={`${url}/addproduct`}>Add Product</Nav.Link>
//                 {/* <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
//                 <Nav.Link as ={HashLink} to="/explore">Explore</Nav.Link>
//                 <Nav.Link as={HashLink} to="/home#blogs">Blogs</Nav.Link>
//                 <Nav.Link as ={HashLink} to="/home#products">Products</Nav.Link>
//                 <Nav.Link as ={HashLink} to="/home#reviews">Reviews</Nav.Link>
//                 <Nav.Link as ={HashLink} to="/addaproduct">Add Product</Nav.Link> */}
//                   {
//                     user?.email &&
//                     <Button onClick={logOut} className="bg-light text-dark">Logout</Button>
                   
//                 }
//                  <h1 className="mt-5">Header</h1>
//                 <Router>
//                 <Switch>
//                     <Route exact path={path}>
//                         <DashBoard></DashBoard>
//                     </Route>
//                     <Route path={`${path}/makeaadmin`}>
//                         <MakeAAdmin></MakeAAdmin>
//                     </Route>
//                 </Switch>
//                 </Router>
//                 </div>
            
//             </div>
//             <div className="pt-5 col-lg-10 col-md-6 col-sm-12 col-12">
               
//             </div>
           
//         </div>
        
//     );
// };

// export default DashBoard;