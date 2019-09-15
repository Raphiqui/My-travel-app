import React, {Component} from 'react';
import { Image, Segment, Grid, Header } from 'semantic-ui-react';

export default class ImagesDisplayItem1 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log('INTO ITEM1')
    }

    render() {
        const {cardSelected} = this.props;

        return (
            <div>
                <Segment style={{ padding: '8em 0em', color:"white"}} vertical>
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
                    <Grid columns='equal' stackable>
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
                    <Grid>
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

                {/*<Segment style={{ padding: '0em'}} vertical>*/}
                    {/*<Grid celled='internally' columns='equal' stackable>*/}
                        {/*<Grid.Row textAlign='center'>*/}
                            {/*<Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>*/}
                                {/*<Header as='h3' style={{ fontSize: '2em' }}>*/}
                                    {/*/!*description of the country or town or ...*!/*/}
                                    {/*Title will change*/}
                                {/*</Header>*/}
                                {/*<p style={{ fontSize: '1.33em' }}>{cardSelected['description']}</p>*/}
                            {/*</Grid.Column>*/}
                            {/*<Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>*/}
                                {/*<Header as='h3' style={{ fontSize: '2em' }}>*/}
                                    {/*/!*Memories*!/*/}
                                    {/*What I'll remember*/}
                                {/*</Header>*/}
                                {/*<p style={{ fontSize: '1.33em' }}>*/}
                                    {/*/!*<Image avatar src='/images/avatar/large/nan.jpg' />*!/*/}
                                    {/*/!*what have I done I won't forget, for instance with the pict of the *!/*/}
                                    {/*Memorial stuff in progress*/}
                                {/*</p>*/}
                            {/*</Grid.Column>*/}
                        {/*</Grid.Row>*/}
                    {/*</Grid>*/}
                    {/*<Grid celled>*/}
                        {/*<Grid.Row textAlign="center">*/}
                            {/*<Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>*/}
                                {/*<Header as='h3' style={{ fontSize: '2em' }}>*/}
                                    {/*/!*Ending world, would I like to go back there, why ? *!/*/}
                                    {/*The ending word*/}
                                {/*</Header>*/}
                                {/*<p style={{ fontSize: '1.33em' }}>Very difficult to find a good conclusion</p>*/}
                            {/*</Grid.Column>*/}
                        {/*</Grid.Row>*/}
                    {/*</Grid>*/}
                {/*</Segment>*/}
            </div>
        )
    }
}
