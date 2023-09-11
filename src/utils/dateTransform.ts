import { addZero } from './addZero';

export enum DateTypeTransformEnum {
    DATE = 'date',
    MONTH = 'month',
    FULL_YEAR = 'fullyear',
}

export const dateTransform = (date: number, type: DateTypeTransformEnum) => {
    switch (type) {
        case DateTypeTransformEnum.DATE:
            return addZero(new Date(date).getDate());
        case DateTypeTransformEnum.MONTH:
            return addZero(new Date(date).getMonth());
        case DateTypeTransformEnum.FULL_YEAR:
            return addZero(new Date(date).getFullYear());
        default:
            return new Date(date);
    }
};
export const dateTransformToLocal = (date: number) => {
    return new Date(date).toLocaleDateString();
};
