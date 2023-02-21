import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <Container id='home-section'>

    <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300&display=swap" rel="stylesheet" />

        <Fade bottom cascade>
        <Title>
            <span>HACKVENGERS</span>
        </Title>
        <SubTitle>
            <span>22nd-23rd October</span>
      </SubTitle>
      <Wrap>
      <HomeButton>
            <img src='/images/dev-logo.svg' />
            <span>Register with DEVFOLIO</span>
      </HomeButton>
      </Wrap>
      </Fade>
      <HomeVec>
        <LeftTop src = '/images/left-top-vec.svg' />
        <LeftBottom src = '/images/left-bottom-vec.svg' />
        <RightBottom src = '/images/right-bottom-vec.svg' />
        <RightTop src = '/images/right-top-vec.svg' />
      </HomeVec>
    </Container>
  )
}

export default Home

const Container = styled.div`
`

const  Title = styled.div`
   margin-top: 200px;
    span{
        width: 907px;
        height: 123px;
        font-family: 'Mars-Project';
        font-style: normal;
        font-weight: 400;
        font-size: 128px;
        line-height: 123px;
        color: #FFFFFF;
    }
`

const SubTitle = styled.div`
    margin-top: 20px;
    span{
        width: 255px;
        height: 38px;
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        color: #FFFFFF;

    }
`
const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const HomeButton = styled.button`
    position: relative;
    margin-top: 80px;
    height: 60px;
    width: 364px;
    left: 0px;
    top: 0px;
    background: linear-gradient(85.13deg, rgba(104, 1, 254, 0.03) 2.96%, rgba(217, 217, 217, 0.03) 96.14%);
    box-shadow: 0px 8.82451px 35.298px rgba(104, 1, 255, 0.12);
    border: 0.55px solid;
    border-image: radial-gradient(232.37% 164.33% at 6.58% 95.6%, #3B8AFF 0%, rgba(0, 103, 255, 0) 81.64%);
    border-image-slice: 1;
    background: linear-gradient(102.24deg,#080a4c -137.58%,rgba(3,18,69,0) 122.85%);
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
    position: absolute;
    height: 24px;
    width: 22px;
    top: 17.8828125px;
    left: 36px;
    border-radius: 0px;
    }

    span{
    font-family: 'Figtree';
    font-style: normal;
    font-weight: 400;
    font-size: 19.8552px;
    line-height: 24px;
    color: #FFFFFF;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 8.824512481689453px 35.29804992675781px 0px rgba(104, 1, 255, 0.12);
        background: radial-gradient(232.37% 164.33% at 6.58% 95.6%, #3B8AFF 0%, rgba(0, 103, 255, 0) 81.64%) ;
        linear-gradient(85.13deg, rgba(104, 1, 254, 0.03) 2.96%, rgba(217, 217, 217, 0.03) 96.14%);

    }

`
const HomeVec = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3335px;
    height: 344px;
    margin-top: 130px;
`

const LeftTop = styled.img`
    position: absolute;
    left: 0%;
    right: 46.9%;
    top: 1.55%;
    bottom: 1.55%;
`
const LeftBottom = styled.img`
    // position: absolute;
    // width: 30%;
    // height: 100%;
    // left: -35px;
    // top: 10.5px;
    position: absolute;
    width: 100%;
    height: 100%;
    left: -1194.12px;
    right: 0%
    top: 10.5px;
`
const RightBottom = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    left: -705.8800000000001px;
    top: 6.5px;
`
const RightTop = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    left: -579px;
    right: -53.1%;
    top: 5px;
    bottom: 1%;
`