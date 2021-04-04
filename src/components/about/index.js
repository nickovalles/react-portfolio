import React, { Component } from 'react';
import coverImage from '../../assets/profile-picture/profilepic.png';

class About extends Component {
    render() {
        return (
            <section className="section-title container">
                <h1>Nicolas Ovalles</h1>
                <hr></hr>
                <div className="row justify-content-center">
                    <div className="col-10 section-content">
                        <img className="mt-3 mb-5 me" src={coverImage} alt="Nicolas O"/>
                        <p>
                        I am originally from Silver Spring, MD (just outside of Washington DC). As of 7 months ago, I reside in Downtown Salt Lake City with my wife, Golda. Before moving to Utah, I was working full-time for Marriott International in DC doing Sales, Marketing, HR, Operations, and Event Management. I am now studying at the University of Utah to become a Full Stack Software Developer. Within tech culture, I value authenticity, diversity, and ethicality. Tech-wise, I am interested in graphics, mobile development, front end, AI, UI/UX Research, and Data Science. I am fascinated by design and am a careful observer of the deliberate and calculated choices designers make. Beyond creating and implementing code, I find joy in crafting unique, innovative, and aesthetic final products. My inspirations for design and problem-solving are multifaceted--I draw from fashion, psychology, social issues, and art history, just to name a few. I believe that my interdisciplinary approach to tech sets me apart as not just an amibitious coder, but a visionary and irreplaceable creator. If I'm not nerding out, working out, or vegging out, catch me at a museum or airport.
                        </p>
                    </div>  
            </div>
        </section> 
    )}
}
export default About;