const fs = require('fs');
const path = require(`path`);


fs.access(path.join(__dirname, `myNewFolder`), fs.constants.F_OK, (err) => {
    if (err) {
        fs.mkdir(path.join(__dirname, `myNewFolder`), err => {
            if(err) {
                console.log(err)
            }
        });
    } else {
        console.log(`Folder already created!`)
    }
});

fs.writeFile(path.join(__dirname, `myNewFolder`, `hello.txt`  ), `Hello world!`, (err) => {
    if (err) {
        console.log(err)
    }
});
fs.readFile(path.join(__dirname, `myNewFolder`, `hello.txt`), `utf8`, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})
// console.log(`${dirname.sync}`)