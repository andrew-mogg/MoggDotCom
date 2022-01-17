import React from 'react'
import Link from 'gatsby-link'
import StripeCheckout from 'react-stripe-checkout'
import Social from '../components/social'

import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 150) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  handlePurchase = ( token ) => {
    const amount = 5000
    const description = "My awesome product"
  
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }
  
    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
         <div className={this.state.hasScrolled ? 'HeaderLogo' : 'HeaderLogoHidden'}>Andrew Mogg</div>
        <div className="HeaderGroup">
        <a href="#experience">
           Experience
        </a>
        <a href="#projects">
       Projects
        </a>
        <a href="#contact">
        Contact
        </a>
          {/* <Social 
                link="https://github.com/andrew-mogg"
                image={require('../images/github.svg')} />
           <Social 
                link="https://twitter.com/_mogger"
                image={require('../images/twitter.svg')} />
                 <Social 
                link="https://www.linkedin.com/in/andrewmogg/"
                image={require('../images/linkedin.svg')} /> */}
        </div>
      </div>
    )
  }
}

export default Header
