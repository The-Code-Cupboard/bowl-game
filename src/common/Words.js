import Word from "./Word";

const Words = ({ words, onDelete }) => {
  console.log("words: ", words);
  return (
    <>
      {words.map((word) => (
        <Word word={word} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Words;
