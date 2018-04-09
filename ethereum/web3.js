const keys = require('../config/keys');
import Web3 from 'web3';

let web3;

if(typeof window != 'undefined' && typeof window.web3 !== 'undefined'){
  // we are in the browser
  web3 = new Web3(window.web3.currentProvider);
}else {
  // We are on the server  *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    keys.RINKEBY_INFURA_URI
  );

  web3 = new Web3(provider);
}

export default web3;