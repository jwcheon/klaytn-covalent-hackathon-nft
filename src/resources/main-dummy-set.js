/**
 * Ethereum (1)
 * Azuki 0xed5af388653567af2f388e6224dc7c4b3241c544
 * BAYC 0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d
 * MAYC 0x60e4d786628fea6478f785a6d7e704777c86a7c6
 * Moonbirds 0x23581767a106ae21c074b2276d25e5c3e136a68b
 * 
 * Klaytn (8217)
 * Klaydice 0xc6fc271db0ecc36aa43653041476e2095a817956
 * Metatoydragonz 0x46dbdc7965cf3cd2257c054feab941a05ff46488
 * Sunmiya 0x8f5aa6b6dcd2d952a22920e8fe3f798471d05901
 * HappierTown 0x4e24762be544f0af9235ffad146f39bbe0ec7800
 * 
 * Polygon (137)
 * CryptoUnicorns Market 0xdc0479cc5bba033b3e7de9f178607150b3abce1f
* */

const mainDummySet = [
    {title: "Azuki", chain: "ETH", chainNum: 1, img: 'azuki.jpeg', contract: "0xed5af388653567af2f388e6224dc7c4b3241c544" },
    {title: "BAYC", chain: "ETH", chainNum: 1, img: 'bayc.png', contract: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d" },
    {title: "MAYC", chain: "ETH", chainNum: 1, img: 'mayc.png', contract: "0x60e4d786628fea6478f785a6d7e704777c86a7c6" },
    {title: "Moonbirds", chain: "ETH", chainNum: 1, img: 'moonbirds.png', contract: "0x23581767a106ae21c074b2276d25e5c3e136a68b" },
    {title: "Klaydice", chain: "KLAY", chainNum: 8217, img: 'klaydice.png', contract: "0xc6fc271db0ecc36aa43653041476e2095a817956" },
    {title: "MetatoyDragonz", chain: "KLAY", chainNum: 8217, img: 'metatoydragonz.gif', contract: "0x46dbdc7965cf3cd2257c054feab941a05ff46488" },
    {title: "Sunmiya", chain: "KLAY", chainNum: 8217, img: 'sunmiya.gif', contract: "0x8f5aa6b6dcd2d952a22920e8fe3f798471d05901" },
    {title: "HappierTown", chain: "KLAY", chainNum: 8217, img: 'happiertown.gif', contract: "0x4e24762be544f0af9235ffad146f39bbe0ec7800" },
    {title: "CryptoUnicorns", chain: "MATIC", chainNum: 137, img: 'cryptounicorns.png', contract: "0xdc0479cc5bba033b3e7de9f178607150b3abce1f" },
];

const mainDummySetPairs = [
    [5,6], [0,3], [1,2], [1,3], [2,8], [4,7]
]

export { mainDummySet, mainDummySetPairs };