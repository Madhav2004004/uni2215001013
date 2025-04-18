import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/evaluation-service';

export const fetchUsers = async (token: string) => {
  const res = await axios.get(`${BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.users;
};

export const fetchPosts = async (userId: number, token: string) => {
  const res = await axios.get(`${BASE_URL}/users/${userId}/posts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.posts;
};

export const fetchComments = async (postId: number, token: string) => {
  const res = await axios.get(`${BASE_URL}/posts/${postId}/comments`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.comments;
};
