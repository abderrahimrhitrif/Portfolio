const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Submission = require('./Models/Submission');

app.use(express.json());

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const corsOptions = {
    origin: 'https://rhitrif.vercel.app',
};
  
app.use(cors(corsOptions));
  

app.post('/submit', async (req, res) => {
    const {email, subject, message } = req.body;
        try {
            const submissionDoc = await Submission.create({
                email,
                subject,
                message
            })
            res.status(200).json(submissionDoc);
        } catch (error) {
            throw (error)
        }



})


app.listen(4000);