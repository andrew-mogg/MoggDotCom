import React from 'react'

import './social.css'

const Social = props => (
    <div className="Social">
        <a href={props.link} target="_blank">
            <img src={props.image} />
        </a>
    </div>
)
export default Social