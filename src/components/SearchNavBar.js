import React from 'react'

export default function SearchNavBar({searchSkillArr, setSearchSkillArr}) {
    return (
        <div className="job-clicked">{searchSkillArr.map((skill, index ) => (
            <div key={index} className="language-clicked" onClick={ () => {setSearchSkillArr(searchSkillArr.filter(data => data !== skill))}}>{skill}</div>
            ))}
        <div className="clear" onClick={ () => setSearchSkillArr([])}>Clear</div>
            
        </div>
    )
}
