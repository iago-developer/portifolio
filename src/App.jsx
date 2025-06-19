import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import "./Mobile.css";
import styled from "styled-components";

const Navbar = styled.div`
  height: 100%;
  width: 1000px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Sidebar = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    background-color: red;
    cursor: pointer;
    display: block;
    height: 100vh;
    width: 80%;
    z-index: 5;
    position: fixed;
    left: -80%;
    transition: left 0.5s ease, background 0.4s ease 0.8s;

    & .list {
      background-color: #fff;
      box-shadow: 2px 8px 4px rgba(0, 0, 0, 0.4);
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 0px;

      & .title {
        width: 100%;
        background-color: #fff;
        color: #000;
        padding: 30px;
        text-align: center;
      }

      & hr {
        border: 2px solid #000;
        margin-top: 10px;
        width: 100%;
      }

      & div.links {
        padding-top: 30px;
        height: 100%;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        gap: 30px;
      }

      & div.link {
        height: 100%;
      }

      & div.links > .link > a {
        margin-top: 10px;
        color: #000;
        text-decoration: none;
        font-weight: bold;
        position: relative;

        &::after {
          background-color: #000;
          border-radius: 10px;
          content: "";
          height: 3px;
          width: 0;
          position: absolute;
          left: 0px;
          bottom: -3px;
          transition: width 0.5s ease;
        }

        &:hover::after {
          width: 100%;
        }
      }

      & .footer {
        width: 100%;
        padding: 30px;
        text-align: center;

        & hr {
          border: 2px solid #000;
          width: 100%;
        }

        & p {
          padding-top: 30px;
        }

        & p > a {
          margin-top: 10px;
          color: #000;
          text-decoration: none;
          font-weight: bold;
          position: relative;

          &::after {
            background-color: #000;
            border-radius: 10px;
            content: "";
            height: 3px;
            width: 0;
            position: absolute;
            left: 0px;
            bottom: -3px;
            transition: width 0.5s ease;
          }

          &:hover::after {
            width: 100%;
          }
        }
      }
    }
  }
`;

const removeSidebar = () => {
  const body = document.querySelector("body");
  const buttonSidebar = document.querySelector("#buttonSidebar");
  const sidebar = document.querySelector("#sidebar");
  const inputCheckBox = document.querySelector("#checkBox");

  inputCheckBox.checked = false;
  sidebar.style.left = "-80%";
  body.style.overflowY = "auto";

  // setTimeout(()=>{
  //   sidebar.style.display = "none";
  // }, 3000);
};

const checkWidthPage = () => {
  if (window.innerWidth <= 767) {
    const sidebar = document.querySelector("#sidebar");

    sidebar.style.display = "block";
  } else {
    const body = document.querySelector("body");
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.display = "none";
    body.style.overflowY = "auto";
  }
};
export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {
      checkWidthPage();
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <div className="container">
      <Sidebar id="sidebar" onClick={() => removeSidebar()}>
        <div className="list">
          <div className="title">
            <h2>MI - Developer</h2>
            <hr />
          </div>
          <div className="links">
            <div className="link">
              <a href="#" onClick={() => removeSidebar()}>
                Home
              </a>
            </div>
            <div className="link">
              <a href="#about">Quem sou</a>
            </div>
            <div className="link">
              <a href="#technologies">Tecnologias</a>
            </div>
            <div className="link">
              <a href="#projects">Meus Projetos</a>
            </div>
            <div className="link">
              <a href="#objectives">Meus Objetivos</a>
            </div>
            <div className="link">
              <a href="#contacts">Meus Contatos</a>
            </div>
          </div>
          <div className="footer">
            <hr />
            <p>
              <a href="https://github.com/iago-developer/" target="_blank">
                &copy;iago
              </a>
            </p>
          </div>
        </div>
      </Sidebar>
      <Header />
      <div className="nav-header">
        <Navbar>
          <a href="#">Home</a>
          <a href="#about">Quem sou</a>
          <a href="#technologies">Tecnologias</a>
          <a href="#projects">Meus Projetos</a>
          {/* <a href="#objectives">Meus Objetivos</a> */}
          <a href="#contacts">Meus Contatos</a>
        </Navbar>
      </div>
      <Main />
      <Footer />
    </div>
  );
}
