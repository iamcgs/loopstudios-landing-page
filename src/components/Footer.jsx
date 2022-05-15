import React from 'react';
import Logo from '../images/logo.svg';
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="mt-10 bg-blackClr py-16">
      <div className="grid lg:grid-cols-2 lg:mx-40 gap-16 lg:gap-8 justify-center">
        <img
          src={Logo}
          alt="Loopstudios"
          className="mx-auto lg:order-1 lg:ml-0"
        />
        <ul className="text-whiteClr lg:gap-3 lg:self-center lg:order-3 lg:flex-row text-center xl:gap-6 flex flex-col gap-4 text-lg  font-semibold">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Careers</li>
          <li className="hover:underline cursor-pointer">Events</li>
          <li className="hover:underline cursor-pointer">Products</li>
          <li className="hover:underline cursor-pointer">Support</li>
        </ul>
        <div className="flex lg:order-2 justify-around gap-4 items-center lg:justify-end">
          <FaFacebookSquare
            className="hover:border-b-4 cursor-pointer pb-1"
            style={{ color: '#fff' }}
            size={36}
          />
          <FaTwitter
            className="hover:border-b-4 cursor-pointer pb-1"
            style={{ color: '#fff' }}
            size={36}
          />
          <FaPinterest
            className="hover:border-b-4 cursor-pointer pb-1"
            style={{ color: '#fff' }}
            size={36}
          />
          <FaInstagram
            className="hover:border-b-4 cursor-pointer pb-1"
            style={{ color: '#fff' }}
            size={36}
          />
        </div>
        <p className="text-darkGray lg:pb-0 pb-6  text-lg lg:text-base xl:text-lg lg:text-right lg:order-4 font-bold">
          © 2022 Loopstudios | All rights reserved.
        </p>
      </div>
      <div className="pt-0 lg:pt-8 lg:mx-40">
        <p className="text-center text-slate-300">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href="https://github.com/iamcgs" className="text-purple-400">
            Carla
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
