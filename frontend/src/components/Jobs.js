import React from 'react';


import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";


function Job({ job, onEdit, onDelete }) {
    return (
        <tr>
            <td>{job.company}</td>
            <td>{job.role}</td>
            <td>{job.hours}</td>
            <td>{job.startDate}</td>
            <td>{job.endDate}</td>
            <td className='icon-cell'><TiDeleteOutline onClick={() => onDelete(job._id)}
            className='icon'/></td>
            <td className='icon-cell'><FiEdit onClick={() => onEdit(job)} className='icon'/></td>
            <td></td>
        </tr>
    );
}

export default Job;