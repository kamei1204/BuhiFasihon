import styled from "styled-components"
import img9 from "../assets/images/img9.jpg"
import img12 from "../assets/images/img12.jpg"
import img11 from "../assets/images/img11.jpg"


const Section = styled.section`
    position: relative;
    min-height: 150vh;
    width: 80vw;

    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    
`
const Title = styled.h1`
    font-size: ${props => props.theme.font4xl};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 300;

    position: absolute;
    top: 66px;
    left: 0;
    z-index: 5;
`

const Left = styled.div`
    width: 50%;
    color: black;
    font-size: ${props => props.theme.fontlg};
    font-weight: 400;
    position: relative;
    margin-top: 35%;
    z-index: 5;
`

const Right = styled.div`
    width: 50%;

    img {
        width: 100%;
        height: auto;
    }

    .small-1 {
        width: 15%;
        position: absolute;
        right: 35%;
        bottom: 20%;
    }
    .small-2 {
        width: 20%;
        position: absolute;
        left: 80%;
        bottom: 10%;
    }
`
const About = () => {
    return (
        <Section id="about">
            {/* JavaScriptライブラリ「Locomotive Scroll」 */}
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" >New!!</Title>
            <Left>
            フレンチブルドッグに服を着せるメリットとして、冬の寒さや夏の強い日差しから身を守ることが挙げられます。近頃では、背中部分に保冷剤ポケットのついた夏服や浴衣など、クール効果の高いフレブル服も人気を集めているようです。

            <br/><br/>春にはアレルギーの原因となる花粉の付着を防ぐ役割も果たします。また、抜け毛の多いフレンチブルドッグは、服を着せることで毛の飛散を防止できます。自宅の掃除も楽になり、公共の場や友人宅へのお出かけの際には周囲への配慮にもなるでしょう。

            <br/><br/>寝る時にはつなぎやロンパースタイプのパジャマを着せることで、ベッドへの毛の付着を抑える効果もありますよ。このようにおしゃれを楽しむ以外にもさまざまなメリットが在るので、愛犬に合った素敵な服を選んであげられるとよいですね。
            </Left>
            <Right>
                <img src={img9} alt=""/>
                <img data-scroll data-scroll-speed="5" src={img12} alt="" className="small-1"/>
                <img data-scroll data-scroll-speed="-2" src={img11} alt="" className="small-2"/>
            </Right>
        </Section>
    )
}

export default About