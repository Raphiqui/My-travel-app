import React, {Component} from 'react';
import {Icon, Menu} from 'semantic-ui-react'
import { notification } from 'antd';

export default class About extends Component {
    state = {};

    openNotification = () => {
        notification.open({
            message: 'Purpose of this app',
            duration : 5,
            description:
                'This app has been created in order to keep going my training about Reactjs after my ending studies internship. ' +
                'It purpose is to show few of my trips across the world.',
            icon: <Icon name="globe" style={{ color: '#2ab9e9' }} />,
            style: {
                width: 600,
                marginLeft: 335 - 600,
            },
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    render() {

        return (
            <Menu.Item name='About' onClick={this.openNotification}> <Icon name={"archive"}/> About </Menu.Item>
        )
    }
}
