import React, { Component } from 'react';
import ProjectSection from '../components/projectSection';
import Wave from '../components/wave';
import styled from 'styled-components'
const SectionCaption = styled.p`
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  color: #006778;
  font-weight: 700;
  letter-spacing: 5px;
  margin-bottom: 0;
  margin-top: 50px;
`

const SectionDescription = styled.p`
color: rgba(0, 0, 0, 0.8);
font-size: 20px;
line-height: 1.5;
margin-right: 20px;;
animation: IntroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
opacity: 0;
`

const SectionCellGroup = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="main">
    <div className="content">
      <div className="Intro">
        <div className="IntroGroup">
          <div className="IntroIntro">
            <h3> Hey there! My name is</h3>
            <h1>Andrew Mogg,</h1>
            <p>
              I am a full-stack developer living in Jacksonville Beach, Florida. Currently, I work for a Fortune 500 financial company building 
               backend APIs and Angular applications. 
               <br /><br />
               Welcome to my page &#129305; 
            </p>
          </div>
          <div className="IntroImg">
            <img src={require('../images/homePage.jpg')} width="300"/>
          </div>
          <Wave />
        </div>
      </div>
      <div className="About" id="experience">
        <h2>Experience</h2>
        <div className="spacer"><br /></div>
        <div className="AboutContent">
          <div className="AboutEducation">
          <SectionCaption>Career</SectionCaption>
          <SectionDescription>
          <header>
              <h4>TIAA Bank</h4>
               <div className="caption">
                  Senior Software Engineer<br />
                  <div className="subnote">November 2018&nbsp;–&nbsp;Present</div>
              </div>
              <div className="caption">
                  Software Engineer<br />
                  <div className="subnote">January 2018&nbsp;–&nbsp;November 2018</div>
              </div>
              <p>
              I am a member of an agile team responsible for developing .Net core microservices and Angular applications for customers to manage their bank accounts. We create and 
              maintain .Net and Java Docker deployment images using RedHat's Openshift platform and Microsoft's TFS release management. See some of my project work in the section below.    
          </p>
          </header>
          <header>
              <h4>Fortegra Financial</h4>
              <div className="caption">
                  Software Engineer<br />
                  <div className="subnote">August 2016&nbsp;–&nbsp;January 2018</div>
              </div>
              <p>
                In my first software engineer role I worked on converting internal apps from ASP .Net Web Forms into ASP .Net MVC to improve the efficiency of our call center team's ability to log customer requests.        
            </p>
          </header>
          
          </SectionDescription>
          </div>
          <div className="AboutSkills">
        <SectionCaption>Education</SectionCaption>
        <SectionDescription>
        <header>
              <h4>Virginia Tech</h4>
              <div className="caption">
                  Bachelor of Science in Computer Science & 
                  Varsity Baseball Athlete<br />
                  <div className="subnote">August 2012&nbsp;–&nbsp;May 2016</div>
              </div>
          </header>
          <p>
            Virginia Tech is <a href="http://www.computersciencedegreehub.com/50-innovative-computer-science-departments/">widely regarded</a>&nbsp;as
            one of the top CS departments in the nation. I achieved my undergraduate degree from this program while also being a four year
            varsity baseball athlete.       
            <br /><br />
            Over my <a href="https://hokiesports.com/sports/baseball/roster/andrew-mogg/6735">four year career</a>&nbsp;I appeared in 110 games while making 83 starts. 
            Accolades include the Virginia Tech Athletic Director's Honor Roll and Atlantic Coast Conference Academic Honor Roll from 2013 to 2016.
          </p>
          </ SectionDescription>
          </div>
        </div>
      </div>
      <div id="projects">
      <ProjectSection/>
      </div>
    </div>
  </div>
    );
  }
}
