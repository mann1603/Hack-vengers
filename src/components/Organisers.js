import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Organisers = () => {
  return (
    <Container id='contact-section'>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&display=swap" rel="stylesheet" />

       <Flip top cascade>
            <Title>
                    <span>Organisers</span>
            </Title>
        </Flip>

        <Organiser>

        <Fade bottom cascade>
            <OrgBox>
                <InnerB>
                    <img src='/images/org1.png'/>
                </InnerB>
                <h4>Shristi Shukla</h4>
                <span>Designation</span>
            </OrgBox>
         </Fade>

         <Fade bottom cascade>
            <OrgBox>
                <InnerB>
                    <img src='/images/org2.png'/>
                </InnerB>
                <h4>Aman Singh</h4>
                <span>Designation</span>
            </OrgBox>
            </Fade>

            <Fade bottom cascade>
            <OrgBox>
                <InnerB>
                    <img src='/images/org3.png'/>
                </InnerB>
                <h4>Tejas Bhutani </h4>
                <span>Designation</span>
            </OrgBox>
            </Fade>

            <Fade bottom cascade>
            <OrgBox>
                <InnerB>
                    <img src='/images/org4.png'/>
                </InnerB>
                <h4>Abhishek Gharia</h4>
                <span>Designation</span>
            </OrgBox>
            </Fade>
        </Organiser>
    </Container>
  )
}

export default Organisers

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 300px;
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
const Organiser = styled.div`
display: grid;
padding: 120px 0px 26px;
grid-gap: 80px;
grid-template-columns: repeat(4, minmax(0, 3fr));
`
const OrgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 240.07px;
    height: 362.21px;

    h4{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 400;
        font-size: 30.325px;
        line-height: 36px;
        color: #FFFFFF;
        margin: 10px;
    }

    span{
        font-family: 'Figtree';
        font-style: normal;
        font-weight: 400;
        font-size: 26.9556px;
        line-height: 32px;
        color: #FFFFFF;
    }

`
const InnerB = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240.07px;
    height: 240.07px;
    border: 1.4px solid #6da8ff9e;;
    border-radius: 50%;
    background: linear-gradient(102.24deg,#080a4c -137.58%,rgba(3,18,69,0) 122.85%);
    margin-bottom: 16px;
    box-shadow: 1px 3px 20px rgb(213 213 213 / 40%) !important;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 199.64px;
        height: 199.64px;
    }

    &:hover{
        transform: scale(1.05);
    }
`