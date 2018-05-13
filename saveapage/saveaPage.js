const http = require('http');
const readline = require('readline');
const fs = require('fs');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Website ', (answer) =>{
    rl.question('Where to save ', (saveFile)=>{
        rl.close();
     http.get(answer, (info)=>{
        let outputData = ''
        info.on('data', (chunk)=> {outputData += chunk;})
        info.on('end', ()=>{
            fs.writeFile(saveFile, outputData, (err)=>{
                if(err){return console.log(err)};
                console.log('done')
            })
        })

    })

    })

}) 