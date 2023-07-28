export const REACT_APP_API_GET_CHATS =
    'https://api.lenzaos.com/chat.get?offset=0&limit=10';
export const getMessagesById = (id: string) =>
    `https://api.lenzaos.com/message.get?chat_id=${id}&offset=0&limit=20`;
