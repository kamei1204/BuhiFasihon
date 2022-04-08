import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";
import { dark } from "./styles/Theme";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";

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
            <AnimatePresence>
              <main data-scroll-container ref={containerRef}>
                <Home />
              </main>
            </AnimatePresence>
          </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}


export default App;
