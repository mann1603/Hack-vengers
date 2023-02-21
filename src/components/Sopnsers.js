import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Sopnsers = () => {
  return (
    <Container>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&display=swap" rel="stylesheet" />

    <Flip top cascade>
      <Title>
            <span>Title Sopnsers</span>
      </Title>
     </Flip>

      <Class>
        <DiamondClass>
        <Fade left cascade>
            <span>Diamond Class</span>
        </Fade>

        <Fade bottom cascade>
            <SponserBox>
                <Box1>
                <Fade bottom cascade>
                    <img src='/images/Parul.png' />
                </Fade>
                </Box1>
               
                <Box2>
                <Fade bottom cascade>
                    <img src='/images/s2.png' />
                </Fade>
                </Box2>
                <Box3>
                <Fade bottom cascade>
                    <img src='/images/s3.png' />
                </Fade>
                </Box3>
            </SponserBox>
        </Fade>
        </DiamondClass>

        <PlatClass>
        <Fade left cascade>
            <span>Platinium Class</span>
         </Fade>

         <Fade bottom cascade>
            <SponserBox>
                <Box1>
                    <Fade bottom cascade>
                    <img src='/images/s4.png' />
                    </Fade>
                </Box1>
                <Box2>
                    <Fade bottom cascade>
                    <img src='/images/s5.png' />
                    </Fade>
                </Box2>
                <Box3>
                    <Fade bottom cascade>
                    <img src='/images/s6.png' />
                    </Fade>
                </Box3>
            </SponserBox>
        </Fade>
        </PlatClass>

        <GoldClass>
        <Fade left cascade>
            <span>Gold Class</span>
        </Fade>

        <Fade bottom cascade>
            <SponserBox>
                <Box1>
                <Fade bottom cascade>
                    <img src='/images/s7.png' />
                </Fade>
                </Box1>
                <Box2>
                <Fade bottom cascade>
                    <img src='/images/s8.png' />
                </Fade>
                </Box2>
                <Box3>
                <Fade bottom cascade>
                    <img src='/images/s9.png' />
                </Fade>
                </Box3>
            </SponserBox>
        </Fade>

        </GoldClass>
      </Class>

      <Button>
        <span>Sponsor us!</span>
      </Button>

    </Container>
  )
}

export default Sopnsers

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 250px;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 900;
        font-size: 96px;
        line-height: 115px;
        color: #3683F5;
`
const Class = styled.div``

const DiamondClass = styled.div`
    margin-top: 100px;
    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 700;
        font-size: 96px;
        line-height: 115px;

        background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), conic-gradient(from 180deg at 48.5% 50%, #FFFFFF -48.57deg, #868686 130.63deg, #FFFFFF 133.38deg, #A49DCD 204.46deg, #FFFFFF 279.38deg, #FFFFFF 311.43deg, #868686 490.63deg);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        background-blend-mode: overlay, normal;
        mix-blend-mode: screen;
    }
`
const SponserBox = styled.div`
    display: grid;
    padding: 50px 0px 26px;
    grid-gap: 55px;
    grid-template-columns: repeat(3, minmax(0, 3fr));
`

const Box1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 174px;
    border: 2px solid;
    border-image: radial-gradient(232.37% 164.33% at 6.58% 95.6%, #3B8AFF 0%, rgba(0, 103, 255, 0) 81.64%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border-image-slice: 1;
    background: linear-gradient(102.24deg,#080a4c -137.58%,rgba(3,18,69,0) 122.85%);
    box-shadow: 1px 3px 20px rgb(213 213 213 / 40%) !important;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        transform: scale(1.05);
    }   
    
`
const Box2 = styled(Box1)``
const Box3 = styled(Box1)``

const PlatClass = styled.div`
    margin-top: 100px;

    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 700;
        font-size: 96px;
        line-height: 115px;

        background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), conic-gradient(from 180deg at 48.5% 50%, #313636 -48.57deg, #868686 130.63deg, #FFFFFF 133.38deg, #666186 204.46deg, #FFFFFF 279.38deg, #313636 311.43deg, #868686 490.63deg);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        background-blend-mode: overlay, normal;
    }
`
const GoldClass = styled.div`
    margin-top: 100px;

    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 700;
        font-size: 96px;
        line-height: 115px;

        background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), conic-gradient(from 180.44deg at 48.5% 50%, #C68F0C -48.57deg, #785A0E 106.88deg, #B48B24 118.12deg, #CBBC34 204.46deg, #E1A30D 279.38deg, #C68F0C 311.43deg, #785A0E 466.88deg);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        background-blend-mode: overlay, normal;

        mix-blend-mode: screen;
    }
`
const Button = styled.button`
    margin-top: 150px;
    width: 230px;
    height: 72px;
    border: 1.41px solid;
    border-image: radial-gradient(232.37% 164.33% at 6.58% 95.6%, #3B8AFF 0%, rgba(0, 103, 255, 0) 81.64%);
    border-image-slice: 1;
    background: linear-gradient(102.24deg,#080a4c -137.58%,rgba(3,18,69,0) 122.85%);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;

    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 400;
        font-size: 22.56px;
        line-height: 27px;
        color: #FFFFFF;
    }

    &:hover{
        transform: scale(1.05);
    }
`