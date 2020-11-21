const fetch = require('node-fetch');

async function getdata(){
  const response = await fetch('https://poggame.herokuapp.com/api');
  const data = await response.json();

  for (item of data ){
    if(item.name !== ""){
      console.log(item.name);
    }
  }
}

module.exports = { getdata };
