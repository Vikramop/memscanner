import React from 'react';
import Header from './Header';
import { toast } from 'react-toastify';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Typography, IconButton, Box } from '@mui/material';
import Homebg from '../assets/homebg.png';
import Iphone from '../assets/iphone.png';
import Discord from '../assets/discordlaunch.png';
import Telegram from '../assets/telelaunch.png';
import RedE from '../assets/homeRedE.png';
import GreenE from '../assets/homeGreenE.png';

const Home = () => {
  return (
    <div className="home">
      <Header />

      {/* Contract address begins */}
      <div className="flex items-center justify-center bg-black  ">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '8rem',
            justifyContent: 'center',
            alignItems: 'center',
            // marginLeft: '800px',
            background: '#1A1A1A',
            padding: '12px',
            position: 'absolute',
            borderRadius: '8px',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              width: 6,
              marginRight: 10,
              borderRadius: '10px',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
            }}
          >
            <Typography variant="body" fontWeight="bold" color="white">
              Contract addresss
            </Typography>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '4px',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body"
                color="grey"
                nowrap
                sx={{
                  maxWidth: { xs: '270px', sm: 'fit-content' },
                  wordWrap: 'break-word',
                }}
              >
                0xd2c869382c7ac9f87ff73548d029d67c0f9dee31
              </Typography>

              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(
                    '0xd2c869382c7ac9f87ff73548d029d67c0f9dee31'
                  );
                  toast('Address copied', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                  });
                }}
              >
                <ContentCopyIcon sx={{ color: 'white', width: '20px' }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {/* Contract Address ends */}
      <div className="bg-black text-white home">
        <div className="flex items-center justify-center  flex-col gap-5">
          {/* <img src={RedE} />
          <img src={GreenE} /> */}
          <h1 className="text-5xl mt-[10rem] font-bold ">
            The Most Advanced Crypto bot
          </h1>

          <p className="text-xl text-center ">
            Bringing Sniping, Tracking, Trading, Copy Trading ,<br /> and More
            directly to your Messaging Apps
          </p>
          <img className="w-[450px] mt-5" src={Iphone} />
          <div className="flex justify-between mt-5 mb-12 gap-[8rem]">
            <img className="w-[150px]" src={Discord} />
            <img className="w-[150px]" src={Telegram} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
