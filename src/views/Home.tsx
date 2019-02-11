import React, { Component } from 'react';
import Welcome from './Welcome';
import { Link } from 'react-router-dom';
import { Authenticated } from '../Dtos';

interface HomeProps {
    authenticated: Authenticated
}

class Home extends Component<HomeProps>{

    render() {
        var links = [];

        if (this.props.authenticated === Authenticated.Guest) {
            return <Welcome />;
        }
        if (this.props.authenticated === Authenticated.User) {
            links.push(<Link key="find" className="row" to='/find'>Find a flight</Link>);
        }
        if (this.props.authenticated === Authenticated.Admin) {
            links.push(<Link key="find" className="row" to='/find'>Find a flight</Link>);
            links.push(<Link key="create" className="row" to='/create'>Create a flight</Link>);
        }

        return (
            <div className="App-content">
                <ul>
                    {links}
                </ul>
            </div>
        );
    }
}

export default Home