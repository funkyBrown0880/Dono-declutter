import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import SecondaryNavbar from "./components/SecondaryNavbar/SecondaryNavbar";
import Landing from "./Pages/Landing/Index";
import Product from "./Pages/Product/Product";
import Sell from "./Pages/Sell/Selll";
import Donate from "./Pages/Donate/Donate";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
import Logout from "./Pages/Logout/Logout";
import AddToCart from "./Pages/AddToCart/AddToCart";
import Account from "./Pages/Account/Account";
import Paystack from "./Pages/Paystacjk/Paystack";

function App() {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dignup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/account" element={<Account />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/pay" element={<Paystack />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
