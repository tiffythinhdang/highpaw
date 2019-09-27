import axios from 'axios';

export const fetchUserFromRequest = (requestId) => {
  // debugger requests/:requestId
  return axios.get(`/api/users/requests/${requestId}`)
}