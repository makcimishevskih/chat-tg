import css from './Header.module.scss';

import { FC } from 'react';

interface IHeaderProps {
    title: string;
}

const Header: FC<IHeaderProps> = ({ title = 'Selected Chat Title' }) => {
    return (
        <header className={css.header}>
            <h2 className={css.header__title}>Chat: {title}</h2>
        </header>
    );
};
export default Header;
