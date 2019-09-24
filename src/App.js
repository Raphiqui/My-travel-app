import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import ImagesDisplay from './components/ImagesDisplay.js';

const _ = require('lodash');
const imagesTemplate = require('./data/countries.json');

export default class App extends Component {
    state = {
        isDetailOpen: false,
        cardSelected: null};

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
            cardSelected: buffer,
        });
    };

    handleContextRef = contextRef => this.setState({ contextRef });

    render() {
        const { activeItem, isDetailOpen, cardSelected } = this.state;

        return (
            <div className="App" ref={this.handleContextRef}>

                <Header handleItemClick={this.handleItemClick} activeItem={activeItem}/>

                <ImagesDisplay
                    cardSelected={cardSelected}
                    imagesTemplate={imagesTemplate}
                    showDetails={this.showDetails}
                    isDetailOpen={isDetailOpen}/>
            </div>
        );
    }
}

