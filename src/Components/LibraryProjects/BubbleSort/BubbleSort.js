import React from 'react';
import getBubbleSortAnimations from './BubbleSortAlgo';
import './BubbleSort.css';

const PRIMARY_COLOUR = 'turquoise';
const SECONDARY_COLOUR = 'red';
const ANIMATION_SPEED_MS = 10;

class BubbleSort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            timeoutIDs: [],
        }
    }
    componentDidMount() {
        this.resetArray();
    }
    componentWillUnmount() {
        this.stopBubble();
    }
    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        let id;
        for (let i = 0; i < animations.length; ++i) { //Loop the whole animations array
            const arrayBars = document.getElementsByClassName('array-bar');
            const [eleOne, eleTwo] = animations[i]; //Get pair from each index of animations array
            if (eleOne === eleTwo - 1) { //If pair are indices
                const colour = i % 2 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
                id = setTimeout(() => { //Colour change & revert animations ALWAYS adjacent in array, so % 2 to distinguish 
                    arrayBars[eleOne].style.backgroundColor = colour; //'select' values being compared by changing them red
                    arrayBars[eleTwo].style.backgroundColor = colour; //'unselect' values not being compared by changing them turquoise
                }, (i / 10) * ANIMATION_SPEED_MS);
            }
            else {  //If pair is an index plus numeric value
                id = setTimeout(() => { //Change height of bar according to numeric value at index
                    arrayBars[eleOne].style.height = `${eleTwo}px`;
                }, Math.floor((i / 10)) * ANIMATION_SPEED_MS);
            }
            this.state.timeoutIDs.push(id);
        }
    }
    stopBubble() {
        this.state.timeoutIDs.forEach(ID => {
            clearTimeout(ID);
        });
        //this.resetArray();
    }
    resetArray() {
        const array = [];
        for (let i = 0; i < 150; i++) {
            array.push(randomIntFromInterval(10, 300));
        }
        this.setState({array});
    }
    render() {
        const {array} = this.state;
        return (
            <div className="arrayContainer">
                {array.map((value, index) => {
                    return (<div
                        className="array-bar"
                        key={index}
                        style={{backgroundColor: PRIMARY_COLOUR, height: `${value}px`}}>
                    </div>);
                })}
                <button onClick={() => {this.resetArray()}}>Generate New Array</button>
                <button onClick={() => {this.bubbleSort()}}>Bubble Sort</button>
                <button onClick={() => {this.stopBubble()}}>STOP</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default BubbleSort;