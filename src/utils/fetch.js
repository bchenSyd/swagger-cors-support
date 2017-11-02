import fetch from 'node-fetch';

function fetchApi(url, body, method = 'GET') {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    return fetch(url, {
        method,
        headers,
        body
    })
        .then(response =>
            Promise.resolve(response)
        ).catch(error =>
            Promise.reject(error)
        )
}

export { fetchApi }

