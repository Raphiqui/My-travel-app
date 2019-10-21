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
        const { activeItem, handleItemClick } = this.props;

        return (
            <Menu fluid widths={2} fixed='top' size={"massive"} style={{backgroundColor: "#5E7FA8"}}>
                <Menu.Item
                    name='Home page'
                    active={activeItem === 'Home page'}
                    onClick={handleItemClick}
                >
                    <Icon name={"home"}/>
                    Home page
                </Menu.Item>

                <About/>

                {/*<Menu.Item as={"h3"}><b>My travel app</b></Menu.Item>*/}

            </Menu>
        )
    }
}
