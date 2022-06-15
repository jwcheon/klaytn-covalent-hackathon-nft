import { useState } from "react";

import NavBar from "../components/NavBar";
import MainTopText from "../components/MainTopText";

import Intersection from "../components/Intersection";
import MainDummy from "../components/MainDummy";
import PairSelector from "../components/PairSelector";
import PairSelectorSwitcher from "../components/PairSelectorSwitcher";


import LoadingCharacter from "../resources/main_character.png"

const Home = () => {
  // Is Pair Clicked? What are the names of the pair?
  const [isPairClicked, setIsPairClicked] = useState(false);
  const [pairText, setPairText] = useState("");

  // Is NFT searching(fetching from API) in progress?
  const [isSearching, setIsSearching] = useState(false);

  // Is PairSelector component being shown?
  const [showSelector, setShowSelector] = useState(false);

  // Chain & Contract Data of the 2 NFT Pairs
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

  const resetSearch = () => {
    setShowSelector(false);
    setIsPairClicked(false);
    setIsSearching(false);
    setPairText("");
  };

  return (
    <div className="flex flex-col">
      
      <NavBar LoadingCharacter={LoadingCharacter} resetSearch={resetSearch}  />
      <MainTopText isSearching={isSearching} isPairClicked={isPairClicked} pairText={pairText} />
      
      {isPairClicked ? (
        <Intersection
          setIsSearching={setIsSearching}
          LoadingCharacter={LoadingCharacter}
          setPairText={setPairText}
          chain={[chainOne, chainTwo]}
          contract={[contractOne, contractTwo]}
        />
      ) : showSelector ? (
        <PairSelector onPairClick={onPairClick} />
      ) : (
        <MainDummy onPairClick={onPairClick} />
      )}

      <PairSelectorSwitcher
        isPairClicked={isPairClicked}
        showSelector={showSelector}
        setShowSelector={setShowSelector}
        resetSearch={resetSearch}
      />

    </div>
  );
};

export default Home;
