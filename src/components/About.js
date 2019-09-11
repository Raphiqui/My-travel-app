import React, {Component} from 'react';
import { Modal, Button } from 'semantic-ui-react'

export default class About extends Component {
    state = {open: true};

    close = () => this.setState({ open: false });

    render() {

        return (
            <Modal size="large" open={this.state.open}>
                <Modal.Header>Delete Your Account</Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete your account</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClose={this.close}>Exit</Button>
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
