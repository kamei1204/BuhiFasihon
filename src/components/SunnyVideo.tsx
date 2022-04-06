import styled from "styled-components"
import MainVideo from "../assets/sunny.mp4"

const CoverVideo = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;

    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`
const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;

    background-color: ${props => `rgba(${props.theme.bodyRgba},0.7)`};
`

const Title = styled.div`
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
        font-size: ${props => `${props.theme.font4xl}`};
        text-shadow: 1px 1px 1px white;
    }
    h2 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: ${props => `${props.theme.fontlg}`};
        text-shadow: 1px 1px 1px white;
        margin-top: 15px;

        text-transform: capitalize;
    }
`

const SunnyVideo = () => {
    return (
        <CoverVideo>
            <DarkOverlay />
            <Title>
                <div>
                    {/* data-scrollのdata-scroll-speedで遅らせる */}
                    <h1 data-scroll data-scroll-delay="0.13" data-scroll-speed="4">B</h1>
                    <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed="4">u</h1>
                    <h1 data-scroll data-scroll-delay="0.06" data-scroll-speed="4">h</h1>
                    <h1 data-scroll data-scroll-delay="0.04" data-scroll-speed="4">i</h1>
                </div>
                <h2 data-scroll data-scroll-delay="0.04" data-scroll-speed="2">french. pug. boston</h2>
            </Title>
            <video src={MainVideo}  autoPlay muted loop/>
            

        </CoverVideo>
    )
}
export default SunnyVideo

