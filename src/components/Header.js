import React, {Component} from 'react';
import { Menu, Icon } from 'semantic-ui-react'
import About from './About.js'

export default class Header extends Component {
    constructor(props) {
        super();

        console.log('INTO HEADER:', props)
    }

    state = {};

    // handleItemClick = (e, { name }) => {
    //     console.log('Test');
    //     this.setState({ activeItem: name });
    // };

    render() {
        // const { activeItem } = this.state;

        return (
            <Menu size={"massive"}>
                <Menu.Item
                    name='Home page'
                    active={this.props.activeItem === 'Home page'}
                    onClick={this.props.handleItemClick}
                >
                    <Icon name={"home"}/>
                    Home page
                </Menu.Item>

                <About/>

            </Menu>
        )
    }
}
