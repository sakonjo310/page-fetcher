const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);

const url = args[0];
const filePath = args[1];


request(url, (error, response, body) => {
    if (error) {
        console.error(error);
    }

    fs.writeFile(filePath, body, err => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
        }
    });
});

