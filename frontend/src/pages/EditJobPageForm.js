import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";


export const EditJobPageForm = ({ jobToEdit }) => {
 
    const [company, setCompany] = useState(jobToEdit.company);
    const [role, setRole] = useState(jobToEdit.role);
    const [hours, setHours] = useState(jobToEdit.hours);

    // Converts dates from strings to JS objects
    const convStartDate = jobToEdit.startDate ? new Date(jobToEdit.startDate) : '';
    const convEndDate = jobToEdit.endDate ? new Date(jobToEdit.endDate) : '';

    // Formats the dates in a format specific to the edit field
    const convStartDateString = convStartDate ? convStartDate.toISOString().split('T')[0] : '';
    const convEndDateString = convEndDate ? convEndDate.toISOString().split('T')[0] : '';

    const [startDate, setStartDate] = useState(convStartDateString);
    const [endDate, setEndDate] = useState(convEndDateString);
    
    const redirect = useNavigate();

    const editJob = async () => {
        const response = await fetch(`/jobs/${jobToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                company: company,
                role: role,
                hours: hours,
                startDate: startDate,
                endDate: endDate
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Successfully edited job.`);
        } else {
            const errMessage = await response.json();
            alert(`Error editing job ${response.status}. ${errMessage.Error}`);
        }
        redirect("/jobs");
    }

    return (
        <>
        <article>
            <h2>Edit Job</h2>
            <p>You can edit a job within the portfolio here.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What do you want to edit?</legend>
                    <label for="company" class="required">Company Name</label>
                    <input
                        type="text"
                        value={company}
                        onChange={e => setCompany(e.target.value)} 
                        id="company" />
                    
                    <label for="role" class="required">Role</label>
                    <input
                        type="text"
                        value={role}
                        onChange={e => setRole(e.target.value)} 
                        id="role" />

                    <label for="hours" class="required">Hours (1 hr. minimum)</label>
                    <input
                        type="number"
                        value={hours}
                        onChange={e => setHours(e.target.value)} 
                        id="hours" />
                    
                    <label for="startDate" class="required">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)} 
                        id="startDate" />
                    
                    <label for="endDate" class="required">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)} 
                        id="endDate" />

                    <label for="submit">
                    <button
                        onClick={editJob}
                        id="submit"
                    >Save Edit</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditJobPageForm;