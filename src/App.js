import React, { useState } from 'react';
import JobList from './components/JobList'
import data from './data.json'
import './App.css';
import Search from './components/Search'
import SearchNavBar from './components/SearchNavBar'

function App() {
  
  let filtedData = data

  const [search, setSearch] = useState("");

  const [searchSkillArr, setSearchSkillArr] = useState([]);

  if(search){ filtedData = data.filter((job) => job.position.toLowerCase().includes(search.toLowerCase()))}

  let newData = filtedData.map(job=> ({ ...job, active: [job.role, job.level, ...job.languages] }))

  if(searchSkillArr.length > 0){newData = newData.filter(skill => searchSkillArr.every(r=> skill.active.includes(r)))}





  return (
    <div className="App">
      <Search search = {search} setSearch = {setSearch}/>
      {searchSkillArr.length > 0 ? <SearchNavBar searchSkillArr={searchSkillArr} setSearchSkillArr={setSearchSkillArr}/> : "" }
      <JobList newData={newData} setSearchSkillArr={setSearchSkillArr} searchSkillArr={searchSkillArr} />
    </div>
  );
}

export default App;
