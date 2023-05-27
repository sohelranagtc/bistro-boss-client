import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Pages/Footer/Footer';
import Navbar from '../Pages/Pages/Navbar/Navbar';

const Main = () => {
    const location = useLocation()
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;