import React from 'react'
import styled from 'styled-components'
import Social from '../components/social'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
`
const Button = styled.button`
    background: #006778;
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
    a {
        color: white; 
    }
`
const LinkGroup = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    a {
        transition: 0.8s;
    }
    a:hover {
        color: black;
    }
`

const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`

const Footer = ({data, children}) => (
    <FooterGroup id="contact">
    <Button>      
        <a href="mailto:mogg.andrew@gmail.com">
            Say Hello &#128075;
        </a>
    </Button>
    <LinkGroup>
        
    <Social 
                link="https://github.com/andrew-mogg"
                image={require('../images/github.svg')} />
           <Social 
                link="https://twitter.com/andrewm0gg"
                image={require('../images/twitter.svg')} />
                 <Social 
                link="https://www.linkedin.com/in/andrewmogg/"
                image={require('../images/linkedin.svg')} />
                    </LinkGroup>

      {/* <LinkGroup>{data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}</LinkGroup> */}
      <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer