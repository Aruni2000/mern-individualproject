import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from "./pages/Home";
import AdminLogin from './pages/AdminLogin';
import AdminSignUp from './pages/AdminSignUp';
import Registration from './pages/Registration';
import SellerLogin from './pages/SellerLogin';
import SellerProfile from './pages/SellerProfile';
import SellerSignUp from './pages/SellerSignUp';
import SellYourSpices from './pages/SellYourSpices';
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Admin-login" element={<AdminLogin />} />
    <Route path="/Admin-signup" element={<AdminSignUp />} />
    <Route path="/Registration" element={<Registration />} />
    <Route path="/Seller-login" element={<SellerLogin />} />
    <Route path="/Seller-profile" element={<SellerProfile />} />
    <Route path="/Seller-signup" element={<SellerSignUp />} />
    <Route path="/Sell-your-spices" element={<SellYourSpices />} />


    </Routes>
  </BrowserRouter>
}
