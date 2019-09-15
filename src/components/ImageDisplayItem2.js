import React, {Component} from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';
import 'antd/dist/antd.css';

export default class ImagesDisplayItem2 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log('INTO ITEM2')
    }

    render() {
        const {cardSelected} = this.props;

        return (
            <Segment style={{ padding: '0em'}} vertical>
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
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                {/*Ending world, would I like to go back there, why ? */}
                                The ending word
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>Very difficult to find a good conclusion</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
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
            </Segment>
        )
    }
}
