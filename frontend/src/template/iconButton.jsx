import React from 'react'

export default props => (props.hide) ? null : (
    <button className={'btn btn-' + props.style} onClick={props.onClick}>
        <i className={'fa fa-' + props.icon}></i>
    </button>
)