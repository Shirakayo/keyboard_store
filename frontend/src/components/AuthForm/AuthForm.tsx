import React, {FC} from 'react';
import style from './AuthForm.module.scss'

interface AuthProps {
    register: any
    errors: any
}

const AuthForm:FC<AuthProps> = ({register, errors}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.form_input}>
                <label htmlFor="email">Your Email</label>
                <input {...register("email", {
                    required: "Please enter your e-mail address.",
                    pattern: {
                        value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "The e-mail address you entered is invalid.",
                    },
                })} id="email" type="email"/>
                <div>{errors?.email && <div className={style.form_error}>{errors.email.message}</div>}</div>
            </div>
            <div className={style.form_input}>
                <label className={style.form_field} htmlFor="password">Your password</label>
                <input
                    {...register("password", {
                        required: "Please enter your password.",
                        pattern: {
                            value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                            message:
                                "The password you have entered is too short. Please enter a minimum of 6 characters.",
                        },
                    })}
                    id="password" type="password"/>
                <div>{errors?.password && <div className={style.form_error}>{errors.password.message}</div>}</div>
            </div>
        </div>
    );
};

export default AuthForm;
