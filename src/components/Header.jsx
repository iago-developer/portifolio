import React from "react";

const buttonNavbar = () => {
  const buttonNavbar = document.querySelector("div.button-nav-header");
  const navbar = document.querySelector("div.nav-header");
  const check = document.querySelector("input#check");

  // switch (navbar.style.top) {
  //   case "" && check.checked == false:
  //     window.alert("")
  //     console.log("o" + navbar.style.top);
  //     navbar.style.top = "300px";
  //     break;
  //   case navbar.style.top == "300px" && check.checked:
  //   window.alert("o")  
  //   navbar.style.top = "-300px";
  //     break;
  //   default:
  //     navbar.style.top = "";
  //     break;
  // }
  if(navbar.style.top == "" && check.checked == false) {
    navbar.style.cssText = "top: 226px !important;";
  }else if(navbar.style.top == "226px" && check.checked) {
    navbar.style.cssText = "top: -300px !important;";
  }else if(navbar.style.top == "-300px" && check.checked == false) {
    navbar.style.cssText = "top: 226px !important;";
  }
};

export default function Header() {
  return (
    <header>
      <div className="title-header">
        <h1>MI - Developer</h1>
        <hr />
      </div>
      <br />
      <div className="button-nav-header">
        <input type="checkbox" name="check" id="check" />
        <label
          htmlFor="check"
          onClick={() => {
            buttonNavbar();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </header>
  );
}
