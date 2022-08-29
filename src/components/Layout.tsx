import React from 'react'
import NavBar from '../components/NavBar'
import classes from "../styles/components/Layout.module.scss"

interface Props {
    children: JSX.Element,
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <NavBar />
            <div className={classes.container}>{children}</div>
        </>
    )
}

export default Layout