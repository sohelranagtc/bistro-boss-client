import React from 'react';
import { FaBars, FaCalendar, FaCalendarAlt, FaCarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    <h1 className='text-4xl text-center font-semibold ml-2 mt-5'>BISTRO BOSS</h1>
                    <h1 className='text-2xl text-center font-semibold ml-2 mb-20'>USER DASHBOARD</h1>
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/calender"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"> <FaBars></FaBars> Menu</NavLink></li>
                    <li><NavLink to="/shop/salad"> <FaShoppingCart></FaShoppingCart> Shop</NavLink></li>
                    <li><NavLink to="/contact"> Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;