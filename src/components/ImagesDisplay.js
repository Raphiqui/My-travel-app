import React, {Component} from 'react';
import { Image, Icon } from 'semantic-ui-react'

export default class ImagesDisplay extends Component {
    state = {};

    render() {
        const imageName = require("../images/Cancun.png");
        return (
            <div>
                <Image src={imageName} size='massive' verticalAlign='top' style={{width: "100%"}} />
            </div>
        )
    }
}
