import React from 'react'
import Match from './Match'

export default function JobPosition({position, search}) {

// console.log(search);


   let index = position.indexOf(search)

   let firstPos = position.substr(0, index);

   let lastPos = position.substr(index + search.length, position.length);
   
    return (
        <>

        {firstPos}
        <Match search={search}/>
        {lastPos}


            
        </>
    )
}
