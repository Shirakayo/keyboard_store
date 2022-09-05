import React, {FC} from 'react';
import style from './Content.module.scss'
import FilterLayout from "../../../components/UI/FilterLayout/FilterLayout";
import ContentItems from "./ContentItems/ContentItems";
import SortingSection from "../../../components/SortingSection/SortingSection";

interface ContentProps {
    type: number;
}

const Content: FC<ContentProps> = ({type}) => {
    return (
        <FilterLayout>
            <div className={style.wrapper}>
                <SortingSection />
                <ContentItems type={type} />
            </div>
        </FilterLayout>
    );
};

export default Content;
