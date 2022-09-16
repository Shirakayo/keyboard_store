import React, { PropsWithChildren, useEffect, useState } from "react";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, WELCOME_ROUTES } from "../../utils/const";
import { BsFillPersonFill } from "react-icons/bs";
import enter_logo from "../../assets/img/Header/keycaps.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { logoutUser, userSelector } from "../../store/slices/userSlice";
import { FiLogOut } from "react-icons/fi";
import { useAppDispatch } from "../../store/store";
import { navList } from "../../utils/nav";
import NavItem from "./NavItem/NavItem";
import { RiAdminLine } from "react-icons/ri";
import SecondaryNavLink from "./SecondaryNavLinks/SecondaryNavLink";
import {cartSelector, changeModalState} from "../../store/slices/cartSlice";
import Modal from "../UI/Modal/Modal";

const mainRoot = document.getElementById("root");


export const Header = ({
  welcomeStyleHeader,
}: PropsWithChildren<{ welcomeStyleHeader?: boolean }>) => {
  const { role, isAuthenticated } = useSelector(userSelector);
  const {viewModal} = useSelector(cartSelector)
  const [checkHeader, setCheckHeader] = useState(true);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  const setModalView = () => {
    dispatch(changeModalState(true))
  }

  function removeClass() {
    if (window.scrollY > 50) {
      setCheckHeader(false);
    } else {
      setCheckHeader(true);
    }
  }


  useEffect(() => {
    if (viewModal) {
      mainRoot!.classList.add('modal-view')
    } else {
      mainRoot!.classList.remove('modal-view')
    }
  }, [viewModal])

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
            {role === 'ADMIN' &&
                (<SecondaryNavLink
                    route={LOGIN_ROUTE}
                    render={() => {
                      return <RiAdminLine size={30}/>;
                    }}
                />) }
            {isAuthenticated ? (
              <SecondaryNavLink
                route={LOGIN_ROUTE}
                render={() => {
                  return <FiLogOut size={30} onClick={() => logout()} />;
                }}
              />
            ) : (
              <SecondaryNavLink
                route={LOGIN_ROUTE}
                render={() => {
                  return <BsFillPersonFill size={30} />;
                }}
              />
            )}
            <SecondaryNavLink
              route={LOGIN_ROUTE}
              render={() => {
                return <AiOutlineSearch size={30} />;
              }}
            />
            <SecondaryNavLink
              disableLink={true}
              render={() => {
                return (
                  <AiOutlineShoppingCart size={30} onClick={setModalView} />
                );
              }}
              route={""}
            />
          </ul>
          {viewModal && <Modal />}
        </div>
      </div>
    </header>
  );
};
