import React, {Component} from 'react';
import { Image, Grid, Message, Icon } from 'semantic-ui-react';
import 'antd/dist/antd.css';
const _ = require('lodash');
const imagesTemplate = require('../data/countries.json');

export default class ImagesDisplay extends Component {
    state = {};

    render() {

        const imagePath = imagesTemplate['Cancun']['imageLocation'];

        console.log(imagesTemplate['Cancun']['imageLocation']);

        return (
            <div>
                {/*<div className="test1" style={{*/}
                    {/*// width: null,*/}
                    {/*height: "800px",*/}
                    {/*backgroundImage: "url("+imageUrl+")",*/}
                    {/*backgroundRepeat: "no-repeat",*/}
                    {/*backgroundSize: "cover"*/}
                {/*}}>*/}
                    {/*<Icon onClick={() => {console.log("clicked")}} size="big" name="close" style={{color: "red", paddingTop: "400px"}}/>*/}
                {/*</div>*/}

                {_.map(imagesTemplate, (item) => {
                    return(
                        <Image src={process.env.PUBLIC_URL + item['imageLocation']} verticalAlign='top' style={{width: "100%"}}/>
                    )
                })}
            </div>
        )
    }
}
