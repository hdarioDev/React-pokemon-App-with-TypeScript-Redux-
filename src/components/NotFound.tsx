
import React from 'react'
import Img from '../../assets/browser.png'
import classes from '../styles/components/NotFound.module.scss'

const NotFound = () => {
    return (
        <div className={classes.notfound__container}>

            <img src={Img} alt="List empty" />
        </div>
    )
}

export default NotFound