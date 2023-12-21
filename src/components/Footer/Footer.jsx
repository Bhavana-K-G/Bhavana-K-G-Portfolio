import React from 'react'
import'./Footer.css'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
  return (
    <>
        <div className="container footer">
            <div className="row">
                <div className="col-lg mx-auto links">
                    <a href={'https://github.com/Bhavana-K-G'} target={'_blank'}>
                        <img src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/bhavana-gowda-15431b212" target={'_blank'}>
                        <img src={linkedin} alt="linkedin" />
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <h3 className="text-center">Profile Links</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <p>All Right Reserved {year} ® - Bhavana K G</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer