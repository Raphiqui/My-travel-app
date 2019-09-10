import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react'

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
                    Home page
                </Menu.Item>

                <Menu.Item
                    name='About'
                    active={activeItem === 'About'}
                    onClick={this.handleItemClick}
                >
                    About
                </Menu.Item>
            </Menu>
        )
    }
}
