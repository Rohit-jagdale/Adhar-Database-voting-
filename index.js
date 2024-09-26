
const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connection');
const Citizens = require('./models/citizens');

app.post("/", async (req, res) => {
    let citizens = new Citizens(req.body);
    let result = await citizens.save();
    res.send(result);
});

app.get('/getCitizens', (req, res) => {
   Citizens.find()
    .then(citizens => res.json(citizens))
    .catch(err => res.json(err))
});

app.listen(4000); // listening at port 4000 on localhost