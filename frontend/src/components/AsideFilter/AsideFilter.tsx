import React, {useState} from 'react';
import FilterScope from "./FilterScope/FilterScope";
import style from './AsideFilter.module.scss'

const AsideFilter = () => {
    const [viewDropDown, setViewDropDown] = useState<boolean>(false);



    return (
        <aside className={style.aside}>
            <h2 className={style.aside_title}>Filters</h2>
            <div className={style.aside_dropdown}>
                <h2 className={style.aside_dropdown_title} onClick={() => setViewDropDown(!viewDropDown)}>Brands</h2>
                <FilterScope viewDropDown={viewDropDown}/>
            </div>
        </aside>
    );
};

export default AsideFilter;
