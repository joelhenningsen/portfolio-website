import React from 'react';
import Job from './Jobs';
import { IoAddCircleOutline } from "react-icons/io5";


function JobList({ jobs, onDelete, onEdit, onAdd }) {
    return (
        <table id="jobs">
            <caption>Add and Edit Jobs</caption>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Hours</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <td className='icon-cell'><IoAddCircleOutline onClick={() => onAdd()} className='icon'/></td>

                </tr>
            </thead>
            <tbody>
                {jobs.map((job, i) => 
                    <Job 
                        job={job} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                        onAdd={onAdd}
                    />)}
            </tbody>
        </table>
    );
}

export default JobList;

