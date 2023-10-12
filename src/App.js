import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/navigation';
import HomePage from './customer/components/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import CheckOut from './customer/components/Checkout/CheckOut';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './customer/Routes/CustomerRouters';



function App() {
  return (
    <div className="">
     
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>

      </Routes>
      <div>
        
      </div>
    </div>
  );
}

export default App;
