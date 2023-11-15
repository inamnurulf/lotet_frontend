import Navbar from '@/components/navbar'
import SearchBar from '@/components/searchBar'
import React from 'react'

const Seminar = () => {
  return (
    <div>
      <Navbar defaultform = {true}></Navbar>
      <SearchBar/>
    </div>
  )
}

export default Seminar
