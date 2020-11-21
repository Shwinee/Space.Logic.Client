const fetch = require('node-fetch');
const readline = require('readline');
const multi = require('./sendRecive');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var name;
rl.question('What is your name? ', (answer) => {
  // TODO: Log the answer in a database
  name = answer;
  console.log("Hello there "+name);
  rl.question('What do you want your job to be? [scientist, gardener, worker] ', (answer) => {
    //send
    var pass = "lukeiscool";
    var newname = name;
    var lobby = 1;
    var job = answer;

    const data = { pass, name, lobby, job };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch('https://poggame.herokuapp.com/api', options);
    rl.question('type lp to list players ', (answer) => {
      multi.getdata();
    });
  });
});
