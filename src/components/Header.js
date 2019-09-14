import React, {Component} from 'react';
import { Menu, Icon } from 'semantic-ui-react'
import About from './About.js'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('INTO HEADER:', props)
    }

    render() {
        // const { activeItem } = this.state;

        return (
            <Menu fixed='top' size={"massive"} style={{backgroundColor: "#1A5399"}}>
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
