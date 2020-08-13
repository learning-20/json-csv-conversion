const fs = require('fs');
const converter = require('json-2-csv');

//  get filename from command line
const inputJsonFile = process.argv.slice(2)
const jsonFilename = inputJsonFile[0].split('.')[0];

//  parse json file
const jsonFileData = JSON.parse(fs.readFileSync(`${inputJsonFile}`));
// extract json data
(async () => {
    try {
        const csv = await converter.json2csvAsync(jsonFileData[Object.keys(jsonFileData)[0]]);
        // write CSV to a file
        fs.writeFileSync(`${jsonFilename}.csv`, csv);
    } catch (err) {
        console.log(err);
    }
})();
