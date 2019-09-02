import React, {useState} from 'react'
import {withRouter} from 'react-router'
import {NavLink} from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io'

const MobileHeader = ({history}) => {

    const [isSidebarOpen, setSidebar] = useState(false)

    const handleCloseSidebar = () => {
        setSidebar(false)
    }

    const handleOpenSidebar = () => {
        setSidebar(true)
    }

    const renderSidebar = () => {
        return (
            <div className="sidebar">
                <div 
                    className={isSidebarOpen ? "sidebar__overlay" : "sidebar__overlay-false"} 
                    onClick={handleCloseSidebar}
                >
                </div>
                <div className={isSidebarOpen ? "sidebar" : "sidebar-false"}>
                    <div className="sidebar__content">
                        <div>
                            <div>
                                <NavLink 
                                    to="/"
                                    className="navlink header__menu-each"
                                    onClick={handleCloseSidebar}
                                >
                                    Categories
                                </NavLink>
                            </div>
                            <div>
                                <NavLink 
                                    to="/"
                                    className="navlink header__menu-each"
                                    onClick={handleCloseSidebar}
                                >
                                    Notification
                                </NavLink>
                            </div>
                            <div>
                                <NavLink 
                                    to="/"
                                    className="navlink header__menu-each"
                                    onClick={handleCloseSidebar}
                                >
                                    Login/Sign Up
                                </NavLink>
                            </div>
                            <div>
                                <NavLink 
                                    to="/"
                                    className="navlink header__menu-each"
                                    onClick={handleCloseSidebar}
                                >
                                    Help
                                </NavLink>
                            </div>
                        </div>
                        <div className="sidebar__close" onClick={handleCloseSidebar}>
                            X
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
        {/* Render a basic sidebar when browser is in mobile size.
            This can be improved with a design guideline */}
        {renderSidebar()} 
        <div className="header">
            <div className="header__brand" onClick={() => history.push('/')}>
                <h2 className="header__brand-name">eazy
                    <span className="header__brand-ext">.my</span>
                </h2>
            </div>
            <div className="header__burger" onClick={handleOpenSidebar}>
                <IoIosMenu size={25}/>
            </div>
        </div>
        </>
    )
}
export default withRouter(MobileHeader);