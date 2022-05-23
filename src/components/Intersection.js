import { useState, useEffect } from "react";
import axios from 'axios';
import axiosRetry from 'axios-retry';
import NFTDetails from "./NFTDetails";

const Intersection = ({ setIsSearching, LoadingCharacter, setPairText, chain, contract }) => {

    /*** When using this template, PLEASE CHANGE below ***/
    const API_KEY = "ckey_6bf60a7bf22d4a309dbe74f3c5c"; // Change to your own API_KEY
    const PAGE_SIZE = 100000; // Hard-coded to control response time during dev. Make this dynamic using Covalent API ('page-size' param) for your own use! 

    // Comparing project A vs B (between any chain, any project)
    const [firstChain, ] = useState(chain[0]);
    const [firstContract, ] = useState(contract[0]); 
    const [firstData, setFirstData] = useState(null);
    const [firstDetail, setFirstDetail] = useState({contract_name: null, contract_ticker_symbol: null, total_supply: null});
    const [firstMarket, setFirstMarket] = useState(null);

    const [secondChain, ] = useState(chain[1]);
    const [secondContract, ] = useState(contract[1]); 
    const [secondData, setSecondData] = useState(null);
    const [secondDetail, setSecondDetail] = useState({contract_name: null, contract_ticker_symbol: null, total_supply: null});
    const [secondMarket, setSecondMarket] = useState(null);

    const [intersectionData, setIntersectionData] = useState(null);
    const [intersectionCounter, setIntersectionCounter] = useState([0, 0]);
    const [intersectionWhale, setIntersectionWhale] = useState({});

    const [whaleData, setWhaleData] = useState({});


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
            console.log("Intersection Started");

            let tempIntersect = []; // array of matching owners' address
            let tempCounterA = 0;
            let tempCounterB = 0;

            // 1 | 2-5 | 6-10 | 11-20 | 21-30 | 31-50 | 51-99 | 100+
            function whaleChecker(set, item) {
                if (item === 1) set['1'] += 1;
                else if (item <= 5) set['2-5'] +=1;
                else if (item <= 10) set['6-10'] +=1;
                else if (item <= 20) set['11-20'] +=1;
                else if (item <= 30) set['21-30'] +=1;
                else if (item <= 50) set['31-50'] +=1;
                else if (item <= 99) set['51-99'] +=1;
                else if (item >= 100) set['100+'] +=1;

                return set;
            }
            let tempWhaleDataA = {"1": 0, "2-5": 0, "6-10": 0, "11-20": 0, "21-30": 0, "31-50": 0, "51-99": 0, "100+": 0}
            let tempWhaleDataB = {"1": 0, "2-5": 0, "6-10": 0, "11-20": 0, "21-30": 0, "31-50": 0, "51-99": 0, "100+": 0}

            Object.keys(firstData).map(each => {
                if (each in secondData) {
                    tempIntersect.push(each);
                    tempCounterA += parseInt(firstData[each]);
                    tempCounterB += parseInt(secondData[each]);
                }
                tempWhaleDataA = whaleChecker(tempWhaleDataA, parseInt(firstData[each]));
                return true;
            });

            Object.keys(secondData).map(each => {
                tempWhaleDataB = whaleChecker(tempWhaleDataB, parseInt(firstData[each]));
                return true;
            });

            setIntersectionData(tempIntersect);
            setIntersectionCounter([tempCounterA, tempCounterB]);

            console.log(JSON.stringify(tempWhaleDataA));
            console.log(JSON.stringify(tempWhaleDataB));
            setWhaleData([tempWhaleDataA, tempWhaleDataB]);

            setIsSearching(false);
            setPairText(firstDetail['contract_name'] + " vs " + secondDetail['contract_name']);

            console.log("Intersection Complete: ", tempIntersect.length);
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

        try {
            const resp2 = await axios.get(
                `https://api.covalenthq.com/v1/${id}/nft_market/collection/${contract}/?key=${API_KEY}`
            );
            setFirstMarket(resp2.data.data.items);
            console.log('Market data (1st)', JSON.stringify(resp2.data.data.items[0]['collection_name']));
        } catch (error) {
            setFirstMarket(null);
            console.log("Error when fetching market data (1st)", error);
        }
      } catch (error) {
        setFirstMarket(null);
        console.log("Error when fetching token holders (1st)", error);
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

        try {
            const resp2 = await axios.get(
                `https://api.covalenthq.com/v1/${id}/nft_market/collection/${contract}/?key=${API_KEY}`
            );
            setSecondMarket(resp2.data.data.items);
            console.log('Market data (2nd)', JSON.stringify(resp2.data.data.items[0]['collection_name']));
        } catch (error) {
            setSecondMarket(null);
            console.log("Error when fetching market data (2nd)", error);
        }
      } catch (error) {
        console.log("Error when fetching token holders (2nd)", error);
      }
    };

    return (
      <div className="text-gray-100 flex justify-center items-center">
        {intersectionData == null ? (
          <img
            src={LoadingCharacter}
            alt="loading"
            className="h-24 animate-spin"
          />
        ) : (
          <NFTDetails
            chain={[firstChain, secondChain]}
            contract={[firstContract, secondContract]}
            data={[firstData, secondData]}
            detail={[firstDetail, secondDetail]}
            intersectionData={intersectionData}
            intersectionCounter={intersectionCounter}
            marketData={[firstMarket, secondMarket]}
            whaleData={whaleData}
          />
        )}
      </div>
    );
}

export default Intersection;