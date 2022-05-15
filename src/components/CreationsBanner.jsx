import React from 'react';

function CreationsBanner({ imgSrc, imgDesktop, title }) {
  return (
    <div className="cursor-pointer relative w-full after:bg-black after:opacity-50 hover:text-blackClr text-whiteClr after:w-full after:hover:opacity-70 after:hover:bg-whiteClr after:absolute after:top-0 after:left-0 transition-all duration-300 ease-in-out after:bottom-0 after:right-0">
      <img src={imgSrc} className="w-full object-cover lg:hidden" alt="/" />
      <img
        src={imgDesktop}
        className="w-full object-cover hidden lg:block"
        alt="/"
      />
      <h3 className="absolute z-10 lg:text-xl drop-shadow-2xl opacity-95 lg:w-full xl:text-3xl p-5 tracking-widest w-1/2 text-xl font-light uppercase  bottom-0 left-0">
        {title}
      </h3>
    </div>
  );
}

export default CreationsBanner;
