import React, {PropsWithChildren} from 'react';
import AsideFilter from "../../AsideFilter/AsideFilter";
import style from './FilterLayout.module.scss'

const FilterLayout = ({children}: PropsWithChildren ) => {
    return (
        <div className={style.filter_wrapper}>
            <AsideFilter />
            <div>
                {children}
            </div>
        </div>
    );
};

export default FilterLayout;
