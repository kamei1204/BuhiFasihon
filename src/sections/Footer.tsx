import { motion } from "framer-motion"
import { useLocomotiveScroll } from "react-locomotive-scroll"
import styled from "styled-components"
import Logo from "../assets/images/img16.jpg"

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    margin: 5rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: black;
    color: white;

    position: relative;
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 7vw;
        height: auto;
    }
    h3 {
        font-size: ${props => props.theme.fontmd};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`

const FooterContainer = styled(motion.footer)`
    width: 80vw;

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 5rem;

        border-top: 2px solid white;
        border-bottom: 2px solid;

        padding: 2rem;
    }
    li {
        cursor: pointer;
        padding: 2rem;
        text-transform: uppercase;

        transition: all 0.3 ease-out;

        &:hover {
            transform: scale(1.1);
        }
    }
`

const Bottom = styled.div`
    padding: 0.5rem 0;
    margin: 2rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        text-decoration: underline;
    }
`

const Footer = () => {

    const {scroll} = useLocomotiveScroll();

    const handleScroll = (id:string) => {
        let element = document.querySelector(id);
        // scrollToは指定した位置にスクロールして移動することができるメソッド
        scroll.scrollTo(element, {
            offSet: "-200",
            duration: "2000",
            easing: [0.25,0.0,0.35,1.0]
        })
    }

    return (
        <Section>
            <LogoContainer>
                <img src={Logo} alt="logo" data-scroll data-scroll-speed="2"/>
                <h3 data-scroll data-scroll-speed="-1">Buhi-Style</h3>
            </LogoContainer>
            <FooterContainer
                initial={{y:"-400px"}}
                whileInView={{y:"0"}}
                viewport={{once: false}}
                transition={{ duration: 1.5}}

            >
                <ul>
                    <li onClick={() => handleScroll("#home")}>home</li>
                    <li onClick={() => handleScroll("#about")}>about</li>
                    <li onClick={() => handleScroll("#shop")}>shop</li>
                    <li onClick={() => handleScroll("#new-arrival")}>new arrival</li>
                    <li>
                    {/* noreferrerとは　現在のページの情報をリンク先へ渡さないようにする */}
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer">look book</a>
                    </li>
                    <li>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer">reviews</a>
                    </li>
                </ul>
            </FooterContainer>
            <Bottom>
                <span>&copy; {new Date().getFullYear()} . All Rights Reserved</span>
                {/* &nbsp; を挿入すると半角スペース分の間隔を空けてくれるという機能を果たしてくれます。 */}
                <span> Made With &hearts; by &nbsp;</span>
                <a href="https://www.google.com/" target="_blank" rel="noreferrer">sunnyCode</a>
            </Bottom>
        </Section>
    )
}

export default Footer