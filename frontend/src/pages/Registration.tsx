import React, {FC} from 'react';
import style from '../assets/style/Registration/Registration.module.scss'
import {SubmitHandler, useForm} from "react-hook-form";
import {IShopField} from "../types/Login/Login-types";
import AuthForm from "../components/AuthForm/AuthForm";
import {LOGIN_ROUTE} from "../utils/const";
import {NavLink, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {useAppDispatch} from "../store/store";
import {registerUser} from "../store/slices/userSlice";
import PageLayout from "../components/UI/PageLayout/PageLayout";


const Registration: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {
        handleSubmit,
        reset,
        formState: {errors},
        register
    } = useForm<IShopField>({
        mode: "onChange",
    });

    const showAlert = () => {
        Swal.fire({
            title: "Success",
            text: "You have successfully registered. Login.",
            icon: "success",
            confirmButtonText: "OK",
        }).then(function () {
            navigate('/login')
        });
    }

    const onSubmit: SubmitHandler<IShopField> = (data) => {
        dispatch(registerUser(data))
        reset()
        showAlert()
    }

    return (
        <PageLayout>
            <div className={style.wrapper}>
                <h2 className={style.title}>Register</h2>
                <p className={style.subtitle}>To continue</p>
                <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                    <AuthForm errors={errors} register={register}/>
                    <button className={style.form_button}>Create Account</button>
                    <small className={style.login_redirect}>Do you already have an account? <NavLink to={LOGIN_ROUTE}>Log
                        in</NavLink></small>
                </form>
            </div>
        </PageLayout>
    );
};

export default Registration;
