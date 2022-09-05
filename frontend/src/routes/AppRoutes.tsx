import React, {FC} from 'react';
import {userSelector} from '../store/slices/userSlice';
import {useSelector} from "react-redux";
import {privateRoutes, publicRoutes} from "./Routes";
import {Navigate, Route, Routes} from "react-router-dom";
import {WELCOME_ROUTES} from "../utils/const";

const AppRoutes: FC = () => {
    const {isAuthenticated} = useSelector(userSelector)
    return (
        <Routes>
            {isAuthenticated && privateRoutes.map(route =>
                <Route path={route.path} element={route.component}/>
            )}
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} element={route.component}>
                    {route.subRoute && route.subRoute.map(sub =>
                        <Route key={sub.path} path={sub.path} element={sub.component} />
                    )}
                </Route>
            )}
            <Route path='/*' element={<Navigate to={WELCOME_ROUTES} />} />
        </Routes>
    );
};

export default AppRoutes;
