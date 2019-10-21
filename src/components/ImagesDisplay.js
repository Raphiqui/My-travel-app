import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import Cards from './Cards.js';
import Segment from './ImageDisplayItem.js';
import 'antd/dist/antd.css';

const _ = require('lodash');

export default class ImagesDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {cardSelected, imagesTemplate, showDetails} = this.props;

        return (
            <div>
                {this.props.isDetailOpen
                    ?   <div style={{
                            paddingTop: "20px",
                            backgroundImage: `url(${process.env.PUBLIC_URL + cardSelected['background']})`,
                            backgroundRepeat  : 'no-repeat',
                            backgroundSize: 'cover',
                            overflow: 'hidden'}}
                        >
                            <Segment cardSelected={cardSelected}/>

                        </div>

                    :   <Card.Group style={{backgroundColor: "#5E7FA8", paddingLeft: "5px", paddingTop: "60px"}}>
                            {_.map(imagesTemplate, (item) => {
                                return(<Cards
                                    key={item["countryName"]}
                                    item={item}
                                    showDetails={showDetails}
                                />)
                            })}
                        </Card.Group>
                }
            </div>
        )
    }
}
