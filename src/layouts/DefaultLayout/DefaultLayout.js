import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Sidenav from "../../components/Sidenav/Sidenav";

const DefaultLayout = ({ children }) => {
  const [showSideNav, setShowSideNav] = useState(false);
  const toggleMenu = () => {
    setShowSideNav((prev) => !prev);
  };
  return (
    <div>
      {showSideNav && <div onClick={toggleMenu} className={"bg-overlay"} />}
      <Navbar showingSideNav={showSideNav} toggleMenu={toggleMenu} />
      {children}
      {showSideNav && <Sidenav toggleMenu={toggleMenu} />}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
