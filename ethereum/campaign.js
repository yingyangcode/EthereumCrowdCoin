import web3 from './web3';
import Campaign from './build/Campaign.json';

export default (address) => {
  // create instance of a campaign and return it
  // that instance will point at the address provided by the arg
  return new web3.eth.Contract(
    JSON.parse(Campaign.interface),
    address
  );
};