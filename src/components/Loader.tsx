import styled from "styled-components"
import { motion } from "framer-motion"

const Container = styled(motion.div)`
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: black;
    color: white;

    z-index: 7;

    svg {
        width: 10vw;
        height: auto;
        overflow: visible;
    }

    g {
        path {
            stroke: red;
        }
    }
`

const Text = styled(motion.h1)`
    font-size: 30px;
    color: white;
    margin-top: 20px;
`

const Loader = () => {
    return (
        <Container
            initial={{
                y: 0, opacity: 1,
            }}
            exit={{
                y: "100%", opacity: 0,
            }}
            transition={{
                duration: 2,
                
            }}
        >
            <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        enable-background="new 0 0 24 24" 
                        height="48px" 
                        viewBox="0 0 24 24" 
                        width="48px" 
                        fill="none"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        >
                        <g>
                            
                            
                        </g>
                        <g>
                            <motion.path
                                initial={{
                                    opacity: 0,
                                    pathLength: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    pathLength: 1,
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeInOut",
                                }}
                                d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/>
                        </g>
                    </svg>
                    <Text
                        initial={{
                            opacity: 0,
                            
                        }}
                        animate={{
                            opacity: 1,
                            
                        }}
                        transition={{
                            duration: 2,
                            yoyo: Infinity,
                            ease: "easeInOut",
                        }}
                    >Buhi-Style</Text>
        </Container>
    )
}

export default Loader