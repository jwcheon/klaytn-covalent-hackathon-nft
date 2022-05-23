import { useState, useEffect } from "react";
import axios from 'axios';
import axiosRetry from 'axios-retry';

import { mainDummySet, mainDummySetPairs } from "../resources/main-dummy-set";


const Home = () => {
    /*** When using this template, PLEASE CHANGE below ***/
    const API_KEY = "ckey_6bf60a7bf22d4a309dbe74f3c5c"; // Change to your own API_KEY
    const PAGE_SIZE = 10; // Hard-coded to control response time during dev. Make this dynamic using Covalent API ('page-size' param) for your own use! 


    // Comparing project A vs B (between any chain, any project)
    const [firstChain, setFirstChain] = useState(8217);
    const [firstContract, setFirstContract] = useState("0xc6fc271db0ecc36aa43653041476e2095a817956"); // BAYC
    const [firstData, setFirstData] = useState(null);
    const [firstDetail, setFirstDetail] = useState({contract_name: null, contract_ticker_symbol: null, total_supply: null});

    const [secondChain, setSecondChain] = useState(8217);
    const [secondContract, setSecondContract] = useState("0x46dbdc7965cf3cd2257c054feab941a05ff46488"); // MAYC
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
            console.log("Loading intersection...")
            const intersect = Object.keys(firstData).reduce((prev, cur)=> cur in secondData ? [...prev, cur] : prev ,[])
            setIntersectionData(intersect);
            console.log("Intersection Complete", intersect.length);
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
        console.log("fetched first data", Object.keys(filtered).length);
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
        console.log("fetched second data", Object.keys(filtered).length);
      } catch (error) {
        console.log("error on second", error);
      }
    };

  return (
    <div className="bg-[#202235] flex flex-col">
        <div className="px-6 py-8">
            <h1 className="text-4xl text-gray-100">K.NFT Dashboard</h1>
            <h3 className="text-xl text-gray-400">See if any ETH bluechip holders are also here.</h3>
        </div>

        <div className="flex flex-col min-w-full my-6 text-center items-center">
            <h2 className="text-3xl font-bold w-3/5 text-gray-100">Find mutual between bluechips.</h2>
            <p className="text-lg w-3/5 text-gray-400 mt-2">Collectors are always on the move. Check if they own both projects.</p>
        </div>

        <div className="min-w-full flex justify-center">
            <div className="flex flex-wrap w-5/6 justify-center items-center text-gray-200 gap-x-4 gap-y-4">
                {
                    mainDummySetPairs.map((each, i) => (
                    <div key={i} className="bg-[#24293C] rounded-xl flex flex-col md:basis-1/4 sm:basis-1/3 xs:basis-1/2">
                        <div className="flex justify-center p-6">
                            <img src={require( `../resources/nft-projects/${mainDummySet[each[0]]['img']}` )} alt={mainDummySet[each[0]]['title']} className="bg-black rounded-full h-24 w-24" />
                            <img src={require( `../resources/nft-projects/${mainDummySet[each[1]]['img']}` )} alt={mainDummySet[each[1]]['title']} className="bg-black rounded-full h-24 w-24 -ml-7" />
                        </div>
                        <div className="flex flex-col items-center bg-[#2F3447] rounded-b-xl p-3">
                            <div className="-mt-2 text-[0.5rem] w-full text-center font-medium ">{`${mainDummySet[each[0]]['title']}(${mainDummySet[each[0]]['chain']}) | ${mainDummySet[each[1]]['title']}(${mainDummySet[each[1]]['chain']})`}</div>
                            <div className="w-3/5 bg-[#6F4FF2] rounded-xl mt-1 px-2 py-1 text-sm text-center">Mutuals?</div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-8">
            <div className="text-gray-100 underline">...or try your own pair!</div>
            <div className="text-gray-500 text-sm">(Even between chains! Thx to Covalent 🚀)</div>
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
