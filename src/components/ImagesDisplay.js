import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
const _ = require('lodash');
const imagesTemplate = require('../data/countries.json');

export default class ImagesDisplay extends Component {
    state = {};

    render() {
        return (
            <div>
                <Image src={require('../images/Amsterdam.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
                <Image src={require('../images/Cancun.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
                <Image src={require('../images/Cuba.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
                <Image src={require('../images/DR.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
                <Image src={require('../images/Egypt.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
                <Image src={require('../images/England.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
                <Image src={require('../images/Ireland.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
                <Image src={require('../images/Italy.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
                <Image src={require('../images/LA.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
                <Image src={require('../images/Luxembourg.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
                <Image src={require('../images/Queensland.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
                <Image src={require('../images/Spain.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
                <Image src={require('../images/Tanzania.png')} size='massive' verticalAlign='top' style={{width: "100%"}} />
            </div>
        )
    }
}
