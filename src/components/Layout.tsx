import React from 'react'
import Header from "./Header";

import classes from "../styles/components/Layout.module.scss";

interface Props {
    children: JSX.Element,	// si necesitas tipo children 
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <div className={classes.container}>{children}</div>
        </>
    )
}

export default Layout