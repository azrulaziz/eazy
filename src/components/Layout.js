import React from 'react'
import Header from './Header'
import MobileHeader from './MobileHeader'
import useWindowSize from "../functions/useWindow";


const Layout = ({children}) => {
    const size = useWindowSize();

    const renderHeader = () => {
        if (size.width < 768) {
            return <MobileHeader />
        } else {
            return <Header />
        }
    }

    return (
        <div>
            {renderHeader()}
            {children}
        </div>
    )
}

export default Layout