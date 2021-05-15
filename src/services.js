const HOST = "http://localhost:5000/";
// const HOST = "https://bowl-game-node-js-backend.herokuapp.com/api/";

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

// Cookie Operators
export const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

export const getCookie = (name) => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const eraseCookie = (name) => {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

// https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
// function setCookie(name,value,days) {
//   var expires = "";
//   if (days) {
//       var date = new Date();
//       date.setTime(date.getTime() + (days*24*60*60*1000));
//       expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "")  + expires + "; path=/";
// }
// function getCookie(name) {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(';');
//   for(var i=0;i < ca.length;i++) {
//       var c = ca[i];
//       while (c.charAt(0)==' ') c = c.substring(1,c.length);
//       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//   }
//   return null;
// }
// function eraseCookie(name) {
//   document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }
