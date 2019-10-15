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

export const fetchRequest = requestId => {
  return axios.get(`/api/requests/${requestId}`)
}

export const fetchActiveRequest = (userId) => {
  return axios.get(`/api/requests/users/${userId}`)
}

export const fetchActiveRequests = (walkId) => {
  return axios.get(`/api/requests/walks/approved/${walkId}`)
}

export const fetchUserRequests = () => {
  return axios.get('/api/requests')
}

export const deleteRequest = id => {
  return axios.delete(`/api/requests/${id}`)
}

window.fetchUserRequests = fetchUserRequests;