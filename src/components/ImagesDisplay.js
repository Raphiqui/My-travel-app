import React, {Component} from 'react';
import { Image, Card, Button, Header, Dimmer, Segment, Icon, Grid } from 'semantic-ui-react';
import 'antd/dist/antd.css';
const _ = require('lodash');
const imagesTemplate = require('../data/countries.json');

export default class ImagesDisplay extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        hovered: false,
        currentPathToFetch: null,
    };

    test = (event) => {
        console.log(event.target.name);
        this.setState({hovered: true})
    };

    render() {
        console.log('PROPS INTO IMAGESDISPLAY:', this.props);
        console.log('PROPS INTO IMAGESDISPLAY:', this.props.isDetailOpen);
        const Background = process.env.PUBLIC_URL + '/images/bc.jpg';
        const { active, name } = this.state;
        const content = (
            <div>
                <Header as='h2' inverted>
                    {name}
                </Header>

                <Button primary>Add</Button>
                <Button>View</Button>
            </div>
        );

        return (
            <div>

                {this.props.isDetailOpen
                    ? <Grid celled>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={13}  textAlign="center">
                                <p>Text</p>
                                <p>Text</p>
                                <p>Text</p>
                                <p>Text</p>
                                <p>Text</p>
                                <p>Text</p>
                                <p>Text</p>
                                <p>Text</p>
                                {/*<Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />*/}
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    :<Card.Group style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
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
