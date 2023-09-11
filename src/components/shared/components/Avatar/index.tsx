import { FC } from 'react';
import { IAvatar } from './interface';
import './Avatar.scss';

export const Avatar: FC<IAvatar> = (props: IAvatar) => {
    const { src, alt, size = 'sm' } = props;

    const className = `component__avatar component__avatar_${size}`;

    return (
        <div className={className}>
            <img src={src} alt={alt} />
        </div>
    );
};
