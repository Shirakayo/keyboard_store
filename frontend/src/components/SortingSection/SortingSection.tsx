import React, {useEffect, useRef, useState} from 'react';
import style from './SortingSection.module.scss'
import {useSelector} from "react-redux";
import {changeSortedType, shopSelector} from "../../store/slices/shopSlice";
import {useAppDispatch} from "../../store/store";
import SortingDropDown from "../UI/SortingDropDown/SortingDropDown";
import {useOnClickOutside} from "../../hooks/UseOnClickOutside";

const SortingSection = () => {
    const {count} = useSelector(shopSelector)
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement>(null);
    const [sortValue, setSortValue] = useState<string>('');
    const [viewSortType, setViewSortType] = useState<string>('Alphabetically, A-Z');
    const [viewDropDown, setViewDropDown] = useState(false);

    useOnClickOutside(ref, () => setViewDropDown(false));


    useEffect(() => {
        dispatch(changeSortedType(sortValue))
    }, [sortValue])


    return (
        <div className={style.wrapper}>
            <p className={style.count}>{count} products</p>
            <div>
                <div className={style.preview}>
                    <span  className={style.filter_title}>Sort By</span>
                    <p onClick={() => setViewDropDown(!viewDropDown)} className={style['preview_sort-type']}>{viewSortType}</p>
                </div>
                <div ref={ref}>
                    {viewDropDown && <SortingDropDown setSortValue={setSortValue} setViewSortType={setViewSortType}/>}
                </div>
            </div>
        </div>
    );
};

export default SortingSection;
