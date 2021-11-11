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
        <Route path="/explore">
        <MainExplore></MainExplore>
        </Route>
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
        <Route path="/products/:id">
        <ProductDetails></ProductDetails>
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
