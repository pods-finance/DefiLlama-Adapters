const ADDRESSES = require('../helper/coreAssets.json')
const { sumTokensExport } = require('../helper/unwrapLPs');

module.exports = {
  methodology: "Counts all the tokens being used as collateral in the House of Reserves contracts that back $XOC. $XOC is the first decentralized stablecoin with peg close to the mexican (MXN) peso.",
  polygon: {
    tvl: sumTokensExport({
      tokensAndOwners: [
        [ADDRESSES.polygon.WETH_1, '0xd411BE9A105Ea7701FabBe58C2834b7033EBC203'],
        [ADDRESSES.polygon.WETH_1, '0x09dFC327364701d73683aCe049B8A5a8Ea27F3E8'],
        [ADDRESSES.polygon.WBTC,'0x983A0eC44bf1BB11592a8bD5F91f05adE4F44D81'],
        ['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270','0xdB9Dd25660240415d95144C6CE4f21f00Edf8168']
      ]
    })
  },
  bsc: {
    tvl: sumTokensExport({
      tokensAndOwners: [
        [ADDRESSES.bsc.ETH,'0xd411BE9A105Ea7701FabBe58C2834b7033EBC203'],
        [ADDRESSES.bsc.WBNB,'0x070ccE6887E70b75015F948b12601D1E759D2024']
      ]
    })
  },
}