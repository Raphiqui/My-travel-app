import React, {Component} from 'react';
import {Modal, Icon, Menu} from 'semantic-ui-react'

export default class About extends Component {
    state = {};

    render() {

        return (
            <Modal closeIcon trigger={<Menu.Item name='About' > <Icon name={"archive"}/> About </Menu.Item>}>

                <Modal.Header>About my travel app</Modal.Header>
                <Modal.Content>
                    <p>Content is coming</p>
                </Modal.Content>

            </Modal>
        )
    }
}
