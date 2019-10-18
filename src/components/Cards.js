import React, {Component} from 'react';
import { Image, Card, Button} from 'semantic-ui-react';
import 'antd/dist/antd.css';

export default class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {item, showDetails} = this.props;

        return (
            <Card color={item['cardColor']}>
                <Card.Content>
                    <Image
                        floated='right'
                        size='medium'
                        src={process.env.PUBLIC_URL + item['imageLocation']}
                    />
                    <Card.Header>{item['name']}</Card.Header>
                    <Card.Meta style={{color: "#5E7FA8", fontFamily: "bold"}}>{item['countryName']}</Card.Meta>
                    <Card.Description>
                        {item['smallDescription']}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button name={item['name']} onClick={showDetails} basic color='blue'>
                            More details
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}
