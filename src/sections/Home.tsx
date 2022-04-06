import styled from "styled-components"
import SunnyVideo from "../components/SunnyVideo"

const Section = styled.section`
    position: relative;
    min-height: 300vh;
    overflow: hidden;
`

const Home = () => {
    return (
        <Section>
            <SunnyVideo />
        </Section>
    )
}

export default Home