import axios from 'axios';

const catchError = (error: any) => error;
const checkResponse = (response: any) => response.data;

export const wrapper = (
    method: 'post' | 'get' | 'put' | 'delete',
    url: string,
    data?: any
) =>
    axios
        .request({ method, url, data, headers: { version: '0.0' } })
        .then(checkResponse)
        .catch(catchError);
