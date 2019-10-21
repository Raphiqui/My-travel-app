import React, {Component} from 'react';
import {Icon, Menu} from 'semantic-ui-react'
import { notification } from 'antd';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    openNotification = () => {
        notification.open({
            message: <h3>Purpose of this app</h3>,
            duration : 15,
            description:
                <p style={{fontSize: '20px'}}>
                    This app has been created in order to keep going learning about Reactjs.
                    I'm building it during this special period between the end of your studies and your first job.
                    After my internship I had the goal to increase my knowledge bounded to programming.
                    This app will show few of my trips across the world.
                </p>,
            icon: <Icon name="globe" style={{ color: '#2ab9e9' }} />,
            style: {
                width: 600,
                marginLeft: 335 - 600,
            }
        });
    };

    render() {
        return (
            <Menu.Item name='About' onClick={this.openNotification}> <Icon name={"globe"}/> About </Menu.Item>
        )
    }
}
