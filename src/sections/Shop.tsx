import { motion } from "framer-motion"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"
import styled from "styled-components"

import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"

const Section = styled.section`
position: relative;
    min-height: 100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`

const Title = styled.h1`
    font-size: ${props => props.theme.font3xl};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 300;
    color: white;
    text-shadow: 1px 1px 1px #1111;

    position: absolute;
    top: 1rem;
    left: 2%;
    z-index: 11;
    
`

const Left = styled.div`
    width: 35%;
    height: auto;
    min-height: 100vh;
    background-color: black;
    position: fixed;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index:8;

    p {
        color: white;
        font-size: ${props => props.theme.fontmd};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
    }
    
`

const Right = styled.div`
    background-color: gray;
    min-height: 100vh;
    position: absolute;
    left: 35%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30%;

    h1 {
        width: 5rem;
        margin: 0 2rem;
    }
`

const Item = styled(motion.div)`
    width: 20rem;
    margin-right: 6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: auto;
        cursor: pointer;
    }
    h1 {
        display: inline-block;
        width: fit-content;
        font-weight: 300;
        text-align: center;
        cursor: pointer;
        }
`

const Products = ({img, title= ""}) => {
    return(
        <Item 
            initial={{ filter: "grayscale(100%)" }}
            // 要素が表示されているときにアニメーション化するプロパティまたはバリアントラベル
            whileInView={{ filter: "grayscale(0%)" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true , amount: "all" }}
        >
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </Item>
    )
}

const Shop = () => {

    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
    const horizontalRef = useRef(null);

    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = horizontalRef.current;

        // offsetWidthプロパティは、隠れている部分の横幅を無視します,
        // offsetWidthプロパティは全体の横幅です。具体的には、widthとpaddingとborderの合計です。
        let pinWrapWidth = scrollingElement.offsetWidth;

        let trigger1 = gsap.timeline();

        setTimeout(() => {
            trigger1.to(element, {
                scrollTrigger : {
                    trigger: element,
                    start: "top top" ,
                    end: pinWrapWidth,
                    scroller: ".App", //locomotive scroll
                    scrub: true,
                    pin: true,
                    markers: true,
                },

                height: `${scrollingElement.scrollWidth}px`,
                ease: "none,",
            });

            trigger1.to(scrollingElement, {
                scrollTrigger : {
                    trigger: scrollingElement,
                    start: "top top" ,
                    end: pinWrapWidth,
                    scroller: ".App", //locomotive scroll
                    scrub: true,
                    markers: true,
                },

                x: -pinWrapWidth,
                ease: "none,",
            })
            ScrollTrigger.refresh();
        }, 1000);

        return() => {

        }

    },[])

    return (
    <Section ref={ref}>
        <Title data-scroll data-scroll-speed="-2" data-scroll-direction="vartical">New Arrivals</Title>
        <Left>
            <p>クレープ生地とは夏の定番素材、楊柳(ようりゅう)生地の事。

            見た目からも分かるように、凹凸感があるので肌に触れる面積が少なく、熱がこもらず風が通りやすいため涼しく夏にベストな生地となっています。
            <br/><br/>
            また、綿とポリエステル混で乾きやすく、ポリウレタンの入ったストレッチ素材ですので程よく伸びる素材です。
            <br/><br/>
            夏の強すぎる日差しへの対策にもオススメできるアイテムです。
            </p>
        </Left>
        <Right ref={horizontalRef}>
            <Products img={img1} title="xyz" />
            <Products img={img2} title="boston" />
            <Products img={img3} title="sunny" />
            <Products img={img1} title="xyz" />
            <Products img={img1} title="xyz" />
            <Products img={img1} title="xyz" />
            <Products img={img1} title="xyz" />
            <Products img={img1} title="xyz" />
            <Products img={img1} title="xyz" />
        </Right>
    </Section>
    )
}

export default Shop