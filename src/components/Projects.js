import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';


import projImg1 from "../asset/img/project-img1.png";
import projImg2 from "../asset/img/project-img2.png";
import projImg3 from "../asset/img/project-img3.png";
import colorSharp2 from "../asset/img/color-sharp2.png";

export const Projects = () => {

    const projects = [
        {
            title: "Responsive Portfolio Website",
            description: "Develop a personal portfolio website using HTML, CSS, JavaScript, and React.",
            imgUrl: projImg2,
            githubUrl: "private"
            },
        {
            title: "GBA Pong Game",
            description: "Make an interactive graphical Pong game application that run on a Game Boy Advance emulator using C",
            imgUrl: projImg3,
            githubUrl: "https://github.com/khaihuyenn/GBA-Game.git"
        },

        {
            title: "2D Dungeon Crawler game",
            description: "Collaborate with a team implementing and writing unit tests across five sprints to develop a 2D Dungeon Crawler game using Java in Android Studio Code",
            imgUrl: projImg1,
            githubUrl: "https://github.com/richard-syKim/CS2340D_Team1.git"
          },
    ];
    return (
        <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Checkout my GitHub page through the URL links for more information</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Coursework Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Planned Project</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            if (index === 0) {
                                return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                    />
                                )
                            }
                        })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    if (index == 1|| index == 2) {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    }
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h5>Planning...</h5>
                      <h5>- Build a Machine Learning project using Python</h5>
                      <h5>- Build an IOS app using Swift</h5>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}