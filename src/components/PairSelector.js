import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const PairSelector = ({ onPairClick }) => {

  const [firstChain, setFirstChain] = useState(null);
  const [secondChain, setSecondChain] = useState(null);

  const [firstContract, setFirstContract] = useState("");
  const [secondContract, setSecondContract] = useState("");

  function checkClick() {
    if (firstChain !== null && secondChain !== null && firstContract !== "" && secondContract !== "") {
      onPairClick(firstChain.split("|")[1], firstContract, secondChain.split("|")[1], secondContract);
    }
  }


  return (
    <div className="w-full flex flex-col items-center mt-3 space-y-3 text-gray-100">
      <div className="flex justify-center items-center space-x-4">
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          { firstChain ? firstChain.split("|")[0] : "Chain" }
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFirstChain("KLAY|8217")}>Klaytn</Dropdown.Item>
          <Dropdown.Item onClick={() => setFirstChain("ETH|1")}>Ethereum</Dropdown.Item>
          <Dropdown.Item onClick={() => setFirstChain("MATIC|137")}>Polygon</Dropdown.Item>
          <Dropdown.Item onClick={() => setFirstChain("BSC|56")}>BSC</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <input className="text-black w-30 px-16 py-2" placeholder="Type Contract Address" onChange={ e => setFirstContract(e.target.value) }></input>
      </div>
      <div className="flex justify-center items-center space-x-4">
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          { secondChain ? secondChain.split("|")[0] : "Chain" }
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSecondChain("KLAY|8217")}>Klaytn</Dropdown.Item>
          <Dropdown.Item onClick={() => setSecondChain("ETH|1")}>Ethereum</Dropdown.Item>
          <Dropdown.Item onClick={() => setSecondChain("MATIC|137")}>Polygon</Dropdown.Item>
          <Dropdown.Item onClick={() => setSecondChain("BSC|56")}>BSC</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <input className="text-black w-30 px-16 py-2" placeholder="Type Contract Address" onChange={ e => setSecondContract(e.target.value) }></input>
      </div>
      <div 
        className="text-[#202235] font-medium bg-[#F9B035] mt-5 px-4 py-2 rounded-xl select-none hover:opacity-70 hover:cursor-pointer"
        onClick={() => checkClick()} >
        Compare them!
      </div>
    </div>
  );
};

export default PairSelector;
