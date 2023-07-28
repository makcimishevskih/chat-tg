import css from './Message.module.scss';

import { FC, useEffect, useState } from 'react';
import { Avatar } from '../Avatar';

import readed from '../../../../assets/readed.svg';

import NewMessage from '../NewMessage';
import { addZero } from '../../../../utils/addZero';
import DateComponent from '../Date';

// import * as dayjs from 'dayjs';
// const d = dayjs(createdAt);
// const date = <div>DATE</div>;

interface IMessageProps {
    isMe: boolean;
    id: string;
    name: string;
    surname: string;
    avatar: string;

    createdAt: number;
    message: string;
    isNew: number;
    newMessage: boolean;
    showDate: boolean;
}

const Message: FC<IMessageProps> = ({
    avatar,
    name,
    surname,
    createdAt,
    message,
    isMe,
    newMessage,
    showDate,
}) => {
    const [state, setState] = useState<any>(createdAt);
    const [a, setA] = useState<boolean>(true);

    const hours = addZero(new Date(createdAt).getHours());
    const mins = addZero(new Date(createdAt).getMinutes());

    const isMeClass = isMe ? `${css.message} ${css.isMe}` : css.message;
    return (
        <>
            {newMessage ? <NewMessage /> : null}
            {createdAt ? <DateComponent date={createdAt} /> : null}
            <li className={isMeClass}>
                {!isMe ? <Avatar src={avatar} alt="avatar" /> : null}
                <div className={css.message__info}>
                    {!isMe ? (
                        <h3 className={css.message__fullname}>
                            {name} {surname}
                        </h3>
                    ) : null}

                    <div
                        className={css.message__text_block}
                        style={
                            isMe
                                ? { backgroundColor: 'var(--main-color-light)' }
                                : {}
                        }
                    >
                        <p className={css.message__text}>{message}</p>
                        <div className={css.message__edited}>
                            {!isMe ? <span>Edited</span> : null}
                            <span>
                                {hours}:{mins}
                            </span>
                            {isMe ? (
                                <img src={readed} alt="readed icon" />
                            ) : null}
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};
export default Message;
