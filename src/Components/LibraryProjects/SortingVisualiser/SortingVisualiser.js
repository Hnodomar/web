import React from 'react';
import getMergeSortAnimations from './Algorithms/MergeSortAlgo';
import getBubbleSortAnimations from './Algorithms/BubbleSortAlgo';
import getQuickSortAnimations from './Algorithms/QuickSortAlgo';
import './SortingVisualiser.css';

const PRIMARY_COLOUR = 'turquoise';
const SECONDARY_COLOUR = 'red';


class SortingVisualiser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            timeoutIDs: [],
            sortStarted: false,
            upperBound: 600,
            animationSpeed: 5,
            numberOfElements: 100,
        }
        this.resetArray = this.resetArray.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.stopVisualiser = this.stopVisualiser.bind(this);
        this.toggleSliders = this.toggleSliders.bind(this);
    }
    componentDidMount() {
        this.resetArray();
        window.addEventListener('resize', this.resetArray);
    }
    componentWillUnmount() {
        this.stopVisualiser();
    }
    stopVisualiser() {
        this.state.timeoutIDs.forEach(ID => {
            clearTimeout(ID);
        });
        this.state.timeoutIDs = [];
    }
    resetArray() {
        const test = document.getElementsByClassName('VisualiserBars')[0].offsetWidth;
        console.log(test);
        this.updateStatus("");
        this.stopVisualiser();
        this.toggleSliders("on");
        const array = [];
        for (let i = 0; i < this.state.numberOfElements; i++) {
            array.push(randomIntFromInterval(5, this.state.upperBound)); //Bar of 5 or below is too small for the screen!
        }
        this.setState({array});
        this.state.sortStarted = false;
    }
    toggleSliders(toggle) {
        const sliders = document.getElementsByClassName("slider");
        if (toggle === "off") 
            for (let item of sliders)
                item.disabled = true;
        else if (toggle === "on")
            for (let item of sliders)
                item.disabled = false;
    }
    updateStatus(statusUpdate) {
        document.getElementsByClassName('StatusWindowText')[0].innerHTML = `${statusUpdate}`;
    }
    mergeSort() {
        this.toggleSliders("off");
        this.updateStatus("Merge Sorting...");
        this.state.sortStarted = true;
        const animations = getMergeSortAnimations(this.state.array);
        let id;
        for (let i = 0; i < animations.length; ++i) {
            const [eleOne, eleTwo] = animations[i]; //Get pair from each index of animations array
            const arrayBars = document.getElementsByClassName('array-bar');
            if (i % 3 !== 2) { //Every 3rd element is a swap animation
                const colour = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
                id = setTimeout(() => {
                    arrayBars[eleOne].style.backgroundColor = colour;
                    arrayBars[eleTwo].style.backgroundColor = colour;
                }, i * this.state.animationSpeed);
            } else { //Swap animation
                id = setTimeout(() => {
                    arrayBars[eleOne].style.height = `${eleTwo}px`;
                }, i * this.state.animationSpeed);
            }
            this.state.timeoutIDs.push(id);
        }
        id = setTimeout(() => {
            this.updateStatus("Merge Sort Complete!");
        }, this.state.animationSpeed * animations.length);
        this.state.timeoutIDs.push(id);
    }
    bubbleSort() {
        this.toggleSliders("off");
        this.updateStatus("Bubble Sorting...");
        this.state.sortStarted = true;
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
                }, (i / 10) * this.state.animationSpeed);
            }
            else {  //If pair is an index plus numeric value
                id = setTimeout(() => { //Change height of bar according to numeric value at index
                    arrayBars[eleOne].style.height = `${eleTwo}px`;
                }, Math.floor((i / 10)) * this.state.animationSpeed);
            }
            this.state.timeoutIDs.push(id);
        }
        id = setTimeout(() => { //This will trigger at the same time the final animation does
            this.updateStatus("Bubble Sort Complete!");
        }, this.state.animationSpeed * (animations.length / 10));
        this.state.timeoutIDs.push(id);
    }
    quickSort() {
        
    }
    heapSort() {

    }
    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
          const array = [];
          const length = randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const QuickSortedArray = getQuickSortAnimations(array.slice());
          console.log(arraysAreEqual(javaScriptSortedArray, QuickSortedArray));
        }
    }
    render() {
        const array = this.state.array;
        return (
            <div className="arrayContainer">
                <div className="VisualiserHeader">
                    <p>Sorting Visualiser</p>
                </div>
                <div className="VisualiserBars">
                    {array.map((value, index) => {
                        return (<div 
                        className="array-bar" 
                        key={index}
                        style={{backgroundColor: PRIMARY_COLOUR, height: `${value}px`, width: `${(document.getElementsByClassName('VisualiserBars')[0].offsetWidth) / this.state.numberOfElements - 2.2}px`}}>
                        </div>);
                    })}
                </div>
                <div className="VisualiserButtons">
                    <div className="StatusWindow">
                        <p className="StatusWindowText"></p>
                    </div>
                    <button type="button" onClick={() => this.resetArray(this.state.upperBound)}>Reset Array</button>
                    Speed:
                    <input type="range" 
                        min="1" 
                        max="100"
                        defaultValue="5"  
                        className="slider"
                        step="1" //20 - e.target.value since this is just how the direction of range sliders works
                        onChange={(e) => {this.state.animationSpeed = (101 - e.target.value) * 2;
                                    this.updateStatus(`Speed: ${e.target.value}`)}} />
                    Elements:
                    <input type="range" 
                        min="10" 
                        max="150"
                        defaultValue="100"  
                        className="slider"
                        onChange={(e) => {this.state.numberOfElements = e.target.value;
                            this.resetArray()
                            this.updateStatus(`Elements: ${e.target.value}`)}} />
                    Upper Bound:
                    <input type="range" 
                        min="50" 
                        max="650"
                        defaultValue="600"  
                        className="slider" 
                        onChange={(e) => {this.state.upperBound = e.target.value;
                            this.resetArray()
                            this.updateStatus(`Upper Bound: ${e.target.value}`)}} />
                    <button type="button" onClick={() => this.state.sortStarted === false ? this.mergeSort() : this.updateStatus("Please reset the array!")}>Merge Sort</button>
                    <button type="button" onClick={() => this.state.sortStarted === false ? this.bubbleSort() : this.updateStatus("Please reset the array!")}>Bubble Sort</button>
                    <button type="button" onClick={() => this.state.sortStarted === false ? this.quickSort() : this.updateStatus("Please reset the array!")}>Quick Sort</button>
                    <button type="button" onClick={() => this.state.sortStarted === false ? this.heapSort() : this.updateStatus("Please reset the array!")}>Heap Sort</button>
                    <button type="button" onClick={() => this.stopVisualiser()}>STOP</button>
                    <button type="button" onClick={() => this.testSortingAlgorithms()}>Test</button>
                </div>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
} 

export default SortingVisualiser;

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
}