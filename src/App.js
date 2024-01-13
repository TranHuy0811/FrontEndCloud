import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/Shop/shop";
import { About } from "./pages/About/about";
import { Blog } from "./pages/Blog/blog";
import { Product } from "./pages/Product/product";
import { Footer } from './components/footer';
import { ShopContextProvider } from './context/shopContext';
import { AuthProvider } from "./context/AuthContext";
import { Checkout } from './pages/Checkout/checkout';

import PrivateRoute from "./authentication/PrivateRoute"
import Dashboard from "./Dashboard"

import Signup from "./authentication/Signup";
import Login from "./authentication/Login";
import ForgotPassword from "./authentication/ForgotPassword"

function App() {
  return (
    //hello again new innpro
    <div className="App">
      <AuthProvider>
      <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/about' element={<About />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/product' element={<Product />} />
              <Route path='/checkout' element={<Checkout />} />

              <Route path="/user" element={<PrivateRoute><Dashboard /></PrivateRoute>} ></Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
            <Footer />
          </Router>
      </ShopContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
