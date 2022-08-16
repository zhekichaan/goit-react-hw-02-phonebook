import { Box } from "components/Box";
import { Component } from "react";
import PropTypes from 'prop-types';
import { FilterInput } from "./Filter.styled";


export class Filter extends Component {
    state = {
        filter: ''
    }

    static propTypes = {
        filter: PropTypes.string.isRequired,
        updateFilter: PropTypes.func.isRequired,
    }
    
    handleChange = (e) => {
       const value = e.target.value
       this.setState({ filter: value });
       this.props.updateFilter(value)
    };

    render() {
        return (
            <Box mt="20px">
                <p>Find contacts by name</p>
                <FilterInput 
                    type="text"
                    name="filter"
                    value={this.state.filter}
                    onChange={this.handleChange}
                />
            </Box>
        )
    }
}