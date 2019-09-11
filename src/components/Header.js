import React, {Component} from 'react';
import { Menu, Icon } from 'semantic-ui-react'
import About from './About.js'

export default class Header extends Component {
    state = {};

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    };

    render() {
        const { activeItem } = this.state;

        return (
            <Menu size={"massive"}>
                <Menu.Item
                    name='Home page'
                    active={activeItem === 'Home page'}
                    onClick={this.handleItemClick}
                >
                    <Icon name={"home"}/>
                    Home page
                </Menu.Item>

                <About/>

            </Menu>
        )
    }
}
