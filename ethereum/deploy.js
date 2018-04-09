const keys = require('../config/keys');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const provider = new HDWalletProvider(
  keys.METAMASK_ACCOUNT_MNEMONIC,
  keys.RINKEBY_INFURA_URI
);

const web3 = new Web3(provider);

// async/await cannot be used outside of a func
// so that is why we r declaring a fuc here
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();