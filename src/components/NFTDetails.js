import NFTDetailsTitle from "./NFTDetailsTitle";
import NFTDetailsSolo from "./NFTDetailsSolo";
import NFTDetailsTwin from "./NFTDetailsTwin";

const NFTDetails = (props) => {

    let chainOne = checkChain(props.chain[0]);
    let chainTwo = checkChain(props.chain[1]);

    function checkChain(chainNum) {
        let CN = parseInt(chainNum);
        if (CN === 1) {
            return "ETH";
        } else if (CN === 137) {
            return "MATIC";
        } else if (CN === 56) {
            return "BSC";
        } else if (CN === 8217) {
            return "KLAY";
        } else {
            return "null";
        }
    }

    return (
        <section className="mt-4 px-6 w-full">
            <div className="flex flex-col items-center">

                {/* {
                    props.marketData[0] !== null && props.marketData[1] !== null ? 
                    <div className="w-full flex justify-center">
                        <img src={props.marketData[0][0]['first_nft_image_256']} alt={props.detail[0].contract_name} />
                        <img src={props.marketData[1][0]['first_nft_image_256']} alt={props.detail[1].contract_name} />
                    </div>
                    : null
                } */}

                <NFTDetailsTitle text={`Quick Look .`} isMarginTop={false} />
                <NFTDetailsTwin textOne={props.detail[0].contract_name} textTwo={props.detail[1].contract_name} sub={`NFT Project`} isFirst={true} emphasize={true} />
                <NFTDetailsTwin textOne={chainOne} textTwo={chainTwo} sub={`Chain`} />             
                <NFTDetailsTwin textOne={props.detail[0].total_supply} textTwo={props.detail[1].total_supply} sub={`Total Supply`} />
                <NFTDetailsTwin textOne={Object.keys(props.data[0]).length} textTwo={Object.keys(props.data[1]).length} sub={`Unique Owners`} />

                <NFTDetailsTitle text={`Mutuals ?`} isMarginTop={true} />
                <NFTDetailsSolo text={props.intersectionData.length} sub={`Mutual Owners`} isFirst={true} emphasize={true} />
                <div className="mt-2 opacity-60">'Mutuals' : Holders that owns both projects!</div>
                <NFTDetailsTwin textOne={props.intersectionCounter[0]} textTwo={props.intersectionCounter[1]} sub={`Total # of NFTs Mutual Owners Hold`} emphasize={true} />
                <NFTDetailsTwin
                    textOne={`${(Math.round(props.intersectionCounter[0]/props.detail[0].total_supply*10000))/100}%`}
                    textTwo={`${(Math.round(props.intersectionCounter[1]/props.detail[1].total_supply*10000))/100}%`}
                    sub={`The % Mutuals Hold from Total Supply`} />
                <NFTDetailsTwin
                    textOne={`${Math.round((props.intersectionData.length/Object.keys(props.data[0]).length)*10000)/100}%`}
                    textTwo={`${Math.round((props.intersectionData.length/Object.keys(props.data[1]).length)*10000)/100}%`}
                    sub={`Ratio of : Mutual Owners / Unique Owners`} />

                <NFTDetailsTitle text={`Whale Check .`} isMarginTop={true} />
                <NFTDetailsTwin textOne={`${props.whaleData[0]['100+']} (${Math.round(props.whaleData[0]['100+'] / Object.keys(props.data[0]).length * 10000) / 100}%)`} textTwo={`${props.whaleData[1]['100+']} (${Math.round(props.whaleData[1]['100+'] / Object.keys(props.data[1]).length * 10000) / 100}%)`} sub={`Holder of 100+ (Cur / Unique)`} isFirst={true} emphasize={true} />
                <NFTDetailsTwin textOne={`${props.whaleData[0]['51-99']} (${Math.round(props.whaleData[0]['51-99'] / Object.keys(props.data[0]).length * 10000) / 100}%)`} textTwo={`${props.whaleData[1]['51-99']} (${Math.round(props.whaleData[1]['51-99'] / Object.keys(props.data[1]).length * 10000) / 100}%)`} sub={`Holder of 51-99 (Cur / Unique)`} emphasize={true} />
                <NFTDetailsTwin textOne={`${props.whaleData[0]['31-50']} (${Math.round(props.whaleData[0]['31-50'] / Object.keys(props.data[0]).length * 10000) / 100}%)`} textTwo={`${props.whaleData[1]['31-50']} (${Math.round(props.whaleData[1]['31-50'] / Object.keys(props.data[1]).length * 10000) / 100}%)`} sub={`Holder of 31-50 (Cur / Unique)`} emphasize={true} />
                <NFTDetailsTwin textOne={`${props.whaleData[0]['21-30']} (${Math.round(props.whaleData[0]['21-30'] / Object.keys(props.data[0]).length * 10000) / 100}%)`} textTwo={`${props.whaleData[1]['21-30']} (${Math.round(props.whaleData[1]['21-30'] / Object.keys(props.data[1]).length * 10000) / 100}%)`} sub={`Holder of 21-30 (Cur / Unique)`} />
                <NFTDetailsTwin textOne={`${props.whaleData[0]['11-20']} (${Math.round(props.whaleData[0]['11-20'] / Object.keys(props.data[0]).length * 10000) / 100}%)`} textTwo={`${props.whaleData[1]['11-20']} (${Math.round(props.whaleData[1]['11-20'] / Object.keys(props.data[1]).length * 10000) / 100}%)`} sub={`Holder of 11-20 (Cur / Unique)`} />
                <NFTDetailsTwin textOne={`${props.whaleData[0]['6-10']} (${Math.round(props.whaleData[0]['6-10'] / Object.keys(props.data[0]).length * 10000) / 100}%)`} textTwo={`${props.whaleData[1]['6-10']} (${Math.round(props.whaleData[1]['6-10'] / Object.keys(props.data[1]).length * 10000) / 100}%)`} sub={`Holder of 6-10 (Cur / Unique)`} />
                <NFTDetailsTwin textOne={`${props.whaleData[0]['2-5']} (${Math.round(props.whaleData[0]['2-5'] / Object.keys(props.data[0]).length * 10000) / 100}%)`} textTwo={`${props.whaleData[1]['2-5']} (${Math.round(props.whaleData[1]['2-5'] / Object.keys(props.data[1]).length * 10000) / 100}%)`} sub={`Holder of 2-5 (Cur / Unique)`} />
                <NFTDetailsTwin textOne={`${props.whaleData[0]['1']} (${Math.round(props.whaleData[0]['1'] / Object.keys(props.data[0]).length * 10000) / 100}%)`} textTwo={`${props.whaleData[1]['1']} (${Math.round(props.whaleData[1]['1'] / Object.keys(props.data[1]).length * 10000) / 100}%)`} sub={`Holder of 1 (Cur / Unique)`} />
                <NFTDetailsTwin 
                    textOne={
                        props.whaleData[0]['100+']
                        + props.whaleData[0]['51-99']
                        + props.whaleData[0]['31-50']
                        + props.whaleData[0]['21-30']
                        + props.whaleData[0]['11-20']
                        + props.whaleData[0]['6-10']
                        + props.whaleData[0]['2-5']
                        + props.whaleData[0]['1']} 
                    textTwo={
                        props.whaleData[1]['100+']
                        + props.whaleData[1]['51-99']
                        + props.whaleData[1]['31-50']
                        + props.whaleData[1]['21-30']
                        + props.whaleData[1]['11-20']
                        + props.whaleData[1]['6-10']
                        + props.whaleData[1]['2-5']
                        + props.whaleData[1]['1']} sub={`Total Holders (SUM)`} />

                <NFTDetailsTitle text={`Price History .`} isMarginTop={true} />
                <NFTDetailsTwin
                    textOne={props.marketData[0] !== null ? props.marketData[0][0]['floor_price_quote_7d'] : "N/A"}
                    textTwo={props.marketData[1] !== null ? props.marketData[1][0]['floor_price_quote_7d'] : "N/A"}
                    sub={`Floor Price 7days (USD)`} isFirst={true} emphasize={true} /> 
                <NFTDetailsTwin
                    textOne={props.marketData[0] !== null ? props.marketData[0][0]['unique_token_ids_sold_count_day'] : "N/A"}
                    textTwo={props.marketData[1] !== null ? props.marketData[1][0]['unique_token_ids_sold_count_day'] : "N/A"}
                    sub={`Unique Token IDs Sold Today`} emphasize={true} />  
                <NFTDetailsTwin
                    textOne={props.marketData[0] !== null ? props.marketData[0][0]['volume_quote_day'] : "N/A"}
                    textTwo={props.marketData[1] !== null ? props.marketData[1][0]['volume_quote_day'] : "N/A"}
                    sub={`Volume (Day)`} />  
                <NFTDetailsTwin
                    textOne={props.marketData[0] !== null ? props.marketData[0][0]['average_volume_quote_day'] : "N/A"}
                    textTwo={props.marketData[1] !== null ? props.marketData[1][0]['average_volume_quote_day'] : "N/A"}
                    sub={`Average Volume (Day)`} />  
                {/* <NFTDetailsTwin textOne={props.marketData[0]} textTwo={props.marketData[1] ? props.marketData[1][0]['unique_token_ids_sold_count_day'] : "N/A"} sub={`Unique Token IDs Sold Today`} isFirst={true} />   */}

                <NFTDetailsTitle text={`Plus Details .`} isMarginTop={true} />
                <NFTDetailsTwin textOne={props.detail[0].contract_ticker_symbol} textTwo={props.detail[1].contract_ticker_symbol} sub={`Ticker Symbol`} isFirst={true} />
                <NFTDetailsTwin textOne={props.chain[0]} textTwo={props.chain[1]} sub={`Chain #`} />
            </div>
        </section>
    );
}

export default NFTDetails;
