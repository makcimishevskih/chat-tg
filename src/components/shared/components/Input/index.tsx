import css from './Input.module.scss';

import { ChangeEvent, FC, RefObject, useRef, useState } from 'react';

import clip from '../../../../assets/clip.svg';
import send from '../../../../assets/send.svg';

interface IInputProps {
    placeholder?: string;
    handler?: () => void;
}

const Input: FC<IInputProps> = props => {
    const [value, setValue] = useState('');
    const InputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className={css.inputBlock}>
            <input placeholder={'Type Message...'} value={value} onChange={handleChange} ref={InputRef} className={css.customInput}/>
            
            <div className={css.inputBlockIcons}>
                <button className={css.clipButton}>
                    <img src={clip} alt="clip" />
                </button>
                <button className={css.sendButton}>
                    <img src={send} alt="send" />
                </button>
            </div>
        </div>
    );
};
export default Input;
