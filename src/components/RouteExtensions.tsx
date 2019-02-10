import React, { Component } from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { Authenticated } from '../Dtos';

interface PrivateRouteProps extends RouteProps { authenticated: Authenticated}

export class PrivateRoute extends Component<PrivateRouteProps, Component>{
    render(){
        if(this.props.authenticated === Authenticated.User || this.props.authenticated === Authenticated.Admin){
            return <Route {...this.props}/>
        }
        return <Redirect to='/'/>
    }
}

export class AdminRoute extends Component<PrivateRouteProps, Component>{
    render(){
        if(this.props.authenticated === Authenticated.Admin){
            return <Route {...this.props}/>
        }
        return <Redirect to='/'/>
    }
}
