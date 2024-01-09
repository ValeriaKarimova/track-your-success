import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AddBtn.scss'
import React from 'react'
import { Link } from 'react-router-dom'

export function AddBtn() {
    return <Link to='/new'>
    <div className='add-btn'>
        <FontAwesomeIcon icon={faCirclePlus} />
    </div>
    </Link>
}