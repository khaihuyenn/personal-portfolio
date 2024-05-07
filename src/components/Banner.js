import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../asset/img/header-img.png";
import 'animate.css';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(100);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  //const [index, setIndex] = useState(1);
  const [showCursor, setShowCursor] = useState(true);
  //const toRotate = [ "CS student at Georgia Tech" ];
  const period = 1000;
  
  useEffect(() => {
    const toRotate = ["CS student at Georgia Tech"];
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100);
      } else {
        setDelta(100);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Toggle cursor every 500 milliseconds
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(ticker);
      clearInterval(cursorInterval);
    };
  }, [text, delta, loopNum, isDeleting]);

    return(
      <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Khai Huyen`}<span className="wrap"><h2>{text} {showCursor && "|"}</h2></span></h1>
                        <a href="https://drive.google.com/file/d/1Wy356iAbe1x42jHeQDWqri2AMmLRf0qS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button>Resume<ArrowRightCircle size={25} /></button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}