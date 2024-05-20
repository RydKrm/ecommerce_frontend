"use client";
import React, { useState } from "react";
import TopHeader from "./top-header";
import SearchBar from "./search-bar";
import Menu from "./menu";
import CategoryMenu from "./category-menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <TopHeader />
      <SearchBar />
      <div className="relative">
        <Menu setShowMenu={setShowMenu} />
        {showMenu && <CategoryMenu />}
      </div>
    </>
  );
};

export default Header;
