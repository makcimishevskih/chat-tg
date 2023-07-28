import css from './Date.module.scss';

import { FC } from 'react';
import { addZero } from '../../../../utils/addZero';

interface IDateProps {
    date: number;
}

const DateComponent: FC<IDateProps> = ({ date }) => {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();

    return (
        <div className={css.date}>
            {day}.{month}.{year}
        </div>
    );
};
export default DateComponent;
