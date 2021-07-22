import Word from "../../../common/Word";
import { word }  from "../../../common/types"

type wordsProps = {
  words: Array<word>,
  onDelete: (wordId: string) => Promise<void>
}

const Words = ({ words, onDelete }: wordsProps) => {
  return (
    <>
      {words.map((word) => (
        <Word word={word} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Words;
