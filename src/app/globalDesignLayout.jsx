'use client';
// import '../styles/globals.css'
import { ThemeProvider } from "styled-components"
import { useState, useEffect } from "react";
import { GlobalStyles } from "./../../ThemeConfig";
import { lightTheme, darkTheme } from "./../../Constants/theme";
import { ChakraProvider } from "@chakra-ui/react"
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./../../Components/Navbar";
import Footer from "./../../Components/Footer";
import HeadTag from "./../../Components/HeadTag";


export default function GlobalDesignJsx({Component, headtag}) {

const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'))
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        {/* <GlobalStyles /> */}
        <div>
            <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme}/>
            <div>
                <HeadTag page={headtag}></HeadTag>
            <Component currentTheme={currentTheme} />
            </div>
            <Footer currentTheme={currentTheme}/>
        </div>
      </ThemeProvider>
    </ChakraProvider>
  )

}