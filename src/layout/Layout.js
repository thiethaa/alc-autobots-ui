import React from 'react';
import Header from './Header';
import Footer from './Footer';

 const Layout = ({children}) => {
    return (
        <div  style={{background:'rgb(241, 227, 227)'}}>
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}
export default Layout;