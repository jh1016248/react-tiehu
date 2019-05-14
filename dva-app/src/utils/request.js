import fetch from 'dva/fetch';
const HOST = 'http://localhost:3000';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
const request = {
  get(url, options) {
    return fetch(HOST + url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: options
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => ({ data }))
      .catch(err => ({ err }));
  },
  post(url, options) {
    return fetch(HOST + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options)
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(err => ({ err }));
  }
}

export default request