import React from 'react';
import BaseComponent from './BaseComponent';

interface FindFlightProps {}
interface FindFlightState {
    from: string,
    to: string
}

class FindFlight extends BaseComponent<FindFlightProps, FindFlightState>{

    constructor(props: FindFlightProps) {
        super(props);
        this.state = {
            from: "",
            to: ""
        }
    }

    render() {
        return (
            <div className="App-content offset-3">
                <h2>Find a flight</h2>
                <div className="form-group col-md-5 col-sm-10">
                    <label htmlFor="from">From</label>
                    <input type="text" className="form-control" id="from" name="from" value={this.state.from} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-5 col-sm-10">
                    <label htmlFor="to">To</label>
                    <input type="text" className="form-control" id="to" name="to" value={this.state.to} onChange={this.handleChange} />
                </div>
                <div className="form-group col-2">
                        <input type="button" name="search" value="Search" />
                </div>
            </div>
        );
    }
}

export default FindFlight