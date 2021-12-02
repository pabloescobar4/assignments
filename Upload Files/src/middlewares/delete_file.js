const fs = require('fs');

module.exports = (filePath) => fs.unlink(filePath, (err) => {
    if(err){
        throw err;
    }
    // console.log('file is deleted');
});