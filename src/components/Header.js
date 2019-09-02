import React from 'react'
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router'

const Header = ({history}) => {

    return (
        <div className="header">
            <div className="header__brand" onClick={() => history.push('/')}>
                <h2 className="header__brand-name">eazy
                    <span className="header__brand-ext">.my</span>
                </h2>
            </div>
            <div className="header__menu">
                <NavLink 
                    to="/"
                    activeClassName="is-active"
                    className="navlink header__menu-each"
                >
                    Categories
                </NavLink>
                <NavLink 
                    to="/"
                    activeClassName="is-active"
                    className="navlink header__menu-each"
                >
                    Notification
                </NavLink>
                <NavLink 
                    to="/"
                    activeClassName="is-active"
                    className="navlink header__menu-each"
                >
                    Login/Sign up
                </NavLink>
                <NavLink 
                    to="/"
                    activeClassName="is-active"
                    className="navlink header__menu-each"
                >
                    Help
                </NavLink>
            </div>
        </div>
    )
}

export default withRouter(Header)