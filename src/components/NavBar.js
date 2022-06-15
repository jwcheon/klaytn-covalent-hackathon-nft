const style = {
    wrapper: `flex px-6 pt-8 pb-2 items-center space-x-2`,
    title: `text-4xl text-gray-100 select-none font-extrabold hover:text-[#F9B035] hover:cursor-pointer`,
    subtitle: `text-xl text-gray-400 select-none`,
}

const NavBar = ({ LoadingCharacter, resetSearch }) => {
    return (
        <div className={style.wrapper}>
            <div>
                <span
                    onClick={() => resetSearch()}
                    className={style.title}
                >
                    Mutual NFT
                </span>
                <h3 className={style.subtitle}>
                    Klaytn-Covalent Hackathon.
                </h3>
            </div>
            <div>
                <img src={LoadingCharacter} alt="Loading Character Image" className="h-14" />
            </div>
        </div>
    );
}


export default NavBar;