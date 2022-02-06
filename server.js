const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};
  
app.use(cors(corsOpts));

app.post('/neuBestellung', urlencodedParser,  (req, res) => {
    try {
        add(req);
        res.end('{"success"}');
      } catch (error) {
        res.end(error);
      }
})

async function add(req) {
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
        path: 'Bestellungen.csv',
        header: [
            {id: 'Größe', title: 'Groesse'},
            {id: 'Straße', title: 'Strasse'},
            {id: 'PLZ', title: 'PLZ'},
            {id: 'Stadt', title: 'Stadt'},
            {id: 'Mail', title: 'Mail'}
        ],
        append: true
    });

    var info = [{Größe: req.body['formData[Größe]'],  Straße: req.body['formData[Straße]'], PLZ: req.body['formData[PLZ]'], Stadt: req.body['formData[Stadt]'], Mail: req.body['formData[Mail]'] }]
    try {
        await csvWriter.writeRecords(info)   
    } catch (e) {
        new Error("Error");
    }
}

// server for Rest api with port 3030 and app.listen for star the server
var port = 3030;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});





 

