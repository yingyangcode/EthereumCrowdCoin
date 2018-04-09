import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2ff3671F722CC9773E4e16BDf2Cd86522e2CBcEd'
);

export default instance;