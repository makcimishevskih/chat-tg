import css from './Input.module.scss';

import { ChangeEvent, FC, RefObject, useRef } from 'react';

import clip from '../../../../assets/clip.svg';
import send from '../../../../assets/send.svg';

interface IInputProps {
    placeholder?: string;
    handler?: () => void;
}

const Input: FC<IInputProps> = props => {
    const InputRef = useRef(null) as RefObject<HTMLParagraphElement>;

    const handleChange = (e: ChangeEvent<HTMLParagraphElement>) => {
        console.log(e.target);
    };

    return (
        <div className={css.inputBlock}>
            <p ref={InputRef} className={css.customInput}>
                Type Message...
            </p>
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
