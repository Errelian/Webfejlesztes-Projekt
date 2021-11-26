import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './appNavBar';

class ChampionEdit extends Component {

    emptyItem = {
        name: '',
        hatred: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const champion = await (await fetch(`http://localhost:8080/champions/${this.props.match.params.name}`)).json();
        this.setState({item: champion});
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
    
        await fetch('http://localhost:8080/champions/' + item.name + '/' + item.hatred, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        //this.props.history.push('http://localhost:8080/champions');
    }

    render() {
        const {item} = this.state;
        const title = <h2>Change Champion</h2>;
    
        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Hatred</Label>
                        <Input type="text" name="hatred" id="hatred" value={item.hatred || ''}
                               onChange={this.handleChange} autoComplete="hatred"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="aqua" type="submit">Save</Button>{' '}
                        <Button color="danger" tag={Link} to="/championsdisp">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(ChampionEdit);