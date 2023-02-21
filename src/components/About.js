import React from 'react'
import styled from 'styled-components'
import Flip from 'react-reveal/Flip';


const About = () => {
  return (
    <Container id="about-section">
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&display=swap" rel="stylesheet" />

      <Flip top cascade>
      <Title>
        <span>About Us</span>
      </Title>

      <Description>
        <p>Calling all the tech-savy superhumans! we're giving you an <span>opportunity</span> to put your skills to work and make an impact. Get ready for <span>Hack-vengers</span>, we're excited to bring together some of the brightest minds in the tech industry and give them the opportunity to create something amazing. From <span>experienced coders to newbies</span>, everyone is welcome to join us in this creative challenge. Assemble your team and defend the digital world!</p>
      </Description>
      </Flip>
    </Container>
  )
}

export default About

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
    margin-top: 150px;
    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 900;
        font-size: 96px;
        line-height: 115px;
        color: #3683F5;
    }
`

const Description = styled.div`
    padding: 100px 120px;
    p{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 100;
        font-size: 32px;
        line-height: 150.5%;
        text-align: justify;
        color: #FFFFFF;

        span{
          color: #3683F5;
          font-weight: 900;
        }
    }
`