import React from 'react';
import VR from '../images/mobile/image-interactive.jpg';
import DesktopVR from '../images/desktop/image-interactive.jpg';

function Interactive() {
  return (
    <section className="lg:px-40 lg:relative px-8 py-24">
      <div className="w-full lg:w-[58%]">
        <img
          src={VR}
          className="lg:hidden mx-auto object-cover"
          alt="Interactive VR"
        />
        <img
          src={DesktopVR}
          className="lg:block hidden lg:ml-0 lg:w-full lg:object-cover"
          alt="Interactive VR"
        />
      </div>
      <div className="lg:w-[42%] lg:absolute lg:bottom-24 lg:right-40 lg:bg-whiteClr">
        <h2 className="pt-14 xl:pt-16 xl:pb-10 xl:px-20 xl:text-5xl px-4 lg:pb-4 lg:text-left pb-8 lg:pt-8 lg:pl-8 lg:pr-12 text-center uppercase text-4xl font-light leading-none">
          The leader in interactive VR
        </h2>
        <p className="px-4 lg:px-8 lg:pb-1 text-center xl:pl-20 xl:text-base xl:tracking-wider md:px-36 lg:text-left lg:text-sm lg:pr-0 font-Alata text-darkGray font-normal">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}

export default Interactive;
