// Controllers for the Job Collection

import 'dotenv/config';
import express from 'express';
import * as jobs from './jobs-model.mjs';

// Port for when using locally
// const PORT = process.env.PORT;

const app = express();
app.use(express.json());  // REST needs JSON MIME type.

app.use(cors(
    {
        origin: ["https://joelhenningsen-backend.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

// CREATE controller ******************************************
app.post ('/jobs', (req,res) => { 
    jobs.createJob(
        req.body.company, 
        req.body.role, 
        req.body.hours,
        req.body.startDate,
        req.body.endDate
        )
        .then(job => {
            res.status(201).json(job);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Error creating job.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/jobs', (req, res) => {
    jobs.retrieveJobs()
        .then(job => { 
            if (job !== null) {
                res.json(job);
            } else {
                res.status(404).json({ Error: 'Jobs not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Error finding jobs.' });
        });
});


// RETRIEVE by ID controller
app.get('/jobs/:_id', (req, res) => {
    jobs.retrieveJobByID(req.params._id)
    .then(job => { 
        if (job !== null) {
            res.json(job);
        } else {
            res.status(404).json({ Error: 'Job not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Error finding job.' });
    });

});


// UPDATE controller ************************************
app.put('/jobs/:_id', (req, res) => {
    jobs.updateJob(
        req.params._id, 
        req.body.company, 
        req.body.role, 
        req.body.hours,
        req.body.startDate,
        req.body.endDate
    )
    .then(job => {
        res.json(job);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Error updating job.' });
    });
});


// DELETE Controller ******************************
app.delete('/jobs/:_id', (req, res) => {
    jobs.deleteJobById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'Deletion of job was successful.' });
            } else {
                res.status(404).json({ Error: 'Error deleting job, job not found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Error deleting job.' });
        });
});

// Listening log for when running locally
// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}...`);
// });