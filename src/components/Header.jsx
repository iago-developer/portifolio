import React from "react";

export default function Header() {
  return (
    <header>
      <div className="title-header">
        <h1>MI - Developer</h1>
        <hr />
      </div>
      <br />
      <div className="nav-header">
          <nav>
            <a href="#">Home</a>
            <a href="#about">Quem sou</a>
            <a href="#technologies">Tecnologias</a>
            <a href="#projects">Meus Projetos</a>
            <a href="#contacts">Meus Contatos</a>
          </nav>
      </div>
    </header>
  );
}
