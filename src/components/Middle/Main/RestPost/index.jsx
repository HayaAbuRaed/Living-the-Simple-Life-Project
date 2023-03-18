import React from 'react'
import Image from '../MainPost/Image'
import DefaultMainHeadings from '../../../Header/LeftHeader/DefaultMainHeadings'
import Paragraph from '../MainPost/Paragraph'
import Date from '../MainPost/Date'
import Subtitle from '../../../Header/LeftHeader/Subtitle'
import './styles.css'

function RestPost() {
  return (
    <article class="article-rest">
      <div class="art-rest-2">
        <Image/>
        <Date/>
      </div>
      
      <div class="art-rest-main">
        <DefaultMainHeadings/>
        <Paragraph/>
        <Subtitle/>
      </div>
      
    </article>
  )
}

export default RestPost
