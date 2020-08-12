import React, {Component} from "react";
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';

// Import style
import './modal.style.css';

class ModalComponent extends Component {
    _getOptionsContainer(){
        return (
            <ul className="options">
                {this.props.command.options.map((option, i) => (
                    <li key={i} className="option">{option}</li>
                ))}
            </ul>
        );
    }

    _getBody() {
        const command = this.props.command;

        return (
            <div className="modal-container">
                <div className="card ad-card-medium">
                    <div className="card-header">
                        <h2>{command.name.toUpperCase()}
                        <button type="button" className="close" onClick={e => this.props.onClose(e)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </h2>
                    </div>
                    <div className="card-body card-padding">
                        <h4><i className="fa fa-info-circle"></i>&nbsp;{command.synopsis}</h4>
                        {this.props.command.options.length > 0 &&
                            this._getOptionsContainer()
                        }
                        <p className="ad-text-with-icon text-dark">
                            <span>{command.details}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <Modal open={this.props.open} onClose={e => this.props.onClose(e)}>
                {this._getBody()}
            </Modal>
        );
    }
}

ModalComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default ModalComponent;