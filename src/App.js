import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import ImagesDisplay from './components/ImagesDisplay.js';
import {Sticky} from "semantic-ui-react";

export default class App extends Component {
    state = {};

    handleContextRef = contextRef => this.setState({ contextRef });

    render() {
        const { contextRef } = this.state;

        return (
            <div className="App" ref={this.handleContextRef}>
                <Sticky context={contextRef}>
                    <Header/>
                </Sticky>
                <ImagesDisplay/>
            </div>
        );
    }
}

