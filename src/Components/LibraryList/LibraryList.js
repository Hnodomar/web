import React from 'react';
import {Link} from 'react-router-dom';
import './LibraryList.css';


class LibraryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentElement: null,
        };
        this.checkBold = this.checkBold.bind(this);
    }
    checkBold(event) {
        let selected = this.state.currentElement;
        if (event.target !== selected) {
            if (selected === null) {
                this.setState({currentElement: event.target});
                event.target.style.fontWeight = 'bold';
                return;
            }
            selected.style.fontWeight = 'normal';
            this.setState({currentElement: event.target});
            event.target.style.fontWeight = 'bold';
        }
    }
    render() {
        return (
            <div className="LibraryList">
                <h3>JavaScript</h3>
                {this.props.titles.JS.map((title, index) => {
                        return <Link to={`/Library/${title.name}`} onClick={this.checkBold} key={index}>{title.name}</Link>
                    })}
                <h3>C++</h3>
                {this.props.titles.C.map((title, index) => {
                        return <Link to={`/Library/${title.name}`} onClick={this.checkBold} key={index}>{title.name}</Link>
                    })}
                <h3>Python</h3>
                {this.props.titles.Py.map((title, index) => {
                        return <Link to={`/Library/${title.name}`} onClick={this.checkBold} key={index}>{title.name}</Link>
                    })}
            </div>
        );
    }
}

export default LibraryList;