const NFTDetailsSolo = ({ text, sub, isFirst, emphasize }) => {
    return (
        <div className={`w-full flex justify-center text-center ${ isFirst ? "mt-4" : "mt-8" }`} >
            <div className={`w-4/5 flex flex-col items-center justify-between ${ emphasize ? "bg-[#6F4FF2] rounded-xl py-1" : ""}`}>
                <div className="h-full flex items-center">
                    <div className="font-bold text-3xl">{ text }</div>
                </div>
                <div className="text-sm opacity-50">{ sub }</div>
            </div>
        </div>
    );
}


export default NFTDetailsSolo;