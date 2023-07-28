import css from './App.module.scss';

import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';

import { wrapper } from '../../utils/wrapper';

import { REACT_APP_API_GET_CHATS } from '../../utils/urls';
import { initialChats } from '../../redux/slices';

import ChatList from '../widgets/components/ChatList';
import Communication from '../widgets/components/Communication';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        wrapper('get', REACT_APP_API_GET_CHATS).then(resp =>
            dispatch(initialChats(resp.response))
        );
    }, []);

    return (
        <div className={css.app}>
            <ChatList />

            <Communication />

            {/* <PageIndex /> */}
        </div>
    );
}

export default App;
