import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './appNavBar';
import { Link } from 'react-router-dom';

class ChampionList extends Component {

    constructor(props) {
        super(props);
        this.state = {champions: []};
        this.remove = this.remove.bind(this);
    }

    async remove(name) {
        await fetch(`http://localhost:8080/delete/${name}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedChampions = [...this.state.champions].filter(i => i.name !== name);
            this.setState({champions: updatedChampions});
        });
    }

    componentDidMount() {
        fetch('http://localhost:8080/champions')
            .then(response => response.json())
            .then(data => this.setState({champions: data}));
    }

    render() {
        const {champions, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
    
        const championList = champions.map(champion => {
            return <tr key={champion.name}>
                <td style={{whiteSpace: 'nowrap'}}>{champion.name}</td>
                <td>{champion.hatred}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/championsdisp/" + champion.name}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(champion.name)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
    
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/championsdisp/new">Add Champion</Button>
                    </div>
                    <h3>Champions</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Hatred</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {championList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}
export default ChampionList;