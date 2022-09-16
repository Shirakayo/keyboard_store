import React, { FC, useEffect } from "react";
import PageLayout from "../components/UI/PageLayout/PageLayout";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { fetchInfoForItem, shopSelector } from "../store/slices/shopSlice";
import { useSelector } from "react-redux";
import style from "../assets/style/ItemPage/ItemPage.module.scss";
import ItemContent from "../components/ItemContent/ItemContent";

const ItemPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { items } = useSelector(shopSelector);

  useEffect(() => {
    if (id) {
      dispatch(fetchInfoForItem(id));
    }
  }, []);

  return (
    <PageLayout>
      <div className={style.wrapper}>
        {items &&
          items.map((el) => (
            <ItemContent
              img={el.img}
              price={el.price}
              status={el.status}
              name={el.name}
              id={el.id}
            />
          ))}
      </div>
    </PageLayout>
  );
};

export default ItemPage;
