import React, { useEffect, useState } from 'react'

import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

import classes from '../styles/components/Header.module.scss'
import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/pokeball.png'

const Header = () => {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState<any>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {

        const handleResize = () => {
            // console.log("window.innerWidth", window.innerWidth);

            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {

        setMenuOpen((p) => !p);
        // console.log("menuOpen ", menuOpen);

    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        navigate("/page-cta");
    };


    return (
        <header className={classes.Header}>
            <div className={classes.Header__content}>
                <Link to="/" className={classes.Header__content__logo}>
                    <img src={img} alt="logotipo" />
                    <p>navbar</p>

                </Link>
                <nav
                    className={`${classes.Header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ""
                        }`}
                >
                    <ul>
                        <li>
                            <Link to="/page" onClick={menuToggleHandler}>
                                PageOne
                            </Link>
                        </li>
                        <li>
                            <Link to="/page" onClick={menuToggleHandler}>
                                PageTwo
                            </Link>
                        </li>
                        <li>
                            <Link to="/page" onClick={menuToggleHandler}>
                                PageThree
                            </Link>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}> CTA Page</button>
                </nav>
                <div className={classes.Header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header