import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Banner1 from './Components/Banner/Banner1';
import Banner3 from './Components/Banner/Banner3';
import Banner2 from './Components/Banner/Banner2';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={<Banner1/>} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={<Banner2/>}  category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={<Banner3 />}  category="kid"/>}/>
        <Route path='/product' element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
