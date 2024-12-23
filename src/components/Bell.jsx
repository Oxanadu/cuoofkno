import React from 'react'
import bell from '../img/bell.png'
import s from '../img/snow.module.css'

function Bell({handlePlay}) {
    return (
        <div >
            <img onClick={() => handlePlay()
            } className={s.bell} src={bell} alt="" />
        </div>
    )
}

export default Bell