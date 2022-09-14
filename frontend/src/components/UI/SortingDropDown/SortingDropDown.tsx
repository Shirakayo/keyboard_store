import React, {forwardRef, useState} from "react";
import style from "./SortingDropDown.module.scss";
import { sortedList, sortListItem } from "../../../utils/dropdown";

interface SortingDropDownProps {
  setViewSortType: (mark: string) => void;
  setViewDropDown: (trigger: boolean) => void;
  setSortValue: (type: string) => void;
}

const SortingDropDown = forwardRef<HTMLDivElement,SortingDropDownProps >(({
  setViewDropDown,
  setViewSortType,
  setSortValue,
}) => {
  const [sortedMarks] = useState(sortedList);


  const handleChangeSortType = (mark: sortListItem) => {
    setViewSortType(mark.name);
    setSortValue(mark.type);
    setViewDropDown(false);
  };

  return (
    <div className={style.dropdown}>
      <ul>
        {sortedMarks.map((mark) => (
          <li
            className={style.mark_list_item}
            onClick={() => handleChangeSortType(mark)}
          >
            {mark.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default SortingDropDown;
