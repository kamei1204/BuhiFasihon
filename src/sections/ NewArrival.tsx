import styled from "styled-components"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import img13 from "../assets/images/img13.jpg"
import img14 from "../assets/images/img14.jpg"
import img15 from "../assets/images/img15.jpg"
// import img7 from "../assets/images/img4.jpg"
import { useLayoutEffect, useRef } from "react"

const Section = styled.section`
    /* background-color: yellow; */

    min-height: 100vh;
    width: 100vw;
    margin: 0 auto;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
`

const OverLay = styled.div`
    width: 30vw;
    height: 85vh;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


    box-shadow: 0 0 0 4vw white;
    border: 3px solid;
    z-index: 4;
`
const Title = styled.h1`
    font-size: ${props => props.theme.font3xl};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 300;
    color: black;
    text-shadow: 1px 1px 1px #1111;

    position: absolute;
    top: 1rem;
    left: 2%;
    z-index: 11;
    
`
const Container = styled.div`
    
    position: absolute;
    top: 0%;
    left: 50%;

    transform: translate(-50%, 0);

    width: 25vw;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin-top: 30px;
`

const Item = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;

    img {
        width: 100%;
        height: auto;
        z-index: 15;
    }
`

const Text = styled.div`
    width: 25%;
    height: auto;
    min-height: 90vh;
    background-color: white;
    position: fixed;
    right: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index:8;

    p {
        color: black;
        font-size: ${props => props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
    }
    
`

const Products = ({img, title= ""}) => {
    return(
        <Item >
            <img src={img} alt={title} />
            <h2>{title}</h2>
        </Item>
    )
}

const  NewArrival = () => {

    gsap.registerPlugin(ScrollTrigger);

    const sRef = useRef(null);
    const scrollingRef = useRef(null);

    useLayoutEffect(() => {
        let element = sRef.current;
        let scrollingElement = scrollingRef.current;

        let trigger1 = gsap.timeline();

        setTimeout(() => {
            trigger1.to(element, {
                scrollTrigger : {
                    trigger: element,
                    start: "top top" ,
                    end: "bottom+=0% top-=40%",
                    scroller: ".App", //locomotive scroll
                    scrub: true,
                    pin: true,
                    markers: true,
                },

                ease: "none,",
            });

            // verticleScrolling
            trigger1.fromTo(scrollingElement, 
                {
                    y: "0",
                },

                {
                    y: "-90%",
                    scrollTrigger : {
                        trigger: scrollingElement,
                        start: "top top" ,
                        end: "bottom top",
                        scroller: ".App", //locomotive scroll
                        scrub: true,
                        // markers: true,
                    },
                })
            ScrollTrigger.refresh();
        }, 1000);

        return() => {
            trigger1.kill();
        };
    },[])

    return (
        <Section ref={sRef} id="new-arrival">
            <OverLay />
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="vertical">New Arraival</Title>

                <Container ref={scrollingRef}>
                    <Products img={img13} title="xyz" />
                    <Products img={img14} title="boston" />
                    <Products img={img15} title="sunny" />
                    <Products img={img13} title="xyz" />
                </Container>

                <Text data-scroll data-scroll-speed="2">
                    <p>
                    オールシーズンに適するシンプルでおしゃれな長袖犬服です。
                    柔らかで肌触り良く、伸縮性と通気性があって快適で動きやすい。
                    怪我や虫から守ることができ、お散歩、お出かけなどに大活躍します。
                    適度の厚みがあるので、暖かくてこれからの季節に最適。
                    汚れ防止、毛まみれを避けるのために部屋着としても使えます。
                    </p>
                </Text>
        </Section>
    )
}

export default  NewArrival