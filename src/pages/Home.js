
import { useState, useEffect } from "react";
import axios from 'axios';
import axiosRetry from 'axios-retry';

const Home = () => {
    const API_KEY = "ckey_6bf60a7bf22d4a309dbe74f3c5c";
    const PAGE_SIZE = 100000;

    const [firstChain, setFirstChain] = useState(1);
    const [firstContract, setFirstContract] = useState("0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"); // BAYC
    const [firstData, setFirstData] = useState(null);
    const [firstDetail, setFirstDetail] = useState({contract_name: null, contract_ticker_symbol: null, total_supply: null});

    const [secondChain, setSecondChain] = useState(8217);
    const [secondContract, setSecondContract] = useState("0xe060d4841680713a273afd463d82243f33851eae"); // MAYC
    const [secondData, setSecondData] = useState(null);
    const [secondDetail, setSecondDetail] = useState({contract_name: null, contract_ticker_symbol: null, total_supply: null});

    const [intersectionData, setIntersectionData] = useState([])

    axiosRetry(axios, {
      retries: 3,
      retryDelay: (retryCount) => {
        console.log(`retry attempt: ${retryCount}`);
        return retryCount * 2000;
      },
      retryCondition: (error) => {
        return error.response.status === 503;
      },
    });

    useEffect(() => {
      firstHandleData(firstChain, firstContract);
    }, [firstChain, firstContract]);

    useEffect(() => {
      secondHandleData(secondChain, secondContract);
    }, [secondChain, secondContract]);

    // Compare two datasets for matching owners
    useEffect(() => {
        if (firstData !== null && secondData !== null) {
            const intersect = Object.keys(firstData).reduce((prev, cur)=> cur in secondData ? [...prev, cur] : prev ,[])
            setIntersectionData(intersect);
            console.log("Intersection Complete", intersect);
        }
    }, [firstData, secondData])

    const firstHandleData = async (id, contract) => {
      try {
        const resp = await axios.get(
          `https://api.covalenthq.com/v1/${id}/tokens/${contract}/token_holders/?key=${API_KEY}&page-size=${PAGE_SIZE}`
        );
        let items = resp.data.data.items;
        setFirstDetail({contract_name: items[0].contract_name, contract_ticker_symbol: items[0].contract_ticker_symbol, total_supply: parseInt(items[0].total_supply)})
        let filtered = items.reduce((prev, cur) => {
            return {...prev, [cur.address]: parseInt(cur.balance)}
        }, {})
        setFirstData(filtered);
        console.log("fetched first data");
      } catch (error) {
        console.log("error on first", error);
      }
    };
    const secondHandleData = async (id, contract) => {
      try {
        const resp = await axios.get(
          `https://api.covalenthq.com/v1/${id}/tokens/${contract}/token_holders/?key=${API_KEY}&page-size=${PAGE_SIZE}`
        );
        let items = resp.data.data.items;
        setSecondDetail({contract_name: items[0].contract_name, contract_ticker_symbol: items[0].contract_ticker_symbol, total_supply: parseInt(items[0].total_supply)})
        let filtered = items.reduce((prev, cur) => {
            return {...prev, [cur.address]: parseInt(cur.balance)}
        }, {})
        setSecondData(filtered);
        console.log("fetched second data");
      } catch (error) {
        console.log("error on second", error);
      }
    };

  return (
    <div className="bg-[#202235]">
        <div className="px-6 py-8">
            <h1 className="text-4xl text-gray-100">K.NFT Dashboard</h1>
            <h3 className="text-xl text-gray-400">See if any ETH bluechip holders are also here.</h3>
        </div>
        <div className="w-4/5 text-blue-600 break-words">
            <br />
            {`Intersecting #: ${intersectionData.length}`}
            {/* {JSON.stringify(secondData[0])} */}
        </div>
    </div>
  );
};

export default Home;
