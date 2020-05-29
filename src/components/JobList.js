import React from 'react'
import data from '../data.json'
import Job from './Job'

export default function JobList() {
    
    return (
        <div className="joblist">
            {data.map((job, index)=> 
                    <Job job={job} key={index}/>
            )}
        </div>
    )
}
