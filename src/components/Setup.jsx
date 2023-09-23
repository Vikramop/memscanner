import React, { useState } from 'react';
import Iphone from '../assets/iphone.png';
import Iphone2 from '../assets/iphone2.png';
import Iphone3 from '../assets/iphone3.png';
import Iphone4 from '../assets/iphone4.png';
import Iphone5 from '../assets/iphone5.png';

import { fData } from './Data';
// import { Box, Card } from '@mui/material';

const Setup = () => {
  const [active, setActive] = useState('Launch');

  return (
    <div className="bg-black text-white mt-32">
      <div className=" h-[90vh]">
        <h1 className="text-6xl font-semibold text-center">Quick Setup</h1>
        <div className="flex justify-center gap-24 mt-24">
          <p
            className={`text-[42px] cursor-pointer  ${
              setActive === true ? 'text-green-500' : 'text-white'
            }`}
            onClick={() => setActive('Launch')}
          >
            Launch
          </p>
          <p
            className={`text-[42px] cursor-pointer ${
              setActive === true ? 'text-green-500' : 'text-white'
            }`}
            onClick={() => setActive('Wallet')}
          >
            Wallet
          </p>
          <p
            className={`text-[42px] cursor-pointer ${
              setActive === true ? 'text-green-500' : 'text-white'
            }`}
            onClick={() => setActive('Paste')}
          >
            Paste
          </p>
          <p
            className={`text-[42px] cursor-pointer ${
              setActive === true ? 'text-green-500' : 'text-white'
            }`}
            onClick={() => setActive('Buy/Sell')}
          >
            Buy/Sell
          </p>
          <p
            className={`text-[42px] cursor-pointer ${
              setActive === true ? 'text-green-500' : 'text-white'
            }`}
            onClick={() => setActive('Track')}
          >
            Track
          </p>
        </div>
        {active === 'Launch' && (
          <div className="flex justify-center gap-72  mx-24  items-center py-24">
            <img src={Iphone} alt="iphone" className="w-[450px]" />
            <p className="text-2xl ">
              Get your WagieBot up and running in <br />
              seconds. Send a message to the bot <br />
              for instant access. No registration required.
            </p>
          </div>
        )}
        {active === 'Wallet' && (
          <div className="flex justify-center gap-72  mx-24  items-center py-24">
            <img src={Iphone2} alt="iphone" className="w-[450px]" />
            <p className="text-2xl ">
              Generate, import and delete <br />
              encrypted multi-chain wallets <br />
              directly in WagieBot.
            </p>
          </div>
        )}
        {active === 'Paste' && (
          <div className="flex justify-center gap-72  mx-24  items-center py-24">
            <img src={Iphone3} alt="iphone" className="w-[450px]" />
            <p className="text-2xl ">
              Send any token contract address <br />
              to the bot and instantly retrieve <br />
              all relevant data.
            </p>
          </div>
        )}
        {active === 'Buy/Sell' && (
          <div className="flex justify-center gap-72  mx-24  items-center py-24">
            <img src={Iphone4} alt="iphone" className="w-[450px]" />
            <p className="text-2xl ">
              Use Wagies private nodes or built-in <br /> anti-mev to execute
              instantaneous <br /> buy/sell transactions through any <br />
              supported dex on any supported <br />
              chain.
            </p>
          </div>
        )}
        {active === 'Track' && (
          <div className="flex justify-center gap-72 mx-24  items-center py-24">
            <img src={Iphone5} alt="iphone" className="w-[450px]" />
            <p className="text-2xl ">
              Track any token, set up advanced <br />
              orders such as limit orders, stop <br />
              loss and take profit directly <br /> through WagieBot.
            </p>
          </div>
        )}
      </div>

      <div className="mt-20">
        <h1
          className="text-6xl text-center font-semibold mb-20
        "
        >
          Specialized <span className="text-[#9FF119]">Features</span>
        </h1>

        {fData.map((item) => (
          <div
            className="card shadow-lg flex w-[20%] mr-12 rounded-lg bg-black mb-5"
            key={item.id}
          >
            <div className="pl-5   mb-5">
              <div>
                <h2 className="text-3xl mt-8 font-bold  mb-4">{item.title}</h2>
                <h3 className="font-normal mb-6 text-xl ">{item.desc}</h3>
                <img src={item.img} className="mx-auto my-4 w-[180px]" />
                <button className="mx-auto button border-slate-500 content-end bg-[#21211f] flex items-center  bg-[#0e0f0ec8] hover:bg-[#ffffff] w-fit text-[#f5f5f5] hover:text-black text-[16px] py-2 px-4 rounded-md font-[600]">
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
