'use client';
// import '../styles/globals.css'
import HomePage from './../../Components/HomePage';
import GlobalDesignJsx from "./globalDesignLayout";

function Home() {

  return (
    
    <GlobalDesignJsx Component={HomePage} headtag='Home' />

  )
}

export default Home