import Footer from "./Footer";

const style = {
    wrapper: `w-full flex flex-col items-center justify-center my-4`,
    resetText: `text-white underline select-none hover:text-[#F9B035] hover:cursor-pointer`,
    switcherText: `text-gray-100 underline select-none hover:text-[#F9B035] hover:cursor-pointer`,
}

const PairSelectorSwitcher = ({ isPairClicked, showSelector, setShowSelector, resetSearch }) => {
    return (
        <div className={style.wrapper}>
            {isPairClicked ? <div className={style.resetText} onClick={() => resetSearch()}>(Click here to RESET)</div> : (
            <>
                <div
                className={style.switcherText}
                onClick={() => setShowSelector((prev) => !prev)}
                >
                    {!showSelector
                        ? "...or try your own pair!"
                        : "...return to given pairs"}
                </div>

                <div className="text-gray-500 text-sm">
                    (Even between chains! Thx to{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.covalenthq.com/docs/api/#/0/0/USD/1?utm_source=MutualNFT"
                    >
                        Covalent
                    </a>{" "}
                    🚀)
                </div>
            </>
            )}

            <Footer />
        </div>
    );
}

export default PairSelectorSwitcher;