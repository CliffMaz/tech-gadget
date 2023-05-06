import './App.scss';
import Header from './Components/header/Header';
import Footer from './Components/Store/footer/Footer';
import ProductInfo from './Components/Store/products/ProductInfo';
import Shop from './Components/Store/Shop/Shop';
import Store from './Components/Store/Store';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductInfo/>
      <Footer/>
    </div>
  );
}

export default App;
