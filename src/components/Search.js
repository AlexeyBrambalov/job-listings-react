import React from 'react'

export default function Search({search, setSearch}) {
    return (
    <div className="input-container">
      <input
        className="search"
        placeholder="Search by position"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      ></input>
    </div>
    )
}
