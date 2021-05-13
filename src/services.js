import { nanoid } from "nanoid";

const HOST = "http://localhost:5000/";
// const HOST = "https://bowl-game-node-js-backend.herokuapp.com/api/";

// Fetch Words
export const fetchWords = async () => {
  const res = await fetch(HOST + "words");
  const data = await res.json();
  return data;
};

// Add Word
export const postWord = async (word, username) => {
  await fetch(HOST + "words", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ text: word, userId: username }),
  });
};

// Delete Word
export const deleteWord = async (id) => {
  await fetch(`${HOST}words/${id}`, {
    method: "DELETE",
  });
};

// Fetch Users
export const fetchUsers = async () => {
  const res = await fetch(HOST + "users");
  const data = await res.json();
  return data;
};

// Add User
export const postUser = async (user, userId) => {
  await fetch(HOST + "users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username: user, id: userId }),
  });
};

// Delete Word
export const deleteUser = async (userId) => {
  await fetch(`${HOST}users/${userId}`, {
    method: "DELETE",
  });
};
