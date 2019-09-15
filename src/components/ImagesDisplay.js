import React, {Component} from 'react';
import {Card, Segment, Grid, Header } from 'semantic-ui-react';
import Cards from './Cards.js';
import Segment1 from './ImageDisplayItem1.js';
import 'antd/dist/antd.css';

const _ = require('lodash');

export default class ImagesDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log('PROPS INTO IMAGESDISPLAY:', this.props);
        const {cardSelected, imagesTemplate, showDetails} = this.props;

        return (
            <div>

                {this.props.isDetailOpen
                    ?<div style={{
                        paddingTop: "20px",
                        backgroundImage: `url(${process.env.PUBLIC_URL + cardSelected['background']})`,
                        backgroundRepeat  : 'no-repeat',
                        backgroundSize: 'cover',
                        overflow: 'hidden'}}
                    >
                        <Segment1 cardSelected={cardSelected}/>
                        {/*<Segment style={{ padding: '8em 0em' }} vertical>*/}
                            {/*<Grid container stackable verticalAlign='middle'>*/}
                                {/*<Grid.Row>*/}
                                    {/*<Grid.Column width={8}>*/}
                                        {/*<Header as='h2' style={{ fontSize: '2em' }}>*/}
                                            {/*{cardSelected['name'] === cardSelected['countryName']*/}
                                                {/*? cardSelected["name"]*/}
                                                {/*: cardSelected["name"] + " (" + cardSelected["countryName"] + ")"*/}
                                            {/*}*/}
                                        {/*</Header>*/}
                                        {/*<Header style={{ fontSize: '2em' }}>*/}
                                            {/*<h2>About my journey there</h2>*/}
                                        {/*</Header>*/}
                                        {/*<p style={{ fontSize: '1.33em' }}>*/}
                                            {/*/!*Description of what you've done there and for how long*!/*/}
                                            {/*{cardSelected['tripDescription']}*/}
                                        {/*</p>*/}
                                    {/*</Grid.Column>*/}
                                    {/*<Grid.Column floated='right' width={6}>*/}
                                        {/*<Image bordered rounded size='large' src={process.env.PUBLIC_URL + this.props.cardSelected['imageLocation']} />*/}
                                    {/*</Grid.Column>*/}
                                {/*</Grid.Row>*/}
                            {/*</Grid>*/}
                        {/*</Segment>*/}

                        <Segment style={{ padding: '0em' }} vertical>
                            <Grid celled='internally' columns='equal' stackable>
                                <Grid.Row textAlign='center'>
                                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            {/*description of the country or town or ...*/}
                                            Title will change
                                        </Header>
                                        <p style={{ fontSize: '1.33em' }}>{cardSelected['description']}</p>
                                    </Grid.Column>
                                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            {/*Memories*/}
                                            What I'll remember
                                        </Header>
                                        <p style={{ fontSize: '1.33em' }}>
                                            {/*<Image avatar src='/images/avatar/large/nan.jpg' />*/}
                                            {/*what have I done I won't forget, for instance with the pict of the */}
                                            Memorial stuff in progress
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid celled>
                                <Grid.Row textAlign="center">
                                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            {/*Ending world, would I like to go back there, why ? */}
                                            The ending word
                                        </Header>
                                        <p style={{ fontSize: '1.33em' }}>Very difficult to find a good conclusion</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </div>

                    :<Card.Group fluid={true} style={{backgroundColor: "#5E7FA8", paddingLeft: "5px", paddingTop: "60px"}}>
                        {_.map(imagesTemplate, (item) => {
                            return(<Cards
                                item={item}
                                showDetails={showDetails}
                            />)
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

            </div>
        )
    }
}
