import React from 'react'
import MainPost from './MainPost'
import RestPost from './RestPost'

function Main() {
  const arr= [1,2,3]
  return (
    <main role="main">
      <MainPost/>
      {arr.map(()=>
        <RestPost/>
      )}
    </main>
  )
}

export default Main
