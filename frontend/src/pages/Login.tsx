import React, {useEffect, useState} from "react";
import style from "../assets/style/Login/Login.module.scss";
import {SubmitHandler, useForm} from 'react-hook-form';
import {IShopField} from "../types/Login/Login-types";
import {NavLink, useNavigate} from "react-router-dom";
import {REGISTRATION_ROUTES} from "../utils/const";
import AuthForm from "../components/AuthForm/AuthForm";
import {useAppDispatch} from "../store/store";
import {defaultStatus, fetchLoginUser, userSelector} from "../store/slices/userSlice";
import Swal from 'sweetalert2'
import {useSelector} from "react-redux";
import PageLayout from "../components/UI/PageLayout/PageLayout";
import {Status} from "../types/userSlice-types/userSlice-types";

const Login = () => {
    const dispatch = useAppDispatch()
    const {status} = useSelector(userSelector);
    const [saveStatus, setSaveStatus] = useState(false);
    const navigate = useNavigate()
    const {
        handleSubmit,
        register,
        formState: {errors},
        reset,
    } = useForm<IShopField>({
        mode: "onChange",
    });

    const showAlertSuccess = () => {
        Swal.fire({
            title: "Success",
            text: "You are successfully logged in!",
            icon: "success",
            confirmButtonText: "OK",
        }).then(function () {
            navigate('/')
        });
    }

    const showAlertError = () => {
        Swal.fire({
            title: "Error",
            text: "You entered the wrong data",
            icon: "error",
            confirmButtonText: "OK"
        })
    }
    
    useEffect(() => {
        return () => {
            dispatch(defaultStatus())
        }
    }, [])
    
    if (status === Status.SUCCESS) {
        showAlertSuccess()
        reset()
    } else if (status === Status.ERROR) {
        showAlertError()
    }
    
    

    const onSubmit: SubmitHandler<IShopField> = (data) => {
        const formData = {
            email: data.email,
            password: data.password,
            saveStatus
        }
        dispatch(fetchLoginUser(formData))
    }
    

    return (
        <PageLayout>
            <div className={style.wrapper}>
                <div className={style.block_form}>
                    <h2 className={style.title}>Log in</h2>
                    <p className={style.subtitle}>To access</p>
                    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                        <AuthForm register={register} errors={errors}/>
                        <small className={style.save_check}>
                            <p>Do you want to save your data?</p>
                            <input type="checkbox" onChange={e => setSaveStatus(e.target.checked)}/>
                        </small>
                        <button className={style.form_button}>Log in</button>
                    </form>
                    <p className={style.register_redirect}>
                        New customer?
                        <NavLink to={REGISTRATION_ROUTES}>Create an account</NavLink>
                    </p>
                </div>
            </div>
        </PageLayout>
    );
};

export default Login;
