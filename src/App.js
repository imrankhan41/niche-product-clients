import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Header from './pages/Home/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import MainExplore from './pages/MainExplore/MainExplore/MainExplore';
import BlogExplore from './pages/Home/BlogExplore/BlogExplore/BlogExplore';
import AddProduct from './pages/AddProduct/AddProduct';
import ProductDetails from './pages/Home/ProductDetails/ProductDetails';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
import MakeAAdmin from './pages/DashBoard/MakeAAdmin/MakeAAdmin';
import Orders from './pages/Orders/Orders/Orders';
import Reviews from './pages/Home/Reviews/Reviews';
import BlogDetails from './pages/Home/BlogDeatils/BlogDetails';
import EditUser from './pages/DashBoard/EditUser/EditUser';
import OrderDetails from './pages/DashBoard/OrderDeatils/OrderDetails';

function App() {
  return (
    <div className="App">
  <AuthProvider>
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <PrivateRoute path="/dashboard">
        <DashBoard></DashBoard>
        </PrivateRoute>
        <Route path="/makeaadmin">
        <MakeAAdmin></MakeAAdmin>
        </Route>
        <PrivateRoute path="/explore">
        <MainExplore></MainExplore>
        </PrivateRoute>
        <Route path="/blogexplore">
        <BlogExplore></BlogExplore>
        </Route>
        <Route path="/addaproduct">
        <AddProduct></AddProduct>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
        <Register></Register>
        </Route>
        <Route path="/orders">
        <Orders></Orders>
        </Route>
        <Route path="/reviews">
        <Reviews></Reviews>
        </Route>
        <Route path="/products/:productid">
        <ProductDetails></ProductDetails>
        </Route>
        <Route path="/blogs/:blogId">
        <BlogDetails></BlogDetails>
        </Route>
        <PrivateRoute path="/edituser/:id">
         <EditUser></EditUser>
       </PrivateRoute>
        <Route path="/orders/:id">
        <OrderDetails></OrderDetails>
        </Route>
        <Route path="*">
        <PageNotFound></PageNotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}


export default App;
