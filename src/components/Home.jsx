import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-[45%] p-2 m-2 bg-gradient-to-br	from-[#6d293a] to-[#230d34] h-[100vh] text-white text-3xl ">
        <div className="mt-12  text-center leading-loose tracking-widest font-semibold">
          DISCOVER AND COLLECT <br /> EXTRAORDINARY AnimeNFT
        </div>
        <p className="text-center mt-8 leading-loose tracking-wider">
          Marketplace for Anime character and <br /> concept art collection
          NFT's
        </p>
      </div>
    </>
  );
};

export default Home;
