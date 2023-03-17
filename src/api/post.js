import api from ".";

export const postApi = {
  getAll: (limit, offset) => api.get(`/post/${limit}/${offset}`),
  getAllFilter: (limit, offset, status) =>
    api.get(`/post/${limit}/${offset}/${status}`),
  add: (data) => api.post(`/post`, data),
  getOne: (id) => api.get(`/post/${id}`),
  update: (data, id) => api.put(`/post/${id}`, data),
  delete: (id) => api.delete(`/post/${id}`),
};
