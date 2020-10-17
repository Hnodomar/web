import React from 'react';
import './ReactHighlights.css';
import expresso from './images/expresso.png';
import ravenous from './images/ravenous.png';
import tetris from './images/wew.png';

class ReactHighlights extends React.Component {
    render() {
        return(
            <div className="diagonalreact">
                <div className="contentreact">
                    <div className="gallery-words">
                        <h3>React Apps</h3>
                        <p>Several of the Apps I have made with the powerful JavaScript React library.</p>
                        <p>These served as good practice with React programming patterns, as well as working with 'O-Auth' open declaration APIs.</p>
                    </div>
                    <div className="gallery-pics">
                        <div className="project" id="react-one">
                            <div className="img-container">
                                <img src={ravenous} />
                                <div className="project-description">
                                    <p>Ravenous mankes use of the Yelp API to provide the user with nearby food locations</p>
                                    <p className="project-description-link">MORE INFO</p>
                                </div>
                            </div>
                            <div className="title">
                                <h3>Ravenous</h3>
                            </div>
                        </div>
                        <div className="project" id="react-two">
                            <div className="img-container">
                                <img src={expresso} />
                                <div className="project-description">
                                    <p>
                                        This is placeholder text
                                    </p>
                                </div>
                            </div>
                            <div className="title">
                                <h3>Expresso</h3>
                            </div>
                        </div>
                        <div className="project" id="react-three">
                            <div className="img-container">
                                <img src={tetris} />
                                <div className="project-description">
                                    <p>
                                        This is placeholder text
                                    </p>
                                </div>
                            </div>
                            <div className="title">
                                <h3>Tetris</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReactHighlights;