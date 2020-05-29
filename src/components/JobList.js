import React from 'react'

import Job from './Job'

export default function JobList({filtedData, searchSkill, setSearchSkill}) {
    
    return (
        <div className="joblist">
            {filtedData.map((job, index)=> 
                    <Job job={job} key={index} searchSkill={searchSkill} setSearchSkill={setSearchSkill}/>
            )}
        </div>
    )
}
