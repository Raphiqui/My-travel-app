import React, {Component} from 'react';
import { Image, Card, Button } from 'semantic-ui-react';
import 'antd/dist/antd.css';
const _ = require('lodash');
const imagesTemplate = require('../data/countries.json');

export default class ImagesDisplay extends Component {
    state = {
        hovered: false,
        isDetailOpen: false,
        currentPathToFetch: null,
    };

    showDetails = (event) => {
        let buffer = null;
        _.map(imagesTemplate, (item) => {
            if(event.target.name === item['name']){buffer = item['imageLocation']}
        });

        this.setState({
            isDetailOpen: true,
            currentPathToFetch: buffer,
        });
    };

    test = (event) => {
        console.log(event.target.name);
        this.setState({hovered: true})
    };

    render() {

        return (
            <div>

                {this.state.isDetailOpen
                    ? <Image
                        src={process.env.PUBLIC_URL + this.state.currentPathToFetch}
                        verticalAlign='top'
                        style={{width: "100%"}}/>
                    :<Card.Group>
                        {_.map(imagesTemplate, (item) => {
                            return( <Card color={item['cardColor']}>
                            <Card.Content>
                            <Image
                            floated='right'
                            size='medium'
                            src={process.env.PUBLIC_URL + item['imageLocation']}
                            />
                            <Card.Header>{item['name']}</Card.Header>
                            <Card.Meta>{item['countryName']}</Card.Meta>
                            <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button name={item['name']} onClick={this.showDetails} basic color='blue'>
                            More details
                            </Button>
                            </div>
                            </Card.Content>
                            </Card>
                            )
                        })}
                    </Card.Group>

                }





                {/*<div className="test1" style={{*/}
                    {/*// width: null,*/}
                    {/*height: "800px",*/}
                    {/*backgroundImage: `url(${Background})`,*/}
                    {/*backgroundRepeat: "no-repeat",*/}
                    {/*backgroundSize: "cover"*/}
                {/*}}>*/}
                    {/*/!*<Icon onClick={() => {console.log("clicked")}} size="big" name="close" style={{color: "red", paddingTop: "400px"}}/>*!/*/}
                    {/*<Segment>*/}
                        {/*<Dimmer active={true    }>*/}
                            {/*<Icon name="close"/>*/}
                        {/*</Dimmer>*/}
                    {/*</Segment>*/}
                {/*</div>*/}

                {/*{_.map(imagesTemplate, (item) => {*/}
                        {/*return(*/}
                            {/*item['name'] !== 'Luxembourg'*/}
                                {/*? null*/}
                                {/*:*/}
                                    {/*<Segment key={item['name']} >*/}
                                        {/*<Dimmer active={this.state.hovered}>*/}
                                            {/*/!*<Loader>Loading</Loader>*!/*/}
                                            {/*<Icon name="close"/>*/}
                                        {/*</Dimmer>*/}

                                        {/*<Image*/}
                                            {/*// onMouseOut={(event) => {console.log('OUT :', event.target.name); this.setState({hovered: false})}}*/}
                                            {/*// onMouseOver={(event) => {console.log('IN :', event.target.name); this.setState({hovered: true})}}*/}
                                            {/*name={item['name']}*/}
                                            {/*src={process.env.PUBLIC_URL + item['imageLocation']}*/}
                                            {/*verticalAlign='top'*/}
                                            {/*style={{width: "100%"}}/>*/}
                                    {/*</Segment>*/}
                        {/*)*/}
                {/*})}*/}
            </div>
        )
    }
}
