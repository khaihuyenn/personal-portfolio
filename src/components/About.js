import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../asset/img/about-img.png"

export const About = () => {
    return (
        <div className="about" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <img src={aboutImg} alt="About Img" />
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <h1>About</h1>
                        <p>
                            I am an undergraduate student at Georgia Tech, planning to graduate in 2025 with a Bachelor's in Computer Science. 
                            Currently, I am pursuing Intelligence and Devices concentrations. I am also interested in AI and Robotics. 
                            My career goal is to be a proficient full-stack software engineer.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};