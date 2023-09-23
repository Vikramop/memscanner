import React from 'react';
import Logo from '../assets/lgooo.png';
import Image from '../assets/tokensTree.png';
import Blue from '../assets/blue.png';

const Stats = () => {
  return (
    <div className="stats text-white">
      <div>
        <div className="flex justify-center gap-[12rem] pt-20">
          <div>
            <h1 className="text-5xl font-semibold">10k+</h1>
            <p className="text-lg mt-4">Unique Bot Users</p>
            <h1 className="text-5xl font-semibold mt-16">170k+</h1>
            <p className="text-lg mt-4">Trades Made</p>
          </div>
          <img src={Logo} alt="logo" className="w-[100px] h-[100px] my-auto" />
          <div>
            <h1 className="text-5xl font-semibold text-center">11.5M+</h1>
            <p className="text-lg mt-4">Contracts Fetched</p>
            <h1 className="text-5xl font-semibold text-center  mt-16">20+</h1>
            <p className="text-lg text-center mt-4">Community</p>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-auto my-[10rem] ">
        <h1 className="text-6xl font-bold mx-28 text-center">
          State-of-the-art infrastructure, processing requests on multiple
          networks in <span className="text-[#9FF119]">milliseconds</span>.
        </h1>
        <img src={Image} className="mx-auto mt-16" />
      </div>

      <div className="flex items-center justify-between gap-10 mx-24 py-24 ">
        <img src={Blue} className="w-[300px] h-[250px]" />
        <div>
          <h1 className="text-5xl text-right font-semibold mr-16">
            {' '}
            Instant LP Matching
          </h1>
          <p className="text-xl text-right  mr-4 my-10">
            WagieBot will instantly fetch the largest liquidity pool and present
            <br />
            it to you for easy access together with anti-rug and honeypot
            <br />
            checks.
          </p>
          <button className="button border-slate-500 content-end bg-[#9FF119] flex items-center  bg-[#0e0f0ec8] hover:bg-[#ffffff] w-fit text-[#000000] hover:text-black text-[14.5px] py-2 px-4 rounded-md font-[500]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stats;
