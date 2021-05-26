import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            
            <CTA>
                <Logo src="/images/cta-logo-one.svg"/>
                <SignUp>Get all here</SignUp>
                <Description>Get premier access...</Description>
                <LogoTwo src="/images/cta-logo-two.png"/>
            </CTA>

        
        </Container>
    )
}

export default Login

const Container = styled.div `
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        z-index: -1;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.7;

    }
`

const CTA = styled.div `
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const Logo = styled.img `

`

const SignUp = styled.a `
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    text-Transform: uppercase;

    &:hover {
        background: #0483ee;
    }
`

const Description = styled.p `
    font-size: 11px;
    letter-spacing: 1.5;
    text-align: center;
`

const LogoTwo = styled.img `
    width: 90%;
`