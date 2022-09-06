import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="font-[600] md:flex items-center gap-[2rem] hidden ">
      <NavLink to={"home"} className="text-blue-500">
        Home
      </NavLink>
      <NavLink to={"services"}>Services</NavLink>
      <NavLink to={"case_studies"}>Case Studies</NavLink>
      <NavLink to={"insight"}>Insight</NavLink>
      <NavLink to={"careers"}>Careers</NavLink>
      <NavLink
        to={"home"}
        className="rounded-full bg-blue-500 text-white hover:text-blue-500 hover:bg-white px-6 py-3"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Nav;
