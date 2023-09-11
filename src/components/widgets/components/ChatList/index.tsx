import css from './ChatList.module.scss';

import { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks';

import ChatItem from '../../../shared/components/ChatItem';
import { changeActiveChar } from '../../../../redux/slices';
import Header from '../../../shared/components/Header';

interface IChatListProps {}

const ChatList: FC<IChatListProps> = props => {
    const chats = useAppSelector(state => state.message.chats);
    const dispatch = useAppDispatch();

    const handleSelectChat = (id: string) => {
        dispatch(changeActiveChar(id));
    };

    return (
        <section className={css.chatWidget}>
            <Header title="All chats" />
            <ul className={css.chatWidget__list}>
                {chats
                    ? chats.map(
                          ({
                              id,
                              avatar,
                              title,
                              users,
                              last_message,
                              created_at,
                          }) => (
                              <ChatItem
                                  key={id}
                                  id={id}
                                  users={users}
                                  title={title}
                                  createdAt={created_at}
                                  avatar={avatar}
                                  handler={handleSelectChat}
                                  lastMessage={last_message.message}
                              />
                          )
                      )
                    : null}
            </ul>
        </section>
    );
};
export default ChatList;
