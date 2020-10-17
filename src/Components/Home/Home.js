import React from 'react';
import './Home.css';
import Slicklist from '../Slick/slick';
import ReactHighlights from '../ReactHighlights/ReactHighlights';
import Misc from '../Misc/Misc';
import Intro from '../Intro/Intro';


class Home extends React.Component {
    render() {
        return (
            <div>
                <Intro />
                <Slicklist />
                <ReactHighlights />
                <Misc />
            </div>
        );
    }
}

export default Home;