// JSON mock server
//const HOST = "http://localhost:5000/";

// Heroku
// const HOST = "https://bowl-game-node-js-backend.herokuapp.com/api/";

// Local Node JS Server
const HOST = "http://localhost:5000/api/";

export const getDataFromServer = async (setWords = null, setUsers = null) => {
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
export const fetchWords = async () => {
  const res = await fetch(HOST + "words");
  const data = await res.json();
  return data;
};

// Add Word
export const postWord = async (word, userId) => {
  await fetch(HOST + "words", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ text: word, userId: userId }),
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

// Add or Update User (logic is in the backend)
export const postUser = async (user, userId) => {
  await fetch(HOST + "users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username: user, id: userId }),
  });
};

// Delete User
export const deleteUser = async (userId) => {
  await fetch(`${HOST}users/${userId}`, {
    method: "DELETE",
  });
};

// Fetch Username by ID
export const fetchUsername = async (userId) => {
  const res = await fetch(`${HOST}users/${userId}`);
  const userData = await res.json();
  return userData;
};
