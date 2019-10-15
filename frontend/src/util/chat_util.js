import axios from 'axios';

export const getChats = requestId => {
  return axios.get(`/api/requests/${requestId}/chat`)
};