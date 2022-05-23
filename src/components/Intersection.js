import { useState, useEffect } from "react";
import axios from 'axios';
import axiosRetry from 'axios-retry';

const Intersection = () => {

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

}

export default Intersection;