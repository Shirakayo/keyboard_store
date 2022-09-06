import React, {
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import style from "./FilterScope.module.scss";
import { useSelector } from "react-redux";
import { shopSelector } from "../../../store/slices/shopSlice";
import { useAppDispatch } from "../../../store/store";
import { selectedBrand } from "../../../store/slices/filterSlice";

const FilterScope = ({
  viewDropDown,
}: PropsWithChildren<{ viewDropDown: boolean }>) => {
  const { brands } = useSelector(shopSelector);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const changeBrandValue = (brandType: any) => {
    setValue(brandType)
    setIsActive(true)
    if (brandType === value) {
      setValue('')
      setIsActive(false)
    }
  };

  useEffect(() => {
    dispatch(selectedBrand(Number(value)));
  }, [dispatch, value]);

  return (
    <div className={style.dropdown_content}>
      {viewDropDown &&
        brands.map((item) =>
          item.name.map((name) => (
            <label
              className={style["dropdown_content-label"]}
              htmlFor={name.brand}
            >
              <input
                type="checkbox"
                className={
                  item.id === Number(value) && isActive
                    ? `${style.dropdown_content_input} ${style.dropdown_content_input_active}`
                    : `${style.dropdown_content_input}`
                }
                onChange={(e) => changeBrandValue(e.target.value)}
                id={name.brand}
                value={item.id}
              />
              <span className={style["dropdown_content-span"]}>
                {name.brand}
              </span>
            </label>
          ))
        )}
    </div>
  );
};

export default FilterScope;
