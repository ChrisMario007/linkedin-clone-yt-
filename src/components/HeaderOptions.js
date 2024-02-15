import React from 'react'
import './css/headerOptions.css'

function HeaderOptions({ Icon, title }) {
    return (
        <div className='headerOption'>
            {Icon && <Icon className="headerOption__Icon " />}
            <h3 className='headerOption_title'>{title}</h3>

        </div>
    )
}

export default HeaderOptions