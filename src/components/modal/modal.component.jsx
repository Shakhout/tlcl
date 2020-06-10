/*
import React, {Component} from "react";
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';

class ModalComponent extends Component {
    _getModalStyle() {
        const top = 50 + this._rand();
        const left = 50 + this._rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    _rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    _getBody() {
        return (
            <div style={this._getModalStyle()} className="modal-container">
                <h2 id="simple-modal-title">Text in a modal</h2>
                <p id="simple-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </p>
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

export default ModalComponent;*/
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

export default function ModalComponent(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{props.command.name}</h2>
            <p id="simple-modal-description">
                {props.command.description}
            </p>
        </div>
    );

    return (
        <div>
            <Modal
                open={props.open}
                onClose={e => props.onClose(e)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}