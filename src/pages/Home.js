import { useState } from "react";

import MainDummy from "../components/MainDummy";
import PairSelector from "../components/PairSelector";


const Home = () => {
  const [showSearcher, setShowSearcher] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="px-6 pt-8 pb-2">
        <h1 className="text-4xl text-gray-100">NFT Dashboard</h1>
        <h3 className="text-xl text-gray-400">
          Explain explain this and that.
        </h3>
      </div>

      <div className="flex flex-col min-w-full mt-4 text-center items-center">
        <h2 className="text-3xl font-bold w-3/5 text-gray-100">
          Find *mutual* between bluechips.
        </h2>
        <p className="text-lg w-3/5 text-gray-400 -mt-1">
          Collectors are always on the move. Check if they own both projects.
        </p>
      </div>

      { showSearcher ? <PairSelector /> : <MainDummy /> }

      <div className="w-full flex flex-col items-center justify-center my-4">
        <div
          className="text-gray-100 underline select-none hover:text-[#F9B035] hover:cursor-pointer"
          onClick={() => setShowSearcher((prev) => !prev)}
        >
          { !showSearcher ? "...or try your own pair!" : "...return to given pairs" }
        </div>
        <div className="text-gray-500 text-sm">
        (Even between chains! Thx to <a target="_blank" rel="noreferrer" href="https://www.covalenthq.com/docs/api/#/0/0/USD/1">Covalent</a> 🚀)
        </div>
        <div className="text-gray-300 text-sm mt-2">
            dashboard built by <a target="_blank" rel="noreferrer" href="https://github.com/jwcheon">@jwcheon</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
