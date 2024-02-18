import React from 'react'
import './css/Widget.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widget() {

  const newArticle = (heading, subtitle) => (

    <div className='widgets_article'>

      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  


  return (
    <div className='widgets'>
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newArticle("Mario Is at it AhGain", "Top News - 20824 readers")}
    </div>
  )
}

export default Widget