const NFTDetailsTwin = ({ textOne, textTwo, sub, isFirst, emphasize }) => {
    return (
        <div className={`w-full flex mt-4 text-center ${ isFirst ? "mt-4" : "mt-8" }`}>
            <div className="w-1/2 flex flex-col items-center justify-between">
                <div className="max-w-full h-full flex items-center">
                    <div className={`font-bold text-3xl break-words overflow-hidden ${emphasize ? "text-[#6F4FF2]" : ""}`}>{textOne}</div>
                </div>
                <div className="w-5/6 text-sm opacity-50">{sub}</div>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-between">
                <div className="max-w-full h-full flex items-center">
                    <div className={`font-bold text-3xl break-words overflow-hidden ${emphasize ? "text-[#6F4FF2]" : ""}`}>{textTwo}</div>
                </div>
                <div className="w-5/6 text-sm opacity-50">{sub}</div>
            </div>
        </div>
    );
}

export default NFTDetailsTwin;