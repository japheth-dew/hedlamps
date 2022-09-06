import React, { useState } from "react";
import MobileNav from "./Nav/MobileNav";
import { GoThreeBars } from "react-icons/go";
import Nav from "./Nav/Nav";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:px-[6rem] md:py-[2rem]  p-[1rem] flex lg:flex-row md:flex-col justify-between items-center border shadow">
      <button onClick={()=> setOpen(true)} className="md:hidden inline">
        <GoThreeBars className="text-[1.5rem]" />
      </button>
      {open && <MobileNav setOpen={setOpen} />}
      <p className="font-[900] md:text-[32px]  text-[22px]">HEDLAMPS</p>
      <Nav />
    </div>
  );
};

export default Header;
