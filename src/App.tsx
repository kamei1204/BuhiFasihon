import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";
import { theme } from "./styles/Theme";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useEffect, useRef, useState } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Banner from "./sections/Banner";
import NewArrival from "./sections/ NewArrival";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";


function App() {

  const [loader , setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true)
    }, 3000);
  }, [])
  

  const containerRef = useRef(null)

  return (
    <>
    <GlobalStyles />
      {/* mainTheme */}
      <ThemeProvider theme={theme}>
          <LocomotiveScrollProvider
            options={
              {
                smooth: true,
                // ... all available Locomotive Scroll instance options 
              }
            }
            watch={
              []
            }
            containerRef={containerRef}
          >
            <AnimatePresence>
              {loader ? null : <Loader/>}

            </AnimatePresence>
            <ScrollTriggerProxy />
            <AnimatePresence>
              <main className="App" data-scroll-container ref={containerRef}>
                <Home />
                <About />
                <Shop />
                <Banner />
                <NewArrival />
                <Footer />
              </main>
            </AnimatePresence>
          </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}


export default App;
