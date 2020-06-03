import React from 'react'

import Job from './Job'

export default function JobList({newData, setSearchSkillArr, searchSkillArr}) {
    
    return (
        <div className="joblist">
            {newData.map((job, index)=> 
                    <Job job={job} key={index} setSearchSkillArr = {setSearchSkillArr} searchSkillArr={searchSkillArr}/>
            )}
        </div>
    )
}
