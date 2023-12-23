import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import htmlCssLogo from "../asset/img/html-css-logo.png";
import jsLogo from "../asset/img/js-logo.png";
import pythonLogo from "../asset/img/python-logo.png";
import javaLogo from "../asset/img/java-logo.png";
import gitLogo from "../asset/img/git-logo.png";
import GitHubLogo from "../asset/img/GitHub-logo.png";
import bootstrapLogo from "../asset/img/bootstrap-logo.png";
import NodeJSLogo from "../asset/img/nodejs-logo.png";
import ReactLogo from "../asset/img/react-logo.png";
import vsCodeLogo from "../asset/img/vscode-logo.png";
import androidstudioLogo from "../asset/img/androidstudio-logo.png";
import intelliJLogo from "../asset/img/intelliJ-logo.png";
import arrow1 from "../asset/img/arrow1.svg";
import arrow2 from "../asset/img/arrow2.svg";

export const Skills = () => {
    const skillsData = [
        {
            title: 'Coding Languages',
            items: [
              { name: 'HTML/CSS', logo: htmlCssLogo, size: { width: 90, height: 60 } },
              { name: 'JavaScript', logo: jsLogo, size: { width: 110, height: 55 } },
              { name: 'Python', logo: pythonLogo, size: { width: 160, height: 80 } },
              { name: 'Java', logo: javaLogo, size: { width: 110, height: 70 } }
            ]
          },
          {
            title: 'Tools/Frameworks',
            items: [
              { name: 'GitHub', logo: GitHubLogo, size: { width: 50, height: 50 } }, 
              { name: 'Git', logo: gitLogo, size: { width: 50, height: 50 } },
              { name: 'Bootstrap', logo: bootstrapLogo, size: { width: 50, height: 50 } },
              { name: 'Node.js', logo: NodeJSLogo, size: { width: 70, height: 50 } },
              { name: 'React', logo: ReactLogo, size: { width: 50, height: 50 } },
            ]
          },
          {
            title: 'IDEs',
            items: [
              { name: 'VS Code', logo: vsCodeLogo, size: { width: 50, height: 50 } },
              { name: 'Android Studio', logo: androidstudioLogo, size: { width: 50, height: 50 } },
              { name: 'IntelliJ', logo: intelliJLogo, size: { width: 50, height: 50 } }
            ]
          }
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
                        <p>// Coding Languages // Tools/Frameworks // IDEs // <br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        {skillsData.map((category, index) => (
                                    <div key={index} className="item">
                                        <h5 className="category-title">{category.title}</h5>
                                        <div className="sub-skill-container">
                                        {category.items.map((subSkill, subIndex) => (
                                            <div key={subIndex} className="sub-skill-item">
                                                <img src={subSkill.logo} alt={`Logo for ${subSkill.name}`} style={{ width: subSkill.size.width, height: subSkill.size.height }} />
                                                <p>{subSkill.name}</p>
                                            </div>
                                        ))}
                                        </div>
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