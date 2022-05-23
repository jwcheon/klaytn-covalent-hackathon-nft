# Mutual NFT Searcher (Cross-chain Supported)

This project was created with [Covalent API](https://www.covalenthq.com/docs/api/#/0/0/USD/1), React, and Tailwind CSS for the [Klaytn-Covalent Unified Hackathon Bounty 1: NFT Track](https://gitcoin.co/issue/covalenthq/covalent-gitcoin-bounties/26/100028849).

The purpose of this project is to easily compare any two NFT projects in detail. Currently KLAY, ETH, MATIC, BSC is supported in this project. But using Covalent API, it can be expanded even more easily.

A simple whale counter is also implemented.


## Check it out in action 🚀

[>> Mutual NFT Searcher by @jwcheon <<](https://mutual-nft-searcher.netlify.app/)


## Special Feature : 'Mutuals'

`Collectors are always on the move. Check if they own both projects.`

One special feature here is the 'mutuals' statistics. This project helps users to easily identify if there are any holders that own both bluechip NFT A and B.

<img width="1017" alt="image" src="https://user-images.githubusercontent.com/16380369/169906428-16395517-5911-4a3b-8efb-1472d276eddb.png">

- How many Sunmiya holders also have Metakongz?
- How many BAYC holders also have MAYC?
- ...Or anything else you wish to compare!

### A) Suggested Pairs

- Simply click one of the six suggested pairs to get a hold of the idea.

<img width="311" alt="image" src="https://user-images.githubusercontent.com/16380369/169906584-7b258498-d16d-4aa3-abf6-0b72a4c47d35.png">

### B) Manual Pairs

- Or try out any two pairs of NFT projects. And that in cross-chain!

<img width="296" alt="image" src="https://user-images.githubusercontent.com/16380369/169906655-fc4f39f6-ee38-4803-b307-2813657e6fcf.png">
<img width="439" alt="image" src="https://user-images.githubusercontent.com/16380369/169906688-6ba31454-8ed9-4036-88ed-540a9549b086.png">


## Features in details

### 1) Quick Look

- Check out project name, chain, current total supply, unique owners

<img width="1410" alt="image" src="https://user-images.githubusercontent.com/16380369/169907005-00c385c5-bda4-4981-8e1c-3e3d3f4233f2.png">

### 2) Mutuals

- See how many holders have both projects! (= 'mutuals')
- Also check how many in total the mutuals poccess atm.
- +) The % Mutuals Hold from Total Supply & Ratio of Mutual Owners / Unique Owners

<img width="1414" alt="image" src="https://user-images.githubusercontent.com/16380369/169907163-199d38d9-82a2-445e-b437-f8579dcd8100.png">

### 3) Whale Check

- Always important to check how distributed the project is.
- From holders of just 1 to 100+ / shown with 8 segments.

<img width="1401" alt="image" src="https://user-images.githubusercontent.com/16380369/169907426-19849127-b2e7-440b-989f-641904abf3b2.png">

### 4) Price History

- Know how much it's worth! (w/ FP of average 7days)
- See how many unique IDs were traded today.
- And the volume of course!

<img width="1419" alt="image" src="https://user-images.githubusercontent.com/16380369/169907544-74e9fcad-1f6d-440f-84fd-269b466c2878.png">

### 5) Plus Details

- Anything else goes here :)

<img width="1404" alt="image" src="https://user-images.githubusercontent.com/16380369/169907683-8d08890e-f9db-48fb-966d-129d4bda6bc6.png">


## Installation

- Just run `npm install` after downloading the project to get started.
- Please change API_KEY to your own. (file location: `/src/components/Intersection.js`)
