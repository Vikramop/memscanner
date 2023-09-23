import React from 'react';
import Frame from '../assets/Frame.png';
const Protocol = () => {
  return (
    <div className="bg-red-500">
      <img src={Frame} className=" mx-auto w-[1000px]" />
      <h2 className="text-white top-3  text-center text-3xl font-bold mt-5">
        Cutting Edge Technology
      </h2>
      <p>
        WagieBot utilizes a custom-built architecture capable of handling tens
        of thousands requests per second bundled with a powerful infrastructure
        consisting of private nodes and self-hosted adapters, making it the
        fastest bot on the market.
      </p>
      <button className="mx-auto button border-slate-500 content-end bg-[#21211f] flex items-center  bg-[#0e0f0ec8] hover:bg-[#ffffff] w-fit text-[#f5f5f5] hover:text-black text-[16px] py-2 px-4 rounded-md font-[600]">
        Learn More
      </button>
    </div>
  );
};

export default Protocol;
