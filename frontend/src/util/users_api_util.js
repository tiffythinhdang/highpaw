import axios from 'axios';

export const fetchAUser = (id) => {
  return axios.get(`/api/users/${id}`);
};

export const updateAUser = (data) => {
  return axios.patch(`/api/users/${data._id}`, data);
};

export const fetchUserFromRequest = (requestId) => {
  // debugger requests/:requestId
  return axios.get(`/api/users/requests/${requestId}`)
}