const fs = require('fs')
const path = require('path')
let finalPath = path.join(__dirname, 'read.txt')
fs.readFile(finalPath, 'utf8', function (err, data) {
  if (err != null) {
    console.log(err);
    return;
  }
  console.log(data)
})

