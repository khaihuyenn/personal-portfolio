import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import htmlCssLogo from "../asset/img/html-css-logo.png";
import jsLogo from "../asset/img/js-logo.png";
import pythonLogo from "../asset/img/python-logo.png";
import javaLogo from "../asset/img/java-logo.png";
import arrow1 from "../asset/img/arrow1.svg";
import arrow2 from "../asset/img/arrow2.svg";

export const Skills = () => {
    const skillsData = [
        {
            title: 'Coding Languages',
            items: [
              { name: 'HTML/CSS', logo: htmlCssLogo },
              { name: 'JavaScript', logo: jsLogo },
              { name: 'Python', logo: pythonLogo },
              { name: 'Java', logo: javaLogo }
            ]
          },
          
      ];

    const responsive = {
        largeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
          slidesToSlide: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>coding...<br></br> coding...</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        {skillsData.map((category, index) => (
                                    <div key={index} className="item">
                                        <h5>{category.title}</h5>
                                        {category.items.map((subSkill, subIndex) => (
                                            <div key={subIndex} className="sub-skill-item">
                                                <img src={subSkill.logo} alt={`Logo for ${subSkill.name}`} />
                                                <p>{subSkill.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
        </section>
    )
}