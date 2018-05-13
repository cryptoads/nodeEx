const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('File input ', (answer) =>{
    rl.close();
    fs.readFile(answer, 'utf8', (err,data)=>{
        if(err) {return console.log(err)};
        console.log(data.toUpperCase());
    })
}) 