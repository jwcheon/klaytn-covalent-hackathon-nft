import { useState } from "react";
import Intersection from "../components/Intersection";

import MainDummy from "../components/MainDummy";
import PairSelector from "../components/PairSelector";

import LoadingCharacter from "../resources/main_character.png"

const Home = () => {
  const [showSearcher, setShowSearcher] = useState(false);

  const [isPairClicked, setIsPairClicked] = useState(false);
  const [pairText, setPairText] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const [chainOne, setChainOne] = useState(null);
  const [chainTwo, setChainTwo] = useState(null);
  const [contractOne, setContractOne] = useState(null);
  const [contractTwo, setContractTwo] = useState(null);

  const onPairClick = (chain1, contract1, chain2, contract2) => {
    setIsSearching(true);
    console.log("Searching for pairs!!!");
    setIsPairClicked(true);

    setChainOne(chain1);
    setContractOne(contract1);
    setChainTwo(chain2);
    setContractTwo(contract2);
  };

  return (
    <div className="flex flex-col">
      <div className="flex px-6 pt-8 pb-2 items-center space-x-2">
        <div className="">
          <span
            onClick={() => {
              setShowSearcher(false);
              setIsPairClicked(false);
              setIsSearching(false);
              setPairText("");
            }}
            className="text-4xl text-gray-100 select-none hover:text-[#F9B035] hover:cursor-pointer"
          >
            NFT Dashboard
          </span>
          <h3 className="text-xl text-gray-400 select-none">
            Explain explain this and that.
          </h3>
        </div>
        <div>
          <img src={LoadingCharacter} alt="mascot" className="h-14" />
        </div>
      </div>

      <div className="flex flex-col min-w-full mt-4 text-center items-center">
        <h2 className="text-3xl font-bold w-3/5 text-gray-100">
          {isSearching ? (
            <div className="animate-bounce">Loading ⌛️</div>
          ) : !isPairClicked ? (
            "Find *mutual* between bluechips."
          ) : (
            <div className="break-words overflow-hidden">{pairText}</div>
          )}
        </h2>
        {isPairClicked ? null : (
          <p className="text-lg w-3/5 text-gray-400 -mt-1">
            Collectors are always on the move. Check if they own both projects.
          </p>
        )}
      </div>

      {isPairClicked ? (
        <Intersection
          setIsSearching={setIsSearching}
          LoadingCharacter={LoadingCharacter}
          setPairText={setPairText}
          chain={[chainOne, chainTwo]}
          contract={[contractOne, contractTwo]}
        />
      ) : showSearcher ? (
        <PairSelector />
      ) : (
        <MainDummy onPairClick={onPairClick} />
      )}

      <div className="w-full flex flex-col items-center justify-center my-4">
        {isPairClicked ? null : (
          <>
            <div
              className="text-gray-100 underline select-none hover:text-[#F9B035] hover:cursor-pointer"
              onClick={() => setShowSearcher((prev) => !prev)}
            >
              {!showSearcher
                ? "...or try your own pair!"
                : "...return to given pairs"}
            </div>
            <div className="text-gray-500 text-sm">
              (Even between chains! Thx to{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.covalenthq.com/docs/api/#/0/0/USD/1"
              >
                Covalent
              </a>{" "}
              🚀)
            </div>
          </>
        )}

        <div className="text-gray-300 text-sm mt-2">
          dashboard built by{" "}
          <a target="_blank" rel="noreferrer" href="https://github.com/jwcheon">
            @jwcheon
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
