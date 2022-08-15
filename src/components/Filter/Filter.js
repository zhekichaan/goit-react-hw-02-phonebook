import { Component } from "react";

export class Filter extends Component {
    state = {
        filter: ''
    }

    handleChange = (e) => {
       const value = e.target.value
       this.setState({ filter: value });
       this.props.updateFilter(value)
    };

    render() {
        return (
            <input 
                type="text"
                name="filter"
                value={this.state.filter}
                onChange={this.handleChange}
            />
        )
    }
}