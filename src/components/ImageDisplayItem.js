import React, {Component} from 'react';
import { Image, Segment, Grid, Header } from 'semantic-ui-react';

export default class ImagesDisplayItem1 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {cardSelected} = this.props;

        return (
            <div>
                <Segment style={{ padding: '8em 0em', color:"white"}} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h2' style={{ fontSize: '2em', color: 'white' }}>
                                    {cardSelected['name'] === cardSelected['countryName']
                                        ? cardSelected["name"]
                                        : cardSelected["name"] + " (" + cardSelected["countryName"] + ")"
                                    }
                                </Header>
                                <Header style={{ fontSize: '2em'}}>
                                    <h2 style={{ color: 'white'}}>About my journey there</h2>
                                </Header>
                                <p style={{ fontSize: '1.33em', color: 'white' }}>
                                    {cardSelected['tripDescription']}
                                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image bordered rounded size='large' src={process.env.PUBLIC_URL + cardSelected['imageLocation']} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em', color: 'white' }}>
                                    Description
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>{cardSelected['description']}</p>
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em', color: 'white' }}>
                                    What I'll remember
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    {cardSelected['memory']}
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid centered columns={5}>
                        <Grid.Column>
                            <Image bordered rounded size='medium' src={process.env.PUBLIC_URL + cardSelected['flag']} />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}
