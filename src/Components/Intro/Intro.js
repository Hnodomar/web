import React from 'react';
import './Intro.css';

class Intro extends React.Component {
    render() {
        return(
            <div className="main-container">
                <h2 id="title"><span id="first-word">George's</span> <span id="second-word">Projects</span></h2>
                <div className="intro-text">
                    <p><span className="intro-word">Welcome!</span> I am George, and this is where I stash projects that are either completed or kind-of completed. I am an aspiring software developer with a keen interest in quantative finance. I work with high frequency trading algorithms and have built several programs that operate C++ code at high levels of efficiency which you can view on this page.</p>
                    <p>Below is a quick overview of the relevant projects I have completed, organised under the language they were written in. For those that have more time, you can find fuller write-ups and more information on the Library page.</p>
                    <p>For contact details please visit the Contact page. My GitHub and LinkedIn profiles can be found there also. For a fuller profile of the type of person I am (and much-less to do about code, so perhaps a little less important), head to the 'About' page. You can even see what I look like!</p>
                </div>
            </div>
        );
    }
}

export default Intro;