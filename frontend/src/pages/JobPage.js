import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

import JobList from '../components/JobList';

function JobsPage({ setJob }) {
    const redirect = useNavigate();
    const [jobs, setJobs] = useState([]);

    const loadJobs = async () => {
        try {
            const response = await axios.get('https://joelhenningsen-backend.vercel.app/jobs'); // Replace with your backend URL
            const formattedJobs = response.data.map(job => ({
                ...job,
                startDate: job.startDate.slice(0, 10),
                endDate: job.endDate.slice(0, 10)
            }));
            setJobs(formattedJobs);
        } catch (error) {
            console.error('Error loading jobs:', error);
        }
    } 

    const onEditJob = async job => {
        setJob(job);
        redirect("/update");
    }

    const onDeleteJob = async _id => {
        try {
            await axios.delete(`https://joelhenningsen-backend.vercel.app/jobs/${_id}`); // Replace with your backend URL
            loadJobs(); // Refresh the job list after deletion
        } catch (error) {
            console.error(`Error deleting job ${_id}:`, error);
        }
    }

    const onAddJob = () => {
        redirect("/create")
    };

    useEffect(() => {
        loadJobs();
    }, []);

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
