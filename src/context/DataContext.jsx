import { createContext, useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from '../api/Post';

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [posts, setposts] = useState([])
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  useEffect(() => {
    const fetData = async () => {
      const res = await api.get("/feedback")
      setposts(res.data)
    }
    fetData();
  }, []) 

  //search
  useEffect(() => {
    const filtered = posts.filter((post) => 
      (post.title).toLowerCase().includes(search.toLowerCase())
    )
    setSearchResult(filtered)
  }, [posts, search])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const id = (posts.length) ? (Number(posts[posts.length - 1].id) + 1) : (1)
    const datetime = format(new Date(), "MMM dd, yyyy pp")
    const newObj = { id, title, datetime, body }
    api.post("/feedback", newObj)
    const newList = [...posts, newObj]
    setposts(newList)
    setTitle('')
    setBody('')
  }

  return (
    <DataContext.Provider value={{
      posts,
      searchResult,
      title,
      setTitle,
      body,
      setBody,
      search,
      setSearch, 
      handleSubmit
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext