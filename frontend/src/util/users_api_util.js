import axios from 'axios';

export const fetchAUser = (id) => {
  return axios.get(`/api/users/${id}`);
};

export const updateAUser = (data) => {
  return axios.patch("/api/users/", data);
};
