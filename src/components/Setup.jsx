import React from 'react';
import Iphone from '../assets/iphone.png';
import { fData } from './Data';
import { Box, Card } from '@mui/material';

const Setup = () => {
  return (
    <div className="bg-black text-white">
      <div>
        <h1 className="text-6xl font-semibold text-center">Quick Setup</h1>
        <div className="flex justify-center gap-24 mt-24">
          <p className="text-2xl">Launch</p>
          <p className="text-2xl">Wallet</p>
          <p className="text-2xl">Paste</p>
          <p className="text-2xl">Buy/Sell</p>
          <p className="text-2xl">Track</p>
        </div>
        <div className="flex justify-between mx-24  items-center py-24">
          <img src={Iphone} alt="iphone" className="w-[450px]" />
          <p className="text-2xl ">
            Get your WagieBot up and running in <br />
            seconds. Send a message to the bot <br />
            for instant access. No registration required.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-6xl text-center font-semibold">
          Specialized <span className="text-[#9FF119]">Features</span>
        </h1>

        {fData.map((item) => (
          <div className="shadow-lg rounded-lg bg-gray-900 " key={item.id}>
            {/* <img className="rounded-t-lg" src="/assets/images/man.jpg" /> */}
            <div className="pl-5 flex">
              <div>
                <h2 className="text-3xl  font-bold  mb-3">{item.title}</h2>
                <h3 className="font-bold mb-2 text-xl ">{item.desc}</h3>
                <button className="button border-slate-500 content-end bg-[#292928] flex items-center  bg-[#0e0f0ec8] hover:bg-[#ffffff] w-fit text-[#f5f5f5] hover:text-black text-[14.5px] py-2 px-4 rounded-md font-[500]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Setup;
