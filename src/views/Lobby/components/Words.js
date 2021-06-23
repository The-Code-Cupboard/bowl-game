import Word from "../../../common/Word";

const Words = ({ words, onDelete }) => {
  return (
    <>
      {words.map((word) => (
        <Word word={word} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Words;
