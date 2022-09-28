import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiWallet3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <div className="flex  m-2 justify-around items-center bg-[#6d293a] font-bold text-white rounded-md">
        <p>Logo</p>
        <p>AnimeNFT</p>
        <input
          className="w-[40%] p-4 m-4 bg-[#0f1f34] text-white font-semibold rounded-md"
          type="text"
          placeholder="Search NFT"
        />
        <div className="flex justify-around gap-8 w-[30%] items-center">
          <button className="hover:scale-125 duration-100">Explore</button>
          <button className="hover:scale-125 duration-100">Stats</button>
          <button className="hover:scale-125 duration-100">Create</button>
          <button className="scale-150">
            <CgProfile />
          </button>
          <button className="scale-150">
            <RiWallet3Line />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
