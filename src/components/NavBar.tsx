import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import Logo from '../../assets/pokeball.png'
import classes from "../styles/components/NavBar.module.scss";

function NavBar() {
    const [click, setClick] = useState(false);

    const onHandleMenu = () => setClick(!click);
    return (
        <>
            <div className={classes.show__mobile}>
                <div className={classes.nav__mobile}>
                    <div className={classes.menu__mobile}>
                        <img className={classes.logo} src={Logo} alt="logo" />
                    </div>
                    <button onClick={onHandleMenu}>
                        <FiMenu size={26} />
                    </button>
                </div>
                <div className={classes.side__menu} style={click ? { display: 'flex', transform: `translate(0 )` } : { display: 'none' }}  >
                    <button onClick={onHandleMenu}><AiOutlineClose size={30} /></button>
                    <ul>
                        <li><Link onClick={onHandleMenu} to='/'>Home</Link></li>
                        <li><Link onClick={onHandleMenu} to='favorites'>Favorites</Link></li>
                    </ul>
                </div >
            </div >
            <div className={classes.hide__web}>
                <div className={classes.container__web}>
                    <nav>
                        <a className={classes.logo} >
                            <img src={Logo} alt="logo" />
                        </a>
                    </nav>
                    <div className={classes.options__menu} >
                        <ul>
                            <li><Link onClick={onHandleMenu} to='/'>Home</Link></li>
                            <li><Link onClick={onHandleMenu} to='favorites'>Favorites</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;