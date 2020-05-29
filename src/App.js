import React, { useState } from 'react';
import JobList from './components/JobList'
import data from './data.json'
import './App.css';
import Search from './components/Search'

function App() {

  const [search, setSearch] = useState("");
  const [searchSkill, setSearchSkill] = useState("");

  let filtedData = data

  if(search){ filtedData = data.filter((job) => job.position.toLowerCase().includes(search.toLowerCase()))}

  if(searchSkill){ filtedData = data.filter((job) => job.languages.includes(searchSkill))}


  return (
    <div className="App">
      <Search search = {search} setSearch = {setSearch}/>
      <JobList filtedData={filtedData} searchSkill={searchSkill} setSearchSkill={setSearchSkill}/>
    </div>
  );
}

export default App;
