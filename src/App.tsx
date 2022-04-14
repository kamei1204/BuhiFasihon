import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";
import { dark } from "./styles/Theme";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Banner from "./sections/Banner";
import NewArrival from "./sections/ NewArrival";
import Footer from "./sections/Footer";


function App() {

  const containerRef = useRef(null)

  return (
    <>
    <GlobalStyles />
      {/* mainTheme */}
      <ThemeProvider theme={dark}>
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
