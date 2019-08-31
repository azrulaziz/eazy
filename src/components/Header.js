import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {

    return (
        <div className="header">
            <div className="header__brand">
                <h2 className="header__brand-name">eazy
                    <span className="header__brand-ext">.my</span>
                </h2>
            </div>
            <div className="header__menu">
                <NavLink 
                    to="/categories"
                    activeClassName="is-active"
                    className="navlink header__menu-each"
                >
                    Categories
                </NavLink>
                <NavLink 
                    to="/categories"
                    activeClassName="is-active"
                    className="navlink header__menu-each"
                >
                    Notification
                </NavLink>
                <NavLink 
                    to="/categories"
                    activeClassName="is-active"
                    className="navlink header__menu-each"
                >
                    Login/Sign up
                </NavLink>
                <NavLink 
                    to="/categories"
                    activeClassName="is-active"
                    className="navlink header__menu-each"
                >
                    Help
                </NavLink>
            </div>
        </div>
    )
}

export default Header