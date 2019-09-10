import React, {Component, createRef} from 'react';
import { Modal, Button } from 'semantic-ui-react'

export default class About extends Component {
    state = {};

    render() {

        return (
            <Modal size={size} open={open} onClose={this.close}>
                <Modal.Header>Delete Your Account</Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete your account</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative>No</Button>
                    <Button
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content='Yes'
                    />
                </Modal.Actions>
            </Modal>
        )
    }
}
