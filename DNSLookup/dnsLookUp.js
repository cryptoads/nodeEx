const fs = require('fs');
const dns = require('dns');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Website ', (answer) =>{
    rl.close();
    dns.lookup(answer, (err, address)=>{
        if(err) {return console.log(err)};
        console.log(address);
    })
}) 