import React from 'react'
import LeftHeader from './RightHeader'
import RightHeader from './LeftHeader'
import './styles.css'

function Header() {
  return (
    <header>
      <div className= 'container container-flex'> 
        <RightHeader/>
        <LeftHeader/>
    </div>
    </header>
    
    
  )
}
export default Header
