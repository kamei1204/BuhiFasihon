import styled from "styled-components"

const Section = styled.section`
    min-height: 100vh;
    width: 80%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
`

const Container = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BannerComponent = styled.h1`
    font-size: ${ props=> props.theme.font3xl };
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    white-space: nowrap;
    color: white;
    text-transform: uppercase;
    line-height: 1;
    margin-top: 20px;

    span {
        display: block;
        background-color: black;
        padding: 1rem 2rem ;
    }
`

const Banner = () => {
    return (
        <Section>
            <Container id="id">
                <BannerComponent>
                    <span data-scroll data-scroll-speed="8" data-scroll-direction="horizontal" data-scroll-target="#id">フレンチブルドッグは</span>
                </BannerComponent>
                <BannerComponent>
                    <span data-scroll data-scroll-speed="6" data-scroll-direction="horizontal" data-scroll-target="#id">体温調節が苦手な犬ですね</span>
                </BannerComponent>
                <BannerComponent>
                    <span data-scroll data-scroll-speed="-6" data-scroll-direction="horizontal" data-scroll-target="#id">服は冬の寒さから守ってくれるし</span>
                </BannerComponent>
                <BannerComponent>
                    <span data-scroll data-scroll-speed="6" data-scroll-direction="horizontal" data-scroll-target="#id">夏の直射日光</span>
                </BannerComponent>
                <BannerComponent>
                    <span data-scroll data-scroll-speed="6" data-scroll-direction="horizontal" data-scroll-target="#id">照り返しからも守ってくれます</span>
                </BannerComponent>
            </Container>
        </Section>
    )
}

export default Banner