import css from './Message.module.scss';

import { FC } from 'react';
import { Avatar } from '../Avatar';

import NewMessage from '../NewMessage';
import DateComponent from '../Date';

import readedIcon from '../../../../assets/readed.svg';

export interface IMessageProps {
    id: string;
    name: string;
    isMe: boolean;
    avatar: string;
    surname: string;
    message: string;
    createdAt: number;
    newMessage: boolean;
    isShowDate?: boolean;
}

const Message: FC<IMessageProps> = ({
    avatar,
    name,
    surname,
    createdAt,
    message,
    isMe,
    newMessage,
    isShowDate,
}) => {
    const isMeClass = isMe ? `${css.message} ${css.isMe}` : css.message;
    const localTime = new Date(createdAt).toLocaleTimeString().slice(0, -3);
    const localDate = new Date(createdAt).toLocaleDateString();

    return (
        <>
            {newMessage ? <NewMessage /> : null}
            {isShowDate ? (
                <DateComponent isTime={false} date={localDate} />
            ) : null}
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
                            {!isMe ? (
                                <>
                                    <DateComponent date={localTime}/>
                                </>
                            ) : (
                                <DateComponent
                                    date={localTime}
                                    src={readedIcon}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};
export default Message;
