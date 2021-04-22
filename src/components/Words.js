import Word from './Word'

const Words = ({ words, onDelete }) => {
    return (
        <>
            {words.map((word) => (
                <Word key={word.id} word={word} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Words
