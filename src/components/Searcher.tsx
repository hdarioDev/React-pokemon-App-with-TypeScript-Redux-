import React from 'react'
import classes from "../styles/components/Searcher.module.scss"

const Searcher = () => {
    return (
        <div className={classes.Container__Searcher}>
            <input type="text" placeholder="Search..." />
        </div>
    )
}

export default Searcher