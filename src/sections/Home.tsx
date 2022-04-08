import styled from "styled-components"
import Logo from "../components/Logo"
import NavBar from "../components/NavBar"
import SunnyVideo from "../components/SunnyVideo"

const Section = styled.section`
    position: relative;
    min-height: 300vh;
    overflow: hidden;
    color: white;
`

const Home = () => {
    return (
        <Section>
            <SunnyVideo />
            <Logo />
            <NavBar />
        </Section>
    )
}

export default Home