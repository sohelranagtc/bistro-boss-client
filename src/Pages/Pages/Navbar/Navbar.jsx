import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navbar =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/shop/salad">Shop</Link></li>
            <li><Link to="/secrect">Secret</Link></li>
        </>

    const login =
        <>
            {
                user ?
                    <>
                        <div className="avatar mr-5 tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <Link><button onClick={handleLogOut} className="btn bg-orange-600">Log Out</button></Link>
                    </> :
                    <>
                        <Link to="/login"><button className="btn bg-orange-600">Login</button></Link>
                    </>
            }
        </>
    return (
        <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-25 text-white bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end ">
                {login}
            </div>
        </div>
    );
};

export default Navbar;