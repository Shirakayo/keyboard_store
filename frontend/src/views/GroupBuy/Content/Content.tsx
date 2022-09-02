import React, {FC} from 'react';
import style from './Content.module.scss'
import FilterLayout from "../../../components/UI/FilterLayout/FilterLayout";
import ContentItems from "./ContentItems/ContentItems";

interface ContentProps {
    type: number;
}

const Content: FC<ContentProps> = ({type}) => {
    return (
        <FilterLayout>
            <div className={style.wrapper}>
                <ContentItems type={type} />
            </div>
        </FilterLayout>
    );
};

export default Content;
