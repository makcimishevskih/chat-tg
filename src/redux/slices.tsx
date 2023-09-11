import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IMessageState {
    chats: IChat[];
    messages: IMessage[];
    activeChat: string;
}

export interface IMessage {
    id: string;
    created_at: number;
    user: {
        id: string;
        name: string;
        surname: string;
        avatar: string;
        you: boolean;
    };
    message: string;
    is_new: boolean;
}
export interface IUser {
    id: string;
    name: string;
    surname: string;
    avatar: string;
}
export interface ILastMessage {
    you: boolean;
    message: string;
    user_id: string;
    user_name: string;
    created_at: number;
    user_surname: string;
}

export interface IChat {
    id: string;
    title: string;
    avatar: string;
    private: boolean;
    created_at: number;
    count_unread: number;
    users: IUser[];
    last_message: ILastMessage;
}

const initialState: IMessageState = {
    chats: [],
    messages: [],
    activeChat: '',
} as IMessageState;

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        initialChats: (state, action: PayloadAction<IChat[]>) => {
            state.chats = action.payload;
            state.activeChat = action.payload[0].id;
        },
        changeActiveChar: (state, action: PayloadAction<string>) => {
            state.activeChat = action.payload;
        },
        getMessages: (state, action: PayloadAction<IMessage[]>) => {
            state.messages = action.payload.reverse();
            console.log(state.messages);
        },
    },
});

export const { initialChats, changeActiveChar, getMessages } =
    messageSlice.actions;

export default messageSlice.reducer;
