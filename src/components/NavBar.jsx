import { motion } from "framer-motion"
import { useState } from "react"
import { useLocomotiveScroll } from "react-locomotive-scroll"
import styled from "styled-components"

const NavContainer = styled(motion.div)`
    width: 100vw;
    position: absolute;
    top: ${props => props.click ? "0" : "-5rem" };

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.3s ease;

    z-index: 6;
`

const Menu = styled.li`
    background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
    list-style: none;
    color: white;
    width: 15rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    /* css切り抜き https://bennettfeely.com/clippy/ */
    clip-path: polygon(0 0, 100% 0, 80% 100%, 25% 100%);

    font-size: ${props => props.theme.fontmd};
    font-weight: 500;
    text-transform: uppercase;

    cursor: pointer;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
`

const MenuItems = styled(motion.ul)`
    position: relative;
    height: 5rem;
    background-color: black;
    color: white;
    list-style: none;

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    padding: 0 5rem;
`

const Item = styled(motion.li)`
    text-transform: uppercase;
    color: white;
`

const NavBar = () => {

    const {scroll} = useLocomotiveScroll();

    const handleScroll = (id) => {
        let element = document.querySelector(id);
        setClick(!click);
        // scrollToは指定した位置にスクロールして移動することができるメソッド
        scroll.scrollTo(element, {
            offSet: "-200",
            duration: "2000",
            easing: [0.25,0.0,0.35,1.0]
        })
    }

    const [click, setClick] = useState(false)
    return (
        <NavContainer 
            click={click}
            initial={{
                y: -100,
            }}
            animate={{
                y: 0,
            }}
            transition={{
                duration: 2,
                delay: 5
            }}
            >
            <MenuItems 
                drag="y"
                dragConstraints={{
                    top: 0,
                    bottom: 70,
                }}
                dragElastic={0.05}
                dragSnapToOrigin
            >
                <Menu onClick={() => setClick(!click)}>menu</Menu>
                <Item onClick={() => handleScroll("#home")}
                    whileHover={{scale:1.1, y: -5}}
                    whileTap={{scale: 0.9, y: 0}}
                >home</Item>
                <Item onClick={() => handleScroll("#about")}
                    whileHover={{scale:1.1, y: -5}}
                    whileTap={{scale: 0.9, y: 0}}
                >about</Item>
                <Item onClick={() => handleScroll("#shop")}
                    whileHover={{scale:1.1, y: -5}}
                    whileTap={{scale: 0.9, y: 0}}
                >shop</Item>
                <Item onClick={() => handleScroll("#new-arrival")}
                    whileHover={{scale:1.1, y: -5}}
                    whileTap={{scale: 0.9, y: 0}}
                >new arrival</Item>
            </MenuItems>
        </NavContainer>
    )
}

export default NavBar