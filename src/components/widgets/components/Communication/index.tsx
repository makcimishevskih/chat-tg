import css from './Communication.module.scss';

import { FC, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { getMessages, IChat } from '../../../../redux/slices';
import { getMessagesById } from '../../../../utils/urls';
import { wrapper } from '../../../../utils/wrapper';

import Header from '../../../shared/components/Header';
import Input from '../../../shared/components/Input';
import Message from '../../../shared/components/Message';

// const dayjs = require('dayjs');

const Communication: FC = () => {
    const dispatch = useAppDispatch();
    const { activeChat, chats, messages } = useAppSelector(
        state => state.message
    );
    const newMessageElemIndex = messages?.findIndex(el => el.is_new);

    const selectedChat: IChat = useMemo(
        () => chats.find(el => el.id === activeChat)!,
        [activeChat, chats]
    );

    useEffect(() => {
        if (selectedChat) {
            wrapper('get', getMessagesById(selectedChat.id)).then(resp =>
                dispatch(getMessages(resp.response))
            );
        }
    }, [selectedChat]);

    return (
        <section className={css.communication}>
            {selectedChat ? <Header title={selectedChat.title} /> : null}
            <ul className={css.chat}>
                {selectedChat
                    ? messages.map(
                          (
                              {
                                  id,
                                  created_at,
                                  message,
                                  is_new,
                                  user: { name, surname, avatar, you },
                              },
                              i
                          ) => (
                              <Message
                                  newMessage={i === newMessageElemIndex}
                                  key={id}
                                  id={id}
                                  name={name}
                                  surname={surname}
                                  avatar={avatar}
                                  isMe={you}
                                  createdAt={created_at}
                                  message={message}
                                  isNew={is_new}
                                  showDate={false}
                              />
                          )
                      )
                    : 'Loading...'}
            </ul>

            <Input />
        </section>
    );
};
export default Communication;
