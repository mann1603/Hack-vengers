import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Prizes = () => {
  return (
    <Container>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&display=swap" rel="stylesheet" />

        <Flip top cascade>
         <Title>
            <span>Prizes</span>
        </Title>
        </Flip>

        <Fade bottom cascade>
        <PrizeBoxes>      
            <PBox1>
            <Fade bottom cascade>
                <img src='/images/silver coin.png' />
                <h1>₹25k</h1>
                <p>1st Runner-Up</p>
            </Fade>
            </PBox1>
            <PBox2>
            <Fade bottom cascade>
                <img src='/images/gold coin.png' />
                <h1>₹40k</h1>
                <p>Winners</p>
            </Fade>
            </PBox2>
            <PBox3>
            <Fade bottom cascade>
                <img src='/images/bronze coin.png' />
                <h1>₹15k</h1>
                <p>2nd Runner-Up</p>
            </Fade>
            </PBox3>
        </PrizeBoxes>
        </Fade>

        <Fade bottom cascade>
        <PrizeBoxes2>
        <PBox4>
            <Fade bottom cascade>
                <img src='/images/bulb.png' />
                <p>Innovative Idea</p>
                <h1>₹10k</h1>
            </Fade>
        </PBox4>

        <PBox5>
            <Fade bottom cascade>
                <img src='/images/paint.png' />
                <p>Best UI Design</p>
                <h1>₹10k </h1>
            </Fade>
        </PBox5>
        </PrizeBoxes2>
        </Fade>

    </Container>

  )
}

export default Prizes

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 170px;
    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 900;
        font-size: 96px;
        line-height: 115px;
        color: #3683F5;
`

const PrizeBoxes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 10px;
`

const PBox1 = styled.div`
    position: relative;
    width: 282px;
    height: 341.37px;
    border: 2px solid;
    border-image: radial-gradient(232.37% 164.33% at 6.58% 95.6%, #3B8AFF 0%, rgba(0, 103, 255, 0) 81.64%) ;
    border-image-slice: 1;
    background: linear-gradient(102.24deg,#080a4c -137.58%,rgba(3,18,69,0) 122.85%);
    box-shadow: 1px 3px 20px rgb(213 213 213 / 40%) !important;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        transform: scale(1.05);
    }   

    img{
        position: absolute;
        width: 172px;
        height: 172px;
        top: -75px;
        left: 52px;
        right:0px;
        zindex: 1;
    }

    h1{
        margin-top: 172px;
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 900;
        font-size: 64px;
        line-height: 77px;
        color: #FFFFFF;
    }

    p{
        margin-top: -40px;
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 29px;
        color: #FFFFFF;
    }
`
const PBox2 = styled(PBox1)`
    width: 349.43px;
    height: 423px;
    margin: 0 54px;

    img{
        width: 254px;
        height: 254px;
    }

    h1{
        font-size: 96px;
        margin: 222px 0 0 13px;

    }

    p{
        font-size: 40px;
        margin-top: 24px;
    }
`
const PBox3 = styled(PBox1)``


const PrizeBoxes2 = styled.div`
    display: grid;
    padding: 50px 0px 26px;
    grid-gap: 55px;
    grid-template-columns: repeat(2, minmax(0, 3fr));
`
const PBox4 = styled.div`
    position: relative;
    width: 462px;
    height: 395px;
    border: 2px solid;
    border-image: radial-gradient(232.37% 164.33% at 6.58% 95.6%, #3B8AFF 0%, rgba(0, 103, 255, 0) 81.64%) ;
    border-image-slice: 1;
    background: linear-gradient(102.24deg,#080a4c -137.58%,rgba(3,18,69,0) 122.85%);
    box-shadow: 1px 3px 20px rgb(213 213 213 / 40%) !important;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        position: absolute;
        width: 284px;
        height: 284px;
        top: -143px;
        left: 100px;
        right:0px;
        zindex: 1;
    }

    p{
        margin-top: 172px;
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
        color: #FFFFFF;
    }

    h1{
        margin-top: -40px;
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 86px;
        text-align: center;
        color: #FFFFFF;

    }
`
const PBox5 = styled(PBox4)`
width: 462px;
height: 395px;

img{
    width: 287px;
    height: 287px;
}
`

