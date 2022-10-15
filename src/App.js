import './App.css';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import BodyPart from './Component/BodyPart';
import Footer from './Component/Footer';
import Information from './Component/Information';
import Shipping from './Component/Shipping';
import Payment from './Component/Payment';
import { Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';
function App() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(()=> {
    console.log(cartCount)
  })

  return (
    <div>
      
    <Header cartCount = {cartCount}/>
  <Routes>
    <Route path="/" element={<BodyPart setCartCount={setCartCount} cartCount = {cartCount} />} />
    <Route path="information" element={<Information/>} />
    <Route path="shipping" element={<Shipping/>} />
    <Route path="payment" element={<Payment/>} />
  </Routes>
    <Footer/>
    </div>
  );
}

export default App;
