import React from 'react';
import './slick.css';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick-theme.css"; 
import "../../../node_modules/slick-carousel/slick/slick.css";
import picOne from './SlickPics/Screenshot_1.png';
import picTwo from './SlickPics/Screenshot_2.png';
import picThree from './SlickPics/Screenshot_3.png';
import picFour from './SlickPics/Screenshot_4.png';

class Slicklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            nav3: null,
            isButtonVisible: [true, false, false, false, false, false, false, false],
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2,
            nav3: this.slider3,
        });
    }

    toggleVisibility = () => {
        this.setState(prevState => ({ isButtonVisible: 
            !prevState.isButtonVisible }));
    };

    render() {
        const settings = {
            arrows: false,
            slidesToShow: 4,
            focusOnSelect: true,
            waitForAnimate: true,
            draggable: false,
            lazyLoad: 'ondemand',
            responsive: [
                {
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 3,
                        focusOnSelect: true,
                        arrows: false,
                        draggable: false,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        focusOnSelect: true,
                        arrows: false,
                        draggable: false,
                    }
                }
            ]
        };
        const { isButtonVisible } = this.state;
        return(
            <div className="diagonalslick">
                <div className="slicklist">
                    <div className="slickpics">
                        <Slider
                            className="slick-containerpics"
                            ref={slider => (this.slider2 = slider)}
                            asNavFor={this.state.nav3}
                            arrows={false}
                            waitForAnimate={true}
                            draggable={false}
                            focusOnSelect={true}
                        >   
                            <img className="pics" src={picOne}/>
                            <img className="pics" src={picTwo} />
                            <img className="pics" src={picThree} />
                            <img className="pics" src={picFour} />
                            <img className="pics" src={picOne} />
                            <img className="pics" src={picTwo} />
                            <img className="pics" src={picThree} />
                            <img className="pics" src={picFour} />
                        </Slider>
                    </div>
                    <div className="buttonwords">
                        <Slider 
                            {...settings} 
                            className="buttons"
                            ref={slider => (this.slider1 = slider)}
                            asNavFor={this.state.nav2}
                            //asNavFor={this.state.nav3}
                        >
                            <div className={`${isButtonVisible ? "active" : "inactive"}`} key={1} onClick={this.toggleVisibility}>C++</div>
                            <div className="blue-one sub-but" key={2}>JS</div>
                            <div className="green-one sub-but" key={3}>Python</div>
                            <div className="orange-one sub-but" key={4}>Java</div>
                            <div className="red-two sub-but" key={5}>C++</div>
                            <div className="blue-two sub-but" key={6}>JS</div>
                            <div className="green-two sub-but" key={7}>Python</div>
                            <div className="orange-two sub-but" key={8}>Java</div>
                        </Slider>
                        <Slider
                            className="slick-containerwords"
                            ref={slider => (this.slider3 = slider)}
                            arrows={false}
                            draggable={false}
                        >
                            <div className="slick-text">
                                <h3 className="caption-title">Tetris in C++</h3>
                                <p className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="slick-text">
                                <h3 className="caption-title">Tetris in JavaScript</h3>
                                <p className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="slick-text">
                                <h3 className="caption-title">Tetris in Python</h3>
                                <p className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="slick-text">
                                <h3 className="caption-title">Tetris in Java</h3>
                                <p className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="slick-text">
                                <h3 className="caption-title">Tetris in C++</h3>
                                <p className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="slick-text">
                                <h3 className="caption-title">Tetris in JavaScript</h3>
                                <p className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="slick-text">
                                <h3 className="caption-title">Tetris in Python</h3>
                                <p className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="slick-text">
                                <h3 className="caption-title">Tetris in Java</h3>
                                <p className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slicklist;
