import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Currency from "./components/Currency/Currency";
import Newsletter from "./components/Newsletter/Newsletter";
import Boxes from "./components/Boxes/Boxes";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Route for the Login component */}
          <Route path="login" element={<Login />} />
          {/* Route for the SignUp component */}
          <Route path="signup" element={<SignUp />} />
          {/* Protected route for the home page */}
          <Route path="/" element={<ProtectedRoute/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Component for the home page
function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Currency />
      <Newsletter />
      <Boxes />
      <Footer />
    </>
  );
}
function ProtectedRoute() {
  // Check if the user is logged in (you need to implement this logic)
  const isLoggedIn = true; // Placeholder for demonstration, replace with actual logic

  // If logged in, render the HomePage component, else render the Login component
  return isLoggedIn ? <HomePage /> : <Login />;
}
export default App;
