import React from 'react';
import getMergeSortAnimations from './MergeSortAlgo';
import './MergeSort.css';

const ANIMATION_SPEED_MS = 10;
const NUMBER_OF_ARRAY_BARS = 310;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';


class MergeSort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            timeoutIDs: [],
            mergeClicked: false,
        }
    }
    componentDidMount() {
        this.resetArray();
    }

    componentWillUnmount() {
        this.stopMerge();
    }

    stopMerge() {
        this.state.timeoutIDs.forEach(ID => {
            clearTimeout(ID);
        });
        this.state.timeoutIDs = [];
        this.state.mergeClicked = false;
    }

    resetArray() {
        this.stopMerge();
        const array = [];
        for (let i = 0; i < 150; i++) {
            array.push(randomIntFromInterval(5,730)); //Bar of 5 or below is too small for the screen!
        }
        this.setState({array});
        this.state.mergeClicked = false;
    }

    mergeSort() {
        if (!this.state.mergeClicked) {
            this.state.mergeClicked = true;
            const animations = getMergeSortAnimations(this.state.array);
            let id;
            for (let i = 0; i < animations.length; ++i) {
                const arrayBars = document.getElementsByClassName('array-bar');
                const isColorChange = i % 3 !== 2; //Every 3rd element is a swap animation
                if (isColorChange) {
                    const [barOneIdx, barTwoIdx] = animations[i]; //Assign first 2 animations of each triplet
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                    id = setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * ANIMATION_SPEED_MS);
                } else { //Swap animation
                    id = setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
                this.state.timeoutIDs.push(id);
            }
        }
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

    render() {
        const {array} = this.state;
        return (
            <div className="arrayContainer">
                {array.map((value, index) => {
                    return (<div 
                    className="array-bar" 
                    key={index}
                    style={{backgroundColor: PRIMARY_COLOR, height: `${value}px`}}>
                        
                    </div>);
                })}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.stopMerge()}>STOP</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
}
  

export default MergeSort;

/*testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
}*/