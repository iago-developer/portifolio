import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';

export default function App() {
  return(
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}