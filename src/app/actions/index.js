import axiosBase from 'axios';
import Cookies from 'js-cookie';

export const STATE_ONE = 'STATE_ONE';

const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : 'http://localhost:8000/';

var axios = axiosBase.create({
  baseURL: BASE_URL
});

// export function obtainCSRFToken() {
//   axios
//     .get(CRSF_TOKEN_URL)
//     .then(function(response) {
//       const csrftoken = Cookies.get('csrftoken');
//       axios.defaults.headers.post['X-CSRFToken'] = csrftoken;
//     })
//     .catch(function(error) {
//       console.error(error);
//     });
// }

export function exampleAction() {
  return {
    type: STATE_ONE
  };
}