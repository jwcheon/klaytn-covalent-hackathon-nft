import { mainDummySet, mainDummySetPairs } from "../resources/main-dummy-set";

const MainDummy = () => {
  return (
    <div className="min-w-full flex justify-center">
      <div className="flex flex-wrap w-5/6 justify-center items-center text-gray-200 gap-x-4 gap-y-4">
        {mainDummySetPairs.map((each, i) => (
          <div
            key={i}
            className="bg-[#24293C] rounded-xl flex flex-col md:basis-1/4 sm:basis-1/3 xs:basis-1/2"
          >
            <div className="flex justify-center p-6">
              <img
                src={require(`../resources/nft-projects/${
                  mainDummySet[each[0]]["img"]
                }`)}
                alt={mainDummySet[each[0]]["title"]}
                className="bg-black rounded-full h-24 w-24"
              />
              <img
                src={require(`../resources/nft-projects/${
                  mainDummySet[each[1]]["img"]
                }`)}
                alt={mainDummySet[each[1]]["title"]}
                className="bg-black rounded-full h-24 w-24 -ml-7"
              />
            </div>
            <div className="flex flex-col items-center bg-[#2F3447] rounded-b-xl p-3">
              <div className="-mt-2 text-[0.5rem] w-full text-center font-medium ">{`${
                mainDummySet[each[0]]["title"]
              }(${mainDummySet[each[0]]["chain"]}) | ${
                mainDummySet[each[1]]["title"]
              }(${mainDummySet[each[1]]["chain"]})`}</div>
              <div className="w-3/5 bg-[#6F4FF2] rounded-xl mt-1 px-2 py-1 text-sm text-center font-medium select-none hover:opacity-70 hover:cursor-pointer">
                Mutuals?
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainDummy;