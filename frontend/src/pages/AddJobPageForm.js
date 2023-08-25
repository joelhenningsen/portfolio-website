import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const AddJobPageForm = () => {

    const [company, setCompany]     = useState('');
    const [role, setRole]           = useState('');
    const [hours, setHours]         = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate]     = useState('');
    
    const redirect = useNavigate();

    const addJob = async () => {
        const newJob = { company, role, hours, startDate, endDate };
        const response = await fetch('/jobs', {
            method: 'post',
            body: JSON.stringify(newJob),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Successfully added job.`);
            redirect("/jobs");
        } else {
            alert(`Error adding job = ${response.status}`);
            redirect("/jobs");
        }
    };


    return (
        <>
        <article>
            <h2>Add Job</h2>
            <p>You can add jobs to the portfolio here.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What job are you adding?</legend>
                    <label for="company" class="required">Company Name</label>
                    <input
                        type="text"
                        placeholder="Name of the company"
                        value={company}
                        onChange={e => setCompany(e.target.value)} 
                        id="company" />
                    
                    <label for="role" class="required">Role</label>
                    <input
                        type="text"
                        value={role}
                        placeholder="Role at company"
                        onChange={e => setRole(e.target.value)} 
                        id="role" />

                    <label for="hours" class="required">Hours (1 hr. minimum)</label>
                    <input
                        type="number"
                        placeholder="Hours per week"
                        value={hours}
                        onChange={e => setHours(e.target.value)} 
                        id="hours" />
                    
                    <label for="startDate" class="required">Start Date</label>
                    <input
                        type="date"
                        placeholder="Day you started"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)} 
                        id="startDate" />
                    
                    <label for="endDate" class="required">End Date</label>
                    <input
                        type="date"
                        placeholder="Day you ended"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)} 
                        id="endDate" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addJob}
                        id="submit"
                    >Add Job</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddJobPageForm;