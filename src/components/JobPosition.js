import React from 'react'
import Match from './Match'

export default function JobPosition({position, search}) {

   let index = position.toLowerCase().indexOf(search.toLowerCase())

   let firstPos = position.substr(0, index);

   let lastPos = position.substr(index + search.length);

   let match = position.substr(index, search.length)

    return (
        <>
        {firstPos}
        <Match match={match}/>
        {lastPos}     
        </>
    )
}
