
// Fetch Words
export const fetchWords = async () => {
    const res = await fetch('http://localhost:5000/words')
    const data = await res.json()
    return data
}
