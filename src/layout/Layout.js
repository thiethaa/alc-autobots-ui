import React from 'react';
import Header from './Header';
import Footer from './Footer';

 const Layout = ({children}) => {
    return (
        <div  style={{background:'rgb(51,59,63)'}}>
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}
export default Layout;