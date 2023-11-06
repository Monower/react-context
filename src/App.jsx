import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ThemeContext } from "./context/Theme/context"
import { useState } from "react"

function App() {

  const [theme, setTheme] = useState('dark');
  const toggleTheme = (color) => { 
    console.log(color);
    setTheme(color);
  }
  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <Navbar />
        <main>
          this is main
        </main>
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}

export default App
