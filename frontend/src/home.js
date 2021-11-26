import React, { Component } from 'react';
import './App.css';
import AppNavbar from './appNavBar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="danger"><Link to="/championsdisp">Champions and Stuff</Link></Button>
                </Container>
            </div>
        );
    }
}
export default Home;