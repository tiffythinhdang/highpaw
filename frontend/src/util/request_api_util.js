import axios from 'axios';

export const sendRequest = (walkId) => {
  return axios.post(`/api/requests/walks/${walkId}`)
}

export const modifyRequest = (request) => {
  return axios.patch(`/api/requests/${request._id}`, request)
}

export const fetchRequests = (walkId) => {
  return axios.get(`/api/requests/walks/${walkId}`)
}

