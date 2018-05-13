
const extract = require('./extractModule.js')

const url = 'https://en.wikipedia.org/wiki/Continuation-passing_style';
const filename = 'output.html';

var callback = function (err) {
    if (err) {return console.log(err)};
    console.log('done');
}
extract.savapage(url,filename,callback)