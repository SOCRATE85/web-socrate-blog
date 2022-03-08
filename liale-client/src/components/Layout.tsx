import React, { ReactNode } from 'react';
import  Header  from './common/Header';
import { Footer } from './common/Footer';

interface LayoutProps{
    children: ReactNode
}

const Layout = (props: LayoutProps) => {
    return <>
     <Header />
     <div className="main">
         {props.children}
     </div>
     <Footer />
    </>;
}

export default Layout;
