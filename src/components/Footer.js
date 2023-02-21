import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Footer = () => {
  return (
    <Container>
        <Fade bottom cascade>
            <LogoVec src='/images/Vector.svg '/>
            <Logo src='/images/hack-logo.svg' />
       </Fade>

       <SocialBox>

       <Fade bottom cascade>
            <Box1>
                <img src='/images/insta.png' />
            </Box1>
        </Fade>

        <Fade bottom cascade>
            <Box1>
                <img src='/images/discord.png' />
            </Box1>
        </Fade>

        <Fade bottom cascade>
            <Box1>
                <img src='/images/twitter.png' />
            </Box1>
        </Fade>

        <Fade bottom cascade>
            <Box1>
                <img src='/images/linkdin.png' />
            </Box1>
        </Fade>

       </SocialBox>
       <FooterVec>
            <img src='/images/footer-vec.svg' />
       </FooterVec>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 300px;
`
const Logo = styled.img`
    width: 435px;
    height: 126.01px;
`
const LogoVec = styled.img`
width: 112.68px;
position: relative;
height: 62.99px;
top: 49px;
left: 122px;
`
const SocialBox = styled.div`
display: grid;
padding: 120px 0px 26px;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 3fr));
`
const Box1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: 0.6px solid;
    border-image: radial-gradient(232.37% 164.33% at 6.58% 95.6%, #3B8AFF 0%, rgba(0, 103, 255, 0) 81.64%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border-image-slice: 1;
    background: linear-gradient(102.24deg,#080a4c -137.58%,rgba(3,18,69,0) 122.85%);
    box-shadow: 1px 3px 20px rgb(213 213 213 / 40%) !important;

    img{
        height: 26.66666603088379px;
        width: 26.66666603088379px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover{
            transform: scale(1.05);
        }
    }

`
const FooterVec = styled.div`
margin-top: 188px;
`