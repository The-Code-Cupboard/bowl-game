import { FaTimes } from 'react-icons/fa'

const Word = ( {word, onDelete} ) => {
    return (
        <div className='word'>
            <h3>
                {word.text} <FaTimes onClick={() => onDelete(word.id)} /> 
            </h3>
            <p>{word.userId}</p>
        </div>
    )
}

export default Word
