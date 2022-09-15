import React, { useEffect, useRef } from "react";
import {cartSelector, changeModalState, fetchCardItem} from "../../../store/slices/cartSlice";
import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from "../../../store/store";
import style from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { BiShoppingBag } from "react-icons/bi";
import { useOnClickOutside } from "../../../hooks/UseOnClickOutside";
import {useSelector} from "react-redux";
import CartModalContent from "../../Cart/CartModalContent/CartModalContent";

const modalRoot = document.getElementById("modal-root");


const Modal = () => {
  const dispatch = useAppDispatch();
  const {cartItems} = useSelector(cartSelector)
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, closeModalView);

  useEffect(() => {
    console.log('запрос')
    dispatch(fetchCardItem())
  }, [])

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
            <h2>Cart</h2>
          </div>
          <IoMdClose
            className={style["modal_content_close-button"]}
            size={23}
            onClick={closeModalView}
          />
        </div>
        <div className={cartItems.length > 0 ? style.modal_content_filled : style.modal_content_body}>
          <CartModalContent items={cartItems}  closeModal={closeModalView}/>
        </div>
      </div>
    </div>,
    modalRoot!
  );
};

export default Modal;
