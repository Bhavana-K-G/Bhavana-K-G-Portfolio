import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

const Project = ({projectdetails}) => {
  return (
    <Col lg={3}>
      <Card className="flip-card mb-4" style={{ height: "300px", backgroundColor: "transparent", border: "none", borderRadius: "25px"}}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Card.Img variant='top' src={projectdetails.logo} />
            <Card.Body>
              <Card.Title>{projectdetails.name}</Card.Title>
              <Card.Text>
              {
                projectdetails.tags.length > 0 ? <>
                {
                  projectdetails.tags.map((tag) => {
                    return <span className="badge rounded-pill text-bg-secondary m-1 p-2" key={tag}>{tag}</span>
                  })
                }
                </> : <></>
              }
              </Card.Text>
            </Card.Body>
          </div>
          <div className="flip-card-back">
              <Card.Body>
                <Card.Text>
                  {projectdetails.description}
                </Card.Text>
                  <a href={projectdetails.github} target='_blank'>
                  <AiFillGithub  size={35} color='#000' />

                  </a>
                  <a href={projectdetails.live} target='_blank'>
                  <FiExternalLink size={35} color='#000'/>

                  </a>
              </Card.Body>
          </div>

        
        </div>
      </Card>
    </Col>

  )
}

export default Project