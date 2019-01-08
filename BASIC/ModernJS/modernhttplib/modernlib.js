/**
 * EasyHTTP Library
 *
 * @version 3.0.0
 * @author Andriy Polukhin
 * @license MIT
 *
 **/


class EasyHTTP {
  // 1. Make a http get request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // 2. Make a http post request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  // 3. Make a http put request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;

  }

  // 4. Make a http delete request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const resData = await `Resource deleted...`;
    return resData;
  }
}
