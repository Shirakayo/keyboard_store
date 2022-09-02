import React, {PropsWithChildren, useEffect, useState} from 'react';
import style from './FilterScope.module.scss'
import {BrandForShop} from "../../../types/shopSlice-type/shopSlice-type";
import {useSelector} from "react-redux";
import {shopSelector} from "../../../store/slices/shopSlice";
import {useAppDispatch} from "../../../store/store";
import {selectedBrand} from "../../../store/slices/filterSlice";



const FilterScope = ({
                         viewDropDown
                     }: PropsWithChildren<{viewDropDown: boolean }>) => {
    const {brands} = useSelector(shopSelector);
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('');
    console.log(brands)

    useEffect(() => {
        dispatch(selectedBrand(Number(value)))
    }, [dispatch, value])

    return (
        <div className={style.dropdown_content}>
            {viewDropDown && brands.map(item =>
                item.name.map(name =>
                <label className={style['dropdown_content-label']} htmlFor="item.brand">
                    <input type='checkbox'  onChange={e => setValue(e.target.value)} id={name.brand}
                           value={item.id}/>
                    <span>{name.brand}</span>
                </label>
                ))}
        </div>
    );
};

export default FilterScope;
