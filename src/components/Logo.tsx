import { Link } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"

const Container = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 5;

    a {
        display: flex;
        align-items: flex-end;
        
    }

    svg {
        width: 4rem;
        height: auto;
        overflow: visible;
    }

    g {
        path {
            stroke: white;
        }
    }
`

const TextMove = styled(motion.span)`
    color: white;
    font-size: ${props => props.theme.fontmd};
    padding-bottom: 0.5rem;
`

const Logo = () => {
    return (
        <Container>
            <Link to="/">
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
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                                d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/>
                        </g>
                    </svg>
                    <TextMove 
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        animate={{
                            opacity: 1,
                            x: -5,
                        }}
                        transition={{
                            duration: 2,
                            delay: 2,
                            ease: "easeInOut",
                        }}
                        >Buhi-Style
                    </TextMove>
                </Link>
        </Container>
    )
}

export default Logo