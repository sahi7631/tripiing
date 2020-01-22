// import 'whatwg-fetch';

// /**
//  * Parses the JSON returned by a network request
//  *
//  * @param  {object} response A response from a network request
//  *
//  * @return {object}          The parsed JSON from the request
//  */
// function parseJSON(response) {
//   window.logger.info('Network', 'Network response:', response);
//   if (response.status === 204 || response.status === 205) {
//     return null;
//   }
//   if (response.status === 401) {
//     return { status: 401 };
//   }
//   return response.json();
//   // return response.text().then(function(text) {
//   //   return text ? JSON.parse(text) : {}
//   // });
// }

// /**
//  * Checks if a network request came back fine, and throws an error if not
//  *
//  * @param  {object} response   A response from a network request
//  *
//  * @return {object|undefined} Returns either the response, or throws an error
//  */
// function checkStatus(response) {
//   if ((response.status >= 200 && response.status < 300) || response.status == 400 || response.status == 401 || response.status == 402 
//   || response.status == 404 || response.status == 422 || response.status == 403) {
//     return response;
//   }
//   window.logger.debug('Network', 'Error in checkStatus', response);
//   const error = new Error(response.statusText);
//   error.response = response;
//   throw error;
// }

// function checkTime(requestTime, url, response) {
//   const reponseTime = new Date().getTime();
//   window.logger.info('Network', `Request time for ${url} is ${reponseTime - requestTime}ms`);
//   return response;
// }
// /**
//  * Requests a URL, returning a promise
//  *
//  * @param  {string} url       The URL we want to request
//  * @param  {object} [options] The options we want to pass to "fetch"
//  *
//  * @return {object}           The response data
//  */
// export default function request(url, options) {
//   const requestTime = new Date().getTime();
//   return fetch(url, options)
//     .then((response) => checkTime(requestTime, url, response))
//     .then(checkStatus)
//     .then(parseJSON)
//     .then((parsedJSON) => {
//       window.logger.info('Network', `Fetching ${url}`, { options, data: parsedJSON });
//       return parsedJSON;
//     })
//     .catch((error) => window.logger.error('Network', `Fetching ${url}`, { options, error: error.response })
//     );
// }
