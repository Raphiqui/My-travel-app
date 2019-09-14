import React, {Component} from 'react';
import { Image, Card, Button, Item } from 'semantic-ui-react';
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

        return (
            <div>

                {this.props.isDetailOpen
                    ?   <Item>
                            <Item.Image size='massive' src={process.env.PUBLIC_URL + this.props.currentPathToFetch}/>

                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Description>
                                    <Image src='/images/wireframe/short-paragraph.png' />
                                </Item.Description>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
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
