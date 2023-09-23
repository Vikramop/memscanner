import React from 'react';
import wimage from '../assets/w.png';
const Helper = () => {
  return (
    <div className="bg-black text-white">
      <h1 className="text-center text-6xl font-semibold">
        Your <span className="text-[#9FF119]"> DeFi </span> Helper
      </h1>
      <p className="text-2xl text-center mt-12">
        WagieBot tokens reduce your fees by up to 60%, enhance your bot&apos;s
        abilities accross all <br />
        features, give access to our private alpha and more.
      </p>
      <img src={wimage} className="w-[550px] my-24 mx-auto  bg-black" />
    </div>
  );
};

export default Helper;
