import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Tracks = () => {
  return (
    <Container>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&display=swap" rel="stylesheet" />

        <Flip top cascade>
         <Title>
            <span>Tracks</span>
        </Title>
        </Flip>
        <Fade bottom cascade>
        <TrackBox>
            <Box1>
            <Fade bottom cascade>
                <Wrap>
                <img src='/images/b1.png' />
                </Wrap>
                <Wrap2>
                <span>Augmented & Virtual Reality</span>
                </Wrap2>
                </Fade>
            </Box1>
            <Box2>
            <Fade bottom cascade>

                <Wrap>
                <img src='/images/b2.png' />
                </Wrap>
                <Wrap2>
                <span>Internet of Things</span>
                </Wrap2>
            </Fade>
            </Box2>
            <Box3>
            <Fade bottom cascade>
                <Wrap>
                <img src='/images/b3.png' />
                </Wrap>
                <Wrap2>
                <span>Blockchain & Crypto</span>
                </Wrap2>
            </Fade>
            </Box3>
            <Box4>
            <Fade bottom cascade>

                <Wrap>
                <img src='/images/b4.png' />
                </Wrap>
                <Wrap2>
                <span>AI & Machine Learning</span>
                </Wrap2>
            </Fade>
            </Box4>
            
         </TrackBox>

         <TrackBox2>
            <Box5>
            <Fade bottom cascade>
                <Wrap>
                <img src='/images/b5.png' />
                </Wrap>
                <Wrap2>
                <span>Security & Audit</span>
                </Wrap2>
            </Fade>
            </Box5>

            <Box6>
            <Fade bottom cascade>
                <Wrap>
                <img src='/images/b6.png' />
                </Wrap>
                <Wrap2>
                <span>Open Innovation</span>
                </Wrap2>
             </Fade>
            </Box6>
            
            <Box7>
            <Fade bottom cascade>
                 <Wrap>
                 <img src='/images/b7.png' />
                 </Wrap>
                 <Wrap2>
                 <span>Cloud & Dev Ops</span>
                </Wrap2>
            </Fade>
            </Box7>

            </TrackBox2>
            </Fade>
    </Container>
  )
}

export default Tracks

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
    margin-top: 30px;
    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 900;
        font-size: 96px;
        line-height: 115px;
        color: #3683F5;
`
const TrackBox = styled.div`
    display: grid;
    padding: 110px 0px 26px;
    grid-gap: 55px;
    grid-template-columns: repeat(4, minmax(0, 3fr));
`

const Box1 = styled.div`
    padding-top: 30px;
    width: 259.04px;
    height: 150px;
    border: 2px solid;
    border-image: radial-gradient(232.37% 164.33% at 6.58% 95.6%, #3B8AFF 0%, rgba(0, 103, 255, 0) 81.64%) ;
    border-image-slice: 1;
    background: linear-gradient(102.24deg,#080a4c -137.58%,rgba(3,18,69,0) 122.85%);
    box-shadow: 1px 3px 20px rgb(213 213 213 / 40%) !important;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    

    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 2px;
    }

    &:hover {
        transform: scale(1.05);
    }    
`
const Wrap = styled.div`
    img{
        max-width: 100%; 
        max-height: 100%;
    }
`
const Wrap2 = styled.div`
    margin-top: 14px;
`
const Wrap3 = styled.div`
    padding-left: 30px;
`
const TrackBox2 = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
`
const Box2 = styled(Box1)``
const Box3 = styled(Box1)``
const Box4 = styled(Box1)``
const Box5 = styled(Box1)``

const Box6 = styled(Box1)`
width: 577.35px;
margin: 0 54px;
`
const Box7 = styled(Box1)``