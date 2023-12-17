import { useState } from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import "./header.css";

const Header = () => {
  const [toggle,setToggle]= useState(false);
  return (
    <header className="header">
      <HeaderTop setToggle={setToggle} toggle= {toggle}/>
     <HeaderMiddle/>
     <Navbar toggle={toggle}setToggle={setToggle}/>
    </header>
  );
};

export default Header;
