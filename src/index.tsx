import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')!);

// 1. font
// 2. RTQ Query if i can do
// 3. selector - types for every selector
// 4. rework input to common block
// 5. loader
// 6. error boundary
// 7. pages main 404
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
reportWebVitals();
