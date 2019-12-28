const fs = require('fs');
fs.writeFile('empirestate.txt', '\nRight there up on Broadway', (err) => {
    if (err) throw err;
    console.log('The lyrics were updated!');
});
fs.appendFile('empirestate.txt', '\nhii jindgi', (err) => {
    if (err) throw err;
    console.log('The lyrics were updated!');
});
fs.readFile('empirestate.txt',function(err,re){
        console.log(re.toString());
})