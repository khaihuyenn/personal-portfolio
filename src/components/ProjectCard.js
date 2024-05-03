import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt={title} />
        </a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h5 style={{ fontFamily: "Poppins", fontSize: "14px", textTransform: "none" }}>{description}</h5>
          <span style={{ fontFamily: "Poppins", fontSize: "12px", textTransform: "none" }}>{githubUrl.toLowerCase()}</span>
        </div>
      </div>
    </Col>
  )
}