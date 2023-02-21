import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Community = () => {
  return (
    <Container>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&display=swap" rel="stylesheet" />

        <Flip top cascade>
            <Title>
                    <span>Community Partners</span>
            </Title>
        </Flip>

        <CommunityBox>
            <Fade bottom cascade>
                <Box1>
                <Fade bottom cascade>
                    <img src='/images/comm.png' />
                </Fade>
                </Box1>
            </Fade>

            <Fade bottom cascade>
                <Box1>
            <Fade bottom cascade>
                    <img src='/images/comm.png' />
                    </Fade>
                </Box1>
            </Fade>

            <Fade bottom cascade>
                <Box1>
            <Fade bottom cascade>
                    <img src='/images/comm.png' />
                    </Fade>
                </Box1>
            </Fade>

            <Fade bottom cascade>
                <Box1>
            <Fade bottom cascade>
                    <img src='/images/comm.png' />
                    </Fade>
                </Box1>
            </Fade>

            <Fade bottom cascade>
                <Box1>
            <Fade bottom cascade>
                    <img src='/images/comm.png' />
                    </Fade>
                </Box1>
            </Fade>

            <Fade bottom cascade>
                <Box1>
            <Fade bottom cascade>
                    <img src='/images/comm.png' />
                    </Fade>
                </Box1>
            </Fade>

            <Fade bottom cascade>
                <Box1>
            <Fade bottom cascade>
                    <img src='/images/comm.png' />
                    </Fade>
                </Box1>
            </Fade>

            <Fade bottom cascade>
                <Box1>
            <Fade bottom cascade>
                    <img src='/images/comm.png' />
                    </Fade>
                </Box1>
            </Fade>


            </CommunityBox>
    </Container>
  )
}

export default Community

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 210px;
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
const CommunityBox = styled.div`
    display: grid;
    padding: 120px 0px 26px;
    grid-gap: 35px;
    grid-template-columns: repeat(4, minmax(0, 3fr));
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

    &:hover{
        transform: scale(1.05);
    } 

    img{
        width: 117.69px;
        height: 117.69px;
    }
`