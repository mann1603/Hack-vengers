import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Support = () => {
  return (
    <Container>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&display=swap" rel="stylesheet" />

      <Flip top cascade>
         <Title>
            <span>Supported By</span>
        </Title>
      </Flip>

      <Fade bottom cascade>
        <SupportBox>
        <Fade bottom cascade>
          <Content>
            <img src='/images/Parul.png'/>
            <p>Parul University is western India’s best private University which provides students with enriching exposure to research, entrepreneurship and innovation, internationalization, placements through a quality learning experience with a plethora of specializations in every field. Students learn and understand advanced principles, scientific methods, computing and mathematical techniques. This helps them to develop a holistic approach required for the tech industry.</p>
            </Content>
          </Fade>
        </SupportBox>
       </Fade>
    </Container>
  )
}

export default Support

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
    margin-top: 110px;
    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 900;
        font-size: 96px;
        line-height: 115px;
        color: #3683F5;
`
const SupportBox = styled.div`
    margin-top: 110px;
    width: 1221px;
    height: 435px;
    border: 2px solid;
    border-image: radial-gradient(232.37% 164.33% at 6.58% 95.6%, #3B8AFF 0%, rgba(0, 103, 255, 0) 81.64%) ;
    border-image-slice: 1;
    background: linear-gradient(102.24deg,#080a4c -137.58%,rgba(3,18,69,0) 122.85%);

   
`
const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 6rem 3rem;

    p{
      margin-top: 50px;
      font-family: 'Figtree';
      font-style: normal;
      font-weight: 100;
      font-size: 20px;
      line-height: 150.5%;
      text-align: justify;
      color: #FFFFFF;
    }
`