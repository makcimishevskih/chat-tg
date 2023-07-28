import css from './ChatItem.module.scss';

import { FC } from 'react';
import { IChat, IUser } from '../../../../redux/slices';

import { Avatar } from '../Avatar';

import { useAppSelector } from '../../../../redux/hooks';
import { addZero } from '../../../../utils/addZero';

interface ICharItemProps {
    id: string;
    title: string;
    avatar: string;
    users: IUser[];
    lastMessage: string;
    createdAt: number;
    handler: (id: string) => void;
}

const MAGIC_SLICE_NUMBER = 35;

const CharItem: FC<ICharItemProps> = ({
    users,
    id,
    title,
    avatar,
    lastMessage,
    createdAt,
    handler,
}) => {
    const activeChatId = useAppSelector(state => state.message.activeChat);
    const hours = addZero(new Date(createdAt).getHours());
    const mins = addZero(new Date(createdAt).getMinutes());
    const classNames = `${css.charItem} ${
        id === activeChatId ? css.selected : undefined
    }`;

    return (
        <li className={classNames} onClick={() => handler(id)}>
            <Avatar src={avatar} alt="avatar" size="md" />
            <div className={css.charItem__info}>
                <h3 className={css.charItem__fullname}>{title}</h3>
                <p className={css.charItem__message}>
                    {lastMessage.length > 36
                        ? lastMessage.slice(0, MAGIC_SLICE_NUMBER) + '...'
                        : lastMessage}
                </p>
                <div className={css.charItem__time}>
                    {hours}:{mins}
                </div>
            </div>
        </li>
    );
};
export default CharItem;
