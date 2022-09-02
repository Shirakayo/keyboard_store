import React, {PropsWithChildren, useEffect} from 'react';
import style from "../Content.module.scss";
import {useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import {clearShopItem, fetchShopItems, shopSelector} from "../../../../store/slices/shopSlice";
import ContentItem from "../ContentItem/ContentItem";
import Skeleton from "../../../../components/UI/Skeleton/Skeleton";
import {filterSelector} from "../../../../store/slices/filterSlice";

const ContentItems = ({type}: PropsWithChildren<{type: number}>) => {
    const dispatch = useAppDispatch();
    const {items, status, itemStatus} = useSelector(shopSelector);
    const {brand} = useSelector(filterSelector);


    useEffect(() => {
        dispatch(fetchShopItems({itemStatus, type, brand}))

        return () => {
            dispatch(clearShopItem())
        }
    }, [dispatch, itemStatus, type, brand])

    if (items.length === 0) {
        return (
            <h2 className={style.empty_items}>No Products Available</h2>
        )
    }

    const successItems = items.map(item =>
        <ContentItem image={item.img} price={item.price} name={item.name} status={item.status}/>
    )

    const loadingItems = [...Array(6)].map(() => <Skeleton/>)
    return (
        <div className={style.content}>
            {status === 'LOADING' ? loadingItems : successItems}
        </div>
    );
};

export default ContentItems;
