import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Speakers = () => {
  return (
    <Container>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&display=swap" rel="stylesheet" />

        <Flip top cascade>
        <Title>
            <span>Speakers</span>
        </Title>
        </Flip>

        <Fade bottom cascade>
        <SpeakerBox>
            <Box1>
            <Fade bottom cascade>
                <InnerB1>
                    <img src='/images/speaker.png'/>
                </InnerB1>
            </Fade>

            <Fade bottom cascade>
                <span>Vraj Desai</span>
            </Fade>
                <p>GitHub Campus Expert</p>
            </Box1>
            <Box1>
            <Fade bottom cascade>
                <InnerB1>
                    <img src='/images/speaker.png'/>
                </InnerB1>
            </Fade>
            <Fade bottom cascade>
                <span>Vraj Desai</span>
            </Fade>
                <p>GitHub Campus Expert</p>
            </Box1>
            <Box1>
            <Fade bottom cascade>
                <InnerB1>
                    <img src='/images/speaker.png'/>
                </InnerB1>
            </Fade>
            <Fade bottom cascade>
                <span>Vraj Desai</span>
            </Fade>
                <p>GitHub Campus Expert</p>
            </Box1>
            <Box1>
            <Fade bottom cascade>
                <InnerB1>
                    <img src='/images/speaker.png'/>
                </InnerB1>
            </Fade>
            <Fade bottom cascade>
                <span>Vraj Desai</span>
            </Fade>
                <p>GitHub Campus Expert</p>
            </Box1>
        </SpeakerBox>
        </Fade>
    </Container>
  )
}

export default Speakers

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 130px;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 110px;
    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 900;
        font-size: 96px;
        line-height: 115px;
        color: #3683F5;
`
const SpeakerBox = styled.div`
    display: grid;
    padding: 110px 0px 26px;
    grid-gap: 40px;
    grid-template-columns: repeat(4, minmax(0, 3fr));
`
const Box1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 290.27px;
    height: 392.89px;
    border: 2px solid;
    border-image: radial-gradient(232.37% 164.33% at 6.58% 95.6%, #3B8AFF 0%, rgba(0, 103, 255, 0) 81.64%) ;
    border-image-slice: 1;
    background: linear-gradient(102.24deg,#080a4c -137.58%,rgba(3,18,69,0) 122.85%);

    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 900;
        font-size: 35.1844px;
        line-height: 42px;
        color: #3683F5;
    }

    p{
        font-family: 'Figtree';
    font-style: normal;
    font-weight: 500;
    font-size: 15.6375px;
    line-height: 19px;
    color: #FFFFFF;
    }
`
const InnerB1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 259.97px;
    height: 259.97px;
    border: 1.4px solid;
    border-image: radial-gradient(232.37% 164.33% at 6.58% 95.6%, #3B8AFF 0%, rgba(0, 103, 255, 0) 81.64%) ;
    border-image-slice: 1;
    margin-bottom: 16px;
    
    img{
        width: 250.2px;
        height: 250.2px;
    }
`
