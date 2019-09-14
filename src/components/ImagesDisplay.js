import React, {Component} from 'react';
import { Image, Card, Button, Item, Segment, Grid, Header } from 'semantic-ui-react';
import 'antd/dist/antd.css';
const _ = require('lodash');

export default class ImagesDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
        }
    }

    render() {
        console.log('PROPS INTO IMAGESDISPLAY:', this.props);
        const {itemSelected} = this.props;

        return (
            <div style={{paddingTop: "60px"}}>

                {this.props.isDetailOpen
                    ?<div>
                        <Segment style={{ padding: '8em 0em' }} vertical>
                            <Grid container stackable verticalAlign='middle'>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            {itemSelected['name'] === itemSelected['countryName']
                                                ? itemSelected["name"]
                                                : itemSelected["name"] + " (" + itemSelected["countryName"] + ")"
                                            }
                                        </Header>
                                        <p style={{ fontSize: '1.33em' }}>
                                            {/*Description of the country*/}
                                            We can give your company superpowers to do things that they never thought possible.
                                            Let us delight your customers and empower your needs... through pure data analytics.
                                        </p>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            We Make Bananas That Can Dance
                                        </Header>
                                        <p style={{ fontSize: '1.33em' }}>
                                            {/*Description of what you've done there and for how long*/}
                                            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                                            bioengineered.
                                        </p>
                                    </Grid.Column>
                                    <Grid.Column floated='right' width={6}>
                                        <Image bordered rounded size='large' src={process.env.PUBLIC_URL + this.props.itemSelected['imageLocation']} />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>

                        <Segment style={{ padding: '0em' }} vertical>
                            <Grid celled='internally' columns='equal' stackable>
                                <Grid.Row textAlign='center'>
                                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            {/*explanation of memories*/}
                                            "What a Company"
                                        </Header>
                                        <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                                    </Grid.Column>
                                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            {/*Memories*/}
                                            "I shouldn't have gone with their competitor."
                                        </Header>
                                        <p style={{ fontSize: '1.33em' }}>
                                            <Image avatar src='/images/avatar/large/nan.jpg' />
                                            {/*what have I done I won't forget, for instance with the pict of the */}
                                            <b>Nan</b> Chief Fun Officer Acme Toys
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid celled>
                                <Grid.Row textAlign="center">
                                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            {/*Ending world, would I like to go back there, why ? */}
                                            "What a Company"
                                        </Header>
                                        <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </div>

                    :<Card.Group fluid={true} style={{backgroundColor: "#5E7FA8"}}>
                        {_.map(this.props.imagesTemplate, (item) => {
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
                                {item['smallDescription']}
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button name={item['name']} onClick={this.props.showDetails} basic color='blue'>
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

            </div>
        )
    }
}
