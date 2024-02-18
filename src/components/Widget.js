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

      {newArticle("Mario Is at it AhGain", "Top News - 20,824 readers")}
      {newArticle("USG to face off with Aston Villa next week", "Sports News - 34,297readers")}
      {newArticle("Biden blames ‘congressional inaction’ for Ukrainian withdrawal of key town in call with Zelensky ", "Top News - 18,320 readers")}
      {newArticle("OpenAI will now let you create videos from verbal cues", "Top News - 18,320 readers")}
      {newArticle("The Alaska Air flight was terrifying. It could have been so much worse", "Top News - 18,320 readers")}
      {newArticle(" Leading Democrats say their conversations with the vice president have been a surprising and welcome change", "Top News - 18,320 readers")}
      {newArticle("The ‘Dune: Part Two’ cast’s red carpet looks are out of this world", "Top News - 18,320 readers")}
      {newArticle("Serving four-year doping ban, former world No. 1 sues health supplement company for damages", "Top News - 18,320 readers")}
    </div>
  )
}

export default Widget