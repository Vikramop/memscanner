import React from 'react';
import Telegram from '../assets/telelaunch.png';
import Discord from '../assets/discordlaunch.png';
import X from '../assets/X.png';
import TelegramI from '../assets/Telegram.png';
import Meet from '../assets/Meet.png';
import DiscordI from '../assets/Discord.png';

const Socials = () => {
  return (
    <div className="text-white">
      <div>
        <h1 className="text-5xl text-center font-semibold pt-28">
          {' '}
          Want to try WagieBot?
        </h1>
        <p className="text-lg text-center pt-16"> Join the closed Beta now!</p>
        <div className="flex justify-center gap-48 py-24">
          <img src={Telegram} alt="Telegram" className="w-[150px]" />
          <img src={Discord} alt="Discord" className="w-[150px]" />
        </div>
      </div>

      <div className="bg-[#7170703e]">
        <h1 className="text-5xl  text-center font-semibold pt-20 pb-4">
          Join Us
        </h1>
        <div className="flex justify-center gap-10 pt-12 pb-24">
          <img src={X} className="w-[50px]" />
          <img src={TelegramI} className="w-[50px]" />
          <img src={Meet} className="w-[50px]" />
          <img src={DiscordI} className="w-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Socials;
