import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import Iconbtn from "./Common/Iconbtn";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../service/auth";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const token = useSelector((state) => state.auth.token);

  const handleLogin = () => {
    navigate('/Login');
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleMarketNavigation = () => {
    navigate('/Market');
  };

  return (
    <nav className="w-full flex md:justify-around justify-around items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to='/'>
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <button onClick={handleMarketNavigation}>
          <NavBarItem title="Market" />
        </button>
          {token ? (
            <Iconbtn onClick={handleLogout}>
              <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                Logout
              </li>
            </Iconbtn>
          ) : (
            <Iconbtn onClick={handleLogin}>
              <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                Login
              </li>
            </Iconbtn>
          )}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            <button onClick={handleMarketNavigation}>
              <NavBarItem title="Market" classprops="my-2 text-lg" />
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
