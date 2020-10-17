import React from 'react';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import LibraryList from '../LibraryList/LibraryList';
import BubbleSort from '../LibraryProjects/BubbleSort/BubbleSort';
import SortingVisualiser from '../LibraryProjects/SortingVisualiser/SortingVisualiser';
import './Library.css';

class Library extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectTitles: {
                JS: [{name: "SortingVisualiser"}, {name: "BubbleSort", item: BubbleSort}],
                C: [],
                Py: [{name: "Autonomous Irrigation System"}]
            },
            lastClicked: null,
        };
        this.buildRoutes = this.buildRoutes.bind(this);
    }
    buildRoutes = () => {
      
    }
    buildListLinks = () => {
        const titles = this.state.projectTitles;
        for (const key in titles) {
            titles[key].map(title => {
                return <Link to={`/Library/${title.name}`}>{title.name}</Link>
            });
        }
    }
    render() {
        return(
            <Router>
                <h1 className="libraryTitle">The Library</h1>
                <LibraryList titles={this.state.projectTitles} buildLinks={this.buildListLinks} />
                <Switch>
                    <Route path="/Library/SortingVisualiser" component={SortingVisualiser} />
                    <Route path="/Library/BubbleSort" component={BubbleSort} />
                </Switch>
            </Router>
        );
    }
}

export default Library;