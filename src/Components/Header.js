import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setData } from '../Actions'
import { API_URL } from '../config'

const Header = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  
  const searchData = useCallback(async (query) => {
    try {
      const response = await fetch(API_URL + '/search/shows?q=' + query)
      const jsonData = await response.json()
      dispatch(setData(jsonData))
    } catch (error) {
      console.error('Error fetching search data:', error)
      // handle error here
    }
  }, [dispatch])
  
  const handleSearch = useCallback((e) => {
    e.preventDefault()
    searchData(query)
  }, [query, searchData])
  
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between p-3">
        <Link to="/" className="navbar-brand">
          TV MAZE
        </Link>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          ></input>
          <button
            className="btn btn-outline-success mx-2 my-sm-0 "
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  )
}

export default Header
