
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



// Fetch user by Aadhaar number
app.get('/user/:adharNumber', async (req, res) => {
    const { adharNumber } = req.params;

    try {
        const user = await Citizens.findOne({ adharNumber });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); // Return the entire user object
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(4000); // listening at port 4000 on localhost