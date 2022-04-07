import styled from "styled-components"
import Logo from "../components/Logo"
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
        </Section>
    )
}

export default Home