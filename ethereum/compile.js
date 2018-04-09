const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
// Delete compiled contracts build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
// since we have two contracts in source file, output will have two contract objects
const output = solc.compile(source, 1).contracts;
// Re-create build folder again
// ensureDir checks to see if a dir exists and if not creates it
fs.ensureDirSync(buildPath);

// loop over the contracts in output and write them to two separate files
for(let contract in output){
  fs.outputJsonSync(
    // provide the path to each contract json file
    path.resolve(buildPath, contract.replace(':', '')+'.json'),
    // actual contents that we want to write to the json file
    output[contract]
  );
}