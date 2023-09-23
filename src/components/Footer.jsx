import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="bg-black px-32 pt-32 text-white ">
      <img src={Logo} className="pb-12" />
      <div className="flex justify-between gap-[25rem] mx-18 text-white pb-16 ">
        <div>
          <h1 className="text-3xl font-semibold pb-8">Legal</h1>
          <a>
            <p className=" pb-2 font-normal text-[#808080] ">Terms of Use</p>
          </a>
          <a>
            <p className=" pb-2 font-normal text-[#808080] ">Privacy Policy</p>
          </a>
          <a>
            <p className=" pb-2 font-normal text-[#808080] ">Cookie Policy</p>
          </a>
        </div>
        <div>
          <h1 className="text-3xl font-semibold pb-8">About</h1>
          <p className=" pb-2 font-normal text-[#808080] ">Link tree</p>
          <p className=" pb-2 font-normal text-[#808080] ">Crypyo Bots</p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold pb-8">Social</h1>
          <p className=" pb-2 font-normal text-[#808080] ">Twitter / X</p>
          <p className=" pb-2 font-normal text-[#808080] ">Blog</p>
          <p className=" pb-2 font-normal text-[#808080] ">Contact Us</p>
        </div>
      </div>

      <div className="flinks text-[#808080] pb-12 ">
        <p className=" py-4"> Copyright @2023 WagieBot.</p>
        <p> 0xd2c869382c7ac9f87ff73548d029d67c0f9dee31</p>
      </div>
    </div>
  );
};

export default Footer;
