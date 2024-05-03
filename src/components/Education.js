import gtLogo from "../asset/img/gt-logo.png";
import gsuLogo from "../asset/img/gsu-logo.png"

export const Education = () => {
    return (
    <section className="education" id="education">
    <h1 class="heading"> My <span>Education</span></h1>
      <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={gtLogo} alt="" style={{ width: 200, height: 220 }} />
            </div>
            <div className="content">
              <h3>Georgia Institute of Technology</h3>
              <p>Bachelor of Science, Computer Science | Concentration: Intelligence and Devices</p>
              <h4>2023-Present | Expected Graduation: 2025</h4>
              <p1>Relevant Courseworks: Data Structures & Algorithms, Objects and Design, Computer Organization & Programming</p1>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={gsuLogo} alt="" style={{ width: 280, height: 220 }} />
            </div>
            <div className="content">
              <h3>Georgia State University</h3>
              <p>Bachelor of Science, Computer Science</p>
              <h4>2021-2023</h4>
              <p1>Relevant Courseworks: Object-Oriented Programming, Linear Algebra, Discrete Mathematics</p1>
            </div>
          </div>
        </div>
    </section>
  )
}
    