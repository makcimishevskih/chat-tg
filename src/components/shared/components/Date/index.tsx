import css from './Date.module.scss';

import { FC, ReactNode } from 'react';

interface IDateProps {
    date: string;
    src?: string;
    children?: ReactNode;
    isTime?: boolean;
    styleProps?: object;
}

const DateComponent: FC<IDateProps> = ({
    src,
    date,
    isTime = true,
    children,
    styleProps
}) => {

    const styles = isTime
        ? undefined
        : {
              padding: '8px 16px',
              width: 100,
              margin: '12px auto 0',
              background: 'var(--main-color-light)',
          };

    return (
        <div className={css.dateBlock} style={{...styles, ...styleProps}}>
            {children}
            <span className={css.date}>{date}</span>
            {src ? <img src={src} alt="icon" /> : null}
        </div>
    );
};
export default DateComponent;
