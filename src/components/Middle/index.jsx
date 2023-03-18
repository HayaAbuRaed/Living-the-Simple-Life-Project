import React from 'react'
import Aside from './Aside'
import Main from './Main'

function Middle() {
  return (
    <div className="container container-flex">
      <Main/>
      <Aside/>
    </div>
  )
}

export default Middle
