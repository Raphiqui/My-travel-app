import React, {Component, createRef} from 'react';
import { Menu, Icon, Modal, Button } from 'semantic-ui-react'
import About from './About.js'

export default class Header extends Component {
    state = {};

    // close = () => this.setState({ isModalOpen: false });

    // onClickAbout = () => this.setState({ isModalOpen: true});

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

                <Modal closeIcon trigger={<Menu.Item name='About' > <Icon name={"archive"}/> About </Menu.Item>}>

                    <Modal.Header>About my travel app</Modal.Header>
                    <Modal.Content>
                        <p>Content is coming</p>
                    </Modal.Content>

                </Modal>

            </Menu>
        )
    }
}
