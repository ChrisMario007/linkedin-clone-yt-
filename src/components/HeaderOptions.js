import React from 'react'
import './css/headerOptions.css'
import { Avatar } from '@mui/material'
// why did i import from material Ui

function HeaderOptions({ avatar, Icon, title }) {
    return (
        <div className='headerOption'>
            {Icon && <Icon className="headerOption__Icon " />}
            {/* crazy line */}
            {avatar && (<Avatar className='headerOption__Icon' src={avatar}/>)}
            <h3 className='headerOption_title'>{title}</h3>

        </div>
    )
}

export default HeaderOptions