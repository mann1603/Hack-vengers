import React from 'react'
import styled from 'styled-components'

const Header = () => {
    
    const handleHomeClick = () => {
        const aboutSection = document.getElementById('home-section');
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }

    const handleAboutClick = () => {
        const aboutSection = document.getElementById('about-section');
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    const handleContactClick = () => {
        const aboutSection = document.getElementById('contact-section');
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }

  return (
    <Nav >

        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300&display=swap" rel="stylesheet" />

    <Logo src='/images/hack-logo.svg' />
    <LogoVec src='/images/Vector.svg '/>
    <NavMenu>
        <a onClick={handleHomeClick}>
            <span>HOME</span> 
        </a>
        <a onClick={handleAboutClick}>
            <span>ABOUT</span> 
        </a>
        <a onClick={handleContactClick}>
            <span>CONTACT US</span> 
        </a>
        <a>
            <span>BROCHURE</span> 
        </a>
        <a>
            <span>CODE OF CONDUCT</span> 
        </a>
    </NavMenu>

    <Wrap>
    <NavButton>
        <span>Register Now</span>
    </NavButton>
    </Wrap>
  </Nav>
  )
}

export default Header

const Nav = styled.div`
    position: fixed;
	top: 0;
	left: 0;
	width: 100%;
    height: 95px;
    background: transparent;
    background: rgba(0, 0, 0, 0.6) !important;
	display: flex;
	justify-content: center;
	align-items: center;
    overflow-X: hidden;
    border-bottom: 0.5px solid;
    border-image: radial-gradient(168.09% 330.25% at 42.33% 39.22%, #FFFFFF 0%, rgba(217, 217, 217, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border-image-slice: 1;
    z-index: 10000;
`

const NavMenu =styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 30px;
        cursor: pointer;
      
        span{
            color: #FFFFFF;
            font-family: 'Figtree', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 1.42px;
            position: relative;
      
            &:after {
              content: "";
              height: 2px;
              background: white;
              position: absolute;
              left: 0;
              right: 0;
              bottom: -6px;
              opacity: 0;
              transform-origin: left-center;
              transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
              transform: scaleX(0);
            }
          }
      
          &:hover{
            span:after{
              transform: scaleX(1);
              opacity: 1;
            }
          }
`

const Logo = styled.img`
    margin-left: 40px;
`
const LogoVec = styled.img`
    position: absolute;
    left: 107.68px;
    top: 28.33px;
    // vertical-align: middle;
    // transform: matrix(0.13, 0.99, -0.99, 0.12, 0, 0);
`

const NavButton = styled.button`
    width: 163px;
    height: 51px;
    background: #010101;
    // padding: 0 100px;
    border: 1px solid;
    border-image: radial-gradient(116.46% 172.55% at 42.33% 39.22%, #FFFFFF 0%, rgba(217, 217, 217, 0) 100%);
    border-image-slice: 1;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        transform: scale(1.05);
    }

    span{
        // position: absolute;
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }
`
const Wrap = styled.div`
    padding: 0 30px;
`