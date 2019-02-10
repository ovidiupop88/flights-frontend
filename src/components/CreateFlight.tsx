import React from 'react';
import BaseComponent from './BaseComponent';

interface CreateFlightProps { }
interface CreateFlightState {
    from: string,
    to: string,
    flightNumber: string
}

class CreateFlight extends BaseComponent<CreateFlightProps, CreateFlightState>{
    constructor(props: CreateFlightProps) {
        super(props);
        this.state = {
            from: "",
            to: "",
            flightNumber: ""
        }
    }

    render() {
        return (
            <div className="App-content offset-3">
                <h2>Create a flight</h2>
                <div className="form-group col-md-5 col-sm-10">
                    <label htmlFor="from">From</label>
                    <input type="text" className="form-control" id="from" name="from" value={this.state.from} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-5 col-sm-10">
                    <label htmlFor="to">To</label>
                    <input type="text" className="form-control" id="to" name="to" value={this.state.to} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-5 col-sm-10">
                    <label htmlFor="to">Flight number</label>
                    <input type="text" className="form-control" id="to" name="flightNumber" value={this.state.flightNumber} onChange={this.handleChange} />
                </div>
                <div className="form-group col-2">
                    <input type="button" name="save" value="Save" />
                </div>
            </div>
        );
    }
}

export default CreateFlight