const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('File input ', (input) =>{
    rl.question('File output ', (output)=>{
    rl.close();
    fs.readFile(input, 'utf8', (err,data)=>{
        if(err) {return console.log(err)};
        fs.copyFile(output, data, (err)=>{
            if(err){return console.log(err)};
            console.log(data)
        })
    })
    })
});


