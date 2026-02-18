import {Outlet} from 'react-router-dom';

import MainHeader from "../MainHeader";

function RootLayout(){
    return (
    <>
    <MainHeader />
    <Outlet /> {/* this is where the child routes will be rendered */}
    </>
    );
}
export default RootLayout;