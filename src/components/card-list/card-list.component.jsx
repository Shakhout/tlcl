import React from "react";
import CardComponent from "../card/card.component";

// Import styles
import './card-list.style.css';

export const CardList = props => (
    <div className="card-list">
        {props.commands.map(command => (
            <CardComponent key={command.id} command={command} />
        ))}
    </div>
);
