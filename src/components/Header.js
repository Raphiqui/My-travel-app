import React, {Component} from 'react';
import { Menu, Icon } from 'semantic-ui-react'

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

                <Menu.Item
                    name='About'
                    active={activeItem === 'About'}
                    onClick={this.handleItemClick}
                >
                    <Icon name={"archive"}/>
                    About
                </Menu.Item>
            </Menu>
        )
    }
}
