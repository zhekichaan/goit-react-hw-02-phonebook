import { Box } from "components/Box";
import { Component } from "react";
import styled from "styled-components";

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

const FilterInput = styled.input`
    margin: 5px 0px 20px;
`