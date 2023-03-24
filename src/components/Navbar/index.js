import React from "react";
import {Nav, NavbarContainer, NavLogo } from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
          <NavLogo to='/' className=' text-green-400 mx-auto text-center font-montserrat '>JODC 128 <span className=" text-green-400 font-thin text-xl ml-3">Presents</span></NavLogo>
          {/* <btn className="font-medium bg-green-400 text-black py-2 my-5 px-4 rounded-full textx-sm">Login Now.</btn> */}
        </NavbarContainer>

      {/* <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-green-400 font-semibold">JODC 128</span>
          <span className=" text-xl text-green-400 ml-3"> Presents</span>
        </div>
      </div> */}
    </Nav>
  );
};
export default Navbar;
