import React from 'react'

export default function Job({job}) {

    
    return (      
        <div className={job.featured ? 'job-selected' : "job"} >
            <img src={`${process.env.PUBLIC_URL}/${job.logo.slice(2)}`} alt="" className="image"/>
            <div className="main">
                <div className="top">
                    <span className="company">{job.company}</span>
                    {job.new ? <span className="new">new</span> : ""}
                    {job.featured ? <span className="featured">featured</span> : ""}
                </div>
                <div className="middle">
                    {job.position}
                </div>
                <div className="bottom">
                    <span>{job.postedAt}</span>
                    <span>·</span>
                    <span>{job.contract}</span>
                    <span>·</span>
                    <span>{job.location}</span>
                </div>
            </div>
            <div className="languages">
                {job.languages.map((language, index) => (
                    <span className="language" key={index}>{language}</span>
                ))}
            </div>
            
        </div>
    )
}