// Models for the Jobs Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Error connecting to database.' });
    } else  {
        console.log('Successfully connected to database.');
    }
});

// SCHEMA: Define the collection's schema.
const jobSchema = mongoose.Schema({
	company:  { type: String, required: true },
    role:      { type: String, required: true },
	hours:     { type: Number,
                 required: true,
                 default: 40,
                 min: [1, "Must be greater than or equal to 1 hour."] },
    startDate: { type: Date, required: true, min: "1900-01-01", default: Date.now },
	endDate:   { type: Date, required: true, min: "1900-01-01", default: Date.now }
});

// Compile the model from the schema 
// by defining the collection name "jobs".
const jobs = mongoose.model('Job', jobSchema);


// CREATE model *****************************************
const createJob = async (company, role, hours, startDate, endDate) => {
    const job = new jobs({ 
        company: company, 
        role: role, 
        hours: hours,
        startDate: startDate,
        endDate: endDate
    });
    return job.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveJobs = async () => {
    const query = jobs.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveJobByID = async (_id) => {
    const query = jobs.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteJobById = async (_id) => {
    const result = await jobs.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateJob = async (_id, company, role, hours, startDate, endDate) => {
    const result = await jobs.replaceOne({_id: _id }, {
        company: company, 
        role: role, 
        hours: hours,
        startDate: startDate,
        endDate: endDate
    });
    return { 
        _id: _id, 
        company: company, 
        role: role, 
        hours: hours,
        startDate: startDate,
        endDate: endDate
    }
}

// EXPORT the variables for use in the controller file.
export { createJob as createJob, retrieveJobs as retrieveJobs, retrieveJobByID as retrieveJobByID, updateJob as updateJob, deleteJobById as deleteJobById }