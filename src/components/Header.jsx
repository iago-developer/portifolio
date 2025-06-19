import React, { useEffect } from "react";
import styled from "styled-components";

const ButtonSidebar = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    padding: 30px;

    & input {
      display: none;
    }

    & label {
      height: 33px;
      width: 30px;
      display: block;
      position: relative;
      cursor: pointer;

      & span {
        background-color: #fff;
        border-radius: 6px;
        height: 5px;
        width: 100%;
        transition: all 0.4s ease;
        position: absolute;

        &:nth-child(1) {
          top: 0px;
        }

        &:nth-child(2) {
          top: 8px;
        }
        &:nth-child(3) {
          top: 16px;
        }
      }
    }
  }
`;

const checkDisplay = () => {
  const buttonSidebar = document.querySelector("#buttonSidebar");
  const sidebar = document.querySelector("#sidebar");
  const inputCheckBox = document.querySelector("#checkBox");
  const body = document.querySelector("body");

  // inputCheckBox.checked == true ? sidebar.style.display = "block" : sidebar.style.display = "none";

  console.log(sidebar.style.left)
  if(inputCheckBox.checked && (sidebar.style.left == "" || sidebar.style.left == "-80%")) {
    body.style.overflowY = "hidden";
    sidebar.style.display = "block";
    sidebar.style.left = "0px";
  }else {
    sidebar.style.left = "-80%";
    body.style.overflowY = "auto";
  }
}
export default function Header() {

  
  return (
    <header>
      <div className="title-header">
        <h1>MI - Developer</h1>
        <hr />
      </div>
      <br />
      <ButtonSidebar id="buttonSidebar" onClick={() => {
        checkDisplay();
      }}>
        <input type="checkbox" name="checkBox" id="checkBox" />
        <label htmlFor="checkBox">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </ButtonSidebar>
    </header>
  );
}
