import { API_BASE_URL } from '../constants/strings';

export const prontoGet = async (endPoint, header) => {
    // try {
    //     let response = await fetch(API_BASE_URL + endPoint, {
    //         method: 'GET',
    //         header: header
    //     });
    //     return await response.json();
    // } catch (error) {
    //     throw error;
    // }
    return get(API_BASE_URL + endPoint,header);
}

export const get = async (url, header) => {
    let response = await fetch(url, {
        method: 'GET',
        header: header
    });
    return await response.json();
}

export const post = async (url, header, body) => {
    try {
        let response = await fetch(API_BASE_URL + url, {
            method: 'POST',
            header: header,
            body: body
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}