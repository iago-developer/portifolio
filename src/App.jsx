import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import "./Mobile.css";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <div className="nav-header">
        <nav>
          <a href="#">Home</a>
          <a href="#about">Quem sou</a>
          <a href="#technologies">Tecnologias</a>
          <a href="#projects">Meus Projetos</a>
          <a href="#contacts">Meus Contatos</a>
        </nav>
      </div>
      <Main />
      <Footer />
    </div>
  );
}
