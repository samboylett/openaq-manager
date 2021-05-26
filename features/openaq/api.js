import { BASE_URL } from './config'

export function openAqFetch(endpoint) {
    return fetch([BASE_URL, endpoint].join('/'), {
        headers: {
            Accept: 'application/json',
        },
    })
}
