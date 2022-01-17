import React from 'react'
import styled from 'styled-components'
import Wave from './wave';
import Card from './card';

import staticdata from '../staticdata.json'


const ProjectSectionGroup = styled.div`
    // background: url(${props => props.image});
    background: #006778;
    padding-bottom: 50px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 30px;
    position: relative;
`

const ProjectSectionLogo = styled.div`
    align-self: end;
    margin: 0 auto;

    h2 {
        color: #eee
    }

    .spacer{
        background: #eee;
    }
`

const ProjectSectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const ProjectSectionTitle = styled.h3`
    color: #D7A22A;
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 0;
    align-items: center;
    @media (max-width: 720px) {
        font-size: 24px;
    }
    div {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 16px;
        line-height: 1.4;
    }
`

const ProjectSectionSubnote = styled.div`
    margin: 0;
    display: block;
    text-align: start;
    font-weight: 500;
    color: #eee;
`

const ProjectSectionFooter= styled.div`
    color: #D7A22A;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 1.4;
    margin: 0 0 10px;
    display: block;
    text-align: start;
    font-weight: bold;
`

const ProjectSectionText = styled.p`
    color: rgba(255, 255, 255, .9);
    font-size: 18px;
    line-height: 1.5;
    margin-right: 20px;
    animation: IntroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const ProjectSectionCellGroup = styled.div`
  margin: 0 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  @media (max-width: 800px) {
    margin: 0 50px;
    padding: 20px 0;

    grid-template-columns: repeat(1, 1fr);
  }

  `
class ProjectSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <ProjectSectionGroup>
            <WaveTop><Wave /></WaveTop>
            {/* <WaveBottom><Wave /></WaveBottom> */}

            <ProjectSectionLogo>
                        <h2>Projects</h2>
                        <div className="spacer"><br /></div>
            </ProjectSectionLogo>
            <ProjectSectionCellGroup>
            {staticdata.projects.map((project, index) => (
                <div key={index}>
                    <Card key={index} image={require(`../images/${project.image}.png`)} />
                    <ProjectSectionTitle>{project.name}</ProjectSectionTitle>
                    <ProjectSectionSubnote>{project.company}</ProjectSectionSubnote>
                    <ProjectSectionFooter>{project.tools}</ProjectSectionFooter>
                    <ProjectSectionText dangerouslySetInnerHTML={{__html: `${project.description}`}}></ProjectSectionText>
                </div>

            ))}
            </ProjectSectionCellGroup>
        </ProjectSectionGroup>
        )
    }
}

export default ProjectSection