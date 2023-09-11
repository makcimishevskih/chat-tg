import css from './Communication.module.scss';

import { FC, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { getMessages, IChat } from '../../../../redux/slices';
import { getMessagesById } from '../../../../utils/urls';
import { wrapper } from '../../../../utils/wrapper';

import Header from '../../../shared/components/Header';
import Input from '../../../shared/components/Input';
import Message from '../../../shared/components/Message';
import {
    dateTransformToLocal,
} from '../../../../utils/dateTransform';

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

    const messagesDateFilter = messages?.map(({ id, created_at }, i) => ({
        id,
        date: dateTransformToLocal(created_at),
    }));

    const datesToRender = messagesDateFilter.reduceRight(
        (acc: any, { date, id }: any) => {
            const resultDate = acc[date];
            if (!acc[resultDate]) acc[date] = id;
            return acc;
        },
        {}
    );

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
                                  user: { name, surname, avatar, you },
                              },
                              i
                          ) => (
                              <Message
                              
                                  isShowDate={
                                      id ===
                                      datesToRender[
                                          dateTransformToLocal(created_at)
                                      ]
                                  }
                                  newMessage={i === newMessageElemIndex}
                                  key={id}
                                  id={id}
                                  name={name}
                                  surname={surname}
                                  avatar={avatar}
                                  isMe={you}
                                  createdAt={created_at}
                                  message={message}
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
