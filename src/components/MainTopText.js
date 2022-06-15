const style = {
    wrapper: `flex flex-col min-w-full mt-4 text-center items-center`,
    title: `text-3xl font-bold w-3/5 text-gray-100`,
    subtitleOne: `text-lg w-3/5 text-gray-400 -mt-1`,
    subtitleTwo: `text-lg w-3/5 text-gray-400 -mt-4`
}

const MainTopText = ({ isSearching, isPairClicked, pairText }) => {
    return (
        <div className={style.wrapper}>
            {/* 1. If search in progress show 'loading'
                2. If NOT searching,
                    2-1. If NOT viewing pair, show main text
                    2-1. If viewing pair, show pairText */}
            <h2 className={style.title}>
                {isSearching ? (
                    <div className="animate-bounce">Loading ⌛️</div>
                ) : !isPairClicked ? (
                    "Find *mutual* between bluechips."
                ) : (
                    <div className="break-words overflow-hidden">{pairText}</div>
                )}
            </h2>

            {/* Show subtitle when NOT showing pair */}
            {isPairClicked ? null : (
                <>
                    <p className={style.subtitleOne}>
                    Collectors are always on the move. Check if they own both projects.
                    </p>
                    <p className={style.subtitleTwo}>
                    잘 나가는 NFT 프로젝트의 홀더들이, 또 무엇을 많이 보유하고 있을까?
                    </p>
                </>
            )}
      </div>
    );
}


export default MainTopText;