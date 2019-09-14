import React, {Component} from 'react';
import {Icon, Menu} from 'semantic-ui-react'
import { notification } from 'antd';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('INTO ABOUT:', props)
    }

    openNotification = () => {
        notification.open({
            message: <h3>Purpose of this app</h3>,
            duration : 15,
            description:
                <p style={{fontSize: '20px'}}>This app has been created in order to keep going my training about Reactjs after my internship to validate my studies in IT engineering.
                    It purpose is to show few of my trips across the world.
                </p>,
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
