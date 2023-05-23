import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Pages/Footer/Footer';
import Navbar from '../Pages/Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;