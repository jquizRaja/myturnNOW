'use client'
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div
      className="
    fixed
    top-0 
    w-full
    bg-white
    z-10
    hover:shadow-md
    cursor-pointer
    "
    >
      <div
        className="
         py-4
         border-b-[1px]
        "
      >
        <Container>
            <Logo/>
            <Search/>
            <UserMenu />
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
