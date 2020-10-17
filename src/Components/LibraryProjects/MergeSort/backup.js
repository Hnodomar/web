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
        }
    }
    componentDidMount() {
        this.resetArray();
    }

    componentWillUnmount() {
        this.setState({array: []});
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 150; i++) {
            array.push(randomIntFromInterval(5,730)); //Bar of 5 or below is too small for the screen!
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; ++i) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2; //Every 3rd element is a swap animation
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i]; //Assign first 2 animations of each triplet
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else { //Swap animation
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        } 
    }

    testSortingAlgorithms() {
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
                <button onClick={() => this.testSortingAlgorithms()}>Test (BROKEN)</button>
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