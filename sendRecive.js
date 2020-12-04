const fetch = require('node-fetch');

async function getdata(){
  const response = await fetch('http://localhost:3000/api');
  const data = await response.json();

  for (item of data ){
    if(item.info.name !== ""){
      console.log(`${item.info.name}-${item.info.job}`);
    }
  }
}
async function getgamedata(){
  const response = await fetch('http://localhost:3000/game');
  const data = await response.json();

  console.log();
}

module.exports = { getdata, getgamedata };
