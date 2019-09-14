import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import ImagesDisplay from './components/ImagesDisplay.js';

const _ = require('lodash');
const imagesTemplate = require('./data/countries.json');

export default class App extends Component {
    state = {
        isDetailOpen: false,
        currentPathToFetch: null,
        itemSelected: null};

    // componentDidMount(){
    //     this.showMessage();
    // }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name, isDetailOpen: false });
    };

    showDetails = (event) => {
        let buffer = null;
        _.map(imagesTemplate, (item) => {
            if(event.target.name === item['name']){buffer = item}
        });

        this.setState({
            isDetailOpen: true,
            itemSelected: buffer,
        });
    };

    handleContextRef = contextRef => this.setState({ contextRef });

    render() {
        const { activeItem, isDetailOpen, itemSelected } = this.state;

        return (
            <div className="App" ref={this.handleContextRef}>

                <Header handleItemClick={this.handleItemClick} activeItem={activeItem}/>

                <ImagesDisplay
                    itemSelected={itemSelected}
                    imagesTemplate={imagesTemplate}
                    showDetails={this.showDetails}
                    isDetailOpen={isDetailOpen}/>
            </div>
        );
    }
}

