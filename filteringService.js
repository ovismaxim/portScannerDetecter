const fs = require('fs');
const log = require('./logger');

sources = {};

async function createNewLog(dest,message){

  sources[dest] = {
    timeStamp : new Date().getTime(),
    attempt : 1
  }

  log.info(`${message} - ${dest}`);
  return false;
}

async function checkForAttack(dest){

  const currentTime = new Date().getTime();

  if(currentTime-sources[dest].timeStamp > 10000){
    return await createNewLog(dest,'Reseted ip timestemp');
  } 

  if(sources[dest].attempt < 5){
    sources[dest].attempt++;
    return false;
  }

  delete sources[dest];
  return true;
}

async function filterRequest(source, dest, port, payload){

  let attackDetected;

  attackDetected = sources[dest] ? await checkForAttack(dest) : await createNewLog(dest,'New ip log'); 

  attackDetected ? writePortScanAttempt(source, dest, port, payload) : writeLegitimateRequest(source, dest, port, payload);
}

function writePortScanAttempt(source, dest, port, payload){
  log.error(`Port scan attempt from ${source} to ${dest}:${port} with payload ${JSON.stringify(payload)}`);
  log.error('**ADD HISTORY HERE**');
}

function writeLegitimateRequest(source, dest, port, payload){
  log.info(`Legitimate request from ${source} to ${dest}:${port}`);
}

// Execute if ran directly for simple testing and debuging
if (typeof require !== 'undefined' && require.main === module) {

}

module.exports = filterRequest;