import { useState } from 'react'
import Header from './components/Header'
import Words from './components/Words'
import AddWord from './components/AddWord'

const App = () => {
    const [words, setWords] = useState([
    {
        id: 1,
        text: 'Stacey',
        user: 'sergeantskills'
    },
    {
        id: 2,
        text: 'Nick',
        user: 'sergeantskills'
    },
    {
        id: 3,
        text: 'Bradford',
        user: 'chaloobi'
    }
    ])

    // Add Word
    const addWord = (word) => {
        const id = Math.floor(Math.random()*10000) + 1
        const newWord = { id, ...word }
        setWords([...words, newWord])
    }

    // Delete Word
    const deleteWord = (id) => {
        setWords(words.filter((word) => word.id !== id))
    }

    return (
        <div className="container">
            <Header />
            <AddWord onAdd={addWord} />
            {words.length > 0 ? <Words words={words} onDelete={deleteWord} /> : 'No words to show... yet!! :)'}
        </div>
    );  
}

export default App;
