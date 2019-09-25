import axios from 'axios';

export const fetchWalks = () => {
  return axios.get('/api/walks/')
};

export const fetchWalk = id => {
  return axios.get(`/api/walks/${id}`)
}

export const createWalk = data => {
  return axios.post(`/api/walks/`, data)
}

export const deleteWalk = id => {
  return axios.delete(`/api/walks/${id}`)
}

// test
window.createWalk = createWalk
window.fetchWalks = fetchWalks;