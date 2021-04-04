import React, { Component } from 'react';
// import html from '../../assets/skills/html.png';
// import bootstrap from '../../assets/skills/bootstrap.png';
// import css from '../../assets/skills/css.png';
// import github from '../../assets/skills/github.png';
// import handlebars from '../../assets/skills/handlebars.png';
// import javascript from '../../assets/skills/javascript.png';
// import mern from '../../assets/skills/mern.png';
// import mongodb from '../../assets/skills/mongodb.png';
// import mysql from '../../assets/skills/mysql.png';
// import node from '../../assets/skills/nodejs.png';
// import react from '../../assets/skills/react.png';
import resume from '../../assets/resume.PNG';

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Resume extends Component {
    render() {
        return(
            <section className="section-title container">
                <h1>My Resume</h1>
                <hr></hr>
                <div className="justify-content-center mt-5" id="resume">
                    <h2 className="font-weight-bold mb-4">Check Out My Resume!</h2>
                    <div>
                    <a href="https://github.com/nickovalles/react-portfolio/raw/master/src/assets/Nicolas-Ovalles-Resume.docx.pdf" className="text-light text-decoration-none"><FontAwesomeIcon icon={faDownload} size="2x" alt="Download Resume"/></a>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col">
                        <img src={resume} style={{ width: "70%" }} alt="resume" />
                    </div>
                </div>

                <br />

            </section>
        )
    }
}

export default Resume;