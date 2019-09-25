import axios from 'axios';

export const fetchDogsFromWalk = (walkId) => {
  return axios.get(`/api/dogs/walks/${walkId}`);
};

export const fetchDogsFromUser = (userId) => {
  return axios.get(`/api/dogs/user/${userId}`);
};

export const fetchADog = (id) => {
  return axios.get(`/api/dogs/${id}`);
};

export const createADog = (data) => {
  return axios.post('/api/dogs/', data);
};

export const deleteADog = (id) => {
  return axios.delete(`/api/dogs/${id}`);
};