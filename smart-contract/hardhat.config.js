require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/wYWZjA8MDbe0KjSZ1n1wFXq-JPneMAtb',
      accounts: ['026191b235074923d04294d40118822bba3a4d979444d2a3625847d1128b15a5'],
    },
  },
};