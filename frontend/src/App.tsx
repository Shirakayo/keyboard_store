import React, {FC, useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import MainLayout from "./components/UI/MainLayout/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import {useAppDispatch} from "./store/store";
import {authenticatedUser} from "./store/slices/userSlice";

const App: FC = () => {
    const dispatch = useAppDispatch()

    const authUser = () => {
        dispatch(authenticatedUser())
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            authUser()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <BrowserRouter>
            <MainLayout>
                <AppRoutes />
            </MainLayout>
        </BrowserRouter>
    );
};

export default App;
