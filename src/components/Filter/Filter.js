import { Box } from "components/Box";
import { Component } from "react";
import PropTypes from 'prop-types';
import { FilterInput } from "./Filter.styled";


export class Filter extends Component {

    static propTypes = {
        filter: PropTypes.string.isRequired,
        updateFilter: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Box mt="20px">
                <p>Find contacts by name</p>
                <FilterInput 
                    type="text"
                    name="filter"
                    value={this.props.filter}
                    onChange={(e) => {this.props.updateFilter(e.target.value)}}
                />
            </Box>
        )
    }
}