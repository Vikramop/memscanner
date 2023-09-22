import React from 'react';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import Logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="w-full relative bg-[#000000] flex items-center justify-between py-3 px-[3%] lg:px-[1%] xl:px-[4%]  z-50 text-white  top-0 left-0">
        <div className="z-50">
          <a href="#">
            {' '}
            <img
              className=" w-[85px] xl:w-[150px] object-contain"
              src={Logo}
              alt="hero"
            />
          </a>
        </div>
        <div className=" hidden lg:flex absolute top-0 left-0 w-full h-full items-center justify-center ">
          <div className="flex items-center gap-5 font-[500] text-[14.5px] xl:text-[16.6px]">
            <a href="#">
              <span className="hover:text-[#9FF119]">Features </span>
            </a>
            <a href="#">
              <span className="hover:text-[#9FF119]">Stats</span>
            </a>
            <a href="#">
              <span className="hover:text-[#9FF119]">Change log</span>
            </a>
            <a href="#">
              <span className="hover:text-[#9FF119]">Documentation</span>
            </a>
          </div>
        </div>
        <div className="hidden lg:flex items-center z-50 gap-5 ">
          <button className="button border-slate-600 flex items-center gap-1 bg-[#0e0f0ec8] hover:bg-[#ffffff] w-fit text-[#f0f0f0] hover:text-black text-[14.5px] py-1.5 px-4 rounded-md font-[500]">
            Launch App
          </button>
        </div>
        <div
          className="block lg:hidden"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <RiMenu3Fill className="text-[20px] cursor-pointer text-white" />
        </div>
      </div>

      {/* ----------------------------------------------------------------------------- */}
      {menuOpen && (
        <div className=" absolute z-50 text-white top-0 right-0 w-[90%] h-screen bg-[#201921] flex justify-around px-[4%] flex-col lg:hidden border-white">
          <div
            className=" block lg:hidden absolute top-[3%] right-[4%] "
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <RiCloseFill className="text-[20px] cursor-pointer z-50 text-white" />
          </div>
          <div className="flex flex-col items-center gap-5 font-[500] text-[14.5px] xl:text-[16.6px]">
            <a href="#">
              <span>Features </span>
            </a>
            <a href="#">
              <span>Stats</span>
            </a>
            <a href="#">
              <span>Change log</span>
            </a>
            <a href="#">
              <span>Documentation</span>
            </a>
          </div>
          <div className="flex flex-col items-center gap-5 ">
            {/* <div className="flex items-center  gap-2 xl:gap-3 mt-2">
              <a href="#">
                <img
                  className="w-[19px] sm:w-[22px] xl:w-[27px] object-contain "
                  src="/assets/t.png"
                  alt="bgf"
                />
              </a>
              <a href="#">
                <img
                  className="w-[19px] sm:w-[22px] xl:w-[27px] object-contain "
                  src="/assets/y.png"
                  alt="bgf"
                />
              </a>
              <a href="#">
                <img
                  className="w-[19px] sm:w-[22px] xl:w-[27px] object-contain "
                  src="/assets/te.png"
                  alt="bgf"
                />
              </a>
              <a href="#">
                <img
                  className="w-[19px] sm:w-[22px] xl:w-[27px] object-contain "
                  src="/assets/i.png"
                  alt="bgf"
                />
              </a>
            </div> */}
            <button className="flex items-center gap-1 bg-[#9FF119] w-fit text-[#353535] text-[14.5px] py-1.5 px-4 rounded-full font-[500]">
              Launch App
              {/* <div>
                <img
                  className="w-[19px] object-contain"
                  src="/assets/lefta.svg"
                  alt="right arrow"
                />
              </div> */}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
