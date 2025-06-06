import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Categories from './components/Categories'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import SignIn from './signin/page'
import Profile from './profile/page'

const Home = () => {
  return (

    <>
    
    <NavBar />
    <SearchBar />
    <Hero />
    <Categories />
    <Card />
    {/* <SignIn />  */}
    {/* <Profile /> */}

    </>
  )
}

export default Home