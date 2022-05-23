import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const PairSelector = () => {

    const [firstChain, setFirstChain] = useState(null);
    const [secondChain, setSecondChain] = useState(null);


  return (
    <div className="w-full flex flex-col items-center mt-3 space-y-3 text-gray-100">
      <div className="flex justify-center items-center space-x-4">
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          { firstChain ? firstChain : "Chain" }
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFirstChain("KLAY")}>Klaytn</Dropdown.Item>
          <Dropdown.Item onClick={() => setFirstChain("ETH")}>Ethereum</Dropdown.Item>
          <Dropdown.Item onClick={() => setFirstChain("MATIC")}>Polygon</Dropdown.Item>
          <Dropdown.Item onClick={() => setFirstChain("BSC")}>BSC</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <input></input>
      </div>
      <div className="flex justify-center items-center space-x-4">
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          { secondChain ? secondChain : "Chain" }
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSecondChain("KLAY")}>Klaytn</Dropdown.Item>
          <Dropdown.Item onClick={() => setSecondChain("ETH")}>Ethereum</Dropdown.Item>
          <Dropdown.Item onClick={() => setSecondChain("MATIC")}>Polygon</Dropdown.Item>
          <Dropdown.Item onClick={() => setSecondChain("BSC")}>BSC</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <input></input>
      </div>
      <div className="text-[#202235] font-medium bg-[#F9B035] mt-5 px-4 py-2 rounded-xl select-none hover:opacity-70 hover:cursor-pointer">
        Compare them!
      </div>
    </div>
  );
};

export default PairSelector;
