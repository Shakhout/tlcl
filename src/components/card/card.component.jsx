import React, { Component } from "react";
import PropTypes from 'prop-types';
import ModalComponent from "../modal/modal.component";
import Button from "@material-ui/core/Button";

// Import styles
import './card.style.css';

class CardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openModal: false
        }
    }

    _getOptionsContainer(){
        return (
            <ul className="options">
                {this.props.command.options.map((option, i) => (
                    <li key={i} className="option">{option}</li>
                ))}
            </ul>
        );
    }

    _onModalClose(e) {
        this.setState({openModal: false});
    }

    _onDetailsButtonClick() {
        this.setState({openModal: true});
    }

    render() {
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className='card-container'>
                    <h2 className="name"> {this.props.command.name.toUpperCase()} </h2>
                    <p className="synopsis"> {this.props.command.synopsis} </p>
                    {this.props.command.options.length > 0 &&
                    this._getOptionsContainer()
                    }
                    <p className="details"> {this.props.command.details} </p>
                    <ModalComponent command={this.props.command} open={this.state.openModal} onClose={e => this._onModalClose(e)} />
                    <Button variant="outlined" color="primary" onClick={e => this._onDetailsButtonClick()}>
                        Details
                    </Button>
                </div>
            </div>
        );
    }
}

CardComponent.propTypes = {
    command: PropTypes.object.isRequired
}

export default CardComponent;
