const fetch = require('node-fetch');
const readline = require('readline');
const multi = require('./sendRecive');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

var name;
var pass;

rl.question('Would you like to make an account (m), or sign in(s)? > ', (answer) => {
  if (answer == 'm'){
    //case make
    rl.question('What would you like your name to be? (!)you can not change this later(!) > ', (answer) => {
      const name = answer;
      rl.question('What would you like your password to be? (!)you can not change this later(!) > ', (answer) => {
        const pass = answer;

        const data = { name, pass };
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };
        fetch('https://epicpogname.herokuapp.com/new', options);
        var nv = true;
        var pv = true;
        valid(nv, pv);
      });
    });

  }
  if (answer == 's'){
      frickoffjs();
  }
});
async function frickoffjs(){
  var nv = false;
  var pv = false;
  const response = await fetch('https://epicpogname.herokuapp.com/players');
  const data = await response.json();
  rl.question('What is the name of your account? > ', (answer) => {
    const name = answer;
    rl.question('What is the password of your account? > ', (answer) => {
      const pass = answer;
      data.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
          if (key == 'name'){
            if (name == value){
              nv = true;
            }
          }
          if (key == 'pass'){
            if (pass == value){
              pv = true;
            }
          }
        });
      });
      valid(nv, pv);
    });
  });
}
function valid(name, pass){
  if (name == '1' && pass == '1'){
    console.clear();
    game();
  }else{
    console.log(`nah man thats wrong.`);
  }
}
function game(){
  //idea just put vars in the log functiuon lul
  console.log(`._________________________________________________.`);
  console.log(`|The Arc                      |            6:40 am|`);
  console.log(`|-----------------------------|-------------------|`);
  console.log(`|Ships fuel: 500,000kg        | (q) quit          |`);
  console.log(`|Ships power: 100             | (p) power info    |`);
  console.log(`|Ships oxygen: 80%            | (c) crew info     |`);
  console.log(`|                             | (pf) planet finder|`);
  console.log(`|                             | (r) reload        |`);
  console.log(`|_____________________________|___________________|`);
  input('main');
}
function input(gamemode){
  rl.question('>', (answer) => {
    var valid = 0;
    if (gamemode == 'pi'){
      var commands = ["b", "q"];
      commands.forEach((item, i) => {
        if (answer == item){
          valid = 1;
        }
      });

      if (answer == 'b'){
        console.clear();
        pf();
      }
      if (answer == 'q'){
        process.exit();
      }
      if (valid == 0){
        console.clear();
        pf();
      }
    }
    if (gamemode == 'main'){
      var commands = ["q", "p", "c", "pf", "r"];
      commands.forEach((item, i) => {
        if (answer == item){
          valid = 1;
        }
      });
      if (answer == 'q'){
        process.exit();
      }
      if (answer == 'p'){

      }
      if (answer == 'c'){

      }
      if (answer == 'pf'){
        pf();
      }
      if (answer == 'r'){
        game();
      }
      if (valid == 0){
        console.clear();
        game();
      }
    }
    if (gamemode == 'pf'){
      var commands = ["q", "p", "c", "pf", "r"];
      commands.forEach((item, i) => {
        if (answer == item){
          valid = 1;
        }
      });
      if (answer == 'q'){
        process.exit();
      }
      if (answer == 'a'){
        console.clear();
        showplanet('a');
      }
      if (answer == 'b'){
        console.clear();
        showplanet('b');
      }
      if (answer == 'c'){
        console.clear();
        showplanet('c');
      }
      if (answer == 'ba'){
        console.clear();
        game();
      }
      if (answer == 'r'){
        console.clear();
        pf();
      }
      if (valid == 0){
        console.clear();
        pf();
      }
      if (answer == 't'){
        var code = "only62";

        const data = { code };
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };
        fetch('https://epicpogname.herokuapp.com/planets', options);
      }
    }
  });
}
async function pf(){
  console.clear();
  const response = await fetch('https://epicpogname.herokuapp.com/planets');
  const data = await response.json();

  var thatwasfunny = 'A: ${a.name}                 ';

  var a;
  var b;
  var c;

  data.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
      if (value == 'a'){
        a = obj;
      }
      if (value == 'b'){
        b = obj;
      }
      if (value == 'c'){
        c = obj;
      }
    });
  });
  // var i = anchor.length;
  // for (i > 0; i--;){
  //
  // }
  var d;
  var ao = `|A: ${a.name}`;
  var bo = `|B: ${b.name}`;
  var co = `|C: ${c.name}`;
  var i = 3;
  d = Math.abs(ao.length - thatwasfunny.length);
  d++;
  for (d > -1; d--;){
    ao += ' ';
  }
  d = Math.abs(bo.length - thatwasfunny.length);
  d++;
  for (d > -1; d--;){
    bo += ' ';
  }
  d = Math.abs(co.length - thatwasfunny.length);
  d++;
  for (d > -1; d--;){
    co += ' ';
  }

  console.log(`._________________________________________________.`);
  console.log(`|The Arc's PLANET_FINDER      |            6:40 am|`);
  console.log(`|-----------------------------|-------------------|`);
  console.log(`|Level: 1                     | (q) quit          |`);
  console.log(`${ao}| (a) planet a info |`);
  console.log(`${bo}| (b) planet b info |`);
  console.log(`${co}| (c) plaent c info |`);
  console.log(`|                             | (r) reload        |`);
  console.log(`|                             | (ba) back         |`);
  console.log(`|_____________________________|___________________|`);
  input('pf');
}
async function showplanet(planet){
  var a;
  var b;
  var c;

  const response = await fetch('https://epicpogname.herokuapp.com/planets');
  const data = await response.json();
  data.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
      if (value == 'a'){
        a = obj;
      }
      if (value == 'b'){
        b = obj;
      }
      if (value == 'c'){
        c = obj;
      }
    });
  });
  var thatwasfunny = '                             ';
  var keys = ["metals", "life", "intelligentlife", "water", "danger", "known"];
  if (planet == 'a'){

    var cw = `|Water: ${a.info.water}`;
    d = Math.abs(cw.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      cw += ' ';
    }
    cw += '|';
    var cm = `|Metals: ${a.info.metals}`;
    d = Math.abs(cm.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      cm += ' ';
    }
    cm += '|';
    var cl = `|life: ${a.info.life}`;
    d = Math.abs(cl.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      cl += ' ';
    }
    cl += '|';
    var ci = `|Intelligent life: ${a.info.intelligentlife}`;
    d = Math.abs(ci.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      ci += ' ';
    }
    ci += '|';
    var cd = `|Danger: ${a.info.danger}`;
    d = Math.abs(cd.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      cd += ' ';
    }
    cd += '|';
    var ck = `|Known: ${a.info.known}`;
    d = Math.abs(ck.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      ck += ' ';
    }
    ck += '|';
    console.log(`._________________________________________________.`);
    console.log(`|The Arc's PLANET_FINDER - ${planet}  |            6:40 am|`);
    console.log(`|-----------------------------|-------------------|`);
    console.log(`${cw} (q) quit          |`);
    console.log(`${cm} (b) back          |`);
    console.log(`${cl}                   |`);
    console.log(`${ci}                   |`);
    console.log(`${cd}                   |`);
    console.log(`${ck}                   |`);
    console.log(`|_________________________________________________|`);

  }
  if (planet == 'b'){

    var cw = `|Water: ${b.info.water}`;
    d = Math.abs(cw.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      cw += ' ';
    }
    cw += '|';
    var cm = `|Metals: ${b.info.metals}`;
    d = Math.abs(cm.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      cm += ' ';
    }
    cm += '|';
    var cl = `|life: ${b.info.life}`;
    d = Math.abs(cl.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      cl += ' ';
    }
    cl += '|';
    var ci = `|Intelligent life: ${b.info.intelligentlife}`;
    d = Math.abs(ci.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      ci += ' ';
    }
    ci += '|';
    var cd = `|Danger: ${b.info.danger}`;
    d = Math.abs(cd.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      cd += ' ';
    }
    cd += '|';
    var ck = `|Known: ${b.info.known}`;
    d = Math.abs(ck.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      ck += ' ';
    }
    ck += '|';
    console.log(`._________________________________________________.`);
    console.log(`|The Arc's PLANET_FINDER - ${planet}  |            6:40 am|`);
    console.log(`|-----------------------------|-------------------|`);
    console.log(`${cw} (q) quit          |`);
    console.log(`${cm} (b) back          |`);
    console.log(`${cl}                   |`);
    console.log(`${ci}                   |`);
    console.log(`${cd}                   |`);
    console.log(`${ck}                   |`);
    console.log(`|_________________________________________________|`);

  }
  if (planet == 'c'){

    var cw = `|Water: ${c.info.water}`;
    d = Math.abs(cw.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      cw += ' ';
    }
    cw += '|';
    var cm = `|Metals: ${c.info.metals}`;
    d = Math.abs(cm.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      cm += ' ';
    }
    cm += '|';
    var cl = `|life: ${c.info.life}`;
    d = Math.abs(cl.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      cl += ' ';
    }
    cl += '|';
    var ci = `|Intelligent life: ${c.info.intelligentlife}`;
    d = Math.abs(ci.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      ci += ' ';
    }
    ci += '|';
    var cd = `|Danger: ${c.info.danger}`;
    d = Math.abs(cd.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      cd += ' ';
    }
    cd += '|';
    var ck = `|Known: ${c.info.known}`;
    d = Math.abs(ck.length - thatwasfunny.length);
    d++;
    for (d > -1; d--;){
      ck += ' ';
    }
    ck += '|';
    console.log(`._________________________________________________.`);
    console.log(`|The Arc's PLANET_FINDER - ${c.planet}  |            6:40 am|`);
    console.log(`|-----------------------------|-------------------|`);
    console.log(`${cw} (q) quit          |`);
    console.log(`${cm} (b) back          |`);
    console.log(`${cl}                   |`);
    console.log(`${ci}                   |`);
    console.log(`${cd}                   |`);
    console.log(`${ck}                   |`);
    console.log(`|_________________________________________________|`);

  }
  input('pi')
}
//example sutff
// var game = 1;
// var pass = "lukeiscool";
// var dataid = "command";
// var info = {
//   "name": name,
//   "command": answer
// }
//
// const data = { pass, info, game };
// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// };
// fetch('http://localhost:3000/game', options);
