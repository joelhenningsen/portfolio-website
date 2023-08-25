import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import JobList from '../components/JobList';

function JobsPage({ setJob }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [jobs, setJobs] = useState([]);

    // RETRIEVE the entire list of jobs
    const loadJobs = async () => {
        const response = await fetch('/jobs');
        const unformattedJobs = await response.json();

        const formattedJobs = unformattedJobs.map(job => ({
            ...job,
            startDate: job.startDate.slice(0, 10),
            endDate: job.endDate.slice(0, 10)
        }));

        setJobs(formattedJobs);
    } 
    

    // UPDATE a single job
    const onEditJob = async job => {
        setJob(job);
        redirect("/update");
    }


    // DELETE a single job  
    const onDeleteJob = async _id => {
        const response = await fetch(`/jobs/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/jobs');
            const jobs = await getResponse.json();
            setJobs(jobs);
        } else {
            console.error(`error deleting job = ${_id}, status code = ${response.status}`)
        }
    }

    // ADD a single job
    const onAddJob = () => {
        redirect("/create")
    };

    // LOAD all the jobs
    useEffect(() => {
        loadJobs();
    }, []);

    // DISPLAY the jobs
    return (
        <>
            <h2>My Job Portfolio</h2>
            <p>A collection of the jobs I've held. Here you can create, edit, or remove a job from 
                the portfolio. The company name, role at the company, hours worked per week, start 
                date, and end date may all be adjusted or edited.</p>
            <JobList 
                jobs={jobs} 
                onEdit={onEditJob} 
                onDelete={onDeleteJob} 
                onAdd={onAddJob}
            />
        </>
    );
}

export default JobsPage;