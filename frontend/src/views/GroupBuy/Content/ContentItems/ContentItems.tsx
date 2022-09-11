import React, {PropsWithChildren, useEffect} from 'react';
import style from "../Content.module.scss";
import {useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import {clearShopItem, fetchShopItems, shopSelector} from "../../../../store/slices/shopSlice";
import ContentItem from "../ContentItem/ContentItem";
import Skeleton from "../../../../components/UI/Skeleton/Skeleton";
import {filterSelector} from "../../../../store/slices/filterSlice";
import {Status} from "../../../../types/userSlice-types/userSlice-types";

const ContentItems = ({type}: PropsWithChildren<{type: number}>) => {
    const dispatch = useAppDispatch();
    const {items, status, itemStatus, sortedType} = useSelector(shopSelector);
    const {brand} = useSelector(filterSelector);
    
    const successItems = items.map(item =>
      <ContentItem image={item.img} id={item.id} price={item.price} name={item.name} status={item.status}/>
    )
    
    useEffect(() => {
        dispatch(fetchShopItems({itemStatus, type, brand, sortedType}))

        return () => {
            dispatch(clearShopItem())
        }
    }, [dispatch, itemStatus, type, brand, sortedType])

    if (items.length === 0 && status === Status.SUCCESS) {
        return <h2 className={style.notification}>No Products Available</h2>
    }
    
    if (status === Status.ERROR) {
        return <h2 className={style.notification}>Server error. Try again later</h2>
    }
    
    const loadingItems = [...Array(6)].map(() => <Skeleton/>)
    
    
    return (
        <div className={style.content}>
            {status === Status.LOADING ? loadingItems : successItems}
        </div>
    );
};

export default ContentItems;
