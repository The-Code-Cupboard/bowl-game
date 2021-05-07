// Fetch Words
export const fetchWords = async () => {
  const res = await fetch("http://localhost:5000/words");
  const data = await res.json();
  return data;
};

// Add Word
export const postWord = async (word) => {
  await fetch("http://localhost:5000/words", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ text: word }),
  });
};

// Delete Word
export const deleteWord = async (id) => {
  await fetch(`http://localhost:5000/words/${id}`, {
    method: "DELETE",
  });
};
