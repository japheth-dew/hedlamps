import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { AiOutlineFullscreenExit } from "react-icons/ai";

const MobileNav = ({ setOpen }) => {
  return (
    <div className="backdrop-blur bg-white/60 w-full  absolute md:hidden   top-0 bottom-0 left-0  inset-0 ">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="] bg-gray-100 p-5 h-screen  w-[80%] "
      >
        <div className="w-full text-right mb-[2rem]">
          <button onClick={() => setOpen(false)} className="text-[1.5rem] ">
            <AiOutlineFullscreenExit />
          </button>
        </div>
        <div className="font-[600] flex flex-col gap-[1.5rem] w-full  ">
          <NavLink className="border-b w-full" to={"home"}>
            Home
          </NavLink>
          <NavLink className="border-b w-full" to={"services"}>
            Services
          </NavLink>
          <NavLink className="border-b w-full" to={"case_studies"}>
            Case Studies
          </NavLink>
          <NavLink className="border-b w-full" to={"insight"}>
            Insight
          </NavLink>
          <NavLink className="border-b w-full" to={"careers"}>
            Careers
          </NavLink>
          <NavLink className="border-b w-full" to={"home"}>
            Contact
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
