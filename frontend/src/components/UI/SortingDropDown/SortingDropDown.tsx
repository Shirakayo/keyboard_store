import React, {useState} from 'react';
import style from './SortingDropDown.module.scss'
import {sortedList, sortListItem} from "../../../utils/dropdown";

const SortingDropDown = ({
                            // ref,
                             setViewSortType,
                             setSortValue
                         }: { setViewSortType: (mark: string) => void, setSortValue: (type: string) => void }) => {
    const [sortedMarks] = useState(sortedList);

    const handleChangeSortType = (mark: sortListItem) => {
        setViewSortType(mark.name)
        setSortValue(mark.type)
    }



    return (
        <div className={style.dropdown}>
            <ul>
                {sortedMarks.map(mark =>
                    <li className={style.mark_list_item} onClick={() => handleChangeSortType(mark)}>{mark.name}</li>
                )}
            </ul>
        </div>
    );
};

export default SortingDropDown;
