import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/navigation';
import HomePage from './customer/components/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';



function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        {/* <HomePage /> */}
        <Product/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
