import React from 'react'
import MainWidget from './MainWidget'
import WidgetResentPost from './WidgetResentPost'
import './styles.css' 

const arr=[1,2,3]

function Aside() {
  return (
    <aside>

      <MainWidget/>

      <div className='widget'>
        {arr.map(()=>
          <WidgetResentPost/>
        )}
      </div>
      
    </aside>
  )
}

export default Aside
