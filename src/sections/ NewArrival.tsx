import { motion } from "framer-motion"
import styled from "styled-components"



import img13 from "../assets/images/img13.jpg"
import img14 from "../assets/images/img14.jpg"

const Section = styled.section`

    min-height: 120vh;
    width: 100vw;

    position: relative;

    
`

const Title = styled.h1`
    font-size: ${props => props.theme.font3xl};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 300;
    color: black;
    text-shadow: 1px 1px 1px #1111;

    position: absolute;
    left: 40px;
    top: 20px;
    z-index: 11;
    
`
const Container = styled.div`

    width: 80vw;
    height: 50vh;
    
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 300px 300px 300px;
    grid-row-gap: 80px;
    grid-column-gap: 100px;
    
`

const Item = styled(motion.div)`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: auto;
        z-index: 15;
        border-radius: 20%;

        cursor: pointer;
    }

    &:hover 
    {
        transform: scale(1.1);
        transition-duration: 0.5s;
    }


`

const Products = ({img, title= ""}) => {
    return(
        <Item 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{once: false}}
        >
            <img src={img} alt={title} />
            <h2>{title}</h2>
        </Item>
    )
}

const  NewArrival = () => {

    return (
        <Section  id="new-arrival">
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="vertical">Original</Title>

            <Container >
                <Products img={img13} title="xyz" />
                <Products img={img14} title="boston" />
                <Products img={img14} title="boston" />
                <Products img={img13} title="xyz" />
                <Products img={img13} title="xyz" />
                <Products img={img13} title="xyz" />
            </Container>
        </Section>
    )
}

export default  NewArrival