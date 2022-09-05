import React, {PropsWithChildren, useEffect, useState} from "react";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { CART_ROUTE, LOGIN_ROUTE, WELCOME_ROUTES } from "../../utils/const";
import { BsFillPersonFill } from "react-icons/bs";
import enter_logo from "../../assets/img/Header/keycaps.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { logoutUser, userSelector } from "../../store/slices/userSlice";
import { FiLogOut } from "react-icons/fi";
import { useAppDispatch } from "../../store/store";
import { navList } from "../../utils/nav";
import NavItem from "./NavItem/NavItem";
import {RiAdminLine} from "react-icons/ri";

export const Header = ({ welcomeStyleHeader }: PropsWithChildren<{welcomeStyleHeader?: boolean}>) => {
  const {role, isAuthenticated} = useSelector(userSelector);
  const [checkHeader, setCheckHeader] = useState(true);


  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };

  function removeClass() {
    if (window.scrollY > 50) {
      setCheckHeader(false);
    } else {
      setCheckHeader(true);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", removeClass);
    return () => {
      document.removeEventListener("scroll", removeClass);
    };
  }, []);


  return (
    <header
      className={
        welcomeStyleHeader && checkHeader
          ? `${style.header_disable} ${style.header}`
          : style.header
      }
    >
      <div className={style.header_content}>
        <NavLink to={WELCOME_ROUTES} className={style.header_logo}>
          <img src={enter_logo} alt="logo" />
          <span>Wind</span>
        </NavLink>
        <nav className={style.header_nav}>
          <ul className={style.header_nav_items}>
            {navList.map((item) => (
              <NavItem
                key={item.path}
                title={item.title}
                dropList={item.dropDown}
                path={item.path}
              />
            ))}
          </ul>
        </nav>
        <div className={style.header_nav_sub}>
          <ul>
            <li>
              <NavLink to={LOGIN_ROUTE}>
                <span>
                  {role === 'ADMIN' && <RiAdminLine size={30}/>}
                </span>
              </NavLink>
            </li>
            {isAuthenticated ? (
              <li>
                <NavLink to={LOGIN_ROUTE}>
                <span>
                  <FiLogOut onClick={() => logout()} size={30} />
                </span>
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to={LOGIN_ROUTE}>
                  <span>
                    <BsFillPersonFill size={30} />
                  </span>
                </NavLink>
              </li>
            )}
            <li>
              <button className={style.header_nav_search}>
                <span>
                  <AiOutlineSearch size={30} />
                </span>
              </button>
            </li>
            <li>
              <NavLink to={CART_ROUTE}>
                <span>
                  <AiOutlineShoppingCart size={30} />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

