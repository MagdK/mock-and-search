import { useEffect } from "react"
import { useState } from "react"
import LoadingMask from './LoadingMask'
import Book from './Book'
import { Button, TextField } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");
  const [sort, setSort] = useState("desc");

  async function fetchBooks() {

    const response = await fetch("http://www.testdomain.com/v1/api/books");
    const responseJSON = await response.json();
  
    console.log(responseJSON);

    setBooks(responseJSON);
    setLoading(false);

  }

  useEffect(() => {
    setLoading(true)
    fetchBooks()
  }, [])

  function sortBooks() {
    setBooks([...books.sort((a, b) => sort === "desc" ? b.year - a.year : a.year - b.year)])
    setSort(sort === "desc" ? "asc" : "desc")
  }



  return (
    <div className="App">
      { loading ? <LoadingMask /> : 
        <>
          <Button variant="contained" onClick={sortBooks}>Sort</Button>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" value={input} onChange={({target}) => setInput(target.value)} />

          {books.map(({title, author, year}) => (title.toLowerCase().includes(input.toLowerCase()) && <Book key={year} title={title} author={author} year={year} />))}
        </>
      }
      
    </div>
  );
}


export default App;
