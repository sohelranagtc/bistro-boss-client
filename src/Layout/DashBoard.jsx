import React from 'react';
import { FaBars, FaBook, FaCalendar, FaCalendarAlt, FaCarAlt, FaHome, FaShoppingCart, FaSoap, FaUbuntu, FaUsers, FaUtensilSpoon, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const DashBoard = () => {
    const [cart] = useCart()

    // TODO: load data from the server to have dynamic isAdmin based on Data
    const isAdmin = true;

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
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/calender"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/calender"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>
                            </>
                    }

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