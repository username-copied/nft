import React from "react";
import Navbar from "./Navbar";
import { CgArrowRightO } from "react-icons/cg";
import IMG1 from "../assets/img1.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-[45%] p-2 m-2 bg-gradient-to-br	from-[#6d293a] to-[#230d34] h-[100vh] text-white text-3xl ">
          <div className="mt-12  text-center leading-loose tracking-widest font-semibold">
            DISCOVER AND COLLECT <br /> EXTRAORDINARY AnimeNFT
          </div>
          <p className="text-center mt-8 leading-loose tracking-wider">
            Marketplace for Anime character and <br /> concept art collection
            NFT's
          </p>
          <button className="mx-auto mt-8 flex justify-center items-center hover:bg-[#0f1f348e] gap-4 rounded-lg p-4 m-4 leading-loose tracking-wider hover:tracking-widest bg-[#0f1f34] duration-150">
            Collect Now <CgArrowRightO />
          </button>
          <img
            className="h-[30%] mx-auto drop-shadow-2xl hover:scale-110 mt-8 duration-150 rounded-md"
            src={IMG1}
            alt="IMG1"
          />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Home;
