import React from 'react'
import Subtitle from '../../Header/LeftHeader/Subtitle'
import SidebarImage from './SidebarImage'
import Paragraph from '../Main/MainPost/Paragraph'

function MainWidget() {
  return (
    <div className='widget'>
      <Subtitle/>
      <SidebarImage/>
      <Paragraph/>
    </div>
  )
}

export default MainWidget
