import React, {useState} from 'react';
import FilterScope from "./FilterScope/FilterScope";
import style from './AsideFilter.module.scss'
import {RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri";

const AsideFilter = () => {
    const [viewFilterDropDown, setViewFilterDropDown] = useState<boolean>(false);



    return (
        <aside className={style.aside}>
            <h2 className={style.aside_title}>Filters</h2>
            <div className={style.aside_dropdown}>
                <div onClick={() => setViewFilterDropDown(!viewFilterDropDown)} className={style.title_section}>
                    <h2 className={style.aside_dropdown_title}>Brands</h2>
                    {viewFilterDropDown ? <RiArrowDropUpLine size={25} color={'white'} /> : <RiArrowDropDownLine size={25} color={'white'} />}
                </div>
                <FilterScope viewDropDown={viewFilterDropDown}/>
            </div>
        </aside>
    );
};

export default AsideFilter;
