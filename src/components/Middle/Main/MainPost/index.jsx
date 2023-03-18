import React from 'react'
import Image from './Image'
import Date from './Date'
import DefaultMainHeadings from '../../../Header/LeftHeader/DefaultMainHeadings'
import Paragraph from './Paragraph'
import Subtitle from '../../../Header/LeftHeader/Subtitle'
import './styles.css'


function MainPost() {
  return (
    <article className="article-top">
      <Image/>
      <Date/>
      <DefaultMainHeadings/>
      <Paragraph/>
      <Subtitle/>
    </article>
  )
}

export default MainPost
