import css from './NewMessage.module.scss';

import { FC } from 'react';

interface INewMessageProps {
    text?: string;
}

const NewMessage: FC<INewMessageProps> = ({ text = 'New Message' }) => {
    return <div className={css.newMessage}>{text}</div>;
};
export default NewMessage;
