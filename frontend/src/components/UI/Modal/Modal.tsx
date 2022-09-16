import React, { useEffect, useRef } from "react";
import {
  cartSelector,
  changeModalState,
  fetchCardItem,
} from "../../../store/slices/cartSlice";
import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from "../../../store/store";
import style from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { BiShoppingBag } from "react-icons/bi";
import { useOnClickOutside } from "../../../hooks/UseOnClickOutside";
import { useSelector } from "react-redux";
import CartModalContent from "../../Cart/CartModalContent/CartModalContent";
import { Status } from "../../../types/userSlice-types/userSlice-types";
import Loader from "../Loader/Loader";
import {CART_ROUTE} from "../../../utils/const";
import {NavLink} from "react-router-dom";

const modalRoot = document.getElementById("modal-root");

const Modal = () => {
  const dispatch = useAppDispatch();
  const { cartItems, cartStatus } = useSelector(cartSelector);
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, closeModalView);

  useEffect(() => {
    dispatch(fetchCardItem());
  }, []);

  function closeModalView() {
    dispatch(changeModalState(false));
  }

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? closeModalView() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, []);

  return createPortal(
    <div className={style.modal}>
      <div ref={modalRef} className={style.modal_content}>
        <div className={style.modal_content_header}>
          <div className={style.modal_content_header_title}>
            <BiShoppingBag size={23} />
            <h2>{cartItems.length === 0 ? 'Cart' : `${cartItems.length} items`}</h2>
          </div>
          <IoMdClose
            className={style["modal_content_close-button"]}
            size={23}
            onClick={closeModalView}
          />
        </div>
        <div
          className={
            cartItems.length > 0
              ? style.modal_content_filled
              : style.modal_content_body
          }
        >
          {cartStatus === Status.LOADING && cartItems.length !== 0 ? (
            <Loader />
          ) : (
            <CartModalContent
              status={cartStatus}
              items={cartItems}
              closeModal={closeModalView}
            />
          )}
        </div>
        <div className={style.modal_footer}>
          <div className={style.modal_footer_content}>
            <span className={style.modal_footer_content_note}>Add order note</span>
            <span className={style.modal_footer_content_checkout}>Shipping & taxes calculated at checkout</span>
          </div>
          <NavLink onClick={closeModalView} className={style.modal_footer_link} to={CART_ROUTE}>go to card</NavLink>
        </div>
      </div>
    </div>,
    modalRoot!
  );
};

export default Modal;
