import styled from "styled-components"
import MainVideo from "../assets/sunny.mp4"
import { motion } from "framer-motion"

const CoverVideo = styled.section`

    width: 100%;
    height: 100vh;
    position: relative;

    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        

        /* 文字の大きさによって変化する相対単位です。 例えば文字の大きさを10pxにしていたなら、1emは10pxということ */
        /* @media(max-width: 48em) {
            object-position: center 10%;
        }
    
        @media(max-width: 30em) {
            object-position: center 50%;
        } */
    }
`
const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;

    background-color: ${props => `rgba(${props.theme.bodyRgba},0.4)`};

    
`

const Title = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 5;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    div {
        display: flex;
        flex-direction: row;
    }

    h1 {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 200px;
        text-shadow: 1px 1px 1px white;

        @media (max-width: 640px) {
                font-size: 100px;
        }
        
    }
    h2 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: ${props => props.theme.fontlg};
        text-shadow: 1px 1px 1px white;
        margin-top: 15px;

        text-transform: capitalize;
    }
`

const container = {
    hidden : {
        opacity: 0,
    },
    show : {
        opacity: 1,

        transition:{
            delayChildren: 5,
            staggerChildren: 0.3,
        }
    }
}

const item ={
    hidden : {
        opacity: 0 ,
    },
    show : {
        opacity: 1,
    },
}

const SunnyVideo = () => {
    return (
        <CoverVideo >
            <DarkOverlay />
            <Title variants={container} initial="hidden" animate="show">
                <div>
                    {/* data-scrollのdata-scroll-speedで遅らせる */}
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">B</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4">u</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">h</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">i</motion.h1>
                </div>
                <motion.h2 variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="2">french. pug. boston</motion.h2>
            </Title>
            <video src={MainVideo}  autoPlay muted loop/>
            

        </CoverVideo>
    )
}
export default SunnyVideo

