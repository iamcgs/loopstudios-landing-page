import React, { useState } from 'react';
import Logo from '../images/logo.svg';
import Hamburger from '../images/icon-hamburger.svg';
import CloseBtn from '../images/icon-close.svg';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => setOpenMenu(!openMenu);
  return (
    <nav className="relative lg:py-14 px-8 lg:px-0 py-12">
      <div className="flex justify-between items-center">
        <div className="z-10">
          <img src={Logo} alt="Loopstudios" />
        </div>
        <ul className="md:flex hidden gap-6 font-Alata text-whiteClr ml-auto items-center">
          <li className="cursor-pointer hover:border-b-[3px] transition-all duration-150 ease-in-out pb-1">
            About
          </li>
          <li className="cursor-pointer hover:border-b-[3px] transition-all duration-150 ease-in-out pb-1">
            Careers
          </li>
          <li className="cursor-pointer hover:border-b-[3px] transition-all duration-150 ease-in-out pb-1">
            Events
          </li>
          <li className="cursor-pointer hover:border-b-[3px] transition-all duration-150 ease-in-out pb-1">
            Products
          </li>
          <li className="cursor-pointer hover:border-b-[3px] transition-all duration-150 ease-in-out pb-1">
            Support
          </li>
        </ul>
        <div onClick={handleClick} className="z-10">
          {!openMenu ? (
            <img src={Hamburger} className="cursor-pointer md:hidden" alt="/" />
          ) : (
            <img src={CloseBtn} className="cursor-pointer" alt="/" />
          )}
        </div>
      </div>
      {openMenu && (
        <ul className="pt-24 absolute text-whiteClr flex flex-col items-start font-thin tracking-widest gap-3 text-xl p-6 uppercase justify-center top-0 left-0 right-0 h-screen bg-blackClr">
          <li className="hover:border-b-[3px] pb-1 cursor-pointer transition-all duration-150 ease-in-out">
            About
          </li>
          <li className="hover:border-b-[3px] pb-1 cursor-pointer transition-all duration-150 ease-in-out">
            Careers
          </li>
          <li className="hover:border-b-[3px] pb-1 cursor-pointer transition-all duration-150 ease-in-out">
            Events
          </li>
          <li className="hover:border-b-[3px] pb-1 cursor-pointer transition-all duration-150 ease-in-out">
            Products
          </li>
          <li className="hover:border-b-[3px] pb-1 cursor-pointer transition-all duration-150 ease-in-out">
            Support
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
