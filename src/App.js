import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import ImagesDisplay from './components/ImagesDisplay.js';
import {Sticky} from "semantic-ui-react";

const _ = require('lodash');
const imagesTemplate = require('./data/countries.json');

export default class App extends Component {
    state = {
        isDetailOpen: false,
        currentPathToFetch: null};

    handleItemClick = (e, { name }) => {
        console.log('Test');
        this.setState({ activeItem: name, isDetailOpen: false });
    };

    showDetails = (event) => {
        let buffer = null;
        _.map(imagesTemplate, (item) => {
            if(event.target.name === item['name']){buffer = item['imageLocation']}
        });

        this.setState({
            isDetailOpen: true,
            currentPathToFetch: buffer,
        });
    };

    handleContextRef = contextRef => this.setState({ contextRef });

    render() {
        const { contextRef, activeItem, isDetailOpen } = this.state;

        return (
            <div className="App" ref={this.handleContextRef}>
                <Sticky context={contextRef}>
                    <Header handleItemClick={this.handleItemClick} activeItem={activeItem}/>
                </Sticky>
                <ImagesDisplay showDetails={this.showDetails} isDetailOpen={isDetailOpen}/>
            </div>
        );
    }
}

