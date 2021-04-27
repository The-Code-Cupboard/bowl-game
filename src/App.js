import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Words from './components/Words'
import AddWord from './components/AddWord'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
    const [showAddWord, setShowAddWord] = useState(false)
    const [words, setWords] = useState([])

    useEffect(() => {
        const getWords = async () => {
            const wordsFromServer = await fetchWords()
            setWords(wordsFromServer)
        }
        getWords()
    }, [])

    // Fetch Words
    const fetchWords = async () => {
        const res = await fetch('http://localhost:5000/words')
        const data = await res.json()
        return data
    }

    // Add Word
    const addWord = async (word) => {
        const res = await fetch('http://localhost:5000/words', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(word)
        })
        
        const data = await res.json()

        setWords([...words, data])
    }

    // Delete Word
    const deleteWord = async (id) => {
        await fetch(`http://localhost:5000/words/${id}`, {
            method: 'DELETE'
        })

        setWords(words.filter((word) => word.id !== id))
    }

    return (
        <Router>
            <div className="container">
                <Header onAdd={() => setShowAddWord(!showAddWord)} showAdd={showAddWord} />
                
                <Route path='/' exact render={(props) =>(
                    <>
                        {showAddWord && <AddWord onAdd={addWord} />}
                        {words.length > 0 ? <Words words={words} onDelete={deleteWord} /> : 'No words to show... yet!! :)'}
                    </>
                )} />
                <Route path='/about' component={About}/>
                <Footer />
            </div>
        </Router>
    );  
}

export default App;
