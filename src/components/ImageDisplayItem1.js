import React, {Component} from 'react';
import { Image, Segment, Grid, Header } from 'semantic-ui-react';
import 'antd/dist/antd.css';

export default class ImagesDisplayItem1 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log('INTO ITEM1')
    }

    render() {
        const {cardSelected} = this.props;

        return (
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h2' style={{ fontSize: '2em' }}>
                                {cardSelected['name'] === cardSelected['countryName']
                                    ? cardSelected["name"]
                                    : cardSelected["name"] + " (" + cardSelected["countryName"] + ")"
                                }
                            </Header>
                            <Header style={{ fontSize: '2em' }}>
                                <h2>About my journey there</h2>
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                {/*Description of what you've done there and for how long*/}
                                {cardSelected['tripDescription']}
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src={process.env.PUBLIC_URL + cardSelected['imageLocation']} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}
