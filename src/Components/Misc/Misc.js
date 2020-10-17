import React from 'react';
import './Misc.css';
import cover from './cover.png';

class Misc extends React.Component {
    render() {
        return(
            <div className="diagonalmisc">
                <div className="contentmisc">
                    <h3>Miscellaneous Projects</h3>
                    <div className="contentmiscwords">
                        <p>Technology excites me. I enjoy to tinker, play with and figure out all sorts of bits and pieces related to modern technology. This includes microcontrollers to arduinos, hardware architecture to web design.</p>
                        <img src={cover} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Misc;