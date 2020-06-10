import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import './search-box.style.css';

class SearchBoxComponent extends Component {
    _onChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <Paper component="form" className="root">
                <InputBase
                    className="input"
                    placeholder="Search Command Here"
                    inputProps={{"aria-label": "Search Command Here"}}
                    onChange={event => this._onChange(event)}
                />
                <IconButton
                    type="submit"
                    className="icon-button"
                    aria-label="search"
                >
                    <SearchIcon/>
                </IconButton>
            </Paper>
        );
    }
}

SearchBoxComponent.propTypes = {
 onChange: PropTypes.func.isRequired
}

export default SearchBoxComponent;