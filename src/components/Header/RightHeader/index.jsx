import React from 'react'
import ListItem from './ListItem'
import "./styles.css"

function LeftHeader() {
  const arr= [1,2,3];
  return (
    <ul class="container-flex">
      {arr.map (()=>
        <ListItem/>
      )}
    </ul>
  )
}

export default LeftHeader
