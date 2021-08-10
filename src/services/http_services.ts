import React, { SetStateAction } from 'react';
import axios from 'axios';

const HOST = process.env.REACT_APP_HOST;

export const getDataFromServer = async (
  setWords: React.Dispatch<SetStateAction<never[]>>,
  setUsers?: React.Dispatch<SetStateAction<never[]>>
) => {
  if (setWords) {
    const _words = await fetchWords();
    setWords(_words);
  }
  if (setUsers) {
    const _users = await fetchUsers();
    setUsers(_users);
  }
};

// Fetch Words
export const fetchWords = async (): Promise<any> => {
  const res = await axios.get(`${HOST}/api/words`);
  const data = res.data;
  return data;
};

// Add Word
export const postWord = async (word: string, userId: string): Promise<void> => {
  const data = JSON.stringify({ text: word, userId: userId });
  await axios.post(`${HOST}/api/words`, data, {
    headers: {
      'Content-type': 'application/json',
    },
  });
};

// Delete Word
export const deleteWord = async (id: string): Promise<void> => {
  await axios.delete(`${HOST}/api/words/${id}`);
};

// Fetch Users
export const fetchUsers = async (): Promise<any> => {
  const res = await axios.get(`${HOST}/api/users`);
  const data = res.data;
  return data;
};

// Add or Update User (logic to handle conflicts is in the backend)
export const postUser = async (user: string, userId: string): Promise<void> => {
  const data = JSON.stringify({ username: user, id: userId });
  await axios.post(`${HOST}/api/users`, data, {
    headers: {
      'Content-type': 'application/json',
    },
  });
};

// Delete User
export const deleteUser = async (userId: string): Promise<void> => {
  await axios.delete(`${HOST}/api/users/${userId}`);
};

// Fetch Username by ID
export const fetchUsername = async (userId: string): Promise<any> => {
  const res = await axios.get(`${HOST}/api/users/${userId}`);
  const userData = res.data;
  return userData;
};
