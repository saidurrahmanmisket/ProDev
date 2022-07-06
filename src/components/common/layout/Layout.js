import React from 'react';
import NavBar from '../../client/navBar/NavBar';

const Layout = ({children}) => {
    return (
        <>
            {/* <NavBar /> */}
            {children}
        </>
    );
};

export default Layout;