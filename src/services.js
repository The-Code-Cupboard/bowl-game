// const HOST = "http://localhost:5000";
const HOST = "https://bowl-game-node-js-backend.herokuapp.com";

// Fetch Words
export const fetchWords = async () => {
  const res = await fetch(HOST + "/api/words");
  const data = await res.json();
  return data;
};

// Add Word
export const postWord = async (word) => {
  await fetch(HOST + "/api/words", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ text: word }),
  });
};

// Delete Word
export const deleteWord = async (id) => {
  await fetch(`${HOST}/api/words/${id}`, {
    method: "DELETE",
  });
};

// Fetch Users
export const fetchUsers = async () => {
  const res = await fetch(HOST + "/api/users");
  const data = await res.json();
  return data;
};

// Add User
export const postUser = async (username) => {
  await fetch(HOST + "/api/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username: username }),
  });
};
