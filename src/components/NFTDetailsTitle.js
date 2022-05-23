const NFTDetailsTitle = ({ text, isMarginTop }) => {
    return (
        <div className={`w-full flex justify-start text-white text-2xl font-semibold pb-4 border-b border-gray-400 border-opacity-50
            ${isMarginTop ? "mt-24" : "" }`
        }>
            { text }
        </div>
    );
}


export default NFTDetailsTitle;